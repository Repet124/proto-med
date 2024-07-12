<template>
	<h1>Пациент: Иванов ИИ</h1>
	<NuxtLink :to="`/patients/${id}/reception/create`">Добваить новый приём</NuxtLink>
	<h2>Список приёмов</h2>
	<ul>
		<li v-for="reception in receptions">
			<ReceptionItem :reception="reception"/>
		</li>
	</ul>
</template>

<script setup>
	const [id] = useProps(['id']);
	const receptions = await useFetch(`/patients/${id}/reception/create`);
</script>

<style scoped>
	
</style>