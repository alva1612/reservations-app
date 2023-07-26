<script lang="ts">
  import TimeRuler from "@calendar/components/TimeRuler.svelte"
  import Week from "@calendar/components/Week.svelte"
  import {
    amountOfIntervals,
    intervalUnit,
    startOfWeek,
  } from "@calendar/context/CalendarStores"
  import { weekDaysArr, type TimeBlock } from "@calendar/types/calendar.type"
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
  <TimeRuler {timeIntervals} />
  <div class="weekLayout_panel">
    <div class="weekLayout_header">
      <!-- <WeekHeader {day} /> -->
      {#each weekDaysArr as weekDayText, i (i)}
        <div class="weekPanel_day">
          <div class="weekCalendar_header">
            <div class="weekCalendar_header_day">
              <span class="dayName">{weekDayText.substring(0, 3)}</span>
              <span class="dayNumber" class:isday={i === day.getDay()}>
                {$startOfWeek.getDate() + i}
              </span>
            </div>
            <div class="weekPanel_column">
              {#each timeIntervals as timeInterval}
                <TimeInterval {timeInterval} />
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div class="weekLayout_grid">
      <Week {timeIntervals} />
    </div>
  </div>
</div>

<style>
  .weekLayout {
    display: flex;
    max-width: calc(70vw);
  }
  .weekLayout_grid {
    display: flex;
    max-height: calc(100vh - 200px);
    overflow-y: overlay;
  }
  .weekLayout_grid::-webkit-scrollbar {
    width: 5px;
  }
  .weekLayout_grid::-webkit-scrollbar-thumb {
    background: var(--scrollbar-color);
    border-radius: 10px;
  }
  .weekLayout_panel {
    display: flex;
    flex-direction: column;
  }
  /**HEADER**/
  .weekCalendar_header {
    display: flex;
    justify-content: space-around;
  }
  .weekCalendar_header_day {
    display: flex;
    flex-direction: column;
  }

  .dayName,
  .dayNumber {
    text-align: center;
  }

  .dayNumber {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;

    font-size: 2rem;
    line-height: 3rem;
  }

  .isday {
    background-color: red;
  }
</style>
