<script lang="ts">
  import TimeInterval from "@calendar/components/TimeInterval.svelte"
  import TimeRuler from "@calendar/components/TimeRuler.svelte"
  import { timeIntervals } from "@calendar/context/CalendarStores"
  import { currentDay } from "@calendar/context/CalendarStores"
  import { weekDaysArr } from "@calendar/types/calendar.type"
</script>

<div class="DayLayout">
  <TimeRuler />
  <div class="Day">
    <div class="Day_header">
      <h3 class="Day_header_weekday">
        {weekDaysArr[$currentDay.getDay()]}
      </h3>
      <h1 class="Day_header_date">
        {$currentDay.getDate()}
      </h1>
    </div>
    <div class="Day_body">
      {#each $timeIntervals as timeInterval}
        <TimeInterval {timeInterval} />
      {/each}
    </div>
  </div>
</div>

<style>
  .DayLayout {
    display: flex;
  }
  .Day_header_weekday {
    margin: 0;
  }
  .Day_header_date {
    margin: 0;
  }
</style>
