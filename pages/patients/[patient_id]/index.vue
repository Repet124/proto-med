<template>
<NuxtLayout>

	<template #title>Личный кабинет</template>
	<Btn type="back" />
	<h1 class="font-bold text-3xl">Пациент: {{ patient.name }}</h1>

	<section class="bg-white p-2 border border-slate-600 rounded-md">
		<h2 class="text-2xl">Персональные данные</h2>
		<ul>
			<li v-for="item in personalDataProperties">
				<span class="font-bold text-md">{{ item.label }}</span>
				:
				<span class="text-md">{{ patient[item.key] }}</span>
			</li>
		</ul>
	</section>

	<h2 class="text-2xl">Список приёмов</h2>
	<Btn type="link" :to="`/patients/${id}/receptions/create`">Добваить новый приём</Btn>
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

	var personalDataProperties = [
		{key: 'firstName', label: 'Имя'},
		{key: 'lastName', label: 'Фамилия'},
		{key: 'email', label: 'Почта'},
		{key: 'phone', label: 'Телефон'}
	]
</script>

<style scoped>
	
</style>