import type { TimeBlock } from "@calendar/types/calendar.type"
import { DAY_MS, HOUR_MS } from "@lib/constants/time.constant"
import { writable } from "svelte/store"

//WEEK LAYOUT
export const startOfWeek = writable<Date>()
export const intervalUnit = writable(HOUR_MS)
export const amountOfIntervals = writable(DAY_MS / HOUR_MS)

export const currentDay = writable(new Date())
export const timeIntervals = writable<TimeBlock[]>([])
