<script lang="ts">
  import type { TimeBlock } from "@calendar/types/calendar.type"
  import TimeInterval from "./TimeInterval.svelte"

  export let timeIntervals: TimeBlock[]
</script>

<div class="DayCalendar">
  {#each timeIntervals as timeInterval}
    <TimeInterval {timeInterval} />
  {/each}
</div>

<style>
</style>
