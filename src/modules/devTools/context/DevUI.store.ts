import { writable } from "svelte/store"

interface DevUI {
  currentLayout: "week" | "day"
}

export const devUIStore = writable<DevUI>({
  currentLayout: "day",
})
