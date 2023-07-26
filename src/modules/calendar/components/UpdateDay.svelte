<script lang="ts">
</script>

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
