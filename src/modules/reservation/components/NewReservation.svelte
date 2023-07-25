<script lang="ts">
  import type { TimeBlock } from "@calendar/types/calendar.type"
  import type { DocumentPosition } from "@lib/types/UI.types"
  import { closeModal } from "svelte-modals"

  export let isOpen
  export let defaultTimeBlock: TimeBlock
  export let position: DocumentPosition

  $: {
    document.body.style.setProperty("--newReservationX", `${position.x}px`)
    document.body.style.setProperty("--newReservationY", `${position.y}px`)
  }
</script>

{#if isOpen}
  <div role="dialog" class="modal">
    <div>Hellow</div>
    <button on:click={closeModal}>close</button>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: var(--newReservationY);
    left: var(--newReservationX);
    width: 200px;
    height: 300px;
    border: 1px solid white;
  }
</style>
