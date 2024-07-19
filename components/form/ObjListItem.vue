<template>

	<div class="form-List-item">
		<input class="form-input" placeholder="Name..." type="text" :value="name" @input="$emit('ch', [$event.target.value, value])">
		:
		<input class="form-input" placeholder="Value..." type="text" :value="value" @input="$emit('ch', [name, $event.target.value])">
		<button
			type="button"
			:disabled="disabledDelete"
			:class="{'btn-disabled': disabledDelete}"
			class="btn btn-danger material-symbols-outlined"
			@click="$emit('delete')"
		>
			Delete
		</button>
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