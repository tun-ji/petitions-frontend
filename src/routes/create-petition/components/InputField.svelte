<script>
	export let value, label, description = null, type = 'text';
    import "@fontsource/inter";

	function typeAction(node){
		node.type = type;
	}
</script>

<p class="form-control">
	{#if label || label && description}
    <label a class="label" for>{label}:</label>
	{/if}
	<input use:typeAction class="input" bind:value={value}/>
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