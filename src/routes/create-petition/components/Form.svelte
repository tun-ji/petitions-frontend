<script>
  import Button from "../../../shared/Button.svelte";
  import InputField from "./InputField.svelte";
  import "@fontsource/syne";
import SelectField from "./SelectField.svelte";
import states from "./utils/states";
import lgaList from "./utils/LGAs";

export let active_step
let formData = {
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

$: formData.petition.fullText = formData.petition.why + ' ' + formData.petition.how
$: state = formData.creator.creatorState
$: constituencies = Object.values(lgaList[state])

</script>

<form class="form-container" action="">
{#if active_step=='Create'}
    <h2 class="create-header">Create Petition</h2>
    <InputField label={'What do you want the Government to do?'} bind:value={formData.petition.name}/>
    <InputField label={'Why do you want this to be done?'} bind:value={formData.petition.why}/>
    <InputField label={'How should this be done?'} bind:value={formData.petition.how}/>
    <div class="preview-box">
        <h3 class="descriptor">Preview</h3>
        <h2 class="petition-name">{formData.petition.name}</h2>
        <p class="full-text">{formData.petition.fullText}</p>
    </div>
    {:else if active_step == 'Sign'}
    <h3 class="descriptor">Sign Petition</h3>
    <h2 class="petition-name">{formData.petition.name}</h2>
    <InputField label={'Name'} bind:value={formData.creator.creatorName}/>
    <InputField label={'Email'} bind:value={formData.creator.creatorEmail}/>
    <InputField label={'Phone Number'} bind:value={formData.creator.creatorPhoneNumber}/>
    <!-- <InputField label={'State'} type='checkbox' value={}/> -->
    <SelectField data={states} label='State' name='state' bind:selected={formData.creator.creatorState}/>
    <SelectField data={constituencies} label='Constituency' name='Constituency' bind:selected={formData.creator.creatorConstituency}/>
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