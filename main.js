const Discord = require('discord.js');
const {google} = require('googleapis');
const sheets = google.sheets('v4');
const keys = require('./keys.json');

const client = new google.auth.JWT(
	keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);


client.authorize(function (err, tokens) {

    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Connected to google api!');
        gsrun(client);
    }

});


async function gsrun(cl) {

    const gsapi = google.sheets({ verion:'v4', auth: cl });

    var updateOptions = {
        "spreadsheetId" : '1b06wG8Gejoj6C8O4jTJ32Kz9upDf0boLTqtBxjIYMN4',
        "range" : 'A1',
        "valueInputOption": 'USER_ENTERED',
        "resource": {
        "values": [
          [
            "app"
          ]
        ]
      }
    };

    this.gsapi.spreadsheets.values.append(updateOptions, (err, result) => {
		if (err) {
			// Handle error
			console.log(err);
		} else {
			console.log('%d cells updated.', result.updatedCells);
		}
	});
	return;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const dcclient = new Discord.Client

const prefix = '';

dcclient.once('ready', () => {
	console.log('Pehartz bot is online!');
	dcclient.user.setActivity('Kell segítség? -help');
});

dcclient.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	console.log(command);
	rand = getRandomInt(100);
	if(rand === 2){
		message.channel.send('Egyes!!!');
	} else{
	if(command === 'help'){
		message.channel.send('-help : Parancsok. \n-beer : Sör. \nPeharc bot is WIP');
	}
	if(command === 'sör'){
		message.channel.send(':beer:');
	}
	if(command === 'vodka'){
		message.channel.send('Nincs vodka, csak sör!');
	}
	if(command === 'peharc'){
		message.channel.send(':jambusos:');
    }
    if (command === 'pálinka') {
        message.channel.send('Pálinka meg főleg nincs!');
        message.channel.send('Csak a sörre van affinitás. :beer:');
    }
	if(command === 'approvehf'){
        message.channel.send('Approved!');
        gsrun(client);
    }
    if (command === 'autista') {
        message.channel.send('Én is autista vagyok!');
    }
    if (command === 'bor') {
        message.channel.send(':beer: : Engem már senki se szeret!');
    }
	if (command === 'tanarur'){
		message.channel.send('Egyes!!!');
	}
	}
});

dcclient.login('YourBotToken');
