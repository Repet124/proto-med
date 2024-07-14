export default defineEventHandler(async (event) => {
	var result = await $fetch('https://jsonplaceholder.typicode.com/users');
	result = result.forEach(user => {
		user.firstName = user.name.split(' ')[1];
		user.lastName = user.name.split(' ')[0];
	});
	return result;
})