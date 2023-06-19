<script>
  import { getStartOfWeek } from "@calendar/utils"
  import { weekDaysArr } from "@calendar/types/calendar.type"

  const today = new Date()
  const startOfWeek = getStartOfWeek(today)
</script>

<div class="weekCalendarComponent">
  <div class="weekCalendar_head">
    {#each weekDaysArr as day, i (i)}
      <div class="weekCalendar_head_day" class:isToday={i === today.getDay()}>
        <span class="dayNumber">{day.substring(0, 3)}</span>
        <h2>{startOfWeek.getDate() + i}</h2>
      </div>
    {/each}
  </div>
</div>

<style>
  .weekCalendar_head {
    width: 100%;
    display: flex;
  }

  .weekCalendar_head_day {
    display: flex;
    flex-direction: column;
    text-align: center;
    min-width: 100px;
  }
  .isToday {
    background-color: red;
  }

  * {
    color: var(--text-color);
  }
</style>
