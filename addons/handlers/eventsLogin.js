const { getFilesFromFolder } = require('../utils/filesUtil')
const { logger } = require('../lib/logger')

function eventsLogin(client) {
    const object = require(`../utils/noSlashCommandExecute`);
    client.on(object.name, (...args) => {
        object.execute(client, ...args)
    })

    const events = getFilesFromFolder('./src/events', ".js");

    for (const event of events) {
        const object = require(`../../${event}`);

        if (!object.name) { continue; }

        client.on(object.name, (...args) => {
            object.execute(client, ...args)
        })
    }

    logger.succes("Register " + events.length + " events")
}

module.exports = {
    eventsLogin
}