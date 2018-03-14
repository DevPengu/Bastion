/**
 * @file models
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

const { prefix } = require('../settings/config.json');

module.exports = (Sequelize, database) => {
  // Models
  database.define('settings', {
    botID: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    blacklistedGuilds: {
      type: Sequelize.TEXT
    },
    blacklistedUsers: {
      type: Sequelize.TEXT
    }
  });

  const Guild = database.define('guild', {
    guildID: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    prefix: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: prefix || '!'
    },
    language: {
      type: Sequelize.STRING,
      defaultValue: 'en'
    },
    greet: {
      type: Sequelize.STRING
    },
    greetMessage: {
      type: Sequelize.BLOB
    },
    greetTimeout: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    greetPrivate: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    greetPrivateMessage: {
      type: Sequelize.BLOB
    },
    farewell: {
      type: Sequelize.STRING
    },
    farewellMessage: {
      type: Sequelize.BLOB
    },
    farewellTimeout: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    music: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    chat: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    levelUps: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    levelUpMessages: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    musicTextChannels: {
      type: Sequelize.STRING,
      unique: true
    },
    musicVoiceChannel: {
      type: Sequelize.STRING,
      unique: true
    },
    musicMasterRole: {
      type: Sequelize.STRING,
      unique: true
    },
    autoAssignableRoles: {
      type: Sequelize.TEXT,
      unique: true
    },
    selfAssignableRoles: {
      type: Sequelize.TEXT,
      unique: true
    },
    streamerRole: {
      type: Sequelize.STRING,
      unique: true
    },
    filterInvites: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    filterLinks: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    filterMentions: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    filterWords: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    filteredWords: {
      type: Sequelize.TEXT
    },
    slowMode: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    mentionSpamThreshold: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    mentionSpamAction: {
      type: Sequelize.STRING
    },
    warnThreshold: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    warnAction: {
      type: Sequelize.STRING
    },
    serverLog: {
      type: Sequelize.STRING,
      unique: true
    },
    moderationLog: {
      type: Sequelize.STRING,
      unique: true
    },
    moderationCaseNo: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 1
    },
    starboard: {
      type: Sequelize.STRING,
      unique: true
    },
    announcementChannel: {
      type: Sequelize.STRING,
      unique: true
    },
    reportChannel: {
      type: Sequelize.STRING
    },
    suggestionChannel: {
      type: Sequelize.STRING
    },
    disabledCommands: {
      type: Sequelize.TEXT
    },
    onlyMembersWithRoles: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    autoDeleteCommandOutput: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  const GuildMember = database.define('guildMember', {
    userID: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: 'guildMember'
    },
    guildID: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: 'guildMember'
    },
    bastionCurrencies: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: '0'
    },
    experiencePoints: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: '0'
    },
    level: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: '0'
    },
    reputations: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: '0'
    },
    bio: {
      type: Sequelize.BLOB
    },
    birthDate: {
      type: Sequelize.DATEONLY
    },
    location: {
      type: Sequelize.STRING
    },
    blacklist: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  const TextChannel = database.define('textChannel', {
    channelID: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      unique: 'guildTextChannel'
    },
    guildID: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: 'guildTextChannel'
    },
    votingChannel: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ignoreInviteFilter: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ignoreLinkFilter: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ignoreMentionFilter: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ignoreWordFilter: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ignoreSlowMode: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ignoreStarboard: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    disabledCommands: {
      type: Sequelize.TEXT
    },
    blacklist: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  const Role = database.define('role', {
    roleID: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      unique: 'role'
    },
    guildID: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: 'role'
    },
    ignoreInviteFilter: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ignoreLinkFilter: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ignoreMentionFilter: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ignoreWordFilter: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ignoreSlowMode: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    disabledCommands: {
      type: Sequelize.TEXT
    },
    level: {
      type: Sequelize.STRING
    },
    blacklist: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  const ModerationCase = database.define('moderationCase', {
    guildID: {
      type: Sequelize.STRING,
      allowNull: false
    },
    number: {
      type: Sequelize.STRING,
      allowNull: false
    },
    messageID: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true
    }
  });

  const Trigger = database.define('trigger', {
    guildID: {
      type: Sequelize.STRING,
      allowNull: false
    },
    trigger: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    response: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  });

  const ScheduledCommand = database.define('scheduledCommand', {
    guildID: {
      type: Sequelize.STRING,
      allowNull: false
    },
    channelID: {
      type: Sequelize.STRING,
      allowNull: false
    },
    messageID: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cronExp: {
      type: Sequelize.STRING,
      allowNull: false
    },
    command: {
      type: Sequelize.STRING,
      allowNull: false
    },
    arguments: {
      type: Sequelize.TEXT
    }
  });

  const Shop = database.define('shop', {
    guildID: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    roles: {
      type: Sequelize.TEXT
    },
    custom: {
      type: Sequelize.TEXT
    }
  });

  const Streamers = database.define('streamers', {
    guildID: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    channelID: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    mixer: {
      type: Sequelize.TEXT
    },
    twitch: {
      type: Sequelize.TEXT
    },
    youtube: {
      type: Sequelize.TEXT
    }
  });

  const Transaction = database.define('transaction', {
    userID: {
      type: Sequelize.STRING,
      allowNull: false
    },
    guildID: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    amount: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    note: {
      type: Sequelize.TEXT
    }
  });

  const Items = database.define('items', {
    userID: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: 'guildMember'
    },
    guildID: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: 'guildMember'
    },
    custom: {
      type: Sequelize.TEXT
    }
  });

  // Associations
  Guild.Items = Guild.hasMany(Items, {
    foreignKey: 'guildID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Guild.ModerationCases = Guild.hasMany(ModerationCase, {
    foreignKey: 'guildID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Guild.Roles = Guild.hasMany(Role, {
    foreignKey: 'guildID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Guild.ScheduledCommands = Guild.hasMany(ScheduledCommand, {
    foreignKey: 'guildID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Guild.Shop = Guild.hasOne(Shop, {
    foreignKey: 'guildID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Guild.Streamers = Guild.hasOne(Streamers, {
    foreignKey: 'guildID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Guild.TextChannels = Guild.hasMany(TextChannel, {
    foreignKey: 'guildID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Guild.Transactions = Guild.hasMany(Transaction, {
    foreignKey: 'guildID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Guild.Triggers = Guild.hasMany(Trigger, {
    foreignKey: 'guildID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  GuildMember.Items = GuildMember.hasMany(Items, {
    foreignKey: 'userID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  GuildMember.Transactions = GuildMember.hasMany(Transaction, {
    foreignKey: 'userID',
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE'
  });

  // Save (sync) models to database.
  database.sync();

  // Return models
  return database.models;
};
