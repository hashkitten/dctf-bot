const path = require('path')
const { getBotConfig } = require(path.join(__dirname, '../util/util'))
const { cmdprefix } = getBotConfig()

module.exports = function help(msg, args) {
	/*
		Displays help information for the bot
	*/
	
	msg.channel.send(`\`\`\`Usage: ${cmdprefix}command arg1 arg2 ...

Available Commands:
	${cmdprefix}help - displays this help screen
	${cmdprefix}challs - displays all available challenges
	${cmdprefix}chall <challid> - displays information about a challenge
	${cmdprefix}submit <challid> <flag> - submits a flag for checking (this can only be used in a direct message with the bot)
	${cmdprefix}vote <challid> <vote value> - vote on the difficulty of a challenge, on a scale from (easy) 1 to 10 (hard)
	${cmdprefix}profile (user) - displays the profile of the specified user, or the person who issued the command if not specified
	${cmdprefix}leaderboard - displays the global leaderboard
	${cmdprefix}solves <challid> - displays the solvers and their time of solving for a challenge
	${cmdprefix}notes <challid> - displays notes/resources/hints for a challenge (only use this if you're stuck!)
	${cmdprefix}writeups <challid> - displays user contributed writeups for a challenge (you will need the flag to view it)
	${cmdprefix}about - displays information about the bot\`\`\``)

}
