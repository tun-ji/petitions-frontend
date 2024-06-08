<script>
    import { goto } from "$app/navigation";
    import SignPetition from '$lib/components/SignPetition.svelte';

    export let data;
    let petition = data.petitionData.petition;
  
    const handleReturnToPetition = () => {
      goto(`/petitions/${data.slug}`);
    };
    $: console.log(data.petitionData);
  </script>
  
  <main>
    <SignPetition {data}/>
  </main>
  
  <style>

  </style>
  