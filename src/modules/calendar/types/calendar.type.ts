interface CalendarSettings {
  interval: "day" | "week" | "month"
}

export enum WEEK_DAYS {
  SUN = "Domingo",
  MON = "Lunes",
  TUE = "Martes",
  WED = "Miércoles",
  THU = "Jueves",
  FRI = "Viernes",
  SAT = "Sábado",
}

export const weekDaysArr = Object.values(WEEK_DAYS)

export enum WEEK_DAYS_LOCAL {
  MON = "Lunes",
  TUE = "Martes",
  WED = "Miércoles",
  THU = "Jueves",
  FRI = "Viernes",
  SAT = "Sábado",
  SUN = "Domingo",
}

const MONTH_NAMES = {
  JAN: "Enero",
  FEB: "Febrero",
  MAR: "Marzo",
}

// export interface TimeBlock {
//   start: Date
//   end: Date
// }
export interface TimeBlock {
  start: Date
  end: Date
}
