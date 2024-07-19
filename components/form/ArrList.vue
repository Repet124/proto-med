<template>
	
	<label class="form-label" :class="{'form-input_err': !!error}">
		<span class="form-title">{{ title }}</span>

		<ArrListItem
			v-for="(row, index) in list"
			:val="row"
			:disabledDelete="list.length === min"
			@ch="changeItem(index, $event)"
			@delete="delItem(index)"
		/>

		<button
			:class="{'btn-disabled': list.length === max}"
			:disabled="list.length === max"
			@click="addItem"
			type="button"
			class="btn btn-info form-btn"
		>
			Add Item
		</button>

		<span v-if="!!error" class="form-err">{{error}}</span>
	</label>
	
</template>

<script>

import ArrListItem from './ArrListItem.vue';


export default {

	data() {
		return {
			list: this.modelValue ? this.modelValue : this.defaultArr()
		}
	},

	props: {
		modelValue: Array,
		error: String,

		// fields from backend
		name: String,
		label: String,
		count: Object
	},

	methods: {
		defaultArr() {
			let arr = [];

			let defaultCount = this.count && this.count.default ? this.count.default : 3;
			for (var i = 0; i < defaultCount; i++) {
				arr.push('');
			}
			return arr;
		},
		changeItem(index, value=null) {
			let newList = this.list.slice();
			newList[index] = value;
			this.$emit('update:modelValue', this.list = newList);
		},
		delItem(index) {
			let newList = this.list.slice()
			newList.splice(index, 1);
			this.$emit('update:modelValue', this.list = newList);
		},
		addItem() {
			let newList = this.list.slice()
			newList.push('');
			this.$emit('update:modelValue', this.list = newList);
		}
	},

	computed: {
		title() {
			return this.label ? this.label : this.name.charAt(0).toUpperCase() + this.name.slice(1);
		},
		max() {
			return this.count && this.count.max ? this.count.max : Infinity;
		},
		min() {
			return this.count && this.count.min ? this.count.min : 1;
		}
	},

	components: {
		ArrListItem
	}
}

</script>