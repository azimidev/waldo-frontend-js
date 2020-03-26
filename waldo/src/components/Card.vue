<template>
	<div>
		<div v-for="item in dataSet">
			{{ item.index }}
		</div>
		<Paginate
			:page-count="10"
			:click-handler="fetch"
			:prev-text="'Prev'"
			:next-text="'Next'"
			:container-class="'pagination'">
		</Paginate>
	</div>
	</div>
</template>

<script>
	import Paginate from 'vuejs-paginate';

	export default {
		name: 'Card',
		components: {
			Paginate,
		},
		data() {
			return {
				dataSet: [],
			};
		},
		mounted() {
			this.fetch();
		},
		methods: {
			fetch(page = 1) {
				fetch(`https://tools.hiwaldo.com/hiring/?key=wkbHE5F94aJRUJmE924DW4KBayrxWQ3q6LY8dtKf9PV&page=${ page }`)
				.then(response => response.json())
				.then(({ data }) => {
					this.dataSet = data;
					console.log(data);
				});
			},
		},
	};
</script>

<style lang="scss">
	.pagination {
		ul {
			flex-wrap: wrap;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
		}

		li {
			flex-grow: 1;
			flex-shrink: 1;

			a {
				border: 1px solid #ccc;
				border-radius: 5px;
				padding: 3px 10px;

			}
		}

		li.active {
			a {
				background-color: #28D7B0;
				color: white;
			}
		}

	}
</style>
