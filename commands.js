const gif = require("./commands/gif.js");
const amigay = require("./commands/gay.js");
const ppsize = require("./commands/ppsize.js");
const on = require("./commands/on.js");
const pornpic = require("./commands/pornPic.js");
const porn = require("./commands/porn.js");
const meme = require("./commands/meme.js");
const log = require("./commands/log.js");
const fourk = require("./commands/4k.js");
const insult = require("./commands/insult.js");
const amiworthy = require("./commands/worthy.js");
const random = require("./commands/random.js");
const fbi = require("./commands/fbi.js")
const communism = require("./commands/communism.js")
const time = require('./commands/time.js')

const commands = { amigay, gif, ppsize, on, pornpic, porn, meme, log, 
                    fourk, insult, amiworthy, random, fbi, communism, 
                    time, };
module.exports =  async function (msg) {
    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (msg.guild === null && !msg.author.bot) {
      console.log(msg.author.username + ' = ' + msg.content);
    }
  try{
    if (command.charAt(0) === "?") {
      command = command.substring(1).toLowerCase();
      commands[command](msg, tokens);
    };
  }catch{
    console.log(command + ' is not a function');
  } 
}