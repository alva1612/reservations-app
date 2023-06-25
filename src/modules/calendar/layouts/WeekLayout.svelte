<script lang="ts">
  import TimeRuler from "@calendar/components/TimeRuler.svelte"
  import Week from "@calendar/components/Week.svelte"
  import {
    amountOfIntervals,
    intervalUnit,
    startOfWeek,
  } from "@calendar/context/CalendarStores"
  import type { TimeBlock } from "@calendar/types/calendar.type"
  import { getStartOfWeek } from "@calendar/utils"
  import { DAY_MS, HOUR_MS } from "@lib/constants/time.constant"
  import WeekHeader from "./WeekHeader.svelte"

  export let day: Date = new Date()
  export let timeUnitMs: number = HOUR_MS

  $startOfWeek = getStartOfWeek(day)

  const startOfDay = day.setHours(0, 0, 0, 0)
  const startOfDayMs = startOfDay.valueOf()

  let timeIntervals: TimeBlock[]

  $: $amountOfIntervals = Math.ceil(DAY_MS / timeUnitMs)
  $: {
    timeIntervals = Array.from({ length: $amountOfIntervals }, (_, i) => {
      return {
        start: new Date(startOfDayMs + i * timeUnitMs),
        end: new Date(startOfDayMs + (i + 1) * timeUnitMs),
      }
    })
  }

  function handleSetInterval() {
    if (potentialTimeUnit < HOUR_MS / 4) {
      alert("muy bajo")
      return
    }
    timeUnitMs = potentialTimeUnit
    $intervalUnit = timeUnitMs
  }

  let potentialTimeUnit: number = HOUR_MS
</script>

<div>
  <p>Set your interval</p>
  <input bind:value={potentialTimeUnit} type="number" />
  <button on:click={handleSetInterval}>Change</button>
</div>
<div class="weekLayout">
  <div class="weekLayout_ruler">
    <TimeRuler {timeIntervals} />
  </div>
  <div class="weekLayout_header">
    <WeekHeader {day} />
  </div>
  <div class="weekLayout_grid">
    <Week {timeIntervals} />
  </div>
</div>

<style>
  .weekLayout {
    display: grid;
    grid-template-rows: minmax(min-content, max-content) 1fr;
    grid-template-columns: 50px 1fr;
    max-width: calc(70vw);
  }
  .weekLayout_header {
    grid-column: 2;
  }
  .weekLayout_ruler {
    grid-row: 2;
  }
  .weekLayout_grid {
    grid-row: 2;
    grid-column: 2;
  }
</style>
