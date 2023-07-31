<script lang="ts">
  import DayHeader from "@calendar/components/DayHeader.svelte"
  import TimeInterval from "@calendar/components/TimeInterval.svelte"
  import TimeRuler from "@calendar/components/TimeRuler.svelte"
  import { timeIntervals } from "@calendar/context/CalendarStores"
  import { currentDay } from "@calendar/context/CalendarStores"
</script>

<div class="DayLayout">
  <TimeRuler />
  <div class="Day">
    <DayHeader day={$currentDay} />
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
    align-items: flex-end;
  }
</style>
