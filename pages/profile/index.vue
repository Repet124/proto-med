<template>
<NuxtLayout>

	<template #title>Личный кабинет</template>
	<nav>
		<Menu
			:links="[
				['Пациенты', '/patients'],
				['Шаблоны', '/templates']
			]"
		/>
	</nav>

</NuxtLayout>
</template>

<script setup>
	
</script>