<script>
    import {WEEK_DAYS} from "../modules/calendar/types/calendar.type"
    const today = new Date()
    const todayWeekDay = today.getDay()
    const currentDayOfMonth = today.getDate()
    const toNumber = today.valueOf()
    const arrayDays = Object.values(WEEK_DAYS)
    $: sunday = new Date(toNumber + 1000*60*60*24*2)
</script>


<div class="weekCalendarComponent">
<p>{today}</p>
<p>{today.getDay()}</p>
<p>{sunday}</p>
<p>{sunday.getDay()}</p>
<p>{currentDayOfMonth}</p>
<div class="weekCalendar_head">
    {#each arrayDays as DAY, i (i)}
        <span class:isToday="{i === todayWeekDay}">{DAY.substring(0,3)}</span>
        <h2></h2>
    {/each}
</div>
</div>

<style>
    .isToday {
        background-color: red;
    }
</style>