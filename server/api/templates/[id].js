import fs from 'node:fs';
import path from 'node:path';

export default defineEventHandler((event) => {
	var templates = [
		{
			type: 'legacy',
			name: 'legacy template',
			content: fs.readFileSync(path.resolve('server/api/templates/test_template.html'), {encoding: 'utf8'})
		},
		{
			type: 'normal',
			name: 'Normal',
			content: JSON.parse(fs.readFileSync(path.resolve('server/api/templates/normal_template.json'), {encoding: 'utf8'}))
		}
	];
	return templates[getRouterParam(event, 'id')];
});