<template>
	<h1>Создание ДПВ</h1>
	<p>Выберите шаблон:</p>
	<component v-if="template && template.type !== 'legacy'" :is="template.componentName"></component>
	<div v-else-if="template && template.type === 'legacy'">
		{{ template.content }}
	</div>
</template>

<script setup>
	const template = useState('template', () => null);
	const [patient, reception] = useState(['patient', 'reception']);

	async function getTemplate(id) {
		var rawTemplate = await $fetch(`/api/templates/${id}`);
		try {
			template.value = JSON.parse(rawTemplate);
		} catch(e) {
			template.value = {
				type: 'legacy',
				content: rawTemplate
			}
		}
	}
</script>

<style scoped>
	
</style>