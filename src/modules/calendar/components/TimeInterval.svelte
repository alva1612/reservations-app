<script lang="ts">
  import { closeModal, openModal } from "svelte-modals"
  import type { TimeBlock } from "@calendar/types/calendar.type"
  import NewReservation from "@reservation/components/NewReservation.svelte"
  import { newReservation } from "@reservation/context/ReservationStores"
  import { showModalBackdrop } from "@lib/context/UI.store"
  import type { SveltePointerEvent } from "@lib/types/UI.types"
  import { NEW_RESERVATION_MODAL_HEIGHT } from "@reservation/constants/reservation-ui.contants"

  export let timeInterval: TimeBlock

  function handleClick(e: SveltePointerEvent | KeyboardEvent) {
    closeModal()
    if (e instanceof KeyboardEvent) {
      return
    }
    const { currentTarget } = e
    console.log(e)
    const x = e.pageX + (currentTarget.offsetWidth - e.offsetX)
    let y = e.pageY - e.offsetY

    const hasVerticalOverflow =
      e.clientY + NEW_RESERVATION_MODAL_HEIGHT > window.innerHeight
    if (hasVerticalOverflow) {
      y = y - NEW_RESERVATION_MODAL_HEIGHT
    }

    $showModalBackdrop = false
    $newReservation.timeblock.setBoth = {
      newEnd: timeInterval.end,
      newStart: timeInterval.start,
    }

    openModal(NewReservation, {
      // defaultTimeBlock: timeInterval,
      position: { x, y },
    })
  }
</script>

<div class="timeBlock" on:pointerup={handleClick} on:keydown={handleClick}>
  <div class="timeBlock_content">
    {timeInterval.end}
  </div>
</div>

<style>
  .timeBlock {
    display: flex;
    margin: 0;
    cursor: pointer;
    border-top: 1px solid;
    flex-grow: 1;
    min-height: 30px;
  }
  .timeBlock:last-child {
    border-bottom: 1px solid;
  }
</style>
