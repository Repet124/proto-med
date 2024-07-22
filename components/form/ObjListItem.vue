<template>

	<div class="flex gap-2 items-center">
		<input
			class="w-full border border-slate-600 rounded-md px-2 py-1"
			placeholder="Name..."
			type="text"
			:value="row.name"
			@input="$emit('input', {
				name: $event.target.value,
				val: row.val
			})"
		>
		:
		<input
			class="w-full border border-slate-600 rounded-md px-2 py-1"
			placeholder="Value..."
			type="text"
			:value="row.val"
			@input="$emit('input', {
				name: row.name,
				val: $event.target.value,
			})"
		>
		<Btn
			type="btn"
			size="sm"
			:disabled="disabledDelete"
			@click="$emit('delete')"
		>
			Delete
		</Btn>
	</div>

</template>

<script setup lang="ts">

	defineEmits(['input', 'delete']);
	defineProps<{
		row: {name: string, val: string};
		disabledDelete: boolean;
	}>();

</script>