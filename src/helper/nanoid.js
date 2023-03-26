/**
 * Nanoid Generate File
 */
//import package nanoid
import {nanoid} from 'nanoid';


/**
 * GenID
 * @param{Number} number
 * @returns String
 */
function genid(number) {
   const id = nanoid(number);
   return id
}

export default {genid}