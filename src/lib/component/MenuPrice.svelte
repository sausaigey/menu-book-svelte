<script lang="ts">
    export let label:string;
    export let price:number;
</script>

<!--TODO: 1. Element Menu Price-->
  <div class="menu-price-row">
    <span class="price-description">{label}</span>
    <span>{price}</span>
  </div>

<style>
    /** TODO: 2. Paste style from MenuTile / create a new one */
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