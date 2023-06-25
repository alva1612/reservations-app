<script lang="ts">
  import { startOfWeek } from "@calendar/context/CalendarStores"
  import { weekDaysArr } from "@calendar/types/calendar.type"

  export let day: Date
</script>

<div class="weekCalendar_header">
  {#each weekDaysArr as weekDayText, i (i)}
    <div class="weekCalendar_header_day">
      <span class="dayName">{weekDayText.substring(0, 3)}</span>
      <span class="dayNumber" class:isday={i === day.getDay()}>
        {$startOfWeek.getDate() + i}
      </span>
    </div>
  {/each}
</div>

<style>
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
