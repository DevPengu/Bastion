/*
 * Copyright (C) 2017 Sankarsan Kampa
 *                    https://sankarsankampa.com/contact
 *
 * This file is a part of Bastion Discord BOT.
 *                        https://github.com/snkrsnkampa/Bastion
 *
 * This code is licensed under the SNKRSN Shared License. It is free to
 * download, copy, compile, use, study and refer under the terms of the
 * SNKRSN Shared License. You can modify the code only for personal or
 * internal use only. However, you can not redistribute the code without
 * explicitly getting permission fot it.
 *
 * Bastion BOT is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY. See the SNKRSN Shared License for
 * more details.
 *
 * You should have received a copy of the SNKRSN Shared License along
 * with this program. If not, see <https://github.com/snkrsnkampa/Bastion/LICENSE>.
 */

const sql = require('sqlite');
sql.open('./data/Bastion.sqlite');

exports.run = function(Bastion, message, args) {
  if (Bastion.credentials.ownerId.indexOf(message.author.id) > -1) {
    voiceChannel = message.member.voiceChannel;
    if (!voiceChannel || voiceChannel.type !== 'voice') return message.channel.sendMessage('', {embed: {
      color: 13380644,
      description: `I can't join your voice channel <@${message.author.id}>.`
    }});
    if (voiceChannel.joinable) voiceChannel.join().then(connection => {
      message.guild.members.get(Bastion.user.id).setDeaf(true);
      if (!voiceChannel.speakable) {
        voiceChannel.leave();
        message.channel.sendMessage('', {embed: {
          color: 13380644,
          description: 'I don\'t have permissions to speak in this channel.'
        }});
      }
    });
  }
  else {
    sql.get(`SELECT musicTextChannelID, musicVoiceChannelID FROM guildSettings WHERE guildID=${message.guild.id}`).then(musicChannel => {
      if (musicChannel.musicTextChannelID != message.channel.id) return;
      if (!musicChannel.musicVoiceChannelID) return message.channel.sendMessage('', {embed: {
        color: 13380644,
        description: 'No default music channel has been set. So, only the bot owner can use this command.'
      }});
      if (!(voiceChannel = message.guild.channels.filter(c => c.type == 'voice').get(musicChannel.musicVoiceChannelID))) return message.channel.sendMessage('', {embed: {
        color: 13380644,
        description: `I can't join your voice channel <@${message.author.id}>.`
      }});
      if (voiceChannel.joinable) voiceChannel.join().then(connection => {
        message.guild.members.get(Bastion.user.id).setDeaf(true);
        if (!voiceChannel.speakable) {
          voiceChannel.leave();
          message.channel.sendMessage('', {embed: {
            color: 13380644,
            description: 'I don\'t have permissions to speak in this channel.'
          }});
        }
      });
    });
  }
  message.delete();
};

exports.conf = {
  aliases: ['join']
};

exports.help = {
  name: 'summon',
  description: 'Tells the BOT to join the default voice channel (if any), set by the BOT owner. Doesn\'t apply to BOT owner.',
  permission: '',
  usage: ['summon']
};