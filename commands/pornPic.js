const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();

// getting real images
module.exports = function (msg, args) {
    if (msg.channel.nsfw) {
        DabiClient.nsfw.real.random().then(json => {
            // outputs data with image url, possible source and other stuff
            msg.channel.send(json.url)
        }).catch(error => {
            console.log(error);
            // outputs error
        });
    } else {
        msg.channel.send('This channel is not NSFW, sorry mate')
    }
}