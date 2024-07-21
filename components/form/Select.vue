<template>
<FormLabel :title="label || name.charAt(0).toUpperCase() + name.slice(1)">

	<select
		v-for="index in count"
		class="w-full border border-slate-600 rounded-md px-2 py-1"
		:class="{'text-red-600': !!error}"
		:name="name"
		:value="model[index]"
		@change="model[index] = $event.target.value"
	>
		<option
			v-for="[selectText, selectVal] in fields"
			:value="selectVal"
		>
			{{ selectText }}
		</option>
	</select>

	<span v-if="!!error" class="text-red-600">{{ error }}</span>

</FormLabel>
</template>

<script setup lang="ts">

	type Props = {
		name: string;
		fields: ([number | string, any])[];
		label?: string;
		error?: string;
		count?: number;
	};

	var { fields, count } = withDefaults(defineProps<Props>(), {
		count: 1
	});

	var model = defineModel();
	model.value = Array(count).fill(fields[0][1]);

</script>