import { HOUR_MS } from "@lib/constants/time.constant"
import { writable } from "svelte/store"

export const intervalUnit = writable(HOUR_MS)
