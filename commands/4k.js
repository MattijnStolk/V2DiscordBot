const url = [
    'https://pbs.twimg.com/media/EnT9jKRUcAIQRY8.jpg',
    'https://i.kym-cdn.com/photos/images/newsfeed/002/002/026/f6e',
    'https://i.kym-cdn.com/photos/images/newsfeed/002/001/990/f06.jpg'
];
const Discord = require("discord.js");

module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * url.length)
    if(index == 1){
        msgSend = `Damn they caught ur ass in 8k`
    } else {
        msgSend = `Damn they caught ur ass in 4k`
    }

    const embed = new Discord.MessageEmbed()
    .setTitle(msgSend)
    .setColor("BLACK")
    .setImage(url[index]);
    msg.channel.send(embed);
}
