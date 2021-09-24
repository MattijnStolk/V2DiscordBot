require('dotenv').config({path:__dirname+'/.env'})

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.DISCORD_TOKEN)

client.on('ready', () => {
    console.log('Hi nerd')
    client.user.setActivity('your mom lol', { type: 'WATCHING' })
});

client.on('guildMemberAdd', (member) => {
    if (member.guild.name == 'Version 2') {
        member.guild.channels.cache.get('796696201067888651').send(`Welcome ${member.user} to the **V2 server!**`)
        let rulesChannel = member.guild.channels.cache.get('796697354047979541')
        let rolesChannel = member.guild.channels.cache.get('796798083429564466')
        let faqChannel = member.guild.channels.cache.get('868961877596700683')
        member.send(`Hi, welcome to the V2 server.\nWould you mind picking your ${rolesChannel} (as stated in the ${rulesChannel}) so we can keep the server organized? Thanks in advance!\nFor a list of all the available commands you can check the ${faqChannel} channel. `)
        setTimeout(() => {
            const message = member.guild.channels.cache.get('796696201067888651').lastMessage
            message.react('👋')
        }, 500)
    }
})


client.on('guildMemberRemove',(member) => {
    if (member.guild.name == 'Version 2') {
        member.guild.channels.cache.get('796696201067888651').send(`**${member.user.username}** has just left the server!`)
        setTimeout(() => {
            const message = member.guild.channels.cache.get('796696201067888651').lastMessage
            message.react('⛔')
        }, 500)
    }
})


let commandHandler = require("./commands");
client.on('message', commandHandler);