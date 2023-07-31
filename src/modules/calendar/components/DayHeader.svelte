<script lang="ts">
  import { currentDay } from "@calendar/context/CalendarStores"
  import { weekDaysArr } from "@calendar/types/calendar.type"

  export let day: Date = $currentDay
</script>

<div class="Day_header">
  <h3 class="Day_header_weekday">
    {weekDaysArr[day.getDay()]}
  </h3>
  <h1 class="Day_header_date">
    {day.getDate()}
  </h1>
</div>

<style>
  .Day_header {
    height: 60px;
  }
  .Day_header_weekday {
    margin: 0;
    line-height: 22px;
  }
  .Day_header_date {
    margin: 0;
    line-height: 38px;
  }
</style>
