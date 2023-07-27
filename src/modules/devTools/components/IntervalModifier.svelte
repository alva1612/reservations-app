<script lang="ts">
  import {
    amountOfIntervals,
    currentDay,
    intervalUnit,
    timeIntervals,
  } from "@calendar/context/CalendarStores"
  import { DAY_MS, HOUR_MS } from "@lib/constants/time.constant"

  export let timeUnitMs: number = HOUR_MS
  let potentialTimeUnit: number = HOUR_MS

  function handleSetInterval() {
    if (potentialTimeUnit < HOUR_MS / 4) {
      alert("muy bajo")
      return
    }
    timeUnitMs = potentialTimeUnit
    $intervalUnit = timeUnitMs
  }

  const startOfDay = $currentDay.setHours(0, 0, 0, 0)
  const startOfDayMs = startOfDay.valueOf()

  $: $amountOfIntervals = Math.ceil(DAY_MS / timeUnitMs)
  $: {
    $timeIntervals = Array.from({ length: $amountOfIntervals }, (_, i) => {
      return {
        start: new Date(startOfDayMs + i * timeUnitMs),
        end: new Date(startOfDayMs + (i + 1) * timeUnitMs),
      }
    })
  }
</script>

<div>
  <p>Set your interval</p>
  <input
    class="intervalLength_input"
    bind:value={potentialTimeUnit}
    type="number"
  />
  <button on:click={handleSetInterval}>Change</button>
</div>

<style>
  .intervalLength_input {
    border: 1px solid;
    border-radius: 6px;
    background-color: var(--bg-focus-color);
    padding: 4px 6px;
    font-size: 1rem;
    color: var(--text-color);
  }
</style>
