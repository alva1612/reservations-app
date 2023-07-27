<script lang="ts">
  import { weekDaysArr } from "@calendar/types/calendar.type"
  import TimeInterval from "./TimeInterval.svelte"
  import {
    currentDay,
    startOfWeek,
    timeIntervals,
  } from "@calendar/context/CalendarStores"
</script>

<div class="weekPanel_day">
  <div class="weekCalendar_header">
    {#each weekDaysArr as weekDayText, i (i)}
      <div class="weekCalendar_header_day">
        <span class="dayName">{weekDayText.substring(0, 3)}</span>
        <span class="dayNumber" class:isday={i === $currentDay.getDay()}>
          {$startOfWeek.getDate() + i}
        </span>
      </div>
      <div class="weekPanel_column">
        {#each $timeIntervals as timeInterval}
          <TimeInterval {timeInterval} />
        {/each}
      </div>
    {/each}
  </div>
</div>
