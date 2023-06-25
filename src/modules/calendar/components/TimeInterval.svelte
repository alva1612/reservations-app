<script lang="ts">
  import type { TimeBlock } from "@calendar/types/calendar.type"

  export let timeInterval: TimeBlock
</script>

<div class="timeBlock">
  <div class="eventBlock" />
</div>

<style>
  .timeBlock {
    display: flex;
    margin: 0;
  }
  .eventBlock {
    border: 1px solid;
    flex-grow: 1;
    min-height: 30px;
  }
</style>
