const { SlashCommandBuilder, VoiceChannel } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Play a Song!'),
	async execute(interaction) {

		let voiceChannels = interaction.channel.guild.channels.cache.find((channel) => channel.type === 2)

		// if ([voiceChannel].length > 0) {
		// 	voiceChannel.join().then(connection => {

		// 	});
		// } else {
		// 	message.reply('You need to be in a voice channel to use this command!');

		var channel = interaction.channel.guild.channels.cache.find((channel) => channel.id === '985972447994060865')

		joinVoiceChannel({
			channelId: channel.id,
			guildId: channel.guild.id,
			adapterCreator: channel.guild.voiceAdapterCreator,
		})
	}
}