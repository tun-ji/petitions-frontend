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

    export let data

  let signatory = {
      signatoryName: "",
      signatoryEmail: "",
      signatoryPhoneNumber: "",
      signatoryState: "",
      signatoryConstituency: "",
      notify: false,
      petitionSlug: data.slug
    }

  const handleReturnToPetition = () => {
    goto(`/petitions/${data.slug}`);
  };

  $: state = signatory.signatoryState;
  $: constituencies = Object.values(lgaList[state]);
  $: console.log(data)

  async function handleSubmit(event) {
    const data = new FormData();

    data.append("signatory", JSON.stringify(signatory));

    const response = await fetch("?/signPetition", {
      method: "POST",
      body: data,
    });

    const result = deserialize(await response.text());

    if (result.type === "success") {
      await invalidateAll();
    }

    applyAction(result);
  }
</script>

<div class="main">
    <form class="form-container" on:submit={handleSubmit}>
        <h3 class="descriptor" >Sign Petition</h3>
        <h2 class="petition-name" on:click={handleReturnToPetition}>{data.petitionData.name}</h2>
        <InputField label={"I am a Nigerian Citizen"} type="checkbox" />
        <InputField
          label={"Name"}
          bind:value={signatory.signatoryName}
        />
        <InputField
          label={"Email"}
          bind:value={signatory.signatoryEmail}
        />
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
</div>

<style>
    
  .main > * {
    margin: 0;
  }

  .main {
    background-color: white;
    min-height: 100vh;
    max-width: 35%;
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
