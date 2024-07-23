<template>
<NuxtLayout heading="Создание приёма">

	<p>Для создания нового приёма сформируйте документ приёма врача (ДПВ)</p>
	<DpvEditor />

</NuxtLayout>
</template>

<script setup>

	const id = useRoute().params.patient_id;
	const date = useState(() => new Date());
	const description = useState(() => '');

	// const patient = await useFetch(`/api/patients/${id}`);
	var {data: fields} = await useFetch(`/api/fields`);

</script>

<style scoped>
	
</style>