
module.exports = {
    name: 'help',
    description: "help message",
    execute(message, args) {
        message.channel.send('-help : Parancsok. \n-beer : Sör. \nPeharc bot is WIP');
    }
}