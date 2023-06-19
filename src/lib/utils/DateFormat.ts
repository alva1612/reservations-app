export function dateToFormat(date: Date) {
  const hour = date.getHours()
  const minutes = date.getMinutes()

  const textHour = `${hour}`.padStart(2, "0")
  //   const textMin = `${minutes}`.padStart(2, "0")
  //   return `${textHour}:${textMin}`

  return textHour
}
