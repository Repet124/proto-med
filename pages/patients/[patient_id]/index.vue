<template>
	<h1>Пациент: {{ patient.name }}</h1>
	<NuxtLink :to="`/patients/${id}/receptions/create`">Добваить новый приём</NuxtLink>
	<h2>Список приёмов</h2>
	<ul>
		<li v-for="reception in patient.receptions">
			<ReceptionItem :reception="reception"/>
		</li>
	</ul>
</template>

<script setup>
	const id = useRoute().params.patient_id;
	const patient = await useFetch(`/api/patients/${id}`);
</script>

<style scoped>
	
</style>