<template>
	<div>
		<img src="../assets/logo.png" />
	</div>
</template>
<script>
	export default({
		name: 'Slider'
	})
</script>
<style scoped>
	img{
		position:absolute;
		top:50%;
		left:50%;
		-webkit-transform: translate(-50%,-50%);		
		-ms-transform: translate(-50%,-50%);		
		transform: translate(-50%,-50%);
	}
</style>