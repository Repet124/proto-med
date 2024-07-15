<template>
	<article>
		<h3>Приём: {{ reception.date }}</h3>
		<p>{{ reception.description }}</p>
		<NuxtLink :to="`/patients/${patient.id}/receptions/${reception.id}/dpv/create`">Добавить ДПВ</NuxtLink>
		<ul>
			<li v-for="dpv in reception.dpvList">
				<a :href="`/api/dpv/${dpv.id}`" target="_blank">{{ dpv.name }}</a>
			</li>
		</ul>
	</article>
</template>

<script setup>
	const {patient, reception} = defineProps(['patient','reception'])
</script>

<style scoped>
	
</style>