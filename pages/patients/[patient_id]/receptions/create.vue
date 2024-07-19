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
	<Form :fields="fields"/>

</NuxtLayout>
</template>

<script setup>
	

	const id = useRoute().params.patient_id;
	const date = useState(() => new Date());
	const description = useState(() => '');

	// const patient = await useFetch(`/api/patients/${id}`);
	var {data: fields} = await useFetch(`/api/fields`);

</script>

<style scoped>
	
</style>