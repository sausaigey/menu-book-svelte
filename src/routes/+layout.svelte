<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />

<style>
	/** CSS Reset */
	*,
	:global(html),
	:global(body) {
		font-family: 'Barlow';
		margin: 0;
		padding: 0;
		color: #424242;
	}

	:global(body) {
		background-color: white;
	}
</style>