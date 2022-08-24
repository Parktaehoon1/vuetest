<template>
	<h1>Good Page</h1>
	<p>{{go}}</p>
</template>

<script>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

export default {
	setup(){
		const route = useRoute();
		console.log(route.params.id);
		const go = ref(route.params.id)
		return{
			go
		}
	}
}
</script>

<style>

</style>