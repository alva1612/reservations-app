<script lang="ts">
  import { timeIntervals } from "@calendar/context/CalendarStores"
  import { dateToFormat } from "@lib/utils/DateFormat"
</script>

<div class="timeRuler">
  {#each $timeIntervals as timeBlock}
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
    border-top: 1px solid;
    border-right: 1px solid;
  }
  .timeLabel:last-child {
    border-bottom: 1px solid;
  }
</style>
