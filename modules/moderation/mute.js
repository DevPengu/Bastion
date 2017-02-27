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

exports.run = function(Bastion, message, args) {
  if (!message.guild.members.get(message.author.id).hasPermission("MUTE_MEMBERS")) return Bastion.log.info('You don\'t have permissions to use this command.');

  if (!(user = message.mentions.users.first())) return;
  if (!message.guild.available) return Bastion.log.info(`${message.guild.name} Guild is not available. It generally indicates a server outage.`);

  message.guild.members.get(user.id).setMute(true).then(() => {
    message.channel.sendMessage('', {embed: {
      color: 15451167,
      title: 'Muted',
      fields: [
        {
          name: 'User',
          value: `**${user.username}**#${user.discriminator}`,
          inline: true
        },
        {
          name: 'ID',
          value: user.id,
          inline: true
        },
        {
          name: 'Reason',
          value: reason.length < 1 ? reason = 'No reason given' : args.slice(1).join(' '),
          inline: false
        }
      ]
    }});
  }).catch(e => {
    Bastion.log.error(e.stack);
  });
};

exports.conf = {
  aliases: ['m']
};

exports.help = {
  name: 'mute',
  description: 'Mutes a mentioned user with an optional reason.',
  permission: 'Mute Members',
  usage: ['mute @user#0001 Reason for the mute.']
};