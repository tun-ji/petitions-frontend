<script>
  import "@fontsource/inter";
  export let isHighContrast = false;
</script>

<footer class:nav-high={isHighContrast} class="nav">
  <p>Copyright 2024</p>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: row;
    font-family: "Inter";
    border-top: solid 4px black;
    padding: 0.5em;
    justify-content: center;
    gap: 1em;
    align-items: center;
    max-width: 100vw;
    height: 100%;
  }

  .nav-high {
    background-color: #23811b;
    color: white;
  }
</style>
