export function dateToFormat(date: Date) {
  const hour = date.getHours()
  const minutes = date.getMinutes()

  const textHour = `${hour}`.padStart(2, "0")
  //   const textMin = `${minutes}`.padStart(2, "0")
  //   return `${textHour}:${textMin}`

  return textHour
}

function padZero(number: number) {
  return (number + "").padStart(2, "0")
}

export function parseDateForInput(date: Date) {
  const yyyy = date.getFullYear()
  const MM = padZero(date.getMonth())
  const dd = padZero(date.getDate())
  const hh = padZero(date.getHours())
  const mm = padZero(date.getMinutes())
  return `${yyyy}-${MM}-${dd}T${hh}:${mm}`
}
