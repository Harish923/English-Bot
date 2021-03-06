const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = async function say(msg, args) {
    const embed = new Discord.MessageEmbed(msg);
    if(args.length > 0) {
        try {
            let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${args[0]}`;
            let response = await fetch(url);
            let json = await response.json();

            global.voiceChannel = msg.member.voice.channel;
            
            if(global.voiceChannel){
                global.voiceChannel.join().then(connection =>{
                    if(json[0].phonetics[0].audio)
                        connection.play(json[0].phonetics[0].audio);

                }).catch(err=>{
                    embed
                    .setColor('#003366')
                    .setDescription('Results not found!');
                    msg.channel.send(embed);
                    
                });        
                
            }else{
                embed
                .setColor('#003366')
                .setDescription('join any voice channel first!');
                msg.channel.send(embed);
            }
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

