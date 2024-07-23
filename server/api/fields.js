import fs from 'node:fs';
import path from 'node:path';

export default defineEventHandler(async (event) => {
	return JSON.parse(fs.readFileSync(path.resolve('fields.json'), {encoding: 'utf8'}));
})