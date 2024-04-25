<script lang="ts">
	import { coffeeCounter, pizzaCounter, saladCounter, wineCounter } from '$lib/store/order';
	import MenuPrice from './MenuPrice.svelte';

	export let id: string;
	export let name: string;
	export let description: string;
	export let photoUrl: string;
	export let prices: { label: string; price: number }[];

	$: counter =
		id === 'salad'
			? $saladCounter
			: id === 'pizza'
				? $pizzaCounter
				: id === 'wine'
					? $wineCounter
					: id === 'coffee'
						? $coffeeCounter
						: 0;

	const add = () => {
		if (id === 'salad') {
			saladCounter.update((n) => n + 1);
		} else if (id === 'pizza') {
			pizzaCounter.update((n) => n + 1);
		} else if (id === 'wine') {
			wineCounter.update((n) => n + 1);
		} else if (id === 'coffee') {
			coffeeCounter.update((n) => n + 1);
		}
	};

	const substract = () => {
		if (id === 'salad') {
			saladCounter.update((n) => {
				if (n <= 0) return n;
				return n - 1;
			});
		} else if (id === 'pizza') {
			pizzaCounter.update((n) => {
				if (n <= 0) return n;
				return n - 1;
			});
		} else if (id === 'wine') {
			wineCounter.update((n) => {
				if (n <= 0) return n;
				return n - 1;
			});
		} else if (id === 'coffee') {
			coffeeCounter.update((n) => {
				if (n <= 0) return n;
				return n - 1;
			});
		}
	};
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
		<MenuPrice label={p.label} price={p.price} />
	{/each}

	<button class="add" on:click={add}> Tambah </button>
	<button class="substract" on:click={substract}> Kurang </button>
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

	button {
		padding: 8px 16px;
		border: none;
	}

	button.add {
		background-color: #f44336;
		color: white;
		margin-bottom: 8px;
		margin-top: 16px;
	}

	button.substract {
		border: 1px solid #f44336;
		color: #f44336;
		background-color: white;
	}
</style>