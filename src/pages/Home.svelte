<script lang="ts">
  import DayLayout from "@calendar/layouts/DayLayout.svelte"
  import WeekLayout from "@calendar/layouts/WeekLayout.svelte"
  import IntervalModifier from "@devTools/components/IntervalModifier.svelte"
  import LayoutSelector from "@devTools/components/LayoutSelector.svelte"
  import { devUIStore } from "@devTools/context/DevUI.store"
</script>

<div>
  <!-- <WeekLayout /> -->
  <LayoutSelector />
  <IntervalModifier />
  <div id="if" />
  {#if $devUIStore.currentLayout === "day"}
    <DayLayout />
  {/if}
  {#if $devUIStore.currentLayout === "week"}
    <WeekLayout />
  {/if}
</div>

<style>
  * {
    color: white;
  }
</style>
