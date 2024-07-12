<template>
	<article>
		<h3>Приём: {{ date }}</h3>
		<p>{{ description }}</p>
		<NuxtLink to="/dpv/create">Добавить ДПВ</NuxtLink>
		<ul>
			<li v-for="dpv in dpvList">
				<a :href="`/dpv/${dpv.id}`" target="_blank">{{ dpv.name }}</a>
			</li>
		</ul>
	</article>
</template>

<script setup>
	const [date, description, dpvList] = useProps(['reception'])
</script>

<style scoped>
	
</style>