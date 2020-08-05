const Discord = require('discord.js')
const moment = require('moment')
const getTitle = require("get-title-at-url")
const ytdl = require('ytdl-core')
const client = new Discord.Client();
const auth = require('./sttoken.json');
const shrine0 = "Katosa Aug: Katosa Aug Apparatus>Ze Kasho: Ze Kasho Apparatus>Ka'am Ya'tak: Trial of Power>Rota Ooh: Passing of the Gates>Wahgo Katta: Metal Connections>Bosh Kala: The Wind Guides You>Ha Dahamar: The Water Guides>Hila Rao: Drifting>Ta'loh Naeg: Ta'loh Naeg's Teaching>Ree Dahee: Timing is Critical>Shee Vaneer: Twin Memories>Shee Venath: Twin Memories>Toto Sah: Toto Sah Apparatus"
const shrine1 = ">Daqa Koh: Stalled Flight>Kayra Mah: Greedy Hill>Mo'a Keet: Metal Makes a Path>Qua Raym: A Balanced Approach>Sah Dahaj: Power of Fire>Shae Mo'sah: Swinging Flames>Shora Hah: Blue Flame>Tah Muhl: Passing the Flame>Kah Yah: Quick Thinking>Shai Utoh: Halt the Tilt>Shoda Sah: Impeccable Timing>Yah Rin: A Weighty Decision>Joloo Nah: Joloo Nah Apparatus>Kuh Takkar: Melting Ice Hazard>Sho Dantu: Two Bombs"
const shrine2 = ">Ja Baij: Bombs Trial> Keh Namut: Cryonis Trial > Oman Au: Magnesis Trial > Owa Daim: Stasis Trial>Dow Na'eh: Three Boxes>Kam Urog: Trial of Passage>Mezza Lo: Ancient Trifecta>Myahm Agana: Myahm Agana Apparatus>Dunba Taag: Build and Release>Gee Ha'rah: Tandem>Maka Rah: Steady thy Heart>Rin Oyaa: Directing the Wind>Rok Uwog: Power of Reach>Sha Ghema: Shift and Lock>Shada Naw: Red Giveaway"
const shrine3 = ">﻿Ishto Soh: Bravery's Grasp>Ka'o Makagh: Metal Doors Open the Way>Ya Naga: Shatter the Heavens>Daka Tuss: Sunken Scoop>Kah Mael: Drop And Rise>Kaya Wan: Shields From Water>Ne'ez Yohma: Pushing Power>Rucco Maag: Five Flames>Sheh Rata: Speed of Light>Mogg Latan: Synced Swing>Shae Loya: Aim For the Moment>Sheem Dagoze: Moving in Parallel>Toh Yahsa: Buried Secrets>Zalta Wa: Two Orbs to Guide You"
const shrine4 = ">Akh Va'quot: Windmills>Bareeda Naag: Cannon>Kah Okeo: Wind Guide>Sha Warvo: Path of Hidden Winds>Voo Lota: The Winding Route>Dako Tah: Electric Path>Daqo Chisay: The Whole Picture>Hawa Koth: The Current Solution>Jee Noh: On the Move>Kay Noh: Power of Electricity>Kema Zoos: A Delayed Puzzle>Keo Ruug: Fateful Stars>Mirro Shaz: Tempered Power>Monya Toma: Drawing Parabolas"
const shrineDLC = ">Etsu Korima: Path of Light>Rohta Chigah: Stop to Start>Ruvo Korbah: A Major Test of Strength +>Yowaka Ita: Collected Soul	>Kamia Omuna: Moving Targets>Rinu Honika: Block the Blaze>Sharo Lun: Blind Spots>Kee Dafunia: The Melting Point>Mah Eliya: Secret Stairway>Sato Koda: Support and Guidance>Kiah Toza: Master the Orb>Noe Rajee: The Four Winds>Shira Gomar: Aim for Stillness>Keive Tala: Big or Small>Kihiroh Moh: Inside the Box>Takama Shiri: Dual Purpose";
//KEEP UPDATING THIS ================================================================================
const cmdlist0 = "%ttrando `%ttrando user1 user2 ...` (Assigns randomized teams for Team Tasks)>%randomshrine (Prints a random shrine; adding `dlc` aftetr `%randomshrine` will include DLC shrines)>%userinfo `%userinfo @user` (Displays info about a user)>%color `%color/%colour red/orange/yellow/green/lightblue/darkblue/purple/none` (Used in #colors, Racer only)"
const cmdlist1 = ">%botinfo (Shows this message)>%botcode (Prints a link to the bot's code file)>Staff members can see and reply to the bots DMs as well>%slots `%slots #` (Spin to win!)>%ytdl `%ytdl youtubeurl` (Downloads a youtube video)>%role `%role taskping/announcementping` (Toggles on and off Task/Announcement pings)"
const cmdlist = cmdlist0 + cmdlist1;
const staffcmdlist = "%dm `%dm @user message` (Used in #bot-commands, DMs a user)>%chat `%chat message` (Makes the bot say stuff)>%react `%react #channel messageid emote` (Reacts to any message)"
//KEEP UPDATING THIS ================================================================================

