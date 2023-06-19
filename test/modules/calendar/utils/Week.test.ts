import { getStartOfWeek } from "@calendar/utils"

import { describe, expect, it, } from "vitest";

describe.concurrent('week time operations', () => {
    it('gets the start of the week for a given date', () => {
        let testDate = new Date('06/18/2023')
        expect(getStartOfWeek(testDate)).toStrictEqual(testDate)
        testDate = new Date('06/19/2023')
        expect(getStartOfWeek(testDate)).toStrictEqual(new Date('06/18/2023'))
        testDate = new Date('06/26/2023')
        expect(getStartOfWeek(testDate)).toStrictEqual(new Date('06/25/2023'))
    })

    // it ('gets the limits of a week', () => {
    //     let testDate = new Date('06/18/2023')
    //     expect(getWeekLimits(testDate)).toMatchObject({
    //         start: 18,
    //         end: 25
    //     })

    //     testDate = new Date('06/19/2023')
    //     expect(getWeekLimits(testDate)).toBe({
    //         start: 18,
    //         end: 25
    //     })
    //     testDate = new Date('06/26/2023')
    //     expect(getStartOfWeek(testDate)).toBe({
    //         start: 25,
    //         end: 
    //     })
    // })
})