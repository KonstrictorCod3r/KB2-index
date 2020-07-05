const Discord = require('discord.js')
const client = new Discord.Client();
const auth = require('./sttoken.json');
client.on('ready', () => {


	client.user.setActivity("Breath of the Wild", {

		type: "STREAMING",
		url: "https://www.twitch.tv/directory/game/The%20Legend%20of%20Zelda%3A%20Breath%20of%20the%20Wild"
	});

	console.log(`Logged in as ${client.user.tag}!`)
	client.on('message', async message => {
		var splitMessage = message.content.split(' ');
		if (splitMessage[0] == "%color") {
			var colors = ["red", "orange", "yellow", "green", "lightblue", "darkblue", "purple", "none"]
			
			//var racerrole = message.guild.roles.cache.find(x => x.name.toLowerCase() == "Racer")
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
					message.channel.send("```Colors Available:\nRed\nOrange\nYellow\nGreen\nLightBlue\nDarkBlue\nPurple```")
                }
			}
		}
	});
});
client.login(auth.token);