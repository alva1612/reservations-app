<script lang="ts">
  import TimeInterval from "./TimeInterval.svelte"
  import { timeIntervals } from "@calendar/context/CalendarStores"
</script>

<div class="DayCalendar">
  {#each $timeIntervals as timeInterval}
    <TimeInterval {timeInterval} />
  {/each}
</div>

<style>
</style>
