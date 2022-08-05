const { noSlashCommandPrefix } = require('../../src/index')

module.exports = {
    name: 'messageCreate',
    async execute(client, message) {
        if (message.author.bot) return;
        if (!message.content.startsWith(noSlashCommandPrefix)) return;

        const args = message.content.slice(noSlashCommandPrefix.length).split(" ");

        if (!client.noslashcommand.has(args[0])) return;

        const command = client.noslashcommand.get(args[0]);
        try {
            command.execute(client, message, args)
        } catch (e) {

        }
    }
}