import express from 'express'
import hbs from 'hbs'
import router from './routes/userRoutes.js'
import database from './dbConnection/db.js'
import logger from 'morgan'
import bodyParser from 'body-parser'
import multer from 'multer'

import dotenv from 'dotenv'
dotenv.config()



const app = express()

// database Connection ......
const dbURI = process.env.DATABASE || "mongodb://localhost:27017/userForm" 
database(dbURI)  

// middlewares..............
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(logger('dev'))


// Parsing multipart/form-data.........
const upload = multer()
app.use(upload.array())

// Static Files Settings...........
app.use(express.static('public'))


// Template Engine Settings.......
app.set('view engine','hbs')
app.set('views','templates/views')
hbs.registerPartials('templates/partials')

// Router middleware...........
app.use(router)


export default app

