const meaning = require('./commands/meaning.js');
const say = require('./commands/say.js');
const allabout = require('./commands/allabout.js');
const help = require('./commands/help.js');
const disconnect = require('./commands/disconnect.js');
const torrent = require('./commands/torrent.js');

const commands = { meaning, say, allabout, help, disconnect, torrent};

module.exports = async function(msg) {
    let messageTokens = msg.content.split(' ');
    let command = messageTokens.shift();
    if (command.charAt(0) === '!') {
        command = command.substring(1);
        commands[command](msg, messageTokens);
    }
};