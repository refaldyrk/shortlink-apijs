//Import Package Express.Js
import express from 'express';
//Log Helper
import logger from './src/helper/log.js';
//Env File Configure
import dotenv from 'dotenv';
dotenv.config()
//Import Middleware Log
import logMiddleware from './src/middleware/logRoute.js'
//Import Connection
import mongoConn from './src/database/connection.js';
//Import Cron
import cron from 'node-cron'
//import model
import db from './src/model/index.js'
const Data = db.data

//Import Route
import routerShort from './src/route/route.js'

//Initial App Express App
const app = express()

//JSON BODY
app.use(express.json())

//Add Middleware Log
app.use(logMiddleware.log)

app.use("/short",routerShort)

//Create Endpoint Health-Check
app.get("/api/health-check", HealthCheck)

//Mongo Connection
mongoConn.mongoConn()

//Create Func Endpoint To HealthCheck Server
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns 
 */
function HealthCheck(req, res) {
    res.json({
        message: "Everything OK!"
    }).status(200)
    return
}

//Cron Scheduler
cron.schedule('*/1 * * * *', async () => {
    let dataToDelete = await Data.find({ createdAt: { $lt: Date.now() - 1 * 60 * 1000 } });
    await Data.deleteMany({ _id: { $in: dataToDelete } });
});


//Run App Express In Port -> This Port Set In .Env File
app.listen(process.env.PORT, () => {
    //Log To Stdout
    logger.log(`Run In Port ${process.env.PORT}`, 2)
})
