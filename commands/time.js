module.exports = function (msg, args) {
    let time = new Date()
    let timeMinutes = time.getMinutes()
    let timeHours = time.getHours() -1;
    if (time.getMinutes() < 10) {
        timeMinutes = '0' + timeMinutes
    }
    if (time.getHours() == -1){
        timeHours = 23
    }
    msg.channel.send('BST time is now: ' + timeHours + ':' + timeMinutes)
}