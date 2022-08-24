<template>
	<button v-on:click="updateEmit" :style="changeName">{{btdata}}</button>
</template>

<script>
	export default {
		props: ['btdata'],
		setup(props, context) {

			const updateEmit = () => {

				context.emit('onshow', {
					txt: '버튼이 이뻐요',
					str: '내용 좀 바꿔요'
				});
			
			}

			return {
				updateEmit
			}
		}

	}
</script>

<style>
	.changeName {
		font-size: 120px;
	}
</style>