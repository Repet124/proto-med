<template>
<FormLabel :title="label || name.charAt(0).toUpperCase() + name.slice(1)" :error="error" for="">

	<input
		hidden
		type="file"
		:name="name+'[]'"
		multiple
		@change="imageAdd($event.target.files)"
		ref="input"
	>
	<div v-if="model.length" class="flex gap-4 overflow-x-scroll">
		<FormImagePreview
			v-for="(image, index) in model"
			:src="imageSrc(image)"
			@delete="imageRemove(index)"
		/>
	</div>
	<Btn
		type="btn"
		size="sm"
		@click="$refs.input.click()"
		:disabled="model.length >= limit"
	>
		Load image
	</Btn>

</FormLabel>
</template>

<script setup lang="ts">

	type Props = {
		name: string;
		label?: string;
		error?: string;
		limit?: number;
	}

	var { limit } = withDefaults(defineProps<Props>(), {
		limit: Infinity
	});

	var input = useState();
	var model = defineModel({default: []});

	function imageAdd(images) {
		model.value = [
			...(model.value),
			...(Array.from(images).slice(0, limit - model.value.length))
		];
		input.value = null;
	}

	function imageRemove(index) {
		var arr = Array.from(model.value);
		arr.splice(index, 1)
		model.value = arr;
	}

	function imageSrc(image) {
		return (typeof image === 'string')
			? image
			: URL.createObjectURL(image);
	}

</script>