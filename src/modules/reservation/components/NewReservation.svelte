<script lang="ts">
  import type { DocumentPosition } from "@lib/types/UI.types"
  import { parseDateForInput } from "@lib/utils/DateFormat"
  import { NEW_RESERVATION_MODAL_HEIGHT } from "@reservation/constants/reservation-ui.contants"
  import { newReservation } from "@reservation/context/ReservationStores"
  import { closeModal } from "svelte-modals"

  export let isOpen
  // export let defaultTimeBlock: TimeBlock
  export let position: DocumentPosition

  let parsedStart: string
  let parsedEnd: string

  document.body.style.setProperty(
    "--newReservationHeight",
    `${NEW_RESERVATION_MODAL_HEIGHT}px`
  )
  $: {
    parsedStart = parseDateForInput($newReservation.start)
    parsedEnd = parseDateForInput($newReservation.end)
    console.log({ parsedStart, parsedEnd })
  }
  $: {
    document.body.style.setProperty("--newReservationX", `${position.x}px`)
    document.body.style.setProperty("--newReservationY", `${position.y}px`)
  }

  function handleChange() {
    throw new Error("Not implemented")
  }
</script>

{#if isOpen}
  <div role="dialog" class="modal">
    <div>Hellow</div>
    <input type="text" class="text-input" />
    <input
      type="datetime-local"
      class="date-input"
      bind:value={parsedStart}
      on:change={handleChange}
    />
    <input
      type="datetime-local"
      class="date-input"
      bind:value={parsedEnd}
      on:change={handleChange}
    />
    <button on:click={closeModal}>close</button>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: var(--newReservationY);
    left: var(--newReservationX);
    width: 200px;
    height: var(--newReservationHeight);
    border: 1px solid white;
    background-color: rgba(30, 30, 30);
    border-radius: 8px;
    color: whitesmoke;
  }
  .text-input {
  }
</style>
