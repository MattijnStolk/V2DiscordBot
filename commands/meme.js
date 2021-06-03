const { meme } = require("memejs");
const Discord = require("discord.js");

module.exports = async function (msg, args) {
    if (args.length > 0) {
        subReddit = args;
    } else {
        subReddit = "dankmemes";
    }
    meme(subReddit, function(err, data) {
        if (err) return console.error(err);
        const embed = new Discord.MessageEmbed()
        .setTitle(data.title)
        .setColor("BLACK")
        .setImage(data.url)
        .setFooter(`${data.subreddit}; ${data.author}`);
        msg.channel.send(embed);
      });
}