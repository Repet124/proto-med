<template>
<NuxtLayout title="Справочник пациентов">

	<h1 class="text-3xl">Список пациентов</h1>

	<label>
		Только мои: <input type="checkbox" checked>
	</label>
	<ul>
		<li v-for="patient in patients">
			<NuxtLink
				:to="`/patients/${patient.id}`"
				class="hover:text-slate-500"
			>
				- {{ patient.lastName }} {{ patient.firstName }}
			</NuxtLink>
		</li>
	</ul>

</NuxtLayout>
</template>

<script setup>
	const { data: patients } = await useFetch('/api/patients');
</script>

<style scoped>
	
</style>