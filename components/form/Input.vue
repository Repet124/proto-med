<template>
	
	<label class="form-label">
		<span class="form-title">{{ title }}</span>

		<input
			class="form-input"
			:class="{'form-input_err': !!error}"
			:type="type ? type : 'text'"
			:name="name"
			:placeholder="placeholder ? placeholder : 'Type new value...'"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value === '' ? null : $event.target.value)"
		>
		<span v-if="!!error" class="form-err">{{error}}</span>
	</label>
	
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