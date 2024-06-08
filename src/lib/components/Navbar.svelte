<script>
  import "@fontsource/inter";
  export let isHighContrast = false;
</script>

<nav class:nav-high={isHighContrast} class="nav">
  <img
    src="https://i.postimg.cc/C5vTyNdW/logo.png"
    alt="National Assembly Logo"
    height="70px"
    width="70px"
  />
  <h1>Petitions to the National Assembly</h1>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    font-family: "Inter";
    border-bottom: solid 1px black;
    padding: 0.5em;
    justify-content: center;
    gap: 1em;
    align-items: center;
    max-width: 100vw;
  }

  .nav-high {
    background-color: #23811b;
    color: white;
  }
</style>
