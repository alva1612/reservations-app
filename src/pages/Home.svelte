<script lang="ts">
  import DayLayout from "@calendar/layouts/DayLayout.svelte"
  import IntervalModifier from "@devTools/components/IntervalModifier.svelte"
</script>

<div>
  <!-- <WeekLayout /> -->
  <IntervalModifier />
  <DayLayout />
</div>

<style>
  * {
    color: white;
  }
</style>
