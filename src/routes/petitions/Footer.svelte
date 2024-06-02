<script>
  import "@fontsource/syne";
  import "@fortawesome/fontawesome-free/css/all.min.css";
</script>

<footer>
  <p>Share this Petition</p>
  <div class="share-rack">
    <div class="share-item">
      <i class="fa-solid fa-comment-sms" />
      <p>Send an SMS</p>
    </div>
    <div class="share-item">
      <i class="fa-brands fa-x-twitter" />
      <p>Twitter</p>
    </div>
    <div class="share-item">
      <i class="fa-solid fa-link" />
      <p>Copy Link</p>
    </div>
  </div>
</footer>

<style>
  footer {
    font-family: "Syne";
    background-color: #e7ac2a;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  footer > p,
  div {
    margin-bottom: 0;
  }

  i {
    font-size: large;
  }

  .share-rack {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .share-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }
</style>
