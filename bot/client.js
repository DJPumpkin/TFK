const discord = require("discord.js");

const Client = new discord.Client;

Client.login(process.env.TOKEN);

Client.on("ready",()=>{
    Client.user.setActivity("BippediBoppidy",{type: "PLAYING"});
    require("./events/BDOWorldBossTimers");
})

module.exports = Client;