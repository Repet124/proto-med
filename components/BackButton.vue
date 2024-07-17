<template>
	<button
		class=" w-fit text-white bg-slate-800 text-2xl px-4 py-2 rounded-md hover:bg-slate-700 transition"
		@click="back()"
	>
		Назад
	</button>
</template>

<script setup>
	var back = useRouter().back;
</script>