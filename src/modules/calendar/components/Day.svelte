<script lang="ts">
  import type { TimeBlock } from "@calendar/types/calendar.type"
  import { DAY_MS, HOUR_MS } from "@lib/constants/time.constant"
  import TimeFrame from "./TimeFrame.svelte"

  export let day: Date = new Date()
  export let timeUnitMs: number = HOUR_MS
  export let timeIntervals: TimeBlock[]
</script>

<div class="DayCalendar">
  {#each timeIntervals as timeBlock}
    <TimeFrame {timeBlock} />
  {/each}
</div>
