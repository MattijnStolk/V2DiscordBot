const client = new Discord.Client();

module.exports = function (msg, args) {
    bot.on('guildMemberAdd', member => {
        console.log('in de functie')
        let welcomeChannel = bot.channels.cache.find(channel => channel.name === "welkom");
        member.guild.channels.get(welcomeChannel).send(`Hoi ${member.user}`);
    });
}