import type { RequestHandler } from '@sveltejs/kit';

const URL = `https://jsonplaceholder.typicode.com/users`;

export const patch: RequestHandler = async function ({ params, query, path, headers }) {
	console.log('endpoint hit');
	console.log(params, query, path);
	console.log('HEADERS', headers);

	const users = await fetch(URL)
		.then((res) => res.json())
		.catch((err) => console.error(err));
	console.log(users);
	return {
		status: 200,
		headers: {
			'cache-control': 'max-age=2000',
			'content-type': 'application/json',
			'set-cookie': ['first=0xedb;HttpOnly', 'second=no!']
		},
		body: JSON.stringify(users)
	};
};
