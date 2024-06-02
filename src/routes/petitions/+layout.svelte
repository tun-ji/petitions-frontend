<script>
  import Navbar from "../../shared/Navbar.svelte";
</script>

<Navbar />
<div>
  <slot></slot>
</div>

<style>
  div {
    background-color: green;
    min-height: 100vh;
    max-width: 100vw;
    padding: 0;
    margin: 0;
  }

  div > slot {
    margin: 0;
    padding: 0;
  }
</style>
