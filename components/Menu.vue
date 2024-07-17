<template>

	<ul class="text-xl">
		<li v-for="link in links" class="before:content-['-'] before:mr-2">

			<NuxtLink v-if="link[1]" class="underline text-slate-800 hover:text-slate-500" :to="link[1] || '#'">
				{{ link[0] }}
			</NuxtLink>
			{{ link[1] ? '' : link[0]}}
		</li>
	</ul>
</template>

<script setup>
	var {links} = defineProps(['links']);
</script>