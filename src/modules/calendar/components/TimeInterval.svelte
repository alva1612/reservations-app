<script lang="ts">
  import type { TimeBlock } from "@calendar/types/calendar.type"
  import { showModalBackdrop } from "@lib/context/UI.store"
  import type { SveltePointerEvent } from "@lib/types/UI.types"
  import NewReservation from "@reservation/components/NewReservation.svelte"
  import { closeAllModals, closeModal, openModal } from "svelte-modals"

  export let timeInterval: TimeBlock

  function handleClick(e: SveltePointerEvent | KeyboardEvent) {
    closeModal()
    if (e instanceof KeyboardEvent) {
      return
    }
    console.log(e)
    const { currentTarget } = e
    console.log(currentTarget.offsetHeight, e.offsetY)
    const x = e.pageX + (currentTarget.offsetWidth - e.offsetX)
    const y = e.pageY - e.offsetY

    $showModalBackdrop = false
    openModal(NewReservation, {
      defaultTimeBlock: timeInterval,
      position: { x, y },
    })
  }
</script>

<div class="timeBlock" on:pointerup={handleClick} on:keydown={handleClick}>
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
