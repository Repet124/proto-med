<template>
<NuxtLayout>

	<template #title>Личный кабинет</template>
	<BackButton />
	<h1 class="text-3xl">Меню</h1>
	<Menu :list="menuList" />

</NuxtLayout>
</template>

<script setup>
	var menuList = [
		{
			name: 'Пациенты',
			description: 'Справочник поциентов. По умолчанию отображает список пациентов пользователя',
			link: '/patients',
		},
	]
</script>