<template>
	<div>
		<h1>欢迎使用东软OA系统</h1>
		
	</div>
</template>

<script>
	export default {
		name:"HomeMain",
		created(){
			this.$parent.mainTitle="系统主页";
			this.$parent.subTitle="欢迎界面";
		}
		
	}
</script>

<style>
</style>
