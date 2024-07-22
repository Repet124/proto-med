<template>

	<div class="relative flex items-center w-48 h-40 ">
		<button
			type="button"
			class="absolute -top-4 -right-4 bg-red-600"
			@click="$emit('delete')"
		>
			Delete
		</button>
		<img class="max-w-full max-h-full" :src="src">
	</div>

</template>

<script>

export default {

	props: {
		src: String
	}
}

</script>