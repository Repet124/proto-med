export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	// логика валидации и отправки данных на backend
	return 'ДПВ создан';
});