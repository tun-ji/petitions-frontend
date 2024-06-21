<script>
  import Button from "$lib/components/Button.svelte";
  import InputField from "$lib/components/InputField.svelte";
  import "@fontsource/syne";
  import SelectField from "$lib/components/SelectField.svelte";
  import states from "$lib/utils/states";
  import lgaList from "$lib/utils/LGAs";
  import { applyAction, deserialize, enhance } from "$app/forms";
  import { invalidateAll } from "$app/navigation";
  import { goto } from "$app/navigation";
  import Modal from "$lib/components/Modal.svelte";

  export let data;
  let showModal = false;
  let success;

  let signatory = {
    signatoryName: "",
    signatoryEmail: "",
    signatoryPhoneNumber: "",
    signatoryState: "",
    signatoryConstituency: "",
    notify: false,
    petitionSlug: data.slug,
  };

  const handleReturnToPetition = () => {
    goto(`/petitions/${data.slug}`);
  };

  $: state = signatory.signatoryState;
  $: constituencies = Object.values(lgaList[state]);
</script>

<div class="main">
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <form
    class="form-container"
    method="POST"
    action="?/signPetition"
    use:enhance={({ formData }) => {
      formData.append("signatory", JSON.stringify(signatory));

      return async ({ result }) => {
        if (result.data.result.result == "success") {
          showModal = true;
          success = true;
        }
      };
    }}
  >
    <h3 class="descriptor">Sign Petition</h3>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h2 class="petition-name" on:click={handleReturnToPetition}>
      {data.petitionData.name}
    </h2>
    <InputField label={"I am a Nigerian Citizen"} type="checkbox" />
    <InputField label={"Name"} bind:value={signatory.signatoryName} />
    <InputField label={"Email"} bind:value={signatory.signatoryEmail} />
    <InputField
      label={"Phone Number"}
      bind:value={signatory.signatoryPhoneNumber}
    />
    <InputField
      label={"Subscribe to Email Updates"}
      type="checkbox"
      bind:value={signatory.notify}
    />
    <SelectField
      data={states}
      label="State"
      name="state"
      bind:selected={signatory.signatoryState}
    />
    <SelectField
      data={constituencies}
      label="Constituency"
      name="constituency"
      bind:selected={signatory.signatoryConstituency}
    />
    <h3 class="descriptor">
      We won't publish your personal data anywhere or for anything outside of
      this petition
    </h3>
    <Button>Sign this Petition</Button>
  </form>
  {#if success}
    <Modal bind:showModal>
      <h2 slot="header">Petition '{data.petitionData.name}' Signed</h2>
      <p>
        Share this petition with your friends to make sure you get your Rep's
        attention
      </p>
    </Modal>
  {:else}
    <Modal bind:showModal>
      <h2 slot="header">Error Signing Petition</h2>
      <p>
        Please try refreshing your browser or checking your network connection
      </p>
    </Modal>
  {/if}
</div>

<style>
  .main > * {
    margin: 0;
  }

  .main {
    background-color: white;
    min-height: 100vh;
    max-width: 30%;
    padding: 1.5rem;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 5px 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
    font-family: "Syne";
  }

  .descriptor {
    font-size: 13px;
    color: #828282;
    font-weight: 200;
  }

  .petition-name {
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 1%;
    overflow-wrap: break-word;
  }
</style>
