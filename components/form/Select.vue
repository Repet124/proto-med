<template>
<FormLabel :title="label || name.charAt(0).toUpperCase() + name.slice(1)" :error="error">

	<select
		v-for="(,index) in count"
		class="w-full border border-slate-600 rounded-md px-2 py-1"
		:class="{'text-red-600': !!error}"
		:name="name"
		@change="change(index, $event.target.value)"
	>
		<option
			v-for="[selectText, selectVal] in fields"
			:value="selectVal"
		>
			{{ selectText }}
		</option>
	</select>

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

	var model = defineModel({default: ['']});
	model.value = Array(count).fill(fields[0][1]);

	function change(index, val) {
		var arr = Array.from(model.value);
		arr[index] = val;
		model.value = arr;
	}

</script>