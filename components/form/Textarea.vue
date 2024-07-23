<template>
<FormLabel :title="label || name.charAt(0).toUpperCase() + name.slice(1)" :error="error">

	<textarea
		:name="name"
		class="w-full border border-slate-600 rounded-md px-2 py-1"
		:placeholder="placeholder || 'Input you message...'"
		@input="model = $event.target.value"
		rows="5"
	>{{ model }}</textarea>

</FormLabel>
</template>

<script setup lang="ts">

	defineProps<{
		name: string;
		label?: string;
		error?: string;
		placeholder?: string;
	}>();

	var model = defineModel({default:''});

</script>