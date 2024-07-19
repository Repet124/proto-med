<template>
<NuxtLayout heading="Создание приёма">

	<!-- <label>
		Дата приёма: <input type="date" v-model="date">
	</label>
	<label>
		Описание:
		<textarea name="description" v-model="description"></textarea>
	</label>
	<DpvEditor v-bind="{patient}"/> -->
	<component v-for="field in fields"
		:is="formComponents[field.component]"
		v-bind="field"
	/>

</NuxtLayout>
</template>

<script setup>
	// v-model="form[field.name]"
	// :error="errors[field.name]"
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
	

	const id = useRoute().params.patient_id;
	const date = useState(() => new Date());
	const description = useState(() => '');

	// const patient = await useFetch(`/api/patients/${id}`);
	var {data: fields} = await useFetch(`/api/fields`);
	console.log(fields.value)


</script>

<style scoped>
	
</style>