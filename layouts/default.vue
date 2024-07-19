<template>
<div class="flex flex-col gap-4 min-h-screen bg-slate-300">

	<div class="bg-slate-800 border-b border-slate-500">
		<header class="container h-16 flex items-center">
			<p class="text-white text-xl">
				Информационная система{{ $attrs.title ? ': '+$attrs.title : ''}}
			</p>
		</header>
	</div>

	<div v-if="useRoute().name !== 'index'" class="container">
		<Btn type="back"></Btn>
	</div>

	<div class="container flex flex-col gap-4" :class="$attrs.container">
		<slot />
	</div>

</div>
</template>