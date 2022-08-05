const Discord = require('discord.js')

function registerSlash(commands) {
    commands?.create({
        name: "ping",
        description: "ping pong",
        options: [
            {
                name: 'args',
                description: 'what?',
                required: false,
                type: Discord.Constants.ApplicationCommandOptionTypes.STRING
            }
        ]
    })
}

module.exports = {
    registerSlash
}