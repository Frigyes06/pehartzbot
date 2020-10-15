
const utf8 = require('utf8');

module.exports = {
    name: 'bor',
    description: "bor message",
    execute(message, args) {
        const msg = Encoding.UTF8.GetString(Encoding.UTF8.GetBytes(":beer: : Engem már senki se szeret?"));
        message.channel.send(msg);
        console.log(msg)
    }
}