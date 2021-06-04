const replies = [
    'yes, you are',
    'you are very very gay',
    'No, idk where u got the idea',
    'ah u gayboi huh',
    'ask ur boyfriend',
    'you are about as straight as a roundabout',
    'No not at all',
    'Nah you like women',
    'I heard they\'re hiring in the red-light district.'
]

const optionalReplies = [
    `<@${process.env.NMEMBER}> wants to eat vlaai of your butt`, 
    `<@${process.env.TMEMBER}> is looking at you in a very creepy way rn...`
]



module.exports = function (msg, args) {
    if (msg.channel.guild.id === '796103676149628929') {
        const newReplies = replies.concat(optionalReplies)
        sendMSG(newReplies)    
    } else {
        sendMSG(replies)
    }
    function sendMSG(array) {
        const index = Math.floor(Math.random() * array.length);
        msg.channel.send(array[index]);   
    }    
}