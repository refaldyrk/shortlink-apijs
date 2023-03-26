//Import Express
import express from 'express'

//Route Function
const route = express.Router()

//Import Controller
import controller from '../controller/controller.js'
import log from '../middleware/logRoute.js'

route.post("/service", controller.post)

route.get("/service/:shortid", controller.find)

route.use(log.log)

export default route