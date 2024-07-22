<template>
<FormLabel :title="label || name.charAt(0).toUpperCase() + name.slice(1)" :error="error">

	<input
		class="w-full border border-slate-600 rounded-md px-2 py-1"
		:class="{'text-red-600': !!error}"
		:type="type || 'text'"
		:name="name"
		:placeholder="placeholder || 'Type new value...'"
		:value="model"
		@input="model = $event.target.value"
	>

</FormLabel>
</template>

<script setup lang="ts">

	defineProps<{
		name: string;
		label?: string;
		error?: string;
		type?: string;
		placeholder?: string;
	}>();
	var model = defineModel('');

</script>