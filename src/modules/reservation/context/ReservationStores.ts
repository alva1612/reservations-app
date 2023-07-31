// import type { TimeBlock } from "@calendar/types/calendar.type"
import { Reservation, TimeBlock } from "@reservation/models/Reservation.model"
import { writable } from "svelte/store"

// export const RESERVATION_KEY = Symbol("reservation-context-key")

// setContext<ReservationContext>(RESERVATION_KEY, {
//   selectedTimeBlock: { end: new Date(), start: new Date() },
// })

export const newReservation = writable<Reservation>(
  new Reservation({ timeBlock: new TimeBlock(new Date(), new Date()) })
)
