<script lang="ts">
  import type { TimeBlock } from "@calendar/types/calendar.type"
  import { showModalBackdrop } from "@lib/context/UI.store"
  import type { SveltePointerEvent } from "@lib/types/UI.types"
  import NewReservation from "@reservation/components/NewReservation.svelte"
  import { selectedTimeBlock } from "@reservation/context/ReservationStores"
  import { closeModal, openModal } from "svelte-modals"

  export let timeInterval: TimeBlock

  function handleClick(e: SveltePointerEvent | KeyboardEvent) {
    closeModal()
    if (e instanceof KeyboardEvent) {
      return
    }
    const { currentTarget } = e
    const x = e.pageX + (currentTarget.offsetWidth - e.offsetX)
    const y = e.pageY - e.offsetY

    $showModalBackdrop = false
    $selectedTimeBlock = timeInterval
    openModal(NewReservation, {
      defaultTimeBlock: timeInterval,
      position: { x, y },
    })
  }
</script>

<div class="timeBlock" on:pointerup={handleClick} on:keydown={handleClick}>
  <div class="timeBlock_content" />
  {timeInterval.end}
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
