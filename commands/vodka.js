
module.exports = {
    name: 'vodka',
    description: "vodka message",
    execute(message, args) {
        message.channel.send('Nincs vodka, csak sör!');
    }
}