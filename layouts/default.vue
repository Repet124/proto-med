<template>
<div class="min-h-screen bg-slate-300">

	<div class="bg-slate-800 border-b border-slate-500">
		<header class="container h-16 flex items-center">
			<p class="text-white text-xl">
				<slot name="title">Информационная система</slot>
			</p>
		</header>
	</div>
	
	<div class="container flex flex-col py-4 gap-4">
		<slot />
	</div>

</div>
</template>