/**
 * File Log Helper
 */

//Import Chalk
import chalk from 'chalk';

//Create Variable Log For Standard Var For Fucntion log
const logTerm = console.log

//Set Now Date
const DATE_NOW = new Date()
//Create Variable Date
const HOUR = DATE_NOW.getHours()
const MINUTE = DATE_NOW.getMinutes()
const SECOND = DATE_NOW.getSeconds()
const DATE = `${HOUR}:${MINUTE}:${SECOND}  `

//Create Function Log
/**
 * Log Function To Log Stdout ->  This Function Add Level
 * @param {String} message 
 * @param {Number} level 
 */
function log(message, level) {
  switch (level) {
    case 1: 
        logTerm(chalk.white.bold.italic(DATE)+chalk.bgWhite.black.bold("LOG  -> ")+chalk.white.bold(`   ${message}`))
        break;
    case 2:
        logTerm(chalk.white.bold.italic(DATE)+chalk.white.bgYellow.bold("INFO  -> ")+chalk.white.bold(`   ${message}`))
        break;
    case 3: 
        logTerm(chalk.white.bold.italic(DATE)+chalk.white.bgMagenta.bold("WARN  -> ")+chalk.white.bold(`   ${message}`))
        break;
    case 4: 
        logTerm(chalk.white.bold.italic(DATE)+chalk.white.bgRed.bold("ERROR  -> ")+chalk.white.bold(`   ${message}`))
        break;
    default:
        logTerm(chalk.white.bold.italic(DATE)+chalk.black.bgWhiteBright.bold("DEBUG  -> ")+chalk.white.bold(`   ${message}`))
        break;
  }
}

export default {log}