<template>
<FormLabel :title="label || name.charAt(0).toUpperCase() + name.slice(1)">

	<FormArrListItem
		v-for="(row, index) in model"
		:val="row"
		:disabledDelete="model.length === minCount"
		@input="change(model => model[index] = $event)"
		@delete="change(model => model.splice(index, 1))"
	/>

	<Btn
		type="btn"
		size="sm"
		:disabled="model.length === maxCount"
		@click="change(model => model.push(''))"
	>
		Add Item
	</Btn>

	<span v-if="!!error" class="text-red-600">{{error}}</span>

</FormLabel>
</template>

<script setup lang="ts">

	type Props = {
		name: string;
		label?: string;
		error?: string;
		minCount?: number;
		maxCount?: number;
		initCount?: number;
	};

	var { initCount } = withDefaults(defineProps<Props>(), {
		minCount: 1,
		maxCount: Infinity,
		initCount: 3,
	});

	var model = defineModel();
	model.value = Array(initCount).fill('');

	function change(fnModelChange) {
		var newModel = Array.from(model.value);
		fnModelChange(newModel);
		model.value = newModel;
	}

</script>