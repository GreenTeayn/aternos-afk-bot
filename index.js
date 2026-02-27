const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'YOUR_SERVER_IP', // without port (ex: lifechorsmp100.aternos.me)
  port: 12679, // Default Minecraft port
  username: 'AFK_Bot' // Bot username
});

bot.on('spawn', () => {
  console.log('Bot has spawned and is now AFK!');
  // Simple AFK movement loop
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 500);
  }, 1000); // Every 10 sec jump
});

bot.on('error', err => console.log('Error:', err));
bot.on('end', () => console.log('Bot disconnected'));
