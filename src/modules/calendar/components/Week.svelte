<script lang="ts">
  import { weekDaysArr, type TimeBlock } from "@calendar/types/calendar.type"
  import Day from "./Day.svelte"

  export let timeIntervals: TimeBlock[]
  $: console.log("timeINtervals", timeIntervals)
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
    width: 100%;
    flex-grow: 1;
  }

  .weekCalendar_day {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  * {
    color: var(--text-color);
  }
</style>
