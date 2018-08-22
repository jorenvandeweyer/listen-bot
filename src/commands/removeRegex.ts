import { Message } from "discord.js";

const cache = require("../utils/cache");

module.exports = {
    name: "removeregex",
    guildOnly: true,
    usage: "[word]",
    args: 1,
    vote: true,
    async execute (msg: Message) {
        const guild = msg.guild.id;
        const user = msg.author.id;
        const keyword = msg.command.params.join(" ").toLowerCase();

        let result = await cache.delTrigger(guild, user, keyword, true);

        if (result.deleted) {
            await msg.channel.send(`Removed the RegExp **${keyword}** succesfully`);
        } else {
            await msg.channel.send(`The RegExp **${keyword}** is not on your trigger list`);
        }
    }
};