<script lang="ts">
  import { weekDaysArr, type TimeBlock } from "@calendar/types/calendar.type"
  import Day from "./Day.svelte"

  export let timeIntervals: TimeBlock[]
</script>

<div class="weekCalendarComponent">
  {#each weekDaysArr as weekDayText, i (i)}
    <div class="weekCalendar_day">
      <Day {timeIntervals} />
    </div>
  {/each}
</div>

<style>
  .weekCalendarComponent {
    display: flex;
    max-height: calc(100vh - 200px);
    overflow-y: overlay;
    position: relative;
  }
  .weekCalendarComponent::-webkit-scrollbar {
    width: 5px;
  }

  .weekCalendarComponent::-webkit-scrollbar-thumb {
    background: var(--scrollbar-color);
    border-radius: 10px;
  }

  .weekCalendar_day {
    width: 100%;
    max-width: 120px;
    display: flex;
    flex-direction: column;
  }

  * {
    color: var(--text-color);
  }
</style>
