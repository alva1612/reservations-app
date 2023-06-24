<script>
  import Week from "@calendar/components/Week.svelte"
  import WeekLayout from "@calendar/layouts/WeekLayout.svelte"
  import { intervalUnit } from "@calendar/context/CalendarStores"
</script>

<div>
  <WeekLayout />
  <p>{$intervalUnit}</p>
</div>

<style>
  * {
    color: white;
  }
</style>
