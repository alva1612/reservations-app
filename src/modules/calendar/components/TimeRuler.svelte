<script lang="ts">
  import type { TimeBlock } from "@calendar/types/calendar.type"
  import { dateToFormat } from "@lib/utils/DateFormat"

  export let timeIntervals: TimeBlock[]
</script>

<div class="timeRuler">
  {#each timeIntervals as timeBlock}
    <span class="timeLabel">
      {dateToFormat(timeBlock.start)}
    </span>
  {/each}
</div>

<style>
  .timeRuler {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }
  .timeLabel {
    min-height: 30px;
    padding: 0px 4px;
    color: white;
  }
</style>
