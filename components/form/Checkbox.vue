<template>
	
	<label class="form-label">
		<span class="form-title">{{ title }}</span>

		<label
			v-for="item in checkboxes"
			class="form-rad_check form-checkbox"
			:class="{'form-checkbox_err': !!error}"
		>
			<input
				type="checkbox"
				:name="name"
				:value="item[1]"
				:checked="checkboxes.has(item[1])"
				@change="change(item[1], $event.target.checked ? 'add' : 'delete')"
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
			checked: this.modelValue ? this.modelValue : []
		}
	},

	props: {
		modelValue: Array,
		error: String,

		// fields from backend
		name: String,
		label: String,
		fields: Array
	},

	computed: {
		checkboxes() {
			return new Set(this.fields);
		},

		title() {
			return this.label ? this.label : this.name.charAt(0).toUpperCase() + this.name.slice(1);
		}
	},

	methods: {
		change(value, action) {

			let newVal = new Set(this.checked);
			newVal[action](value);
			this.checked = Array.from(newVal);
			this.$emit('update:modelValue', this.checked);
		}
	}
}

</script>