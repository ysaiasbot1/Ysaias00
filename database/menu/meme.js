const meme = (prefix, botName, ownerName) => {
	return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
░▐█▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████▌
░░█▒▄▀▀▀▀▀▄▒▒▄▀▀▀▀▀▄▒▐███▌
░░░▐░░░▄▄░░▌▐░░░▄▄░░▌▐███▌
░▄▀▌░░░▀▀░░▌▐░░░▀▀░░▌▒▀▒█▌
░▌▒▀▄░░░░▄▀▒▒▀▄░░░▄▀▒▒▄▀▒▌
░▀▄▐▒▀▀▀▀▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒█
░░░▀▌▒▄██▄▄▄▄████▄▒▒▒▒█▀
░░░░▄██████████████▒▒▐▌
░░░▀███▀▀████▀█████▀▒▌
░░░░░▌▒▒▒▄▒▒▒▄▒▒▒▒▒▒▐
░░░░░▌▒▒▒▒▀▀▀▒▒▒▒▒▒▒▐
░░░▄▄▄▓▀▀░░░░░░░▒▒▒▀▀▀█▄░
░░▐█░▄▀░░░░░░░░░░░░░░▀▄░░█▌
░░▐░▐░░░░░░░░░░░░░░░░░░▐░░▌
░░▐▐░░░░░░░▀▄▒▄▀░░░░░░░▐░░▌
░░▐▐░░░░░░░▒▒▐▒▒░░░░░░░▐░░▌
░░▐▐░░░▄░░░░▒▐▒░░░▄░░░░▐░░▌
░░▐▐▒░░░░░▒▒▒▐▒▒▒░░░░░░▐░░▌░
░░▐░▀▄▒▒▒▒▒▄▀▒▀▄▒▒▒▒▒▄▀▌░▌░
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *MEMES - EM INGLÊS*
  │
  ├─ ❏ ${prefix}meme
  └─ ❏ ${prefix}memeindo`
}
exports.meme = meme
