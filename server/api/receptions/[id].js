export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, 'id');
	var user = await $fetch('https://jsonplaceholder.typicode.com/users/'+id);
	user.firstName = user.name.split(' ')[1];
	user.lastName = user.name.split(' ')[0];
	return user;
})