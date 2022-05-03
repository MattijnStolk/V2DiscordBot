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
        const embed = new Discord.MessageEmbed()
        .setTitle('This channel is not NSFW, go be horny somewhere where it is allowed')
        .setColor("BLACK")
        .setImage('https://i.kym-cdn.com/entries/icons/facebook/000/033/758/Screen_Shot_2020-04-28_at_12.21.48_PM.jpg')
        msg.channel.send(embed)
        //msg.channel.send('This channel is not NSFW, go be horny somewhere else')
    }
}