module.exports = function (msg, args) {
    const user = msg.author;
    let fixedArgs = args.join(" ").toLowerCase();

    if (fixedArgs.charAt(0) === 'c') {
        if(fixedArgs.charAt(1) === 'o'){
            sendmsg("Competitive")
        } else if(fixedArgs.charAt(1) === 'h') {
            sendmsg("Charlie Team")
        } else if(fixedArgs.charAt(1) === 'u') {
            msg.channel.send(`cum`)
        } else if(fixedArgs.charAt(1) === 'a') {
            sendmsg("Casual")
        } else {
            msg.channel.send(`${user} There is multiple roles starting with a c, supply the second letter aswell to make it work!'.`);
        }
    } else if (fixedArgs.charAt(0) === "f") {
        if(fixedArgs.charAt(1) === 'r'){
            sendmsg("Freestyle")
        } else if(fixedArgs.charAt(1) === 'o') {
            sendmsg("Foxtrot Team")
        } else {
            msg.channel.send(`${user} There is 2 roles starting with an F, supply the second letter aswell to make it work!'.`);
        }
    } else if (fixedArgs.charAt(0) === "a"){
        sendmsg("Alpha Team")
    } else if (fixedArgs.charAt(0) === "b"){
        sendmsg("Bravo Team")
    } else if (fixedArgs.charAt(0) === "d"){
        sendmsg("Delta Team")
    } else if (fixedArgs.charAt(0) === "e"){
        sendmsg("Echo Team")
    } else if (fixedArgs.charAt(0) === "g"){
        sendmsg("Golf Team")
    } else {
        msg.channel.send(`${user}, You have to supply an argument.`);
    }

    function sendmsg(name) {
        let role = msg.guild.roles.cache.find(role => role.name === name);
        msg.channel.send(`Hi <@&${role.id}>, ${user} is on and would like to play!`);
    }
}