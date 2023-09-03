<script>
  import { devUIStore } from "@devTools/context/DevUI.store"
</script>

<div class="selector">
  <select name="layout" id="" bind:value={$devUIStore.currentLayout}>
    <option value="day">Day</option>
    <option value="week">Week</option>
  </select>
</div>
