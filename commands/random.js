module.exports = function (msg, args) {
    if (args.length > 0) {
        if(args[0].startsWith('<@&')){
            roleMember = msg.guild.roles.cache.get('811547559629553685').members.map(m=>m.user.id)
            const index = Math.floor(Math.random() * roleMember.length)
            msg.channel.send(`<@${roleMember[index]}>`)
            for (let i = 0; i < roleMember.length; i++) {    
                console.log(roleMember[i])
            }
        }
    }else {
        msg.channel.send('u need to supply a role as argument')
    }
}

