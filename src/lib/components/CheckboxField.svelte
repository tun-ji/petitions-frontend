<script>
  export let label,
    value = "checked";
  import "@fontsource/inter";

  function typeAction(node) {
    node.type = type;
  }
</script>

<p class="form-control">
  <label class="label"
    >{label}
    <input use:typeAction class="input" type="checkbox" bind:checked={value} />
    <span class="checkmark"></span>
  </label>
</p>

<style>
  .form-control {
    margin: 0px;
    padding: 0;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-family: "Inter";
  }
  .form-control input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .form-control > * {
    margin: 0%;
  }

  .checkmark {
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  .label:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .label input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .checkmark:after {
    content: "";
    display: none;
  }

  .label .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
