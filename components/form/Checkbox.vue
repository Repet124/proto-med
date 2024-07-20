<template>
<FormLabel :title="label || name.charAt(0).toUpperCase() + name.slice(1)">

	<label
		v-for="[checkboxLabelText, checkboxVal] in fields"
		class="flex items-center gap-2"
		:class="{'text-red-600': !!error}"
	>
		<input
			class="hidden"
			type="checkbox"
			:name="name"
			:value="checkboxVal"
			:checked="isChecked(checkboxVal)"
			@change="change(
				checkboxVal,
				$event.target.checked ? 'add' : 'delete'
			)"
		>

		<i
			class="flex items-center justify-center w-5 h-5 border border-slate-600 rounded-md transition text-white font-bold text-lg before:block before:-ml-1 before:content-['✓']"
			:class="isChecked(checkboxVal)
				? 'bg-emerald-500 before:opacity-100'
				: 'before:opacity-0'"
		></i>

		{{ checkboxLabelText }}

	</label>
	<span v-if="!!error" class="form-err">{{error}}</span>

</FormLabel>
</template>

<script setup lang="ts">

	defineProps<{
		name: string;
		fields: [number | string, any];
		label?: string;
		error?: string;
	}>();

	var model = defineModel({default: []});
	var checked = computed(() => new Set(model.value));

	function isChecked(val) {
		return checked.value.has(val);
	}

	function change(value, action) {
		checked.value[action](value);
		model.value = Array.from(checked.value);
	}

</script>