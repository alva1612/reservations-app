export interface DocumentPosition {
  x: number
  y: number
}

export type SveltePointerEvent = PointerEvent & {
  currentTarget: EventTarget & HTMLDivElement
}
