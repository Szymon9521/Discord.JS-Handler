const { MessageEmbed } = require("discord.js");

module.exports = {
    name: ["avatar", "profile"],
    async execute(client, message, args) {
        let embed = new MessageEmbed()
        .setTitle("Avatar " + message.author.username)
        .setImage(message.author.displayAvatarURL())

        message.channel.send({ embeds: [embed]})
    }            
}