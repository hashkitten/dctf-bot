const path = require('path')
const { getBotConfig, genChallEmbed } = require(path.join(__dirname, '../util/util'))
const { themecolour } = getBotConfig()
const { Chall } = require(path.join(__dirname, '../../models/index'))

var chall = {
    challid: 'crypto4',
    title: 'RSA Level 2',
    category: 'Cryptography',
    points: 15,
    authorid: '111028987836313600',
    authorName: 'Joseph',
    flag: '982709b2e68b6d2082d2ac2260c0acddf67359f93435ba4ba914bb44cacf9013',
    desc: async function(msg) {
        var description = `

            \`e = 3\` is _usually_ fine...

            \`\`\`n = 16401882646637440620953541991941059259546430040210104630438059046138795628916305134169476566074874418388269976985559389427040690366478494051748806288987123045536130338315208871168443599248054950321387254361087589217960527034446793466002784904041217219770651699544390152230321384711740808621720733496498596867352335244606022811922353343554492572954925881845943430367868346430081327724481441368174098482311965377003859415475508584004125677369216141900338772891759057279475972234781146547566619914355394021555457568364774921941104433049284890488776971193194840250323981190014772420108568732618004400164828876793330976061
e = 3
c = 201737273766207370327106420047730442667612191819299238980643112390750490891471051693905353206053730807713093675363711775936659616145387086361658212573285870814444886971152648090921403537377686764833516910877165338196990531988075336362030375677416442213\`\`\`
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