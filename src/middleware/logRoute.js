//Import Package Log
import logger from "../helper/log.js"

function log (req, res, next) {
    const LOG_MESSAGE = `${req.method } => ${req.originalUrl}`
    logger.log(LOG_MESSAGE, 1)
    if(req.method == 'POST') {
        logger.log(JSON.stringify(req.body), 1)
    }
    next()
}

export default {log}