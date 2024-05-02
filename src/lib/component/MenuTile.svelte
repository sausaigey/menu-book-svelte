<script lang="ts">
	import { order } from '$lib/store/order';
	import MenuPrice from './MenuPrice.svelte';

	export let id: string;
	export let name: string;
	export let description: string;
	export let photoUrl: string;
	export let prices: { id: string; label: string; price: number }[];

	$: counter = Object.keys($order)
		.filter((e) => e.startsWith(id))
		.reduce((prev, curr) => {
			return prev + $order[curr];
		}, 0);
</script>

<div class="menu-tile">
	<div class="menu-photo">
		<img src={photoUrl} alt={name} />
	</div>
	<div class="menu-tile-name">{name} ({counter})</div>
	<div class="menu-tile-description">
		{description}
	</div>

	{#each prices as p}
		<MenuPrice menuId={id} id={p.id} label={p.label} price={p.price} />
	{/each}
</div>

<style>
	div.menu-tile {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding-bottom: 16px;
	}

	div.menu-photo img {
		aspect-ratio: 1;
		object-fit: cover;
		max-width: 100%;
	}

	div.menu-tile-name {
		font-weight: 500;
		font-size: 16px;
		padding: 8px 16px;
		align-self: stretch;
		text-align: center;
	}

	div.menu-tile-description {
		font-size: 12px;
		align-self: stretch;
		text-align: center;
		padding: 0px 16px;
		height: 60px;
		padding-bottom: 16px;
	}
</style>
