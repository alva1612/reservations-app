import type { TimeBlock } from "@calendar/types/calendar.type"
import { setContext } from "svelte"
import { writable } from "svelte/store"

// export const RESERVATION_KEY = Symbol("reservation-context-key")

// setContext<ReservationContext>(RESERVATION_KEY, {
//   selectedTimeBlock: { end: new Date(), start: new Date() },
// })

export const selectedTimeBlock = writable<TimeBlock>({
  end: new Date(),
  start: new Date(),
})
