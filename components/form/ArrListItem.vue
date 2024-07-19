<template>

	<div class="form-List-item">
		<input class="form-input" placeholder="List item..." type="text" :value="val" @input="$emit('ch', $event.target.value)">
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
		val: String,
		disabledDelete: Boolean
	}
}

</script>