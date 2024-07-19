<template>
	
	<label class="form-label">
		<span class="form-title">{{ title }}</span>

		<select
			class="form-input"
			v-for="(item, index) in selected"
			:name="name"
			:value="item"
			@change="change(index, $event.target.value)"
		>
			<option
				v-for="item in fields"
				:value="item[1]"
			>
				{{ item[0] }}
			</option>
		</select>

		<span v-if="!!error" class="form-err">{{ error }}</span>
	</label>
	
</template>

<script>


export default {

	data() {
		return {
			selected: (() => {
				if (this.modelValue) {
					return [this.modelValue];
				}

				let result = [];

				for (let i = 0; i < this.count; i++) {
					result.push(this.fields[0][1])
				}
				
				return result;
			})()
		}
	},

	props: {
		modelValue: Array,
		error: String,

		// fields from backend
		name: String,
		label: String,
		fields: Array,
		count: {
			type: Number,
			default: 1
		},

	},

	created() {
		this.$emit('update:modelValue', this.selected.length === 1 ? this.selected[0] : this.selected);
	},

	methods: {
		change(indexItem, value) {
			let newValue = Array.from(this.selected);

			newValue[indexItem] = value;
			this.selected = newValue;

			this.$emit('update:modelValue', newValue.length === 1 ? newValue[0] : newValue);
		}
	},

	computed: {
		title() {
			return this.label ? this.label : this.name.charAt(0).toUpperCase() + this.name.slice(1);
		}
	}
}

</script>