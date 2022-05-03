const randomReplies = [
    'Your PP size is small asf, are you even a boy?',
    "Your PP size couldn't be put into numbers.",
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 50) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 0) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 10) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(0, 5) + ' inches.',
    'This u? 8===============D',
    'Nice Cock bro, I bet you\'ve worked hard on that! It\'s aproxomately 3.14159265358979323846 inches, call that a PInes.'
]

const negReplies = [

]

const posReplies = [

]

function randomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }

module.exports = function (msg, args) {
    if (args.length > 1) {
        keywords = args.join(" ");
    }
    if (msg.author.id == 339068289546321920) {
        msg.channel.send('damn matt, I didn\'t know ur pp could be that large')
    }
    else{
        const index = Math.floor(Math.random() * randomReplies.length);
        msg.channel.send(randomReplies[index]);
    }
}
