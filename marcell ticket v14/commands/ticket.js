// commands/ticket.js
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'ticket',
    description: 'Yeni bir ticket oluşturur.',
    async execute(message, args) {
        const channel = await message.guild.channels.create({
            name: `ticket-${message.author.username}`,
            type: 0, // GUILD_TEXT
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['ViewChannel'],
                },
                {
                    id: message.author.id,
                    allow: ['ViewChannel'],
                },
                {
                    id: 'YOUR_SUPPORT_ROLE_ID', // Destek rolü ID'si
                    allow: ['ViewChannel'],
                },
            ],
        });

        await channel.send({
            content: `Merhaba ${message.author.username}, biletiniz açıldı. Burada destek alabilirsiniz.`,
            components: [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId('close_ticket')
                        .setLabel('Bileti Kapat')
                        .setStyle(ButtonStyle.Danger),
                ),
            ],
        });

        message.reply(`Ticket oluşturuldu: ${channel}`);
    },
};
