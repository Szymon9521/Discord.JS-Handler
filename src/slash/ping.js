const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ping",
    description: "ping pong",
    async execute(client, integration) {
        let embed = new MessageEmbed()
        .setTitle("🏓 Pong")
        .setDescription(client.ws.ping + "ms")
        integration.reply({ embeds: [embed]})
    }
}