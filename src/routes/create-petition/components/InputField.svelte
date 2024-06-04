<script>
	export let value, label, type = 'text';
	$:isCheckbox = type=='checkbox'
    import "@fontsource/inter";

	function typeAction(node){
		node.type = type;
	}
</script>

<p class="form-control">
	{#if label && !isCheckbox}
    <label a class="label" for>{label}:</label>
	<input use:typeAction class="input" bind:value={value}/>
	{:else if isCheckbox && label} 
	<div class="checkbox">
		<input use:typeAction type="checkbox" class:check={isCheckbox} bind:checked={value}/>
		<label a class="label" for>{label}</label>
	</div>
	{:else}
	<input use:typeAction class:check={isCheckbox} class="input" bind:value={value}/>
	{/if}
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

	.checkbox {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
	}

	.checkbox > input {
		/* width: 30%; */
		display: flex;
        border: 2px solid black;
        border-radius: 0px;
	}

</style>