<template>
	<h2>Создание ДПВ</h2>
	<p>Шаблон: {{ template ? template.name : ''}}</p>

	<select v-model="selectedTemplate">
		<option disabled :value="undefined">Выбирите шаблон</option>
		<option v-for="templateItem in templates" :value="templateItem">{{ templateItem.name }}</option>
	</select>

	<Form
		v-if="template && template.type !== 'legacy'"
		action="/api/dvp"
		:fields="template.content"
	></Form>

	<div
		v-else-if="template && template.type === 'legacy'"
		v-html="template.content"
		:class="$style.legacy_container"
	></div>

</template>

<script setup>

	const {data: templates} = await useFetch(`/api/templates`);

	const template = useState();
	const selectedTemplate = useState();

	watch(selectedTemplate, async templateData => {
		if (templateData === undefined) {return;}
		template.value = await $fetch(`/api/templates/${templateData.id}`);
	})
</script>

<style scoped module>
	.legacy_container {
		* {
			margin: 0 !important;
			max-width: 100%;
		}
	}
</style>