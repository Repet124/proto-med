<template>
	
	<label class="form-label">
		<span class="form-title">{{ title }}</span>

		<label
			v-for="item in fields"
			class="form-rad_check form-radio"
			:class="{'form-radio_err': !!error}"
		>
			<input
				type="radio"
				:name="name"
				:value="item[1]"
				:checked="item[1] === checked"
				@change="$emit('update:modelValue', item[1])"
			>
			<i></i>
			{{ item[0] }}
		</label>
		<span v-if="!!error" class="form-err">{{error}}</span>
	</label>
	
</template>

<script>


export default {

	data() {
		return {
			checked: this.modelValue ? this.modelValue : this.fields[0][1]
		}
	},

	props: {
		modelValue: [String, Number],
		error: String,

		// fields from backend
		name: String,
		label: String,
		fields: Array
	},

	computed: {
		title() {
			return this.label ? this.label : this.name.charAt(0).toUpperCase() + this.name.slice(1);
		}
	},
}

</script>