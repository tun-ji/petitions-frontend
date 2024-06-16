<script>
  import "@fontsource/syne";
  import "@fontsource/inter";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import Button from "$lib/components/Button.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import InputField from "$lib/components/InputField.svelte";
  import { createSearchStore, searchHandler } from "$lib/stores/search";
  import { onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  export let data;

  const searchPetitions = data.returnedPetitions.map((petition) => ({
    ...petition,
    searchTerms: `${petition?.fullText} + ' ' + ${petition?.name}`,
  }));

  const handlePetitionNav = (slug) => {
    goto(`/petitions/${slug}`);
  };

  const handleCreatePetition = () => {
    goto(`/create-petition`);
  };

  const searchStore = createSearchStore(searchPetitions);

  const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

  onDestroy(() => {
    unsubscribe();
  });
</script>

<Navbar isHighContrast={true} />
<div class="main">
  <div class="columns">
    <div class="a">
      <h3 class="small-heading">Popular Petitions</h3>
      <div class="popularPetitions">
        {#each data.popularPetitions as petition}
          <div
            class="popular-petition"
            on:click={handlePetitionNav(petition.slug)}
          >
            <p class="petition-head">{petition.name}</p>
            <p class="signature-count">
              {petition.signatureCount}
              {petition.signatureCount > 1 ? "signatures" : "signature"}
            </p>
          </div>
        {/each}
      </div>
    </div>
    <div class="b">
      <h3 class="small-heading">Find a Petition</h3>
      <div class="searchbar">
        <input placeholder="Search..." bind:value={$searchStore.search} />
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
      {#if $searchStore.search != ""}
        <div class="search-results">
          {#each $searchStore.filtered as petition}
            <div
              on:click={handlePetitionNav(petition.slug)}
              class="search-result"
            >
              <h3>{petition.name}</h3>
              <p>
                Deadline: {new Date(petition.deadline).toLocaleDateString("en")}
              </p>
            </div>
          {/each}
        </div>
      {/if}
      <div class="petition-actions">
        <p>View all open petitions</p>
        <p>Petitions started near you</p>
      </div>
    </div>
    <div class="c">
      <div class="rack">
        <h3 class="small-heading">Start a Petition</h3>
        <p>Petitions can be started by Nigerian citizens. Be heard!</p>
        <Button on:click={handleCreatePetition}>Start</Button>
      </div>
      <div class="rack">
        <h3 class="small-heading">
          Senate Committee on Ethics, Privileges and Public Petitions
        </h3>
        <p>Find out about their work</p>
      </div>
      <div class="rack">
        <h3 class="small-heading">Bill Tracker</h3>
        <p>
          Stay informed! Follow the bills being discussed across the chambers of
          the National Assembly
        </p>
        <Button>Track</Button>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="petition-stats">
      <div class="open-petitions">
        <p class="stat">7,000</p>
        <h4>Open Petitions</h4>
      </div>
      <div class="responded-petitions">
        <p class="stat">4,264</p>
        <h4>Got a Response from the National Assembly</h4>
      </div>
      <div class="petition-signatures">
        <p class="stat">15,000,000</p>
        <h4>Signatures Received</h4>
      </div>
    </div>
  </div>
</div>
<Footer isHighContrast={true} />

<style>
  .searchbar {
    border: 2px solid black;
    background-color: white;
    max-height: 10%;
    overflow: hidden;
    display: flex;
    justify-content: right;
  }

  .searchbar > input {
    width: 100%;
    border: none;
  }

  .search-results {
    font-family: "Inter";
    background-color: hsla(0, 3%, 74%, 0.968);
    border: solid 2px;
    position: absolute;
    width: 31.8%;
  }

  .search-result {
    border: solid 0.5px;
  }

  .search-result > * {
    margin: 0px;
    padding: 2%;
  }

  .searchbar > input:active {
    border-radius: 0%;
    outline: none;
  }

  i {
    margin: 0%;
    padding: 10px;
    background-color: black;
    color: white;
  }

  .petition-actions {
    display: flex;
    justify-content: space-between;
    font-family: "Inter";
    text-decoration: underline;
  }

  .stat {
    color: #23811b;
    font-family: "Inter";
    font-weight: 400;
    font-size: 33px;
  }

  .rack {
    display: flex;
    font-family: "Inter";
    flex-direction: column;
    align-items: center;
    gap: 1%;
  }

  .rack > * {
    margin: 1%;
  }

  .main {
    display: flex;
    flex-direction: column;
  }

  .columns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
  }

  .small-heading {
    font-family: "Inter";
    font-size: 16px;
    font-weight: 700;
  }

  .popularPetitions {
    display: flex;
    flex-direction: column;
    gap: 30%;
    justify-content: space-evenly;
    max-height: 60%;
  }

  .popular-petition {
    font-family: "Syne";
    padding-left: 7%;
  }

  .popular-petition > * {
    margin: 0;
    padding: 0;
  }

  .petition-head {
    font-size: 18px;
  }

  .signature-count {
    color: #797979;
  }

  .a {
    width: 100%;
    padding: 10px;
  }

  .row {
    width: 100vw;
    height: 30vh;
  }

  .petition-stats {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .petition-stats > div {
    height: 1%;
    padding: 1%;
    border: 1px solid black;
    font-family: "Inter";
    font-size: 13px;
    font-weight: 700;
    align-items: center;
    text-align: center;
    justify-content: center;
    text-wrap: wrap;
  }

  .b {
    width: 100%;
    padding: 10px;
  }

  .c {
    width: 100%;
    padding: 10px;
  }
</style>
