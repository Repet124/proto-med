<template>
<FormLabel :title="label || name.charAt(0).toUpperCase() + name.slice(1)">

	<FormObjListItem
		v-for="(item, index) in list"
		:name="item[0]"
		:value="item[1]"
		:disabledDelete="list.length === min"
		@ch="changeItem(index, $event)"
		@delete="delItem(index)"
	/>

	<Btn
		type="btn"
		size="sm"
		:disabled="list.length === max"
		@click="addItem"
	>
		Add Item
	</Btn>

	<span v-if="!!error" class="form-err">{{error}}</span>

</FormLabel>
</template>

<script>

import ObjListItem from './ObjListItem.vue';


export default {

	data() {
		return {
			list: this.generate(this.modelValue ? this.modelValue : null)
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

	watch: {
		list(newValue) {
			this.$emit('update:modelValue', newValue.map(item => ({name: item[0], value: item[1]})));
			this.$forceUpdate();
		}
	},

	// beforeUpdate() {
	// 	console.log(this.list)
	// },

	methods: {
		generate(val) {

			let list = [];

			if (val) {
				list = val.map(item => [item.name, item.value]);
			}

			let defaultCount = this.count && this.count.default ? this.count.default : 3;

			for (let i = 0; i < (defaultCount - list.length); i++) {
				list.push(['','']);
			}
			return list;
		},
		changeItem(index, value) {
			let newList = Array.from(this.list);
			newList[index] = value;
			this.list = newList;
		},
		delItem(index) {
			let newList = Array.from(this.list);
			newList.splice(index, 1);
			this.list = newList
		},
		addItem() {
			let newList = Array.from(this.list);
			newList.push(['','']);
			this.list = newList;
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
		ObjListItem
	}
}

</script>