<template>
	<header class="header">
		Header {{data}} 
		<p>{{아무거나}}</p>
		<p>{{menudata}}</p>
	</header>
</template>

<script>
	export default {
		//props를 받겠다.
		props: ['data', '아무거나', 'menudata']
	}
</script>

<style>
</style>