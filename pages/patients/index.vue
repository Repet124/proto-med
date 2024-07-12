<template>
	<label>
		Только мои: <input type="checkbox" checked>
	</label>
	<h1>Список пациентов</h1>
	<ul>
		<li v-for="patient in patients">
			<NuxtLink :to="`/patients/${patient.id}">{{ patient.lastName }} {{ patient.firstName }}</NuxtLink>
		</li>
	</ul>
</template>

<script setup>
	const patients = await useFetch('/api/patients?doctor='+docktor.id);
</script>

<style scoped>
	
</style>