const Discord = require("discord.js")
const prefix = "!";

module.exports = async(client, message) =>{

    if(message.author.bot) return; 
    if(message.Channel.type === "dm") return;

    if(!message.content.startwith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split (/ +/g);
    const commande = args.shift();

    const cmb = client.commands.get(commande);
    if(!cmb) return;
    cmd.run(client, message, args);
};