import { DAY_MS, HOUR_MS } from "@lib/constants/time.constant"
import { writable } from "svelte/store"

//WEEK LAYOUT
export const startOfWeek = writable<Date>()
export const intervalUnit = writable(HOUR_MS)
export const amountOfIntervals = writable(DAY_MS / HOUR_MS)
