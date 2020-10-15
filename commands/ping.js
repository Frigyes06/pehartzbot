
module.exports = {
    name: 'ping',
    description: "ping message",
    execute(message, args) {
        message.channel.send('pong!');
    }
}