export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, 'id');
	var user = await $fetch('https://jsonplaceholder.typicode.com/users/'+id);
	user.firstName = user.name.split(' ')[1];
	user.lastName = user.name.split(' ')[0];
	user.receptions = (await $fetch('https://freetestapi.com/api/v1/posts?limit=10')).map(item => ({
		id: item.id,
		date: item.timestamp,
		description: item.title,
	}));
	user.receptions.forEach(async item => {
		item.dpvList = await $fetch('https://freetestapi.com/api/v1/posts?limit=5');
	});
	return user;
})