<script>
  import LeafletMap from "./LeafletMap.svelte";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";

  export let data;
  let petition = data.signatureData.petition;

  const handleReturnToPetition = () => {
    goto(`/petitions/${data.slug}`);
  };
</script>

<main>
  <h2 class="petition-name" on:click={handleReturnToPetition}>
    Signatures for Petition: {petition.name}
  </h2>
  <LeafletMap {data} />
</main>

<style>
  .petition-name {
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 5%;
    overflow-wrap: break-word;
    font-family: "Syne";
    text-align: center;
    color: white;
    margin: 0;
    padding: 1%;
    background-color: black;
  }

  .petition-name:hover {
    cursor: pointer;
  }
</style>
