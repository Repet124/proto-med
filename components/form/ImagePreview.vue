<template>

	<div class="form-imagePreview">
		<button
			type="button"
			class="btn btn-danger material-symbols-outlined"
			@click="$emit('delete')"
		>
			Delete
		</button>
		<img :src="src">
	</div>

</template>

<script>

export default {

	props: {
		src: String
	}
}

</script>