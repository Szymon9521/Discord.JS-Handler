const { getFilesFromFolder } = require('../utils/filesUtil')
const { logger } = require('../lib/logger')

function slashCommandLogin(client) {
    const slashs = getFilesFromFolder('./src/slash', ".js");

    for (const slash of slashs) {
        const object = require(`../../${slash}`);

        if (!object.name || !object.description) { continue; }

        client.on('interactionCreate', (interaction) => {
            object.execute(client, interaction)
        })
    }

    logger.succes("Register " + slashs.length + " slash command")
}

module.exports = {
    slashCommandLogin
}