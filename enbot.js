// require the *.js modules
const Discord = require('discord.js');
const { prefix, token } = require('./config.js');

// create a new Discord client
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

    if (message.content === 'ping') {
       message.reply('pong');
    }
});

1;