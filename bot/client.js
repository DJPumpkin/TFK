const discord = require("discord.js");

const Client = new discord.Client;

Client.login(process.env.TOKEN);

Client.on("ready",()=>{
    require("./events/BDOWorldBossTimers");
})

module.exports = Client;