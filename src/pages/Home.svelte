<script>
  import { WEEK_DAYS_LOCAL } from "../modules/calendar/types/calendar.type"
  const today = new Date()
  const todayWeekDay = today.getDay()
  const currentDayOfMonth = today.getDate()
  const toNumber = today.valueOf()
  const arrayDays = Object.values(WEEK_DAYS_LOCAL)
  $: sunday = new Date(toNumber + 1000 * 60 * 60 * 24 * 2)
</script>

<div class="weekCalendarComponent">
  <p>{today}</p>
  <p>{today.getDay()}</p>
  <p>{sunday}</p>
  <p>{sunday.getDay()}</p>
  <p>{currentDayOfMonth}</p>
  <div class="weekCalendar_head">
    {#each arrayDays as DAY, i (i)}
      <div class="weekCalendar_head_day" class:isToday={i === todayWeekDay - 1}>
        <span>{DAY.substring(0, 3)}</span>
        <h2>{currentDayOfMonth - Math.abs(todayWeekDay - i - 1)}</h2>
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
</style>
