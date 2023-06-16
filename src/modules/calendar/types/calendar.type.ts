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

interface Month {
  name: keyof typeof MONTH_NAMES & string
  numDays: number
}
