const client = require("../client");

//const Client = require("discord.js");
//const client = new Client.Client;

var boss = "";

function reminder30(){
    client.channels.get(process.env.BDOWorldBossChannel).send(client.guilds.get(process.env.TFKGuild).roles.get(process.env.BossTimerRole)+", "+boss+" will spawn in 30 minutes!");
}

function reminder15(){
    client.channels.get(process.env.BDOWorldBossChannel).send(client.guilds.get(process.env.TFKGuild).roles.get(process.env.BossTimerRole)+", "+boss+" will spawn in 15 minutes!");
}

function reminder0(){
    client.channels.get(process.env.BDOWorldBossChannel).send(client.guilds.get(process.env.TFKGuild).roles.get(process.env.BossTimerRole)+", "+boss+" has spawned!");
}

function setReminders(WorldBoss){
    boss = WorldBoss
    console.log("Yes! "+boss+" will spawn in 30 minutes!");
    reminder30();
    setTimeout(reminder15,900000);
    setTimeout(reminder0,1800000);
}

function checkSpawn(){
    var currentDate = new Date();
    console.log(currentDate.toUTCString()+ ", is there any spawns?");
    var currentDay = currentDate.getUTCDay(); //SUNDAY IS FUCKING 0 AND SATURDAY IS A FUCKING 6
    var currentHour = currentDate.getUTCHours();
    var currentMinutes = currentDate.getUTCMinutes();

    //Monday
    if(currentMinutes==45&&currentHour==21&&currentDay==0){
        setReminders("Kutum");
    }
    if(currentMinutes==30&&currentHour==23&&currentDay==0){
        setReminders("Karanda");
    }
    if(currentMinutes==30&&currentHour==02&&currentDay==1){
        setReminders("Kzarka");
    }
    if(currentMinutes==30&&currentHour==06&&currentDay==1){
        setReminders("Kzarka");
    }
    if(currentMinutes==30&&currentHour==09&&currentDay==1){
        setReminders("Nouver");
    }
    if(currentMinutes==30&&currentHour==13&&currentDay==1){
        setReminders("Kutum");
    }
    if(currentMinutes==30&&currentHour==16&&currentDay==1){
        setReminders("Nouver");
    }
    if(currentMinutes==45&&currentHour==19&&currentDay==1){
        setReminders("Kzarka");
    }
    //Tuesday
    if(currentMinutes==45&&currentHour==21&&currentDay==1){
        setReminders("Karanda");
    }
    if(currentMinutes==30&&currentHour==23&&currentDay==1){
        setReminders("Kutum");
    }
    if(currentMinutes==30&&currentHour==02&&currentDay==2){
        setReminders("Kzarka");
    }
    if(currentMinutes==30&&currentHour==06&&currentDay==2){
        setReminders("Kutum");
    }
    if(currentMinutes==30&&currentHour==09&&currentDay==2){
        setReminders("Offin");
    }
    if(currentMinutes==30&&currentHour==13&&currentDay==2){
        setReminders("Nouver");
    }
    if(currentMinutes==30&&currentHour==16&&currentDay==2){
        setReminders("Karanda");
    }
    if(currentMinutes==45&&currentHour==19&&currentDay==2){
        setReminders("Nouver & Kzarka");
    }
    //Wednesday
    if(currentMinutes==45&&currentHour==21&&currentDay==2){
        setReminders("Kutum");
    }
    if(currentMinutes==30&&currentHour==23&&currentDay==2){
        setReminders("Karanda");
    }
    if(currentMinutes==30&&currentHour==02&&currentDay==3){
        setReminders("Kzarka");
    }
    if(currentMinutes==30&&currentHour==06&&currentDay==3){
        setReminders("Karanda");
    }
    /*
        No boss during this perriod because of maintenance :3
    */
    if(currentMinutes==30&&currentHour==13&&currentDay==3){
        setReminders("Kzarka");
    }
    if(currentMinutes==30&&currentHour==16&&currentDay==3){
        setReminders("Kutum");
    }
    if(currentMinutes==45&&currentHour==19&&currentDay==3){
        setReminders("Karanda & Kzarka");
    }
    //Thursday
    if(currentMinutes==45&&currentHour==21&&currentDay==3){
        setReminders("Nouver");
    }
    if(currentMinutes==30&&currentHour==23&&currentDay==3){
        setReminders("Kutum");
    }
    if(currentMinutes==30&&currentHour==02&&currentDay==4){
        setReminders("Nouver");
    }
    if(currentMinutes==30&&currentHour==06&&currentDay==4){
        setReminders("Kutum");
    }
    if(currentMinutes==30&&currentHour==09&&currentDay==4){
        setReminders("Nouver");
    }
    if(currentMinutes==30&&currentHour==13&&currentDay==4){
        setReminders("Kutum");
    }
    if(currentMinutes==30&&currentHour==16&&currentDay==4){
        setReminders("Offin");
    }
    if(currentMinutes==45&&currentHour==19&&currentDay==4){
        setReminders("Karanda");
    }
    //Friday
    if(currentMinutes==45&&currentHour==21&&currentDay==4){
        setReminders("Kzarka");
    }
    if(currentMinutes==30&&currentHour==23&&currentDay==4){
        setReminders("Nouver");
    }
    if(currentMinutes==30&&currentHour==02&&currentDay==5){
        setReminders("Karanda");
    }
    if(currentMinutes==30&&currentHour==06&&currentDay==5){
        setReminders("Kutum");
    }
    if(currentMinutes==30&&currentHour==09&&currentDay==5){
        setReminders("Karanda");
    }
    if(currentMinutes==30&&currentHour==13&&currentDay==5){
        setReminders("Nouver");
    }
    if(currentMinutes==30&&currentHour==16&&currentDay==5){
        setReminders("Kzarka");
    }
    if(currentMinutes==45&&currentHour==19&&currentDay==5){
        setReminders("Kutum & Kzarka");
    }
    //Saturday
    if(currentMinutes==45&&currentHour==21&&currentDay==5){
        setReminders("Karanda");
    }
    if(currentMinutes==30&&currentHour==23&&currentDay==5){
        setReminders("Offin");
    }
    if(currentMinutes==30&&currentHour==02&&currentDay==6){
        setReminders("Nouver");
    }
    if(currentMinutes==30&&currentHour==06&&currentDay==6){
        setReminders("Kutum");
    }
    if(currentMinutes==30&&currentHour==09&&currentDay==6){
        setReminders("Nouver");
    }
    if(currentMinutes==30&&currentHour==13&&currentDay==6){
        setReminders("Quint/Muraka");
    }
    if(currentMinutes==30&&currentHour==16&&currentDay==6){
        setReminders("Karanda & Kzarka");
    }
    //Sunday
    if(currentMinutes==45&&currentHour==21&&currentDay==6){
        setReminders("Nouver & Kutum");
    }
    if(currentMinutes==30&&currentHour==23&&currentDay==6){
        setReminders("Kzarka");
    }
    if(currentMinutes==30&&currentHour==02&&currentDay==0){
        setReminders("Kutum");
    }
    if(currentMinutes==30&&currentHour==06&&currentDay==0){
        setReminders("Nouver");
    }
    if(currentMinutes==30&&currentHour==09&&currentDay==0){
        setReminders("Kzarka");
    }
    if(currentMinutes==30&&currentHour==13&&currentDay==0){
        setReminders("Vell");
    }
    if(currentMinutes==30&&currentHour==16&&currentDay==0){
        setReminders("Karanda");
    }
    if(currentMinutes==45&&currentHour==19&&currentDay==0){
        setReminders("Nouver & Kzarka");
    }
}
console.log("BDOWorldBossTimers.js is ready to go!");
setInterval(checkSpawn,60000);