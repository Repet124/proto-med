<template>
	
	<label class="form-label">
		<span class="form-title">{{ title }}</span>

		<textarea
			:name="name"
			class="form-input"
			@input="$emit('update:modelValue', $event.target.value === '' ? null : $event.target.value)"
			rows="5"
		>{{ modelValue }}</textarea>
		
		<span v-if="!!error" class="form-err">{{error}}</span>
	</label>
	
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