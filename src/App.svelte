<script lang="ts">
  import { Router, Link, Route } from "svelte-routing"
  import Home from "./pages/Home.svelte"
  import { Modals } from "svelte-modals"
  import { showModalBackdrop } from "@lib/context/UI.store"
  import { clss } from "@alva1612/clss"

  export let url = "/"
  console.log($showModalBackdrop)
</script>

<Router {url}>
  <nav>
    <Link to="/xd">to xd</Link>
  </nav>
  <main>
    <Route path="/" component={Home} />
    <Route />
  </main>
  <Modals>
    <div
      slot="backdrop"
      class={clss("backdrop", !$showModalBackdrop && "hide")}
    />
  </Modals>
</Router>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
  }
  .hide {
    display: none;
  }
</style>
