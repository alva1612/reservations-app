<script lang="ts">
  import { getStartOfWeek } from "@calendar/utils"
  import { weekDaysArr, type TimeBlock } from "@calendar/types/calendar.type"
  import Day from "./Day.svelte"

  export let day: Date = new Date()
  export let timeIntervals: TimeBlock[]
  const startOfWeek = getStartOfWeek(day)
</script>

<div class="weekCalendarComponent">
  {#each weekDaysArr as weekDayText, i (i)}
    <div class="weekCalendar_day">
      <span class="dayName">{weekDayText.substring(0, 3)}</span>
      <span class="dayNumber" class:isday={i === day.getDay()}
        >{startOfWeek.getDate() + i}</span
      >
      <Day {timeIntervals} />
    </div>
  {/each}
</div>

<style>
  .weekCalendarComponent {
    display: flex;
  }
  .weekCalendar_day {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .dayName,
  .dayNumber {
    text-align: center;
  }

  .dayNumber {
    margin: auto;

    width: 3rem;
    height: 3rem;
    border-radius: 100%;

    font-size: 2rem;
    line-height: 3rem;
  }

  .isday {
    background-color: red;
  }

  * {
    color: var(--text-color);
  }
</style>
