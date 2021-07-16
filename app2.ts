import express from 'express'
import {RequestHandler} from 'express';
import {logger} from './logger'

const app = express()

const handler1: RequestHandler = (request, response, next) => {
	response.write('hi1')
	next()
}

const handler2: RequestHandler = (request, response, next) => {
	response.write('hi2')
	next()
}

const handler3: RequestHandler = (request, response, next) => {
	response.end()
	next()
}

app.use(logger('dev'))
app.use(handler1)
app.use(handler2)
app.use(handler3)
app.listen(4001, () => console.log('Listening on 4001'))
