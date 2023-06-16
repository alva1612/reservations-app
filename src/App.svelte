<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import LogIn from "./pages/LogIn.svelte";
  import Home from "./pages/Home.svelte"

  export let url = "/";
</script>

<Router {url}>
    <nav>
        <Link to="/xd">to xd</Link>
    </nav>
<main>

  <Route path="/" component={Home} />
  <Route> </Route>
</main>
</Router>

<style>
</style>
