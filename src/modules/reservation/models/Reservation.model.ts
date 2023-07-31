export class TimeBlock {
  private _start: Date
  private _end: Date

  constructor(start: Date, end: Date) {
    if (start.valueOf() > end.valueOf())
      throw new RangeError("Tried to assign start date after end date")

    this._start = start
    this._end = end
  }

  set setStart(newStartDate: Date) {
    if (this._start) {
      //   const isAfterEnd = newStartDate.valueOf() > this._end.valueOf()
      //   if (isAfterEnd)
      if (!this.areValidDates(newStartDate, this._end))
        throw new RangeError("Tried to set start date after end date")
    }

    this._start = newStartDate
  }
  set setEnd(newEndDate: Date) {
    if (this._end) {
      //   const isBeforeStart = newEndDate.valueOf() < this._start.valueOf()
      //   if (isBeforeStart)
      if (!this.areValidDates(this._start, newEndDate))
        throw new RangeError("Tried to set end date before start date")
    }
    this._end = newEndDate
  }
  set setBoth({ newStart, newEnd }: { newStart: Date; newEnd: Date }) {
    if (!this.areValidDates(newStart, newEnd))
      throw new RangeError("Tried to assign start date after end date")
    this._start = newStart
    this._end = newEnd
  }

  get start() {
    return this._start
  }
  get end() {
    return this._end
  }

  private areValidDates(start: Date, end: Date) {
    return start.valueOf() < end.valueOf()
  }
}

export class Reservation {
  private _timeBlock: TimeBlock

  constructor({ timeBlock }: { timeBlock: TimeBlock }) {
    this._timeBlock = timeBlock
  }

  get start() {
    return this._timeBlock.start
  }
  get end() {
    return this._timeBlock.end
  }
  get timeblock() {
    return this._timeBlock
  }

  set setTimeblock(newTimeblock: TimeBlock) {
    this._timeBlock = newTimeblock
  }
}

// interface NewReservationParams {
//   timeBlock: TimeBlock
// }
// export function newReservation(params: NewReservationParams) {
//   const { timeBlock } = params

//   const _start = timeBlock.start
//   const _end = timeBlock.start

//   function setEnd(newEndDate: Date) {
//     if (_end) {
//       const isBeforeStart = newEndDate.valueOf() < this._start.valueOf()
//       if (isBeforeStart)
//         throw new RangeError("Tried to set end date before start date")
//     }
//     this._end = newEndDate
//   }

//   function setStart(newStartDate: Date) {
//     if (this._start) {
//       const isAfterEnd = newStartDate.valueOf() > this._end.valueOf()
//       if (isAfterEnd)
//         throw new RangeError("Tried to set start date after end date")
//     }

//     this._start = newStartDate
//   }

//   function getStart() {
//     return _end
//   }
//   function getEnd() {
//     return _start
//   }

//   return Object.freeze({
//     setEnd,
//     setStart,
//     getStart,
//     getEnd,
//   })
// }
