const Discord = require('discord.js');

module.exports = function(msg, args) {
    const embed = new Discord.MessageEmbed(msg)
    .setTitle('English Bot Help')
    .setColor('#9933ff')
    .setDescription(`!meaning [word]: returns meaning of word\n
                    !say [word]: says the word in the voice channel you joined\n
                    !allabout [word]: returns meaning and part of speech of the word`);
    
    msg.channel.send(embed);
}