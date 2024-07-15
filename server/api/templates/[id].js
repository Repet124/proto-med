import fs from 'node:fs';
import path from 'node:path';

export default defineEventHandler((event) => {
	var legacyTemplate = {
		type: 'legacy',
		name: 'qwe',
		content: fs.readFileSync(path.resolve('server/api/templates/test_template.html'), {encoding: 'utf8'})
	};
	return legacyTemplate;
})