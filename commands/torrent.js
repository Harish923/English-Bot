const TorrentSearchApi = require('torrent-search-api');
const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = async function torrent(msg, args) {
    const embed = new Discord.MessageEmbed(msg);
    if(args.length > 0) {
        TorrentSearchApi.enableProvider('Yts');

        // Search '1080' in 'Movies' category and limit to 20 results
        const torrents = await TorrentSearchApi.search(args.join(" "));
        // console.log(torrents);

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

                let response = await fetch('http://mgnet.me/api/create/?m=magnet:?xt=urn:btih:'+arr[arr.length - 1]+'&tr=udp://open.demonii.com:1337/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://p4p.arenabg.com:1337&tr=udp://tracker.leechers-paradise.org:6969');
                let json = await response.json();
                
                text += json.shorturl+'\n';
            }
        }else if(torrents.length > 0){
            for (i = 0; i < torrents.length; i++) {
                text += 'Title : '+torrents[i].title + '\nSize : '+torrents[i].size+'\nLink : ';
                
                let link = torrents[i].link;
                let arr = link.split('/');

                let response = await fetch('http://mgnet.me/api/create/?m=magnet:?xt=urn:btih:'+arr[arr.length - 1]+'&tr=udp://open.demonii.com:1337/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://p4p.arenabg.com:1337&tr=udp://tracker.leechers-paradise.org:6969');
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