
module.exports = {
    name: 'help',
    description: "help message",
    execute(message, args) {
        message.channel.send('-help : Parancsok. \n-beer : S�r. \nPeharc bot is WIP');
    }
}