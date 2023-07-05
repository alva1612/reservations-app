<script lang="ts">
  import type { TimeBlock } from "@calendar/types/calendar.type"

  export let timeInterval: TimeBlock
</script>

<div class="timeBlock">
  <div class="timeBlock_content" />
</div>

<style>
  .timeBlock {
    display: flex;
    margin: 0;
    cursor: pointer;
  }
  .timeBlock_content {
    border: 1px solid;
    flex-grow: 1;
    min-height: 30px;
  }
</style>
