import {RequestHandler} from 'express';

export const logger: (prefix?: string) => RequestHandler = (prefix) => {
	return (request, response, next) => {
		console.log(`${prefix} : ${request.url}`)
		next()
	}
}
