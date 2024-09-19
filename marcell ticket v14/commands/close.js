// commands/close.js
module.exports = {
    name: 'close',
    description: 'Açık olan ticketı kapatır.',
    async execute(message, args) {
        if (message.channel.name.startsWith('ticket-')) {
            await message.channel.send('Ticket kapatılıyor...');
            setTimeout(() => message.channel.delete(), 3000); // 3 saniye bekle ve kanalı sil
        } else {
            message.reply('Bu komutu sadece ticket kanallarında kullanabilirsiniz.');
        }
    },
};
