const gif = require("./commands/gif.js");
const amigay = require("./commands/gay.js");
const ppsize = require("./commands/ppsize.js");
const on = require("./commands/on.js");
const pornpic = require("./commands/pornPic.js");
const porn = require("./commands/porn.js");
const meme = require("./commands/meme.js");
const translate = require("./commands/translate.js");
const fourk = require("./commands/4k.js");
const insult = require("./commands/insult.js");
const amiworthy = require("./commands/worthy.js");
const random = require("./commands/random.js");
const fbi = require("./commands/fbi.js")
const communism = require("./commands/communism.js")
const time = require('./commands/time.js')
const poo = require('./commands/poo.js')
const mal = require('./commands/mal.js')
const fel = require('./commands/fel.js')

const commands = {
  amigay, gif, ppsize, on, pornpic, porn, meme, translate,
  fourk, insult, amiworthy, random, fbi, communism,
  time, poo, mal, fel
};

module.exports = async function (msg) {
  if (msg.author.id == 971404410137751564) {
    msg.channel.send('SHUT THE FUCK UP CUNTBOT')
  } else {
    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (msg.guild === null && !msg.author.bot) {
      console.log(msg.author.username + ' = ' + msg.content);
    }
    try {
      if (command.charAt(0) === "?") {
        command = command.substring(1).toLowerCase();
        commands[command](msg, tokens);
      };
    } catch {
      console.log(command + ' is not a function');
    }
  }
}