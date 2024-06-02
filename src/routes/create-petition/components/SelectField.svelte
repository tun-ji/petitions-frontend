<script>
        import "@fontsource/inter";

    export let data, label, name, selected = 'N/A'
</script>

<p class="form-control"> 
    <label class="label" for={name}> {label} </label>
    <select class="input" name={name}  id={name} bind:value={selected}>
        {#each data as item}
        <option value={item}>{item}</option>
    {/each}
    </select>
</p>

<style>
.form-control{
    margin: .5rem 0;
    text-align: left;
    font-family: 'Inter';
}
.input{
    width: 100%;
    display: block;
    padding: 0.5rem 0.2rem;
    margin-top: 0.5rem;
    border: 2px solid black;
    border-radius: 0px;
}
.input:focus {
    outline: none;
}
</style>