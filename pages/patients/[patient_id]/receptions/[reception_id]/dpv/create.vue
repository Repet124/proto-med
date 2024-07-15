<template>
	<h1>Добавление ДПВ</h1>
	<DpvEditor v-bind="{patient}"/>
</template>

<script setup>

	const patient_id = useRoute().params.patient_id;
	const reception_id = useRoute().params.reception_id;

	const patient = await useFetch(`/api/patients/${patient_id}`);
</script>

<style scoped>
	
</style>