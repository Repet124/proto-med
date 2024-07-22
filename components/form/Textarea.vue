<template>
<FormLabel :title="label || name.charAt(0).toUpperCase() + name.slice(1)" :error="error">

	<textarea
		:name="name"
		class="w-full border border-slate-600 rounded-md px-2 py-1"
		@input="$emit('update:modelValue', $event.target.value === '' ? null : $event.target.value)"
		rows="5"
	>
		{{ modelValue }}
	</textarea>

</FormLabel>
</template>

<script>


export default {

	props: {
		modelValue: String,
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