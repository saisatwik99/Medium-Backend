const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')
const dotenv = require('dotenv');

const app = express()
const router = express.Router()
dotenv.config();
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/medium"

/** configure cloudinary */
// cloudinary.config({
//     cloud_name: 'dpyeb9ref',
//     api_key: '928274852559231',
//     api_secret: 'M9-nApr1vQaf9y4yfQKXZUBYpas'
// })

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

/** connect to MongoDB datastore */
try {
    mongoose.connect(url, {  })    
} catch (error) {
    
}

let port = process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

app.use('/api', router)

/** start server */
app.listen(port);