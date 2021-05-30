const Discord = require('discord.js');

module.exports = function(msg, args) {
    const embed = new Discord.MessageEmbed(msg)
    .setTitle('English Bot Help')
    .setColor('#9933ff')
    .setDescription('I was build to help you pronounce words, find their meaning, part of speech.\n!meaning [word]: returns meaning of word\n!say [word]: says the word in the voice channel you joined\n!allabout [word]: returns meaning and part of speech of the word\n!disconnect: to disconnect bot from a voice channel');
    
    msg.channel.send(embed);

    const embed2 = new Discord.MessageEmbed(msg)
    .setColor('#9933ff')
    .setDescription('Don\'t tell anyone!!, I can also help you find torrent for your favourite movies.\n!torrent [movie name]');
    
    msg.channel.send(embed2);
}