export default defineEventHandler(async (event) => {
	var data = await $fetch('https://jsonplaceholder.typicode.com/users');
	data.forEach(user => {
		user.firstName = user.name.split(' ')[1];
		user.lastName = user.name.split(' ')[0];
	});
	return data;
})