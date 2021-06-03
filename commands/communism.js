const repliesC = [
    'https://tenor.com/view/commie-gif-5927208',
    'https://tenor.com/view/elmo-communism-gif-19427247',
    'https://tenor.com/view/stalin-liberal-communism-gif-19458482',
    'https://tenor.com/view/communism-stalin-staline-heart-c%c5%93ur-gif-20062203',
    'https://tenor.com/view/communist-communism-gif-16122773',
    'https://tenor.com/view/trump-communism-the-solution-gif-15837795',
    'https://tenor.com/view/cccp-flag-wave-star-logo-gif-16196191',
    'https://tenor.com/view/communiste-communist-hugs-heart-red-gif-14360509',
    'https://tenor.com/view/communism-communist-flag-gif-5148608',
    'https://gfycat.com/accuratebleakgoral'
]

module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * repliesC.length);
    msg.channel.send(repliesC[index])
}