/**Controller File */

//Import db 
import log from '../helper/log.js'
import db from '../model/index.js'

//Import Genid
import gen from "../helper/nanoid.js";

//Create Const
const Data = db.data

//POST: /short Controller
async function post(req, res) {

    //Validate Request
    if(!req.body.long) {
        log.log("Short Empty", 3)
        await res.json({
            status: 3,
            message: "something wrong",
        }).status(500)
        return
    }

    //Generate ID
    const generateID = gen.genid(8)

    const data = new Data({
        short: generateID,
        long: req.body.long
    })

    await data.save(data).then(async (result) => {
       await res.json({
            status: 1,
            data: data.short
        }).status(200)
        return
    }).catch((err) => {
        log.log(err, 4)
        res.json({
            status: 4,
            data: err,
        }).status(502)
        return
    });
} 

//GET: /shortid
async function find(req, res) {
    //Get Id From Parameter
    const id = req.params.shortid;

    const filter = {short: id}

    Data.findOne(filter).then(async found => {
        //Check If Not Found
        if(!found) {
          res.json({
                status: 4,
                message: "Not Found Baby"
            }).status(404)
        } else {
            res.redirect(found.long, 302)
            log.log("Redirected to " + found.long, 2)
        }
    }).catch(err => {
        log.log(err, 4)
        res.status(500)
        res.json({
            status: 4,
            message: "something wrong"
        })
    })
}

export default {find, post}