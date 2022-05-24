const translate = require('@iamtraction/google-translate');

module.exports = async function (msg, args) {
    msg.delete()
    let numberLimit = 10
    let replies = []
    
    const toTranslate = await msg.channel.messages.fetch({ limit: numberLimit })

    for (const singlemsg of toTranslate) {
        const translated = await translate(singlemsg[1].content, { to: 'en' })

        if (translated.text == '?translate') {
            //singlemsg[1].delete()
        } else if (!singlemsg[1].author.bot) {
            if (translated.text.search(`[?]translate`) == -1) {
                replies.push(`${singlemsg[1].author.username} said: ${translated.text}`);
            }
        }
    }
    try {
        msg.channel.send(replies.reverse())
    } catch {
        console.log(err)
    }
}
