<template>

	<div class="flex gap-2 items-center">
		<input
			class="w-full border border-slate-600 rounded-md px-2 py-1"
			placeholder="Name..."
			type="text"
			:value="name"
			@input="$emit('ch', [$event.target.value, value])"
		>
		:
		<input
			class="w-full border border-slate-600 rounded-md px-2 py-1"
			placeholder="Value..."
			type="text"
			:value="value"
			@input="$emit('ch', [name, $event.target.value])"
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

<script>

export default {
	emits: ['ch', 'delete'],
	props: {
		name: String,
		value: String,
		index: Number,
		disabledDelete: Boolean
	}
}

</script>