module.exports = function (msg, args) {
    var time = new Date()
    var timeMinutes = time.getMinutes()
    if (time.getMinutes() < 10) {
        timeMinutes = '0' + timeMinutes
    }
    msg.channel.send('CEST time is now: ' + time.getHours() + ':' + timeMinutes)
}