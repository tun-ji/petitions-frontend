<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar isHighContrast={true} />
<div>
  <slot />
</div>

<style>
  div {
    background-color: white;
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
