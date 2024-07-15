<template>
	<label>
		Только мои: <input type="checkbox" checked>
	</label>
	<h1>Список пациентов</h1>
	<ul>
		<li v-for="patient in patients">
			<NuxtLink :to="`/patients/${patient.id}`">{{ patient.lastName }} {{ patient.firstName }}</NuxtLink>
		</li>
	</ul>
</template>

<script setup>
	const { data: patients } = await useFetch('/api/patients');
</script>

<style scoped>
	
</style>