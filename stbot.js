const Discord = require('discord.js')
const client = new Discord.Client();
const moment = require('moment')
const auth = require('./sttoken.json');
const shrine0 = "Katosa Aug: Katosa Aug Apparatus>Ze Kasho:Ze Kasho Apparatus>Ka'am Ya'tak: Trial of Power>Rota Ooh: Passing of the Gates>Wahgo Katta: Metal Connections>Bosh Kala: The Wind Guides You>Ha Dahamar: The Water Guides>Hila Rao: Drifting>Ta'loh Naeg: Ta'loh Naeg's Teaching>Ree Dahee: Timing is Critical>Shee Vaneer: Twin Memories>Shee Venath: Twin Memories>Toto Sah: Toto Sah Apparatus"
const shrine1 = ">Daqa Koh: Stalled Flight>Kayra Mah: Greedy Hill>Mo'a Keet: Metal Makes a Path>Qua Raym: A Balanced Approach>Sah Dahaj: Power of Fire>Shae Mo'sah: Swinging Flames>Shora Hah: Blue Flame>Tah Muhl: Passing the Flame>Kah Yah: Quick Thinking>Shai Utoh: Halt the Tilt>Shoda Sah: Impeccable Timing>Yah Rin: A Weighty Decision>Joloo Nah: Joloo Nah Apparatus>Kuh Takkar: Melting Ice Hazard>Sho Dantu: Two Bombs"
const shrine2 = ">Ja Baij: Bombs Trial> Keh Namut: Cryonis Trial > Oman Au: Magnesis Trial > Owa Daim: Stasis Trial>Dow Na'eh: Three Boxes>Kam Urog: Trial of Passage>Mezza Lo: Ancient Trifecta>Myahm Agana: Myahm Agana Apparatus>Dunba Taag: Build and Release>Gee Ha'rah: Tandem>Maka Rah: Steady thy Heart>Rin Oyaa: Directing the Wind>Rok Uwog: Power of Reach>Sha Ghema: Shift and Lock>Shada Naw: Red Giveaway"
const shrine3 = ">﻿Ishto Soh: Bravery's Grasp>Ka'o Makagh: Metal Doors Open the Way>Ya Naga: Shatter the Heavens>Daka Tuss: Sunken Scoop>Kah Mael: Drop And Rise>Kaya Wan: Shields From Water>Ne'ez Yohma: Pushing Power>Rucco Maag: Five Flames>Sheh Rata: Speed of Light>Mogg Latan: Synced Swing>Shae Loya: Aim For the Moment>Sheem Dagoze: Moving in Parallel>Toh Yahsa: Buried Secrets>Zalta Wa: Two Orbs to Guide You"
const shrine4 = ">Akh Va'quot: Windmills>Bareeda Naag: Cannon>Kah Okeo: Wind Guide>Sha Warvo: Path of Hidden Winds>Voo Lota: The Winding Route>Dako Tah: Electric Path>Daqo Chisay: The Whole Picture>Hawa Koth: The Current Solution>Jee Noh: On the Move>Kay Noh: Power of Electricity>Kema Zoos: A Delayed Puzzle>Keo Ruug: Fateful Stars>Mirro Shaz: Tempered Power>Monya Toma: Drawing Parabolas"
client.on('ready', () => {

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
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
		const { attachments, content, guild } = message;

		if (message.content === "%randomshrine") {
			var shrines = shrine0 + shrine1 + shrine2 + shrine3 + shrine4;
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
				fields: [
					{
						name: "Joined on:",
						value: moment.utc(guilduser.joinedAt).format('dddd, MMMM Do YYYY'),
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
						value: guilduser.roles.cache.map(r => `${r}`).join(' | '),
                    },
					]
			}
			message.channel.send({ embed: embed1 });
		}

		//%BOTINFO ===============================

		if (splitMessage[0] === "%botinfo") {
			
			const embed1 = {
				"color": 0xbff7ff,
				"author": {
					name: "Shrine Task Bot",
					icon_url: client.user.avatarURL(),

				},
				fields: [
					{
						name: "Info:",
						value: "A bot made by Komali and Lior, used in the Shrine Racing/No Major Glitches Individual Levels Server",
					},
					{
						name: "Added on:",
						value: moment.utc(client.user.joinedAt).format('dddd, MMMM Do YYYY'),
					},
					{
						name: 'Bot ID',
						value: client.user.id,
					},
					
				]
			}
			message.channel.send({ embed: embed1 });
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
						submission = attachments.size ? { files: attachments.array() } : " "
						if (message.attachments.size > 0) {
							client.users.cache.get(splitMessage[1].replace(/[\\<>@#&!]/g, "")).send(submission)
						}
					} catch (err) {
						message.channel.send("Invalid Syntax")
					}

				}
				else {
					message.channel.send("This command can only be used in #bot-commands in the Shine Racing\/NMG IL Sever")
				}
			}
			else {
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

			client.channels.cache.get('729684250651000972').send({ embed: eembed });


			var submission = "";
			submission = attachments.size ? { files: attachments.array() } : " "
			if (message.attachments.size > 0) {
				client.channels.cache.get('729684250651000972').send(submission)
			}

		}

		//%CHAT ============================================

		if (splitMessage[0] === "%chat") {

			if (message.member.roles.cache.has("691659096759205924") || message.author.id === "454356237614841870") {
				if (splitMessage.length > 1) {
					message.channel.send(message.content.split(/ (.+)/)[1])
					message.delete();
				}
			}
			else {
				message.author.send("Insufficent Permissions for %chat")
			}
		}

		//%ttrando =============================

		if (splitMessage[0] == "%ttrando") {

			var users = message.content.split(/ (.+)/)[1].split(" ")
			shuffle(users)
			var size = 2; var splitusers = [];
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

		if (splitMessage[0] == "%color") {
			if (message.channel.id == "692890692946493490") {
				var colors = ["red", "orange", "yellow", "green", "lightblue", "darkblue", "purple", "none"]


				if ((!message.member.roles.cache.has("691659542244622356"))) {
					message.channel.send("You have to compete in a task if you want a color! ")
					return
				}
				if (message.content === "%color blue") {
					message.channel.send("Please use `!color darkblue` or `color lightblue`")
				}
				else {

					if (colors.includes(splitMessage[1])) {
						var colorrole = message.guild.roles.cache.find(x => x.name.toLowerCase() == splitMessage[1])
						if (message.member.roles.cache.has(colorrole.id)) {
							message.channel.send("You already have that color!")
						}
						else {
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
							if (splitMessage[1] == "none") {
								message.channel.send("Removed color from <@" + message.author.id + ">!")
							}
							else {
								message.channel.send("Assigned " + splitMessage[1] + " color to <@" + message.author.id + ">!")
							}
						}
					}
					else if (splitMessage[1] !== "list") {
						message.channel.send("Invalid color; do `%color list`")
					}
					else {
						message.channel.send("```Colors Available:\nRed\nOrange\nYellow\nGreen\nLightBlue\nDarkBlue\nPurple\n\nAlternatively you can do %color none ```")
					}
				}
			}
			else {
				message.channel.send("This command only works in <#692890692946493490>!")
			}
		}
	});
});
client.login(auth.token);
