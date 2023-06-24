<script lang="ts">
  import TimeRuler from "@calendar/components/TimeRuler.svelte"
  import Week from "@calendar/components/Week.svelte"
  import { intervalUnit } from "@calendar/context/CalendarStores"
  import type { TimeBlock } from "@calendar/types/calendar.type"
  import { DAY_MS, HOUR_MS } from "@lib/constants/time.constant"

  export let day: Date = new Date()
  export let timeUnitMs: number = HOUR_MS

  const startOfDay = day.setHours(0, 0, 0, 0)
  const startOfDayMs = startOfDay.valueOf()
  const amountOfIntervals = Math.ceil(DAY_MS / timeUnitMs)

  const timeIntervals: TimeBlock[] = Array.from(
    { length: amountOfIntervals },
    (_, i) => {
      return {
        start: new Date(startOfDayMs + i * timeUnitMs),
        end: new Date(startOfDayMs + (i + 1) * timeUnitMs),
      }
    }
  )

  function handleSetInterval() {
    $intervalUnit = timeUnitMs
  }
</script>

<div>
  <p>Set your interval</p>
  <input bind:value={timeUnitMs} />
  <button on:click={handleSetInterval}>Change</button>
</div>
<div class="weekLayout">
  <TimeRuler {timeIntervals} />
  <Week {day} {timeIntervals} />
</div>

<style>
  .weekLayout {
    display: flex;
  }
</style>
