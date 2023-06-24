<script lang="ts">
  import type { TimeBlock } from "@calendar/types/calendar.type"
  import TimeFrame from "./TimeBlock.svelte"

  export let timeIntervals: TimeBlock[]
</script>

<div class="DayCalendar">
  {#each timeIntervals as timeBlock}
    <TimeFrame {timeBlock} />
  {/each}
</div>
