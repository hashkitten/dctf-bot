const path = require('path')
const { getBotConfig, genChallEmbed } = require(path.join(__dirname, '../util/util'))
const { themecolour } = getBotConfig()
const { Chall } = require(path.join(__dirname, '../../models/index'))

var chall = {
    challid: 'crypto6',
    title: 'Useless Sage',
    category: 'Cryptography',
    points: 80,
    authorid: '111028987836313600',
    authorName: 'Joseph',
    flag: '635f8baf9de328982887334fb3f1943bb3a004eaaec7fed688f41f9c2a9c66ef',
    desc: async function(msg) {
        var description = `

            1. Read the code.
            2. Understand what's going on.
            3. Get the flag!

            The values are [here](https://paste.ee/r/4Zv6a/0).

            The code is [here](https://drive.google.com/open?id=1u59omURSF1-OSY___sbtxSVQePuYfmor)
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
    notes: []
}

module.exports = chall