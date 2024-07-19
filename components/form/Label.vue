<template>
	<label class="flex flex-col gap-2 w-full">
		<span>{{ title }}:</span>
		<slot/>
	</label>
</template>

<script setup>
	var { title } = defineProps(['title']);
</script>