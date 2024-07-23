<template>
	<form
		class="flex flex-col gap-4 max-w-2xl"
		@submit.prevent
	>
		<component v-for="field in fields"
			:is="formComponents[field.component]"
			v-bind="field"
			v-model="data[field.name]"
		/>
	</form>
	<Btn
		type="btn"
		@click="send()"
	>
		Create
	</Btn>
</template>

<script setup>
	var formComponents = {
		Input: resolveComponent('FormInput'),
		Image: resolveComponent('FormImage'),
		Checkbox: resolveComponent('FormCheckbox'),
		Radio: resolveComponent('FormRadio'),
		Select: resolveComponent('FormSelect'),
		ArrList: resolveComponent('FormArrList'),
		ObjList: resolveComponent('FormObjList'),
		Textarea: resolveComponent('FormTextarea'),
	};

	var showMessage = inject('message');
	var data = reactive({});
	var { action, fields } = defineProps({
		action: String,
		fields: Array,
	});

	function send() {
		var formData = new FormData();
		for (var [name, val] of Object.entries(data)) {
			if (!(val[0] instanceof File) && (val instanceof Object)) {
				val = JSON.stringify(val);
			}
			formData.set(name, val);
		}
		$fetch(action, {method: 'POST', body: formData})
			.then(showMessage);
	}

</script>