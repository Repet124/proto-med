<template>

	<div class="@container">

		<ul class="grid gap-4 auto-rows-fr align-streach grid-cols-1 @2xl:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4">
			<li v-for="item in list">
				<NuxtLink
					:to="item.link || '#'"
					class="block p-4 rounded-md border border-slate-500 transition hover:bg-slate-200 h-full"
				>
					<span class="font-bold text-lg">{{ item.name }}</span>
					<p v-if="item.description">{{ item.description }}</p>
				</NuxtLink>
			</li>
		</ul>

	</div>
</template>

<script setup lang="ts">
	type MenuProps = {
		list: {
			name: string,
			description: string,
			link?: string
		}
	}

	var {list} = defineProps<MenuProps>();
</script>