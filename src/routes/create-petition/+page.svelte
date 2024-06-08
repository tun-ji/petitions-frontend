<script>
  import "@fontsource/syne";
  import "@fontsource/inter";
  import Form from "./components/Form.svelte";
  import InputField from "$lib/components/InputField.svelte";
  import Button from "$lib/components/Button.svelte";

  let steps = ["Create", "Sign"];
  let currentActive = 1;

  const handleNav = (increment) => {
    if (increment == +1) {
      currentActive++;
      if (currentActive > steps.length) {
        currentActive = steps.length;
      }
    } else {
      currentActive--;
      if (currentActive < 1) {
        currentActive = 1;
      }
    }
  };
</script>

<div class="body">
  <div class="main">
    <Form active_step={steps[currentActive - 1]} />
    <div class="left-box">
      <Button
        on:click={() => handleNav(-1)}
        disabled={currentActive == 1}
        type="secondary"
      >
        Previous
      </Button>
      <Button
        on:click={() => handleNav(+1)}
        disabled={currentActive == steps.length}
        type="secondary"
      >
        Next
      </Button>
    </div>
  </div>
</div>

<style>
  .main > * {
    margin: 0;
  }
  .body {
    max-width: 35%;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 5px 5px 5px;
    display: flex;
    flex-direction: column;
    border-left: 1px solid;
  }

  .left-box {
    display: flex;
    gap: 2%;
    max-width: 100%;
    margin-top: 4%;
    justify-content: space-between;
  }

  .main {
    background-color: white;
    min-height: 100vh;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
    font-family: "Syne";
  }
</style>
