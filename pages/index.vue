<template>
<NuxtLayout>

	<h1 class="text-3xl">Модули</h1>
	<Menu :list="modules"/>

</NuxtLayout>
</template>

<script setup>
	var modules = [
		{
			name: 'Личный кабинет',
			description: 'Функционал для организации личной работы - список пациентов, шаблоны, формирование  ДПВ и прочее.',
			link: '/profile',
		},
		{
			name: 'Последующие модули',
			description: 'Такими ссылками будут обозначены модули которые будут реализованы в дальнейшем',
		},
	];
</script>