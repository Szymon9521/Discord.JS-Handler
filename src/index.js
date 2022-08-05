const { Client, Intents } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const dotenv = require('dotenv');
dotenv.config();

const { eventsLogin } = require('../addons/handlers/eventsLogin');
const { noSlashCommandLogin } = require('../addons/handlers/noSlashCommandLogin');
const { slashCommandLogin } = require('../addons/handlers/slashCommandLogin');

const noSlashCommandPrefix = "?";
const botToken = "ODQxNjc5MTA4ODc4MzY4ODQ4.G9O0BU.faHWUEzTDxS1GNQpPYuRcAWNvoyLi9m2-KCzfs";
const botStatusRefresh = "3"; // SEKUNDY
const botStatusList = [
    'Status 1',
    'Status 2',
    'Status 3',
    'Status 4'
];

module.exports = {
    noSlashCommandPrefix,
    botStatusRefresh,
    botStatusList
}

eventsLogin(client);
noSlashCommandLogin(client);
slashCommandLogin(client);

client.login(botToken)
