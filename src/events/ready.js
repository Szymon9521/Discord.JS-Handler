const { botStatusList, botStatusRefresh } = require('../../src/index');
const { registerSlash } = require('../registerSlash');

module.exports = {
    name: 'ready',
    async execute(client) {
        var i = 0
        setInterval(() => {
            client.user.setActivity(botStatusList[i], { type: 'WATCHING' });
            i++

            if (i == botStatusList.length)
                i = 0;
        }, botStatusRefresh * 1000);


        let commands = client.application?.commands
        registerSlash(commands)
    }
}