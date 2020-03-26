<template>
	<div>
		<div v-for="item in dataSet" class="box">
			<article class="media" v-if="item">
				{{ item.index }}
				<div class="media-left has-text-centered is-centered">
					<div class="colorBox" :style="`background-color: ${item.eyeColor};`">Eye Color</div>
					<br>
					<span :class="['tag', item.isActive ? 'is-success' : 'is-danger']">{{ item.isActive ? 'Active' : 'Not Active' }}</span>
				</div>
				<div class="media-content">
					<div class="content">
						<p>
							<strong>{{ item.name }}</strong>
							<small><a :href="`mailto:${item.email}`"> {{ item.email }}</a></small>
							<small> ({{ item.age }})</small>
							<small> ({{ item.gender }})</small>
							<br>
							{{ item.about }}
						</p>
						<span class="tag is-success">Balance: {{ item.balance }}</span> <br>
						<span class="tag is-danger">Company: {{ item.company }}</span> <br>
						<span class="tag is-info">Phone: {{ item.phone }}</span> <br>
						<span class="tag is-dark">Address: {{ item.address }}</span> <br>
					</div>
				</div>
			</article>
			<article v-else class="has-text-danger">No Record Found!</article>
		</div>
		<Paginate
			:page-count="20"
			:click-handler="fetch"
			:prev-text="'Prev'"
			:next-text="'Next'"
			:container-class="'pagination'">
		</Paginate>
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
				// I could have extracted key to .env file for environment variables
				// I also could extract the URL to a separate base URL API
				// However, I did not, because of the time

				fetch(`https://tools.hiwaldo.com/hiring/?key=wkbHE5F94aJRUJmE924DW4KBayrxWQ3q6LY8dtKf9PV&page=${ page }`)
				.then(response => response.json())
				.then(({ data }) => this.dataSet = data);
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
				border: 1px solid #CCC;
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

	.colorBox {
		margin: 10px;
		width: 96px;
		height: 96px;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border: 2px solid black;
	}
</style>
