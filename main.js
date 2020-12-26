const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client						//Initiate client

const prefix = '';								//Sets command prefix

client.commands = new Discord.Collection();					//Initiate bot commands

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));	//Gekky stuff reads in command files

for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));			//Function for random numbers
}

client.once('ready', () => {
	console.log('Pehartz bot is online!');					//Debug
	client.user.setActivity('Kell segítség? -help');			//Sets bot status
});

client.on('message', message => {						//Activates if it gets a message
	if(!message.content.startsWith(prefix) || message.author.bot) return;	//Cheks if the message is a command, and it is not from itself
	
	const args = message.content.slice(prefix.length).split(/ +/);		//Cuts down the prefix
	const command = args.shift().toLowerCase();				//Transforms command to lowercase
	console.log(command);							//Some debug
	rand = getRandomInt(100);						//Random shouting
	if(rand === 2){
		message.channel.send('Egyes!!!');
	} else{
		if(command === 'help'){						//Cheks for commands
			client.commands.get('help').execute(message, args);
		} else
		if(command === 'sör'){
			client.commands.get('sor').execute(message, args);
		} else
		if(command === 'vodka'){
			client.commands.get('vodka').execute(message, args);
		} else
		if(command === 'peharc'){
			client.commands.get('peharc').execute(message, args);
		} else
		if (command === 'pálinka') {
			client.commands.get('pálinka').execute(message, args);
		} else
		if (command === 'autista') {
			client.commands.get('autista').execute(message, args);
		} else
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

client.login('YourBotToken');							//Logs in with bot token
