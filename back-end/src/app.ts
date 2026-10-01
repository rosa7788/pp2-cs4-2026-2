import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import carRoutes from "./routes/car";

import indexRouter from './routes/index'
import usersRouter from './routes/users'
import customersRouter from './routes/customers'

const app = express()

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

/***************** ROTAS *************************/

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.use('/customers', customersRouter)
app.use("/cars", carRoutes);

export default app
