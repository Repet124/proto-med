<template>
<FormLabel :title="title">

		<input
			class="w-full border border-slate-600 rounded-md px-2 py-1"
			:class="{'text-red-600': !!error}"
			:type="type ? type : 'text'"
			:name="name"
			:placeholder="placeholder ? placeholder : 'Type new value...'"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value === '' ? null : $event.target.value)"
		>
		<span v-if="!!error" class="form-err">{{error}}</span>

</FormLabel>
</template>

<script>


export default {

	props: {
		modelValue: [String, Number],
		error: String,

		// fields from backend
		name: String,
		label: String,
		type: String,
		placeholder: String,
	},

	computed: {
		title() {
			return this.label ? this.label : this.name.charAt(0).toUpperCase() + this.name.slice(1);
		}
	}
}

</script>