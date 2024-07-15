<template>
	<h1>Создание ДПВ</h1>
	<p>Шаблон: {{ template ? template.name : ''}}</p>

	<select v-model="selectedTemplate">
		<option disabled :value="undefined">Выбирите шаблон</option>
		<option v-for="templateItem in templates" :value="templateItem">{{ templateItem.name }}</option>
	</select>

	<component
		v-if="template && template.type !== 'legacy'"
		:is="template.componentName"
	></component>

	<div
		v-else-if="template && template.type === 'legacy'"
		v-html="template.content"
	></div>

</template>

<script setup>
	const {patient, reception} = defineProps(['patient', 'reception']);
	const {data: templates} = await useFetch(`/api/templates`);

	const template = useState();
	const selectedTemplate = useState();

	watch(selectedTemplate, async templateData => {
		if (templateData === undefined) {return;}
		template.value = await $fetch(`/api/templates/${templateData.id}`);
	})
</script>

<style scoped>
	
</style>