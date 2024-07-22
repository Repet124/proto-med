<template>

	<div class="relative flex items-center min-w-48 w-48 h-40 ">
		<button
			type="button"
			class="absolute top-0 right-0 w-6 h-6 bg-red-600 text-white hover:bg-red-400"
			@click="$emit('delete')"
		>
			&#10008;
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