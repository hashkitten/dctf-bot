const path = require('path')
const { getBotConfig, genChallEmbed } = require(path.join(__dirname, '../util/util'))
const { themecolour } = getBotConfig()
const { Chall } = require(path.join(__dirname, '../../models/index'))

var chall = {
    challid: 'rev1',
    title: 'Basics',
    category: 'Reversing',
    points: 5,
    authorid: '111028987836313600',
    authorName: 'Joseph',
    flag: 'e97fc87521b09c86f1819f4e28daff8ed0b05f9ea1b40375ab3b83ca40e69c38',
    desc: async function(msg) {
        var description = `
        [Know your basics!](https://drive.google.com/open?id=1a6i7-3J-gM-IjoN-W8foWgewKUIGfCtv)

        Note: Flag is MISCCTF{secret code}
        `

        let { challid, title, category, points, authorid, authorName } = chall
        var d = await Chall.findOne({ challid })
        var { solves, votes } = d
        var authorUser = await global.djsclient.fetchUser(authorid)
        var { username, discriminator, displayAvatarURL: icon_url } = authorUser
        var author = `${username}#${discriminator} (${authorName})`

        var descEmbed = genChallEmbed({
            challid, title, category, points, author, solves, themecolour, description, icon_url, votes
        })

        msg.channel.send({ embed: descEmbed })
    },
    notes: ['http://beta.rada.re/en/latest/']
}

module.exports = chall
