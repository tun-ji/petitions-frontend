<script>
  import "@fontsource/syne";
  import "@fontsource/inter";
  import Button from "../../../shared/Button.svelte";
  import Footer from "../Footer.svelte";

  export let data;
</script>

<div class="body">
  <div class="main">
    <h3 class="descriptor">Petition</h3>
    <h2 class="petition-name">
      {data.petition.name}
    </h2>
    <h3 class="small-heading">Full Text</h3>
    <div class="full-text">
      {data.petition.fullText}
    </div>
    <div class="button">
      <Button>Sign This Petition</Button>
      <a class="link" href="#"> Subscribe for Updates </a>
    </div>
    <div class="sign-info">
      <p class="signature">
        <span class="signature-count">{data.petition.signatureCount}</span> signatures
      </p>
      <a class="link" href="#"> Show on Map </a>
    </div>
    <div class="info-block">
      <div class="left-col">
        <h3 class="small-heading">Status</h3>
        <p>Under Consideration</p>
        <h3 class="small-heading">Created By</h3>
        <p>{data.petition.creatorName}</p>
      </div>
      <div class="right-col">
        <h3 class="small-heading">Deadline</h3>
        <p>{new Date(data.petition.deadline).toDateString()}</p>
        <h3 class="small-heading">Created On</h3>
        <p>{new Date(data.petition.createdAt).toDateString()}</p>
      </div>
    </div>
  </div>
  <Footer />
</div>

<style>
  .body {
    max-width: 35%;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 5px 5px 5px;
    display: flex;
    flex-direction: column;
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

  .main > * {
    margin: 0;
  }

  .descriptor {
    font-size: 13px;
    color: #828282;
    font-weight: 200;
  }

  .petition-name {
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 5%;
    overflow-wrap: break-word;

  }

  .sign-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
  }

  .sign-info > p,
  a {
    margin: 0;
  }

  .signature {
    font-family: "Syne";
    font-size: 17px;
  }

  .signature-count {
    font-family: "Inter";
    /* font-weight: bold; */
    font-size: 35px;
  }

  .button {
    display: flex;
    margin-top: 1rem;
    align-self: flex-end;
    flex-direction: column;
    max-width: 40%;
    gap: 2px;
  }

  .link {
    font-size: 12px;
    color: #5a29e7;
    text-decoration: none;
  }

  .small-heading {
    font-size: 14px;
    font-weight: bold;
    font-family: "Inter";
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

  .info-block {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .left-col > p,
  h3,
  .right-col > p,
  h3 {
    margin: 0;
  }

  .left-col,
  .right-col {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 0px;
    margin: 0px;
  }

  .left-col {
    justify-content: flex-start;
  }

  .right-col {
    align-items: flex-end;
  }
</style>
