import mongoose from "mongoose";
mongoose.Promise = global.Promise;

import modelColl from './model.js'

import dotenc from 'dotenv'
dotenc.config({
    path:'../../.env'
})

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URL;
db.data = modelColl.mongooseColl();

export default db;