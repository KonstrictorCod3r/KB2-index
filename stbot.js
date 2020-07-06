const Discord = require('discord.js')
const client = new Discord.Client();
const auth = require('./sttoken.json');
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
		var splitMessage = message.content.split(' ');
		const { attachments, content, guild } = message;

		//%DM ================================
		
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

			if (message.member.roles.cache.has("691659096759205924")) {
				if (splitMessage.length > 1) {
				message.channel.send(message.content.split(/ (.+)/)[1])
				message.delete();
				}
			}
			else {
				message.author.send("Insufficent Permissions for %chat")
			}
		}

		if (splitMessage[0] == "%ttrando") {

			var users = message.content.split(/ (.+)/)[1].split(" ");
			//users = users + "a"
			
			shuffle(users)
			//var user = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
			var size = 2; var splitusers = [];
			for (var i = 0; i < users.length; i += size) {
				splitusers.push(users.slice(i , i + size));
			}
			//console.log(splitusers);
			message.channel.send(splitusers)
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
