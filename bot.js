const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot gotowy do pracy!');
});

client.on('message', message => {
    if (message.content === 'komenda') {
    	message.channel.send('Wiadomość zwrotna');
  	}
});
// WYMAGANE DO PRAWIDŁOWEGO DZIAŁANIA BOTA. NIE EDYTOWAĆ!
client.login(process.env.BOT_TOKEN);
