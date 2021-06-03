repliesWorthy = [
    'You are unworthy, peasant.',
    'You are worthy.'
]

module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * repliesWorthy.length);
    msg.channel.send(repliesWorthy[index])
}