const utf8 = require('utf8');

module.exports = {
    name: 'sor',
    description: "sor message",
    execute(message, args) {
        const msg = utf8.encode(':beer:');
            message.channel.send(msg);
    }
}