repliesFBI = [
    'https://tenor.com/view/fbi-open-up-gif-19087989',
    'https://tenor.com/view/kick-down-door-fbiopen-up-rage-gif-15524876',
    'https://tenor.com/view/fbi-swat-busted-police-open-up-gif-16928811',
    'https://tenor.com/view/fbi-open-up-gif-13953616',
    'https://tenor.com/view/granny-fbi-openup-gif-20386026',
    'https://tenor.com/view/police-trouble-gif-7744617',
    'https://tenor.com/view/police-ronreaco-lee-coffee-and-kareem-police-open-up-arrest-gif-16694310',
    'https://tenor.com/view/cops-im-calling-the-cops-police-brutality-gif-12842924',
    'https://tenor.com/view/policia-police-enchufe-tv-stupid-wtf-gif-14406797'
]

module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * repliesFBI.length);
    msg.channel.send(repliesFBI[index])
}