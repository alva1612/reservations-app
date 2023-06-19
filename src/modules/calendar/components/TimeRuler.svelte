<script lang="ts">
  import type { TimeBlock } from "@calendar/types/calendar.type"
  import { dateToFormat } from "@lib/utils/DateFormat"

  export let timeIntervals: TimeBlock[]
</script>

<div class="timeRuler">
  {#each timeIntervals as timeBlock}
    <span>
      {dateToFormat(timeBlock.start)}
    </span>
  {/each}
</div>

<style>
  .timeRuler {
    display: flex;
    flex-direction: column;
  }
</style>
