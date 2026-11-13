/**
 * 终身岛民 · 青少儿全人成长与自主进化系统
 * 核心插件底层子系统事件总线 (PRD Section 6.4)
 *
 * 四大高内聚子系统协同：
 * 1. 画布拓扑与场景引擎 (Canvas & Topology): canvas:zoom, node:drag, edge:redraw
 * 2. 生命双视口调度器 (Dual-View Controller): view:switch, view:mode-change
 * 3. 通用卡片与打卡服务 (Card & Checkin Service): checkin:submit, checkin:success
 * 4. 成长数据核心引擎 (Growth Data Core): node:completed, streak:updated, medal:unlocked
 */

export type IslandEventName =
  | "domain:committed"
  | "canvas:zoom"
  | "node:drag"
  | "edge:redraw"
  | "view:switch"
  | "view:mode-change"
  | "checkin:submit"
  | "checkin:success"
  | "node:completed"
  | "streak:updated"
  | "medal:unlocked"
  | "treasury:recorded"
  | "journal:saved"
  | "bounty:updated"
  | "pact:violation"
  | "project:created"
  | "settings:updated"
  | "vault:synced";

export type IslandEventHandler<T = unknown> = (payload: T) => void;

export class IslandEventBus {
  private listeners: Map<IslandEventName, Set<IslandEventHandler<any>>> = new Map();

  public on<T = unknown>(event: IslandEventName, handler: IslandEventHandler<T>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(handler);
    return () => this.off(event, handler);
  }

  public off<T = unknown>(event: IslandEventName, handler: IslandEventHandler<T>): void {
    const handlers = this.listeners.get(event);
    if (handlers) {
      handlers.delete(handler);
    }
  }

  public emit<T = unknown>(event: IslandEventName, payload?: T): void {
    const handlers = this.listeners.get(event);
    if (!handlers) return;
    for (const handler of handlers) {
      try {
        handler(payload);
      } catch (err) {
        console.error(`[YouthIslandEventBus] Error handling ${event}:`, err);
      }
    }
  }

  public clear(): void {
    this.listeners.clear();
  }
}

export const globalIslandEventBus = new IslandEventBus();
