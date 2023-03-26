/**
 * Connection File JS
 */
//Import Package Mongoose
import db from '../model/index.js'
//Import Pacakge Dotenv
import dotenv from 'dotenv'
import log from '../helper/log.js';
dotenv.config({path: '../../.env'})


async function mongoConn() {
    try {
        await db.mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        log.log("Connection MongoDB", 2)
    } catch (error) {
        log.log(`Error Gettting: ${error}`, 4)
        process.exit(1);
    }
};

export default {mongoConn};
