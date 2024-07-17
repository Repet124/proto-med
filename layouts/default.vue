<template>
<div class="min-h-screen bg-slate-300">

	<div class="bg-slate-800 border-b border-slate-500">
		<header class="container h-16 flex items-center text-white text-xl">
			<h1><slot name="title">Информационная система</slot></h1>
		</header>
	</div>
	
	<div class="container">
		<slot />
	</div>

</div>
</template>

<script setup>
	
</script>

<style scoped>
	
</style>