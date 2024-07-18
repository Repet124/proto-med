<template>
	<article class="flex flex-col gap-2 p-2 text-lg border border-slate-600 rounded-md">
		<h3><b>Дата:</b>{{ reception.date }}</h3>
		<section>
			<h4 class="font-bold">Описание:</h4>
			<p>{{ reception.description }}</p>
		</section>
		<section>
			<h4 class="font-bold">Список ДПВ:</h4>
			<ul>
				<li v-for="dpv in reception.dpvList">
					<a
						class="underline text-emerald-700 hover:text-emerald-600"
						:href="`/api/dpv/${dpv.id}`"
						target="_blank"
					>
						{{ dpv.title }}
					</a>
				</li>
			</ul>
		</section>

		<Btn
			size="sm"
			type="link"
			:to="`/patients/${patient.id}/receptions/${reception.id}/dpv/create`"
		>
			Добавить ДПВ
		</Btn>
	</article>
</template>

<script setup>
	const {patient, reception} = defineProps(['patient','reception'])
</script>

<style scoped>
	
</style>