client.on('ready', () => {

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    client.user.setActivity("Breath of the Wild", {

        type: "STREAMING",
        url: "https://www.twitch.tv/directory/game/The%20Legend%20of%20Zelda%3A%20Breath%20of%20the%20Wild"
    });

    console.log(`Logged in as ${client.user.tag}!`)
    client.on('message', async message => {
        let server = message.guild;
        var splitMessage = message.content.split(' ');
        const {
            attachments,
            content,
            guild
        } = message;

        if (message.content === "%botcode") {
            message.channel.send("https://github.com/PrinceKomali/js-bot-index/blob/master/stbot.js")
        }
        //%ROLE =================================================================================
        if (splitMessage[0] == "%role") {
            if (message.channel.id == "692890692946493490") {
                if (splitMessage[1] == "taskping") {
                    if (message.member.roles.cache.has("719172290058911825")) {
                        message.channel.send("Removed Task Ping role from <@" + message.author.id + ">!")
                        message.member.roles.remove("719172290058911825")
                    }
                    if (!message.member.roles.cache.has("719172290058911825")) {
                        message.channel.send("Added Task Ping role to <@" + message.author.id + ">!")
                        message.member.roles.add("719172290058911825")
                    }
                } else if (splitMessage[1] == "announcementping") {
                    if (message.member.roles.cache.has("737724520743305328")) {
                        message.channel.send("Removed Announcement Ping role from <@" + message.author.id + ">!")
                        message.member.roles.remove("737724520743305328")
                    }
                    if (!message.member.roles.cache.has("737724520743305328")) {
                        message.channel.send("Added Announcement Ping role to <@" + message.author.id + ">!")
                        message.member.roles.add("737724520743305328")
                    }
                } else {
                    message.channel.send("Invalid syntax, available roles are `taskping` and `announcementping`")
                }
            } else {
                message.channel.send("Please use this in <#692890692946493490>")
            }
        }
        //%YTDL ==================================================================================
        if (splitMessage[0] === "%ytdl") {
            try {
                var yttitle;
                const vid = ytdl(splitMessage[1], {
                    filter: format => format.container === 'mp4'
                })
                const info = await ytdl.getInfo(splitMessage[1]);
                const format = ytdl.chooseFormat(info.formats, {
                    quality: 'highest'
                });
                getTitle(splitMessage[1], function(title) {
                    title;

                    const ytembed = {
                        "color": 0xbff7ff,
                        fields: [{
                            name: title,
                            //value: "[" + format.url.replace("https://","").substr(0,30) + "](" + format.url + ")",
                            value: "[" + splitMessage[1] + "](" + format.url + ")",
                        }, ],
                    }
                    message.channel.send({
                        embed: ytembed
                    });
                })
            } catch (e) {
                message.channel.send("An error occured");
                console.log(e)
            }


        }
        //%SLOTS =================================================================================
        if (splitMessage[0] === '%slots') {
            if (message.channel.id == "692405333846655017") {
                var emojis = message.guild.emojis.cache.map(e => e.toString());
                var i;
                var slotStr = "";
                var slotRepeat = splitMessage[1];
                if (isNaN(slotRepeat) || slotRepeat < 2) {
                    slotRepeat = 3;
                }
                if (slotRepeat > 60) {
                    slotRepeat = 60;
                }
                for (i = 0; i < slotRepeat; i++) {
                    slotStr = slotStr + emojis[Math.floor(Math.random() * emojis.length)]
                }
                message.channel.send(slotStr)
                message.channel.send("Please Play Again!");
            } else {
                message.channel.send("Please only use this in <#692405333846655017>!")
            }
        }
        if (splitMessage[0] === "%react") {
            if (message.member.roles.cache.has("691659096759205924") || message.author.id === "454356237614841870") {
                var channel = splitMessage[1].replace(/[<>:#]/gi, "");
                channel = client.channels.cache.get(channel);
                var messageid = splitMessage[2]


                //console.log(emote)
                if (splitMessage[2]) {
                    //if (typeof splitMessage[2] !== "undefined" && splitMessage[2] && splitMessage[2] !== null) {

                    const m = await channel.messages.fetch(messageid)
                    try {
                        var emote = splitMessage[3];
                        emote = emote.replace(/[<>:abcdefghijklmnopqrstuvwxyz]/gi, "")

                        var emotetest = client.emojis.cache.get(splitMessage[2])
                        await m.react(emote);
                        await message.channel.send("Reaction added!")
                    } catch (e) {
                        message.channel.send("Invalid Syntax, please check the command again");
                    }
                } else {
                    message.channel.send("Please provide an emote")
                }
            } else {
                message.channel.send("Insufficient Permissions")
            }
        }



        if (splitMessage[0] === "%randomshrine") {
            var shrines = shrine0 + shrine1 + shrine2 + shrine3 + shrine4;
            if (splitMessage[1] == "dlc") {
                shrines = shrines + shrineDLC;
            }
            try {
                shrines = shrines.split('>')
                message.channel.send(shrines[Math.floor(Math.random() * shrines.length)])
            } catch (e) {
                message.channel.send("Something went wrong :\/")
            }
        }

        //%USERINFO ================================
        if (splitMessage[0] === "%userinfo") {
            //var user = client.users.cache.get(splitMessage[1].replace(/[\\<>@#&!]/g, ""));
            let user = message.mentions.users.first();
            var guilduser = message.guild.member(message.mentions.users.first())
            var userroles;
            if (guilduser.roles.cache.map(r => `${r}`).slice(0).reverse().join(' | ').toString().replace("@everyone | ", "").replace("@everyone", "") == "") {
                userroles = "No Roles"
            } else {
                userroles = guilduser.roles.cache.map(r => `${r}`).slice(0).reverse().join(' | ').toString().replace("@everyone | ", "").replace("@everyone", "")
            }
            //console.log(server.members.fetch(user).roles.cache)
            var userpresence = user.presence.status
            if (userpresence == "online") {
                userpresence = "<:ONLINE:730989151653986316> Online"
            }
            if (userpresence == "idle") {
                userpresence = "<:IDLE:730984100269391892> Idle"
            }
            if (userpresence == "dnd") {
                userpresence = "<:DND:730935210366992504> Do Not Disturb"
            }
            if (userpresence === "offline") {
                userpresence = "<:OFFLINE:730993056689422357> Offline"
            }
            const embed1 = {
                "color": 0xbff7ff,
                "author": {
                    name: user.tag,
                    icon_url: user.avatarURL(),

                },
                fields: [{
                        name: "Joined on:",
                        value: moment.utc(guilduser.joinedAt).format('dddd, MMMM Do YYYY'),
                    },
                    {
                        name: "Account Creation Date:",
                        value: moment.utc(user.createdAt).format('dddd, MMMM Do YYYY'),
                    },
                    {
                        name: 'User ID:',
                        value: user.id,
                    },
                    {
                        name: 'Status:',
                        value: userpresence,
                    },
                    {
                        name: "Roles:",
                        value: userroles,
                    },
                ]
            }
            message.channel.send({
                embed: embed1
            });
        }

        //%BOTINFO ===============================

        if (splitMessage[0] === "%botinfo" || message.content === "%help") {
            if (message.member.roles.cache.has("691659096759205924")) {
                const embed1 = {
                    "color": 0xbff7ff,
                    "author": {
                        name: "Shrine Task Bot",
                        icon_url: client.user.avatarURL(),

                    },
                    fields: [{
                            name: "Info:",
                            value: "A bot made by Komali#1647 and Lior#8947, used in the Shrine Racing/No Major Glitches Individual Levels Server",
                        },
                        {
                            name: "Creation Date:",
                            value: moment.utc(client.user.createdAt).format('dddd, MMMM Do YYYY'),
                        },
                        {
                            name: "Added on:",
                            value: moment.utc(client.user.joinedAt).format('dddd, MMMM Do YYYY'),
                        },
                        {
                            name: 'Bot ID',
                            value: client.user.id,
                        },
                        {
                            name: 'Commands:',
                            value: "• " + cmdlist.replace(/>/g, "\n• "),
                        },
                        {
                            name: 'Staff Commands:',
                            value: "• " + staffcmdlist.replace(/>/g, "\n• "),
                        },

                    ]
                }
                message.channel.send({
                    embed: embed1
                });
            } else {
                const embed1 = {
                    "color": 0xbff7ff,
                    "author": {
                        name: "Shrine Task Bot",
                        icon_url: client.user.avatarURL(),

                    },
                    fields: [{
                            name: "Info:",
                            value: "A bot made by Komali and Lior, used in the Shrine Racing/No Major Glitches Individual Levels Server",
                        },
                        {
                            name: "Creation Date:",
                            value: moment.utc(client.user.createdAt).format('dddd, MMMM Do YYYY'),
                        },
                        {
                            name: "Added on:",
                            value: moment.utc(client.user.joinedAt).format('dddd, MMMM Do YYYY'),
                        },
                        {
                            name: 'Bot ID:',
                            value: client.user.id,
                        },
                        {
                            name: 'Commands:',
                            value: "• " + cmdlist.replace(/>/g, "\n• "),
                        },

                    ]
                }
                message.channel.send({
                    embed: embed1
                });
            }


        }

        //%DM =======================


        if (splitMessage[0] === "%dm") {
            if (message.member.roles.cache.has("691659096759205924")) {
                if (message.channel.id == "729467255141695569") {
                    try {
                        var msg = message.content.split(/ (.+)/)[1]
                        client.users.cache.get(splitMessage[1].replace(/[\\<>@#&!]/g, "")).send(msg.split(/ (.+)/)[1]);
                        message.channel.send("Message Sent!")
                        var submission = "";
                        submission = attachments.size ? {
                            files: attachments.array()
                        } : " "
                        if (message.attachments.size > 0) {
                            client.users.cache.get(splitMessage[1].replace(/[\\<>@#&!]/g, "")).send(submission)
                        }
                    } catch (err) {
                        message.channel.send("Invalid Syntax")
                    }

                } else {
                    message.channel.send("This command can only be used in #bot-commands in the Shine Racing\/NMG IL Sever")
                }
            } else {
                message.channel.send("Insuffient permissions for %dm")
            }
        }


        //BOT DMS ===================================================
        if (message.channel.type === "dm" && message.author.id != "729381032578514982") {
            const eembed = {
                "color": 0xbff7ff,
                "author": {
                    name: (message.author.tag.split("#"))[0],
                    icon_url: message.author.avatarURL(),

                },
                "header": {
                    "text": "test"
                },
                "description": message.content,
                "footer": {
                    "text": message.author.tag + ", " + message.author.id,
                }

            }

            client.channels.cache.get('729684250651000972').send({
                embed: eembed
            });


            var submission = "";
            submission = attachments.size ? {
                files: attachments.array()
            } : " "
            if (message.attachments.size > 0) {
                client.channels.cache.get('729684250651000972').send(submission)
            }

        }

        //%CHAT ============================================

        if (splitMessage[0] === "%chat") {

            if (message.member.roles.cache.has("691659096759205924") || message.author.id === "454356237614841870" || message.author.id === "327879060443234314") {
                if (splitMessage.length > 1) {
                    message.channel.send(message.content.split(/ (.+)/)[1])
                    message.delete();
                }
            } else {
                message.author.send("Insufficent Permissions for %chat")
            }
        }

        //%ttrando =============================

        if (splitMessage[0] == "%ttrando") {

            var users = message.content.split(/ (.+)/)[1].split(" ")
            shuffle(users)
            var size = 2;
            var splitusers = [];
            for (var i = 0; i < users.length; i += size) {
                splitusers.push(users.slice(i, i + size));
            }
            var iuser;
            var endstr = "";
            for (i = 0; i < splitusers.length; i++) {
                iuser = splitusers[i]
                endstr += "**Team " + (i + 1) + ":** " + iuser.toString().replace(',', " and ") + "\n"
            }
            message.channel.send(endstr)
        }



        //%COLOR ====================================================

        if (splitMessage[0] == "%color" || splitMessage[0] == "%colour") {
            if (message.channel.id == "692890692946493490") {
                //LIOR ====================================
                if (message.author.id === "454356237614841870") {
                    try {
                        liorrole = message.guild.roles.cache.get("729467412994457656")
                        liorrole.setColor(splitMessage[1])
                        message.channel.send("Color updated for <@" + message.author.id + ">!")
                    } catch (e) {
                        message.channel.send("Invalid Syntax")
                        console.log(e)
                    }
                }
                //EVERYONE ELSE ===================================
                else {
                    var colors = ["red", "orange", "yellow", "green", "lightblue", "darkblue", "purple"]


                    if ((!message.member.roles.cache.has("691659542244622356"))) {
                        message.channel.send("You have to compete in a task if you want a color! ")
                        return
                    }
                    if (message.content === "%color blue") {
                        message.channel.send("Please use `!color darkblue` or `color lightblue`")
                    }
                    if (message.content === "%color none") {
                        for (i = 0; i < colors.length; i++) {
                            colorcycle = colors[i]

                            cycleid = message.guild.roles.cache.find(x => x.name.toLowerCase() == colorcycle)
                            if (message.member.roles.cache.has(cycleid.id)) {
                                message.member.roles.remove(cycleid.id)
                                message.channel.send("Removed color from <@" + message.author.id + ">!")
                            }

                        }
                    } else {

                        if (colors.includes(splitMessage[1])) {
                            var colorrole = message.guild.roles.cache.find(x => x.name.toLowerCase() == splitMessage[1])
                            if (message.member.roles.cache.has(colorrole.id)) {
                                message.channel.send("You already have that color!")
                            } else {
                                var i;
                                var colorcycle;
                                var cycleid;
                                for (i = 0; i < colors.length; i++) {
                                    colorcycle = colors[i]

                                    cycleid = message.guild.roles.cache.find(x => x.name.toLowerCase() == colorcycle)
                                    if (message.member.roles.cache.has(cycleid.id)) {
                                        message.member.roles.remove(cycleid.id)
                                    }
                                }


                                message.member.roles.add(colorrole)

                                message.channel.send("Assigned " + splitMessage[1] + " color to <@" + message.author.id + ">!")

                            }
                        } else if (splitMessage[1] !== "list") {
                            message.channel.send("Invalid color; do `%color list`")
                        } else {
                            message.channel.send("```Colors Available:\nRed\nOrange\nYellow\nGreen\nLightBlue\nDarkBlue\nPurple\n\nAlternatively you can do %color none ```")
                        }
                    }
                }
            } else {
                message.channel.send("This command only works in <#692890692946493490>!")
            }

        }
    });
});
client.login(auth.token);
