/** Use the same swipe exclusion boundary as Obsidian's own interactive Canvas. */
export function installMobileGestureIsolation(root: HTMLElement, surfaces: HTMLElement[] = []): () => void {
  const elements = [...new Set([root, ...surfaces])];
  const previous = elements.map(element => element.getAttribute("data-ignore-swipe"));
  for (const element of elements) element.setAttribute("data-ignore-swipe", "true");
  // A bubble boundary also covers older hosts. Do not preventDefault: native
  // field scrolling, button taps and the canvas Pointer Events must still work.
  const stopHostSwipe = (event: Event) => event.stopPropagation();
  const types = ["touchstart", "touchmove", "touchend", "touchcancel"];
  for (const type of types) root.addEventListener(type, stopHostSwipe, { passive: true });
  return () => {
    for (const type of types) root.removeEventListener(type, stopHostSwipe);
    elements.forEach((element, index) => {
      if (previous[index] === null) element.removeAttribute("data-ignore-swipe");
      else element.setAttribute("data-ignore-swipe", previous[index]!);
    });
  };
}
