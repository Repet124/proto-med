<template>

	<div class="flex gap-2">
		<input
			class="w-full border border-slate-600 rounded-md px-2 py-1"
			placeholder="List item..."
			type="text"
			:value="val"
			@input="$emit('input', $event.target.value)"
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

<script setup>
	defineEmits(['input', 'delete']);
	defineProps({
		val: String,
		disabledDelete: Boolean
	});
</script>