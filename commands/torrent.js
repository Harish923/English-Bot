const TorrentSearchApi = require('torrent-search-api');
const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = async function torrent(msg, args) {
    const embed = new Discord.MessageEmbed(msg);
    if(args.length > 0) {
        TorrentSearchApi.enableProvider('Yts');

        // Search '1080' in 'Movies' category and limit to 20 results
        const torrents = await TorrentSearchApi.search(args.join(" "));
        console.log(torrents);

        embed
        .setTitle(args.join(" "))
        .setColor('#ff9900');
        let i;
        let text = "";
        if(torrents.length >= 10){
            for (i = 0; i <10; i++) {
                text += 'Title : '+torrents[i].title + '\nSize : '+torrents[i].size+'\nLink : ';
                
                let link = torrents[i].link;
                let arr = link.split('/');
                
                let response = await fetch('http://mgnet.me/api/create/?m='+arr[arr.length - 1]);
                let json = await response.json();
                
                text += json.shorturl+'\n';
            }
        }else if(torrents.length > 0){
            for (i = 0; i < torrents.length; i++) {
                text += 'Title : '+torrents[i].title + '\nSize : '+torrents[i].size+'\nLink : ';
                
                let response = await fetch('http://mgnet.me/api/create/?m='+torrents[i].magnet);
                let json = await response.json();
                
                text += json.shorturl+'\n';
            }
        }else if(torrents.length == 0){
            text = "No results found!";
        }

        embed
        .setDescription(text);

        msg.channel.send(embed);
    }else{
        embed
        .setColor('#003366')
        .setDescription('Enter a word along with command!');
        msg.channel.send(embed);
    }
}