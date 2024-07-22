<template>
	<label class="flex flex-col gap-2 w-full">
		<span>{{ title }}:</span>
		<slot/>
		<span v-if="!!error" class="text-red-600">{{ error }}</span>
	</label>
</template>

<script setup>
	defineProps(['title', 'error']);
</script>