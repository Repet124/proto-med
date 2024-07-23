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

	var { fields } = defineProps({
		fields: Array,
	});

	var data = reactive({});

</script>