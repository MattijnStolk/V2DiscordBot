const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = async function (msg, args) {
    if (msg.channel.nsfw) {
        const image = await nsfw.pgif();
        const embed = new Discord.MessageEmbed()
        .setTitle(`Enjoy horny ass`)
        .setColor("BLACK")
        .setImage(image);
        msg.channel.send(embed);
    } else{
        msg.channel.send('This channel is not NSFW, sorry mate')
    }
}