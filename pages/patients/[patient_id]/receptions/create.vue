<template>
	<h1>Создание нового приёма</h1>
	<label>
		Дата приёма: <input type="date" v-model="date">
	</label>
	<label>
		Описание:
		<textarea name="description" v-model="description"></textarea>
	</label>
	<DpvEditor v-bind="{patient}"/>
</template>

<script setup>
	const id = useRoute().params.patient_id;
	const date = useState(() => new Date());
	const description = useState(() => '');

	const patient = await useFetch(`/api/patients/${id}`);
</script>

<style scoped>
	
</style>