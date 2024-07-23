<template>
<div class="flex flex-col gap-4 min-h-screen bg-slate-300">

	<div class="bg-slate-800 border-b border-slate-500">
		<header class="container h-16 flex items-center">
			<p class="text-white text-xl">
				Информационная система{{ $attrs.heading ? ': '+$attrs.heading : ''}}
			</p>
		</header>
	</div>

	<p
		class="fixed top-4 bg-emerald-400 text-white transition p-4"
		:class="message ? 'right-0':'right-full '"
	>
		{{ message }}
	</p>

	<div v-if="useRoute().name !== 'index'" class="container gap-4">
		<Btn type="back"></Btn>
	</div>

	<div class="container flex flex-col gap-4" :class="$attrs.container">
		<slot />
	</div>

</div>
</template>

<script setup>
	provide('message', showMessage);

	var message = useState();

	function showMessage(text) {
		message.value = text;
		setTimeout(() => message.value = '', 3000);
	}
</script>