/** Own the prototype's global callbacks so closing/reopening a view is safe. */
export class RuntimeScope {
  private cleanups: Array<() => void> = [];
  private timers = new Set<number>();
  private frames = new Set<number>();
  private disposed = false;
  public readonly window: Window & typeof globalThis;

  constructor(private host: Window & typeof globalThis) {
    const originals = new Map<PropertyKey, PropertyDescriptor | undefined>();
    this.window = new Proxy(host, {
      get: (target, key) => {
        if (key === "addEventListener") return (type: string, callback: any, options?: any) => {
          const listener = type === "keydown" ? (event: KeyboardEvent) => {
            if (!target.document.body.classList.contains("youth-island-tablet-fullscreen")) return;
            if ((event.target as HTMLElement)?.closest?.("input, textarea, select, [contenteditable=true]")) return;
            callback(event);
          } : callback;
          target.addEventListener(type, listener, options);
          this.cleanups.push(() => target.removeEventListener(type, listener, options));
        };
        const value = Reflect.get(target, key, target);
        if ((key === "ResizeObserver" || key === "MutationObserver") && typeof value === "function") {
          const scope = this;
          return class extends value { constructor(callback: any) { super(callback); scope.observe(this as any); } };
        }
        // WebIDL methods need the actual Window as their receiver.
        return typeof value === "function" && /^(dispatchEvent|removeEventListener|matchMedia|print|open|alert|confirm|prompt)$/.test(String(key)) ? value.bind(target) : value;
      },
      set: (target, key, value) => {
        if (!originals.has(key)) originals.set(key, Object.getOwnPropertyDescriptor(target, key));
        return Reflect.set(target, key, value, target);
      }
    });
    this.cleanups.push(() => {
      for (const [key, descriptor] of originals) {
        if (descriptor) Object.defineProperty(host, key, descriptor);
        else Reflect.deleteProperty(host, key);
      }
    });
  }

  public setTimeout = (callback: (...args: any[]) => void, delay?: number, ...args: any[]): number => {
    if (this.disposed) return 0;
    const id = this.host.setTimeout(() => { this.timers.delete(id); if (!this.disposed) callback(...args); }, delay);
    this.timers.add(id);
    return id;
  };
  public setInterval = (callback: (...args: any[]) => void, delay?: number, ...args: any[]): number => {
    if (this.disposed) return 0;
    const id = this.host.setInterval(() => { if (!this.disposed) callback(...args); }, delay);
    this.timers.add(id);
    return id;
  };
  public clearTimeout = (id: number): void => { this.host.clearTimeout(id); this.host.clearInterval(id); this.timers.delete(id); };
  public clearInterval = this.clearTimeout;
  public requestAnimationFrame = (callback: FrameRequestCallback): number => {
    if (this.disposed) return 0;
    const id = this.host.requestAnimationFrame(time => { this.frames.delete(id); if (!this.disposed) callback(time); });
    this.frames.add(id);
    return id;
  };
  public cancelAnimationFrame = (id: number): void => { this.host.cancelAnimationFrame(id); this.frames.delete(id); };
  public observe<T extends { disconnect(): void }>(observer: T): T {
    this.cleanups.push(() => observer.disconnect());
    return observer;
  }
  public dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    for (const id of this.timers) { this.host.clearTimeout(id); this.host.clearInterval(id); }
    for (const id of this.frames) this.host.cancelAnimationFrame(id);
    for (const cleanup of this.cleanups.reverse()) cleanup();
    this.timers.clear(); this.frames.clear(); this.cleanups = [];
  }
}
