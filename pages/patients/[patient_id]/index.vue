<template>
<NuxtLayout title="Карточка пациента" :container="$style.layout">

	<h1 class="font-bold text-3xl" :class="$style.h1">Пациент: {{ patient.name }}</h1>

	<section class="bg-white p-2 border border-slate-600 rounded-md md:self-start" :class="$style.per">
		<h2 class="text-2xl">Персональные данные</h2>
		<ul>
			<li v-for="item in personalDataProperties">
				<span class="font-bold text-md">{{ item.label }}</span>
				:
				<span class="text-md">{{ patient[item.key] }}</span>
			</li>
		</ul>
	</section>

	<section :class="$style.list" class="flex flex-col gap-4 md:self-start">
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
	</section>

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

<style module>
	@media(min-width: 768px) {
		.layout {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-areas:
				'h1 h1'
				'list per';
		}
	}

	.h1 {grid-area: h1;}
	.per {grid-area: per;}
	.list {grid-area: list;}
</style>