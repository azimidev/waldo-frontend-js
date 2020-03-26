<template>
	<section class="section">
		<div class="container">
			<div class="columns is-centered">
				<div class="column is-8">
					<h1 class="title">Hassan Azimi</h1>
					<h2 class="subtitle">Waldo Test</h2>
				</div>
			</div>
			<div class="columns is-centered">
				<div class="column is-8">
					<Card/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Card from '@/components/Card.vue';

	export default {
		name: 'Home',
		components: {
			Card,
		},
	};
</script>
