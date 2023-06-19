import { DAY_MS } from "@lib/constants/time.constant"

//gets the day number that starts the week from a given date
export const getStartOfWeek = (date: Date): Date => {
  const weekdayNumber = date.getDay()
  return new Date(date.valueOf() - DAY_MS * weekdayNumber)
}

// interface WeekLimits  {
//     start: Date,
//     end: Date
// }
// export const getWeekLimits = (date: Date): WeekLimits => {
//     // first get the monday or sunday
//     const startOfWeek = getStartOfWeek(date)
//     return {start: startOfWeek, end: new Date(startOfWeek)}
// }
