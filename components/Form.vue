<template>
	<form
		action="#"
		class="flex flex-col gap-4"
	>
		<component v-for="field in fields"
			:is="formComponents[field.component]"
			v-bind="field"
		/>
	</form>
</template>

<script setup>
	// v-model="form[field.name]"
	// :error="errors[field.name]"

	var {fields} = defineProps({
		fields: Array
	});

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

</script>