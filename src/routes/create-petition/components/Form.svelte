<script>
  import Button from "../../../shared/Button.svelte";
  import InputField from "./InputField.svelte";
  import "@fontsource/syne";
import SelectField from "./SelectField.svelte";
import states from "./utils/states";
import lgaList from "./utils/LGAs";
import { applyAction, deserialize, enhance } from "$app/forms";
    import { invalidateAll } from "$app/navigation";

export let active_step
let submissionData = {
    petition: {
        name: '',
        summary: '',
        why: '',
        how: '',
        fullText: ''
    },   
    creator: {
        creatorName: '',
        creatorEmail: '',
        creatorPhoneNumber: '',
        creatorState: '',
        creatorConstituency: '',
        notify: false
    }
}

$: submissionData.petition.fullText = submissionData.petition.why + ' ' + submissionData.petition.how
$: state = submissionData.creator.creatorState
$: constituencies = Object.values(lgaList[state])

async function handleSubmit(event) {
  const data = new FormData()

  data.append("creator", JSON.stringify(submissionData.creator))
  data.append("petition", JSON.stringify(submissionData.petition))

  const response = await fetch('?/createPetition', {
    method: 'POST',
    body: data
  })

  const result = deserialize(await response.text())

  if (result.type === "success") {
    await invalidateAll()
  }

  applyAction(result)
}
</script>

<form class="form-container" on:submit={handleSubmit}>
{#if active_step=='Create'}
    <h2 class="create-header">Create Petition</h2>
    <InputField label={'What do you want the Government to do?'} bind:value={submissionData.petition.name}/>
    <InputField label={'Why do you want this to be done?'} bind:value={submissionData.petition.why}/>
    <InputField label={'How should this be done?'} bind:value={submissionData.petition.how}/>
    <div class="preview-box">
        <h3 class="descriptor">Preview</h3>
        <h2 class="petition-name">{submissionData.petition.name}</h2>
        <p class="full-text">{submissionData.petition.fullText}</p>
    </div>
    {:else if active_step == 'Sign'}
    <h3 class="descriptor">Sign Petition</h3>
    <h2 class="petition-name">{submissionData.petition.name}</h2>
    <InputField label={'I am a Nigerian Citizen'} type='checkbox'/>
    <InputField label={'Name'} bind:value={submissionData.creator.creatorName}/>
    <InputField label={'Email'} bind:value={submissionData.creator.creatorEmail}/>
    <InputField label={'Phone Number'} bind:value={submissionData.creator.creatorPhoneNumber}/>
    <InputField label={'Subscribe to Email Updates'} type='checkbox' bind:value={submissionData.creator.notify}/>
    <SelectField data={states} label='State' name='state' bind:selected={submissionData.creator.creatorState}/>
    <SelectField data={constituencies} label='Constituency' name='constituency' bind:selected={submissionData.creator.creatorConstituency}/>
    <h3 class="descriptor"> We won't publish your personal data anywhere or for anything outside of this petition </h3>
    <Button> Sign this Petition </Button>
    
    
{:else}

{/if}
</form>

<style>
.create-header {
    font-family: 'Syne';
    font-size: 36px;
    font-weight: 100;
    text-align: center;
    margin-bottom: 20px;
}
.descriptor {
    font-size: 13px;
    color: #828282;
    font-weight: 200;
  }

  .preview-box {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }

  .preview-box > h3, h2 {
    margin: 0px;
  } 

  .petition-name {
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 1%;
    overflow-wrap: break-word;
  }
  .full-text {
    background-color: #f0eded;
    padding: 1em;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
    font-size: 15px;
    max-width: 100%;
    font-family: "Syne";
    box-shadow: 1px 1px 2px;
    overflow-wrap: break-word;
  }
</style>