<template>

	<component
		:is="type === 'link' ? NuxtLink : 'button'"
		:to="to"
		class="w-fit text-white  px-4 py-2 rounded-md transition"
		:class="[
			sizes[size],
			disabled ? 'bg-gray-500' : 'bg-slate-800 hover:bg-slate-700'
		]"
		:disabled="disabled"
		@click="type === 'back' ? useRouter().back() : $emit('click')"
	>
		<slot>{{ type === 'back' ? 'Назад' : 'Кнопка' }}</slot>
	</component>
</template>

<script>
	var sizes = {
		sm: 'text-sm',
		md: 'text-md',
		lg: 'text-lg',
		xl: 'text-xl',
		twoXl: 'text-2xl',
	}
	export default {}
</script>

<script setup>
	var NuxtLink = resolveComponent('NuxtLink');
	
	defineProps({
		type: {
			type: String,
			validator: (val) => ['btn', 'link', 'back'].includes(val),
			default: 'back'
		},
		to: String,
		size: {
			type: String,
			validator: (val) => Object.keys(sizes).includes(val),
			default: 'xl'
		},
		disabled: {
			type: Boolean,
			default: false
		}
	});
</script>