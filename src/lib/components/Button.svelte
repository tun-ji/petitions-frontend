<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
  export let disabled = false;
  import "@fontsource/inter";
</script>

<button
  class:flat
  class:inverse
  class:disabled
  class={type}
  on:click
  {disabled}
>
  <slot />
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    font-family: "Inter";
    font-size: 13px;
  }

  button.disabled {
    background-color: gray;
    cursor: not-allowed;
  }
  .flat {
    box-shadow: none;
  }
  .secondary {
    background: black;
    color: white;
  }
  .primary {
    background: #23811b;
    color: white;
  }
  .secondary.inverse {
    color: #d91b42;
    background: white;
    border: 2px solid #d91b42;
  }
  .primary.inverse {
    color: #23811b;
    background: white;
    border: 2px solid #45c496;
  }
</style>
