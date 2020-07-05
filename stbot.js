const Discord = require('discord.js')
const client = new Discord.Client();
const auth = require('./sttoken.json');
client.on('ready', () => {

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
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

		if (splitMessage[0] === "%chat") {
			
			if (message.member.roles.cache.has("691659096759205924")) {
				message.channel.send(message.content.split(/ (.+)/)[1])
				message.delete();

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
					message.channel.send("```Colors Available:\nRed\nOrange\nYellow\nGreen\nLightBlue\nDarkBlue\nPurple```")
                }
			}
		}
	});
});
client.login(auth.token);
