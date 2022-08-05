const { getFilesFromFolder } = require('../utils/filesUtil')
const { logger } = require('../lib/logger')
const { Collection } = require('discord.js')

function noSlashCommandLogin(client) {
    client.noslashcommand = new Collection();
    const commands = getFilesFromFolder('./src/NoSlashCommands', ".js");

    for (const command of commands) {
        const object = require(`../../${command}`);

        if (!object.name) { continue; }

        for (const alias of object.name) {
             client.noslashcommand.set(alias, object)
        }
    }

    logger.succes("Register " + commands.length + " no slash command")
}

module.exports = {
    noSlashCommandLogin
}