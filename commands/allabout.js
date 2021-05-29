const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = async function(msg, args) {
    
    const embed = new Discord.MessageEmbed(msg);
    if(args.length > 0) {
        try {
            let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${args[0]}`;
            let response = await fetch(url);
            let json = await response.json();

            embed
            .setTitle(args[0])
            .setColor('#66ffff')
            .setDescription('Part of Speech: ' + json[0].meanings[0].partOfSpeech+
                            '\nMeaning: '+json[0].meanings[0].definitions[0].definition);

            msg.channel.send(embed);
        }
        catch(err) {
            embed
            .setColor('#003366')
            .setDescription('Results not found!');
            msg.channel.send(embed);
        }
        
    }else { 
        embed
        .setColor('#003366')
        .setDescription('Enter a word along with command!');
        msg.channel.send(embed);
    }
}