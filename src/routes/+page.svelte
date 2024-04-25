<script lang="ts">
	import { totalOrderCount } from '$lib/store/order';
	import MenuTile from '../lib/component/MenuTile.svelte';
	import { menus } from '../lib/store/menu';
</script>

<div class="appbar">Kongkow Cafe ({$totalOrderCount})</div>
<div class="hero">
	<img
		src="https://cdn.themistakenman.com/wp-content/uploads/2022/08/fast-food-business.webp"
		alt="hero"
	/>
</div>
<div class="header-text">
	<div class="tagline">Friends, Food, Fun</div>
	<div class="document-title">Kongkow Cafe Menu 2023</div>
	<div class="price-note">All prices are in thousand rupiah</div>
</div>
<div class="menu-area">
	{#each $menus as menu}
		<MenuTile
			id={menu.id}
			photoUrl={menu.photoUrl}
			name={menu.name}
			description={menu.description}
			prices={menu.prices}
		/>
	{/each}
</div>

<style>
	div.appbar {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 16px;
		background-color: #f44336;
		color: white;
		font-size: 16px;
		font-weight: 500;
	}

	div.hero img {
		aspect-ratio: 2;
		width: 100%;
		object-fit: cover;
	}

	div.header-text {
		padding: 32px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div.tagline {
		font-size: 28px;
	}

	div.document-title {
		font-size: 16px;
		font-weight: 500;
	}

	div.price-note {
		font-size: 12px;
		margin-top: 8px;
	}

	div.menu-area {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
	}

	@media (min-width: 600px) {
		div.menu-area {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (min-width: 800px) {
		div.menu-area {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>