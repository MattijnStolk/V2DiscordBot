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



module.exports = function (msg, args) {
    if (msg.channel.guild.id === 796103676149628929) {
        const newReplies = replies.push('<@307203798651371521> wants to eat vlaai of your butt', '<@290498501727748096> is looking at you in a very creepy way rn...')
        sendMSG(newReplies)    
    } else {
        sendMSG(replies.length)
    }
    function sendMSG(length) {
        replies.push('<@307203798651371521> wants to eat vlaai of your butt', '<@290498501727748096> is looking at you in a very creepy way rn...')
        const index = Math.floor(Math.random() * length);
        msg.channel.send(replies[index]);   
    }    
}