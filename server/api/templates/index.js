export default defineEventHandler(async (event) => {
	var templates = await $fetch('https://jsonplaceholder.typicode.com/posts');
	templates = templates.map(item => ({
		id: item.id,
		name: item.title,
	}));
	return templates;
})