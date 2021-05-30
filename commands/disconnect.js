const Discord = require('discord.js');

module.exports = function(msg, args) {
    const embed = new Discord.MessageEmbed(msg)
    .setColor('#9933ff');
    
    if(global.voiceChannel){
        global.voiceChannel.leave();
        embed.setDescription('Bye! See you soon.');
        global.voiceChannel = null;
    }else{
        embed.setDescription('I am not connected');
    }
    msg.channel.send(embed);
}