/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable strict */
let Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
  token: auth.token,
  autorun: true
});



bot.on('ready', function (evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
  //if you say soup you get soup
  let serverID = bot.channels[channelID].guild_id;
  let soupChannel = '906706816749142067';
  let spheal = '887132686601297930';
  if (message.toLowerCase().includes('soup')) {
    if(serverID.toString()  === spheal){
      bot.sendMessage({
        to: soupChannel,
        message: 'https://youtu.be/FAUnDDTz30k'
      });
    } else {
      bot.sendMessage({
        to: channelID,
        message: 'https://youtu.be/FAUnDDTz30k'
      });
    }
  }
});