const translate = require('@iamtraction/google-translate');

module.exports = async function (msg, args) {
    ownUserId = process.env.OWNER;
    let numberLimit

    if (typeof args[0] == "string") {
        if (args > 10) {
            numberLimit = 10
        } else {
            numberLimit = args
        }
    } else {
        numberLimit = 10
    }

    console.log(numberLimit);

    const toTranslate = await msg.channel.messages.fetch({limit : numberLimit})
    
    for (const singlemsg of toTranslate) {
        console.log(singlemsg[1].content)

        const translated = await translate(singlemsg[1].content, { to : 'en'})
        await console.log(translated.text);
    }
}

    //msg.channel.messages.fetch({limit : numberLimit}).then(messages =>{
        //for (const singlemsg of messages) {
            //if(singlemsg[1].content !== '?translate') {
                
            //}
            
            //msg.channel.send(translateMSG(singlemsg[1].content))
        //}
    //})
    



async function translateMSG(msgContent) {
    const translated = await translate(msgContent, { to : 'en'})
    console.log(translated)

    return translated.text

}