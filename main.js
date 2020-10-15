const Discord = require('discord.js');
const fs = require('fs');
const utf8 = require('utf8');


const client = new Discord.Client

const prefix = '';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

client.once('ready', () => {
	console.log('Pehartz bot is online!');
	client.user.setActivity('Kell segítség? -help');
});

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	console.log(command);
	rand = getRandomInt(100);
	if(rand === 2){
		message.channel.send('Egyes!!!');
	} else{
		if(command === 'help'){
			client.commands.get('help').execute(message, args);
		}
		if(command === 'sör'){
			client.commands.get('sor').execute(message, args);
		}
		if(command === 'vodka'){
			client.commands.get('vodka').execute(message, args);
		}
		if(command === 'peharc'){
			client.commands.get('peharc').execute(message, args);
		}
		if (command === 'pálinka') {
			client.commands.get('pálinka').execute(message, args);
		}
		if (command === 'autista') {
			client.commands.get('autista').execute(message, args);
		}
	    if (command === 'bor') {
			client.commands.get('bor').execute(message, args);
	    } else
		if (command === 'tanarur') {
			client.commands.get('tanarur').execute(message, args);
		} else
		if (command === 'ping') {
			client.commands.get('ping').execute(message, args);
		}
	}
});

client.login('BotToken');
