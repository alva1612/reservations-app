<script lang="ts">
  import type { TimeBlock } from "@calendar/types/calendar.type"
  import { dateToFormat } from "@lib/utils/DateFormat"

  export let timeBlock: TimeBlock
</script>

<div class="timeBlock">
  <div class="timeLabel" />
  <div class="eventBlock" />
</div>

<style>
  .timeBlock {
    display: flex;
  }
  .timeLabel {
    padding: 2px 4px;
  }
  .eventBlock {
    border: 1px solid;
    flex-grow: 1;
    min-height: 30px;
  }
</style>
