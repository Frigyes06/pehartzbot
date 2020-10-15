
module.exports = {
    name: 'pálinka',
    description: "pálinka message",
    execute(message, args) {
        message.channel.send('Pálinka meg fõleg nincs!');
        message.channel.send('Csak a sörre van affinitás. :beer:');
    }
}