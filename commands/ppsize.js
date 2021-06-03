const replies = [
    'Your PP size is small asf, are you even a boy?',
    "Your PP size could't be put into numbers.",
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 50) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 0) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 5) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 20) + ' inches.',
    'Your PP size is ' + randomNumber(-5, 25) + ' inches.'
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
    }else{
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    }
}
