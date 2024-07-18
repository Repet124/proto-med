<template>
<NuxtLayout>

	<template #title>Личный кабинет</template>
	<Btn type="back" />
	<h1 class="text-3xl">Пациент: {{ patient.name }}</h1>

	<Btn type="link" :to="`/patients/${id}/receptions/create`">Добваить новый приём</Btn>
	<h2>Список приёмов</h2>
	<ul class="flex flex-col gap-4">
		<li v-for="reception in patient.receptions">
			<ReceptionItem
				:patient="patient"
				:reception="reception"
			/>
		</li>
	</ul>

</NuxtLayout>
</template>

<script setup>
	const id = useRoute().params.patient_id;
	const {data: patient} = await useFetch(`/api/patients/${id}`);
</script>

<style scoped>
	
</style>