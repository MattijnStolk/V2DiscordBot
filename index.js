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
        member.send('Hi, welcome to the V2 server. Would you mind picking your roles (as stated in the rules) so we can keep the server organized? Thanks in advance!')
    }
})

client.on('guildMemberRemove',(member) => {
    if (member.guild.name == 'Version 2') {
        member.guild.channels.cache.get('796696201067888651').send(`**${member.user.username}** has just left the server!`)
    }
})


let commandHandler = require("./commands");
client.on('message', commandHandler);