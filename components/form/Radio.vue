<template>
<FormLabel :title="label || name.charAt(0).toUpperCase() + name.slice(1)">

	<label
		v-for="[radioLabelText, radioVal] in fields"
		class="flex items-center gap-2"
		:class="{'text-red-600': !!error}"
	>
		<input
			class="hidden"
			type="radio"
			:name="name"
			:value="radioVal"
			:checked="radioVal === model"
			@change="model = radioVal"
		>
		<i
			class="flex items-center justify-center w-5 h-5 border border-slate-600 rounded-full font-bold text-lg before:block before:content[''] before:w-3 before:h-3 before:bg-emerald-500 before:rounded-full before:transition"
			:class="radioVal === model ? 'before:opacity-100' : 'before:opacity-0'"
		></i>
		{{ radioLabelText }}
	</label>
	<span v-if="!!error" class="form-err">{{error}}</span>

</FormLabel>
</template>

<script setup lang="ts">

	var { name, fields, label, error } = defineProps<{
		name: string;
		fields: ([number | string, any])[];
		label?: string;
		error?: string;
	}>();

	var model = defineModel();

	function setDefaultModel() {
		model.value = fields[0][1];
	}
	setDefaultModel();

</script>