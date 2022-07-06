import express from 'express'
import hbs from 'hbs'
import path from 'path'
import router from './routes/userRoutes.js'
import database from './dbConnection/db.js'
import logger from 'morgan'
import bodyParser from 'body-parser'
import multer from 'multer'

import dotenv from 'dotenv'
dotenv.config()



const app = express()

// database Connection ......
database(process.env.DATABASE)

const upload = multer()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(logger('dev'))


const staticPath = path.join(process.cwd(),'public')
// console.log(staticPath)

const templatePath = path.join(process.cwd(),'template/views')
// console.log(templatePath)

const partialsPath = path.join(process.cwd(),'template/partials')
// console.log(partialsPath)

app.use(upload.array())
app.use(express.static(staticPath))

app.set('view engine','hbs')
app.set('views',templatePath)
hbs.registerPartials(partialsPath)


app.use(router)


export default app

