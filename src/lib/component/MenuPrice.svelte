<script lang="ts">
import MinusIcon from '$lib/icon/MinusIcon.svelte';
import PlusIcon from '$lib/icon/PlusIcon.svelte';
import { order } from '$lib/store/order';

	export let menuId: string;
	export let id: string;
	export let label: string;
	export let price: number;

	$: compositeId = menuId + '_' + id;
	$: counter = $order[compositeId] ?? 0;

	const add = () => {
		$order[compositeId] = counter + 1;
	};

	const substract = () => {
		if (!$order[compositeId]) return;
		$order[compositeId] = counter - 1;
	};
</script>

<div class="menu-price-row">
	<span class="price-description">{label}</span>
	<span>{price}</span>
	<div> 
		<button on:click={substract}><MinusIcon/></button>
		<span>{counter}</span>
		<button on:click={add}><PlusIcon/></button>
	</div>
</div>

<style>
	div.menu-price-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 16px;
	}

	span.price-description {
		font-size: 12px;
	}
</style>
