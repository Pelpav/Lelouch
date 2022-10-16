process.on("uncaughtException", console.error);
require("./config");
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
  WAFlag,
} = require("@adiwajshing/baileys");
const zMiku = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const { exec, spawn, execSync } = require("child_process");
const axios = require("axios");
const {
  Sticker,
  createSticker,
  StickerTypes,
} = require("wa-sticker-formatter");
const path = require("path");
const os = require("os");
const { AnimeWallpaper } = require("anime-wallpaper");
const { TiktokDownloader } = require("./lib/tiktokdl");
const moment = require("moment-timezone");
const { JSDOM } = require("jsdom");
const speed = require("performance-now");
const hx = require("hxz-api");
const hxz = require("./lib/hxz-api");
const bdr = require("rumus-bdr");
const yogipw = require("tod-api");
const { color, bgcolor } = require("./lib/color");
const thiccysapi = require("textmaker-thiccy");
const toHur = require("@develoka/angka-terbilang-js");
const mathjs = require("mathjs");
const { performance } = require("perf_hooks");
const { Primbon } = require("scrape-primbon");
const { EmojiAPI } = require("emoji-api");
const imgbbUploader = require("imgbb-uploader");
const primbon = new Primbon();
const {
  isLimit,
  limitAdd,
  getLimit,
  giveLimit,
  addBalance,
  kurangBalance,
  getBalance,
  isGame,
  gameAdd,
  givegame,
  cekGLimit,
} = require("./lib/limit.js");
const emoji = new EmojiAPI();
const {
  smsg,
  formatp,
  tanggal,
  GIFBufferToVideoBuffer,
  formatDate,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getRandom,
} = require("./lib/myfunc");
const { aiovideodl } = require("./lib/scraper.js");
const cheerio = require("cheerio");
const textpro = require("./lib/textpro");
const { detikNews } = require("./lib/detik");
const { wikiSearch } = require("./lib/wiki.js");
const { Gempa } = require("./lib/gempa.js");
const ms = require("ms");
let { covid } = require("./lib/covid.js");
const { jadwaltv } = require("./lib/jadwaltv");
const { MikuTiktok } = require("./lib/tiktokmikudl");
const maker = require("mumaker");
const xfarrapi = require("xfarr-api");
const { hentai } = require("./lib/scraper2.js");
let { msgFilter } = require("./lib/antispam");
const { mediafireDl } = require("./lib/mediafire.js");

const _ = require("lodash");
const yargs = require("yargs/yargs");
var low;
try {
  low = require("lowdb");
} catch (e) {
  low = require("./lib/lowdb");
}

const { Low, JSONFile } = low;
const mongoDB = require("./lib/mongoDB");
const { yta, ytv, searchResult } = require("./lib/ytdl");

let banUser = JSON.parse(fs.readFileSync("./database/banUser.json"));
let banchat = JSON.parse(fs.readFileSync("./database/banChat.json"));

let _limit = JSON.parse(fs.readFileSync("./storage/user/limit.json"));
let _buruan = JSON.parse(fs.readFileSync("./storage/user/bounty.json"));
let _darahOrg = JSON.parse(fs.readFileSync("./storage/user/blood.json"));

global.opts = new Object(
  yargs(process.argv.slice(2)).exitProcess(false).parse()
);
global.db = new Low(
  /https?:\/\//.test(opts["db"] || "")
    ? new cloudDBAdapter(opts["db"])
    : /mongodb/.test(opts["db"])
    ? new mongoDB(opts["db"])
    : new JSONFile(`src/database.json`)
);
global.DATABASE = global.db; // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ)
    return new Promise((resolve) =>
      setInterval(function () {
        !global.db.READ
          ? (clearInterval(this),
            resolve(
              global.db.data == null ? global.loadDatabase() : global.db.data
            ))
          : null;
      }, 1 * 1000)
    );
  if (global.db.data !== null) return;
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {}),
  };
  global.db.chain = _.chain(global.db.data);
};
loadDatabase();
global.db = JSON.parse(fs.readFileSync("./src/database.json"));
if (global.db)
  global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {}),
  };

let lolkey = global.lolhuman;
let tebaklagu = (db.game.tebaklagu = []);
let _family100 = (db.game.family100 = []);
let kuismath = (db.game.math = []);
let tebakgambar = (db.game.tebakgambar = []);
let tebakkata = (db.game.tebakkata = []);
let caklontong = (db.game.lontong = []);
let caklontong_desk = (db.game.lontong_desk = []);
let tebakkalimat = (db.game.kalimat = []);
let tebaklirik = (db.game.lirik = []);
let tebaktebakan = (db.game.tebakan = []);
let vote = (db.others.vote = []);

let pendaftar = JSON.parse(fs.readFileSync("./storage/user/user.json"));
let balance = JSON.parse(fs.readFileSync("./database/balance.json"));
let ssewa = JSON.parse(fs.readFileSync("./database/sewa.json"));
let ban = JSON.parse(fs.readFileSync("./database/ban.json"));
let autosticker = JSON.parse(fs.readFileSync("./database/autosticker.json"));
const _autostick = JSON.parse(fs.readFileSync("./database/autostickpc.json"));
let _leveling = JSON.parse(fs.readFileSync("./database/leveling.json"));
let _level = JSON.parse(fs.readFileSync("./database/level.json"));
let limit = JSON.parse(fs.readFileSync("./database/limit.json"));
let setik = JSON.parse(fs.readFileSync("./src/sticker.json"));
let vien = JSON.parse(fs.readFileSync("./src/audio.json"));
let imagi = JSON.parse(fs.readFileSync("./src/image.json"));
let videox = JSON.parse(fs.readFileSync("./src/video.json"));
global.db = JSON.parse(fs.readFileSync("./src/database.json"));
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync("./database/sewa.json"));

const time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
const ucap = moment(Date.now()).tz("Asia/Kolkata").locale("id").format("a");
var buln = [
  "/01/",
  "/02/",
  "/03/",
  "/04/",
  "/05/",
  "/06/",
  "/07/",
  "/08/",
  "/09/",
  "/10/",
  "/11/",
  "/12/",
];
var myHari = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = yye < 1000 ? yye + 1900 : yye;
const jangwak = hri + "" + buln[bulnh] + "" + syear;
const janghar = thisDaye;

module.exports = Miku = async (Miku, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    const prefix = global.prefa;
    const isCmd = body.startsWith(prefix);
    const notCmd = body.startsWith("");
    const command = isCmd
      ? body.slice(1).trim().split(" ")[0].toLowerCase()
      : "";
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await Miku.decodeJid(Miku.user.id);
    const isCreator = [botNumber, ...global.Owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const itsMe = m.sender == botNumber ? true : false;
    const text = args.join(" ");
    const from = m.chat;
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const isMedia = /image|video|sticker|audio/.test(mime);
    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase();
    const groupMetadata = m.isGroup
      ? await Miku.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup
      ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
      : "";
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isUser = pendaftar.includes(m.sender);
    const isBan = banUser.includes(m.sender);
    const isBanChat = m.isGroup ? banchat.includes(from) : false;
    const isRakyat =
      isCreator ||
      global.rkyt
        .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
        .includes(m.sender) ||
      false;
    const AntiLink = m.isGroup ? ntilink.includes(from) : false;
    const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false;
    const AntiLinkYoutubeChannel = m.isGroup
      ? ntilinkytch.includes(from)
      : false;
    const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false;
    const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false;
    const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false;
    const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false;
    const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false;
    const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false;
    const antiWame = m.isGroup ? ntwame.includes(from) : false;
    const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false;
    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false;
    const isLeveling = m.isGroup ? _leveling.includes(from) : false;
    autoreadsw = true;
    const content = JSON.stringify(m.message);
    const q = args.join(" ");

    const isQuotedVideo =
      m.mtype === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      m.mtype === "extendedTextMessage" && content.includes("audioMessage");

    const mongoose = require("mongoose");
    /*
    /////////// -  DM chatbot (Delete this part to turn off DM Chat Bot) - //////////////////

    if (!isCmd && !m.isGroup) {
      const botreply = await axios.get(
        `http://api.brainshop.ai/get?bid=168758&key=Ci7eNhtxpxxDB5FQ&uid=[uid]&msg=[${budy}]`
      );
      txt = `${botreply.data.cnt}`;
      m.reply(txt);
    }

    //////////////////////////////////////////////////////////////////////////////////////
*/
    _sewa.expiredCheck(Miku, sewa);

    const reply = (teks) => {
      Miku.sendMessage(m.chat, { text: teks }, { quoted: m });
    };

    const replay = (teks) => {
      Miku.sendMessage(m.chat, { text: teks }, { quoted: m });
    };

    function randomNomor(angka) {
      return Math.floor(Math.random() * angka) + 1;
    }

    if (m.message) {
      addBalance(m.sender, randomNomor(574), balance);
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? pushname : "Private Chat", m.chat)
      );
    }

    if (isCmd && !isUser) {
      pendaftar.push(m.sender);
      fs.writeFileSync("./storage/user/user.json", JSON.stringify(pendaftar));
    }

    const getLevelingXp = (userId) => {
      let position = false;
      Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i;
        }
      });
      if (position !== false) {
        return _level[position].xp;
      }
    };

    const getLevelingLevel = (userId) => {
      let position = false;
      Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i;
        }
      });
      if (position !== false) {
        return _level[position].level;
      }
    };

    const getLevelingId = (userId) => {
      let position = false;
      Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i;
        }
      });
      if (position !== false) {
        return _level[position].jid;
      }
    };

    const addLevelingXp = (userId, amount) => {
      let position = false;
      Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i;
        }
      });
      if (position !== false) {
        _level[position].xp += amount;
        fs.writeFileSync("./database/level.json", JSON.stringify(_level));
      }
    };

    const addLevelingLevel = (userId, amount) => {
      let position = false;
      Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i;
        }
      });
      if (position !== false) {
        _level[position].level += amount;
        fs.writeFileSync("./database/level.json", JSON.stringify(_level));
      }
    };

    const addLevelingId = (userId) => {
      const obj = { jid: userId, xp: 1, level: 1 };
      _level.push(obj);
      fs.writeFileSync("./database/level.json", JSON.stringify(_level));
    };

    const getUserRank = (userId) => {
      let position = null;
      let found = false;
      _level.sort((a, b) => (a.xp < b.xp ? 1 : -1));
      Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
          position = i;
          found = true;
        }
      });
      if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 };
        _level.push(obj);
        fs.writeFileSync("./database/level.json", JSON.stringify(_level));
        return 99;
      } else {
        return position + 1;
      }
    };

    const xpGain = new Set();

    const isGained = (userId) => {
      return !!xpGain.has(userId);
    };

    const addCooldown = (userId) => {
      xpGain.add(userId);
      setTimeout(() => {
        return xpGain.delete(userId);
      }, 60000);
    };

    var levelRole = getLevelingLevel(m.sender);
    var role = "Copper V";
    if (levelRole <= 5) {
      role = "Copper IV";
    } else if (levelRole <= 10) {
      role = "Copper III";
    } else if (levelRole <= 15) {
      role = "Copper II";
    } else if (levelRole <= 20) {
      role = "Copper I";
    } else if (levelRole <= 25) {
      role = "Silver V";
    } else if (levelRole <= 30) {
      role = "Silver IV";
    } else if (levelRole <= 35) {
      role = "Silver III";
    } else if (levelRole <= 40) {
      role = "Silver II";
    } else if (levelRole <= 45) {
      role = "Silver I";
    } else if (levelRole <= 50) {
      role = "Gold V";
    } else if (levelRole <= 55) {
      role = "Gold IV";
    } else if (levelRole <= 60) {
      role = "Gold III";
    } else if (levelRole <= 65) {
      role = "Gold II";
    } else if (levelRole <= 70) {
      role = "Gold I";
    } else if (levelRole <= 75) {
      role = "Platinum V";
    } else if (levelRole <= 80) {
      role = "Platinum IV";
    } else if (levelRole <= 85) {
      role = "Platinum III";
    } else if (levelRole <= 90) {
      role = "Platinum II";
    } else if (levelRole <= 95) {
      role = "Platinum I";
    } else if (levelRole < 100) {
      role = "Exterminator";
    }

    var levelRoles = getLevelingLevel(m.sender);
    var roles = "Cop V";
    if (levelRoles <= 5) {
      roles = "Cop IV";
    } else if (levelRoles <= 10) {
      roles = "Cop III";
    } else if (levelRoles <= 15) {
      roles = "Cop II";
    } else if (levelRoles <= 20) {
      roles = "Cop I";
    } else if (levelRoles <= 25) {
      roles = "Sil V";
    } else if (levelRoles <= 30) {
      roles = "Sil IV";
    } else if (levelRoles <= 35) {
      roles = "Sil III";
    } else if (levelRoles <= 40) {
      roles = "Sil II";
    } else if (levelRoles <= 45) {
      roles = "Sil I";
    } else if (levelRoles <= 50) {
      roles = "Gol V";
    } else if (levelRoles <= 55) {
      roles = "Gol IV";
    } else if (levelRoles <= 60) {
      roles = "Gol III";
    } else if (levelRoles <= 65) {
      roles = "Gol II";
    } else if (levelRoles <= 70) {
      roles = "Gol I";
    } else if (levelRoles <= 75) {
      roles = "Plat V";
    } else if (levelRoles <= 80) {
      roles = "Plat IV";
    } else if (levelRoles <= 85) {
      roles = "Plat III";
    } else if (levelRoles <= 90) {
      roles = "Plat II";
    } else if (levelRoles <= 95) {
      roles = "Plati I";
    } else if (levelRoles < 100) {
      roles = "Exter";
    }

    if (m.isGroup && isLeveling && isUser && Miku.public) {
      const currentLevel = getLevelingLevel(m.sender);
      const checkId = getLevelingId(m.sender);
      try {
        addCooldown(m.sender);
        if (currentLevel === undefined && checkId === undefined)
          addLevelingId(m.sender);
        const amountXp = Math.floor(Math.random() * 10) + 200;
        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1);
        const getLevel = getLevelingLevel(m.sender);
        addLevelingXp(m.sender, amountXp);
        if (requiredXp <= getLevelingXp(m.sender)) {
          addLevelingLevel(m.sender, 1);
          teks = `「 *User Level UP* 」\n\n@${
            m.sender.split("@")[0]
          } got leveled up!!\n\n*User XP*: ${getLevelingXp(
            m.sender
          )}\n*Level*: ${getLevel} -> ${getLevelingLevel(
            m.sender
          )}\n*Role*: ${role} \n\n`;
          Miku.sendMessage(
            m.chat,
            { text: teks, mentions: [m.sender] },
            { quoted: m }
          );
        }
      } catch (err) {
        console.error("❌ An error occured !");
      }
    }
    if (prefix && command) {
      const currentLevel = getLevelingLevel(m.sender);
      const checkId = getLevelingId(m.sender);
      try {
        if (currentLevel === undefined && checkId === undefined)
          addLevelingId(m.sender);
        const amountXp = Math.floor(Math.random() * 10) + 30;
        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1);
        const getLevel = getLevelingLevel(m.sender);
        addLevelingXp(m.sender, amountXp);
        if (requiredXp <= getLevelingXp(m.sender)) {
          addLevelingLevel(m.sender, 1);
        }
      } catch (err) {
        console.error("❌ An error occured !");
      }
    }

    if (autoreadsw) {
      if (from === "status@broadcast") {
        Miku.chatRead(from);
      }
    }

    if (global.autoreadpmngc) {
      if (command) {
        await Miku.sendPresenceUpdate("composing", m.chat);
        Miku.sendReadReceipt(from, m.sender, [m.key.id]);
      }
    }
    /*
  if (global.autoReadGc) {
  if (m.isGroup) { Miku.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
*/

    if (global.autoReadAll) {
      if (m.chat) {
        Miku.sendReadReceipt(m.chat, m.sender, [m.key.id]);
      }
    }

    if (global.autoRecord) {
      if (m.chat) {
        Miku.sendPresenceUpdate("recording", m.chat);
      }
    }

    if (global.autoTyping) {
      if (m.chat) {
        Miku.sendPresenceUpdate("composing", m.chat);
      }
    }

    if (global.available) {
      if (m.chat) {
        Miku.sendPresenceUpdate("available", m.chat);
      }
    }

    const hariRaya = new Date("6 1, 2022 00:00:00");
    const sekarang = new Date().getTime();
    const Selisih = hariRaya - sekarang;
    const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor(
      (Selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mmmenit = Math.floor((Selisih % (1000 * 60 * 60)) / (1000 * 60));
    const ddetik = Math.floor((Selisih % (1000 * 60)) / 1000);
    const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minute ${ddetik}Second`;

    async function hitungmundur(bulan, tanggal) {
      let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
      let now = Date.now();
      let distance = from - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return (
        days +
        "Day " +
        hours +
        "Hour " +
        minutes +
        "Minute " +
        seconds +
        "Second"
      );
    }
    try {
      let isNumber = (x) => typeof x === "number" && !isNaN(x);
      let limitUser = isRakyat
        ? global.limitawal.rakyat
        : global.limitawal.free;
      let user = global.db.users[m.sender];
      if (typeof user !== "object") global.db.users[m.sender] = {};
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("afkReason" in user)) user.afkReason = "";
        if (!isNumber(user.limit)) user.limit = limitUser;
      } else
        global.db.users[m.sender] = {
          afkTime: -1,
          afkReason: "",
          limit: limitUser,
        };
      let setting = global.db.data.settings[botNumber];
      if (typeof setting !== "object") global.db.data.settings[botNumber] = {};
      if (setting) {
        if (!isNumber(setting.status)) setting.status = 0;
        if (!("autobio" in setting)) setting.autobio = false;
        if (!("templateImage" in setting)) setting.templateImage = false;
        if (!("templateGif" in setting)) setting.templateGif = false;
        if (!("templateMsg" in setting)) setting.templateMsg = false;
        if (!("templateDocument" in setting)) setting.templateDocument = true;
      } else
        global.db.data.settings[botNumber] = {
          status: 0,
          autobio: false,
          templateImage: false,
          templateGif: false,
          templateMsg: false,
          templateDocument: true,
        };
    } catch (err) {
      console.error(err);
    }

    const sendOrder = async (
      jid,
      text,
      orid,
      img,
      itcount,
      title,
      sellers,
      tokens,
      ammount
    ) => {
      const order = generateWAMessageFromContent(
        jid,
        proto.Message.fromObject({
          orderMessage: {
            orderId: orid,
            thumbnail: img,
            itemCount: itcount,
            status: "INQUIRY",
            surface: "CATALOG",
            orderTitle: title,
            message: text,
            sellerJid: sellers,
            token: tokens,
            totalAmount1000: ammount,
            totalCurrencyCode: "IDR",
          },
        }),
        { userJid: jid }
      );
      Miku.relayMessage(jid, order.message, { messageId: order.key.id });
    };

    const {
      addInventoriDarah,
      cekDuluJoinAdaApaKagaDiJson,
      addDarah,
      kurangDarah,
      getDarah,
    } = require("./storage/user/blood.js");
    const {
      cekInventoryAdaAtauGak,
      addInventori,
      addBesi,
      addEmas,
      addEmerald,
      addUmpan,
      addPotion,
      kurangBesi,
      kurangEmas,
      kurangEmerald,
      kurangUmpan,
      kurangPotion,
      getBesi,
      getEmas,
      getEmerald,
      getUmpan,
      getPotion,
    } = require("./storage/user/exchange.js");
    const {
      addInventoriMonay,
      cekDuluJoinAdaApaKagaMonaynyaDiJson,
      addMonay,
      kurangMonay,
      getMonay,
    } = require("./storage/user/money.js");
    const {
      addInventoriLimit,
      cekDuluJoinAdaApaKagaLimitnyaDiJson,
      addLimit,
      kurangLimit,
      getLimit,
    } = require("./storage/user/limit.js");
    const {
      cekDuluHasilBuruanNya,
      addInventoriBuruan,
      addIkan,
      addAyam,
      addKelinci,
      addDomba,
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam,
      kurangKelinci,
      kurangDomba,
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam,
      getKelinci,
      getDomba,
      getSapi,
      getGajah,
    } = require("./storage/user/prey.js");
    let DarahAwal = global.rpg.darahawal;
    const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender);
    const isCekDarah = getDarah(m.sender);
    const isUmpan = getUmpan(m.sender);
    const isPotion = getPotion(m.sender);
    const isIkan = getIkan(m.sender);
    const isAyam = getAyam(m.sender);
    const isKelinci = getKelinci(m.sender);
    const isDomba = getDomba(m.sender);
    const isSapi = getSapi(m.sender);
    const isGajah = getGajah(m.sender);
    const isMonay = getMonay(m.sender);
    const isLimit = getLimit(m.sender);
    const isBesi = getBesi(m.sender);
    const isEmas = getEmas(m.sender);
    const isEmerald = getEmerald(m.sender);
    const isInventory = cekInventoryAdaAtauGak(m.sender);
    const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender);
    const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender);
    const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender);
    const ikan = ["🐟", "🐠", "🐡"];

    let picaks = [flaming, fluming, flarun, flasmurf];
    let picak = picaks[Math.floor(Math.random() * picaks.length)];

    if (!isRakyat) {
      rkyt.push(m.sender.split("@")[0]);
    }

    global.hit = {};
    if (isCmd) {
      data = await fetchJson("https://api.countapi.xyz/hit/CheemsBot/visits");
      jumlahcmd = `${data.value}`;
      dataa = await fetchJson(
        `https://api.countapi.xyz/hit/CheemsBot${moment
          .tz("Asia/Kolkata")
          .format("DDMMYYYY")}/visits`
      );
      jumlahharian = `${dataa.value}`;
    }

    let mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    for (let jid of mentionUser) {
      let user = global.db.users[jid];
      if (!user) continue;
      let afkTime = user.afkTime;
      if (!afkTime || afkTime < 0) continue;
      let reason = user.afkReason || "";
      reply(
        `
Pls try not to tag him!
He's in away from keyboard ${reason ? "with reason " + reason : "no reason"}
During ${clockString(new Date() - afkTime)}
`.trim()
      );
    }

    if (db.users[m.sender].afkTime > -1) {
      let user = global.db.users[m.sender];
      reply(
        `
Pls try not to tag him!
He's Offline ${user.afkReason ? " after " + user.afkReason : ""}
During ${clockString(new Date() - user.afkTime)}
`.trim()
      );
      user.afkTime = -1;
      user.afkReason = "";
    }

    if (m.mtype === "groupInviteMessage") {
      teks = `I can't join the group untill my *Owner* ask me to join. Type *-owner* to get owner number and ask him.`;
      sendOrder(
        m.chat,
        teks,
        "5123658817728409",
        fs.readFileSync("./Assets/pic10.jpg"),
        `${watermark}`,
        `${BotName}`,
        "916909137213@s.whatsapp.net",
        "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
        "99999999999999999999"
      );
    }

    if (AntiLink) {
      linkgce = await Miku.groupInviteCode(from);
      if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        reply(
          `\`\`\`「  Antilink System  」\`\`\`\n\nNo action will be because you sent this group's link.`
        );
      } else if (isUrl(m.text)) {
        bvl = `\`\`\`「  *Antilink System*  」\`\`\`\n\nAdmin has sent a link so no action is taken.`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Miku.groupParticipantsUpdate(m.chat, [kice], "remove")
          .then((res) => reply(jsonformat(res)))
          .catch((err) => reply(jsonformat(err)));
        Miku.sendMessage(
          from,
          {
            text: `\`\`\`「  Antilink System  」\`\`\`\n\n@${
              kice.split("@")[0]
            } Baka Has been removed for sending link in this group!`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }
    }

    if (antiWame)
      if (budy.includes(`wa.me`)) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 _'wa.me' PM link Detected!_  」\`\`\`\n\nLink sent by Admin so no action is taken!`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Miku.groupParticipantsUpdate(m.chat, [kice], "remove");
        Miku.sendMessage(
          from,
          {
            text: `\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${
              kice.split("@")[0]
            } Baka Has been removed for sending link in this group!`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }
    if (antiWame)
      if (budy.includes(`http://wa.me`)) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\nLink sent by Admin so no action is taken!`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Miku.groupParticipantsUpdate(m.chat, [kice], "remove");
        Miku.sendMessage(
          from,
          {
            text: `\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${
              kice.split("@")[0]
            }  Baka Has been removed for sending link in this group!`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }

    if (antiVirtex) {
      if (budy.length > 3500) {
        reply(`*Caution!*\n\n`.repeat(300));
        reply(`\`\`\`Virus Detected !!\`\`\`\n\nRevoving sender...`);
        if (!isBotAdmins) return reply(mess.botAdmin);
        Miku.groupParticipantsUpdate(m.chat, [m.sender], "remove");
      }
    }

    if (AntiLink) {
      if (!isBotAdmins) return;
      linkgce = await Miku.groupInviteCode(from);
      if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        reply(
          `\`\`\`「  Antilink System  」\`\`\`\n\nNo action will be taken because you sent this group's link!`
        );
      } else if (isUrl(m.text)) {
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nAdmin has sent a group link so no action will be taken!`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Miku.groupParticipantsUpdate(m.chat, [kice], "remove");
        Miku.sendMessage(
          from,
          {
            text: `\`\`\`「  Antilink System  」\`\`\`\n\n@${
              kice.split("@")[0]
            } Baka has been removed for sending link in this group!`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }
    }

    if (AntiLinkYoutubeVid)
      if (budy.includes("https://youtu.be/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「  Antilink System  」」\`\`\`\n\nLink sent by Admin so no action will be taken!`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Miku.groupParticipantsUpdate(m.chat, [kice], "remove");
        Miku.sendMessage(
          from,
          {
            text: `\`\`\`「  Antilink System  」\`\`\`\n\n@${
              kice.split("@")[0]
            } Baka has been removed for sending Yt video link in this group!`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }

    if (AntiLinkYoutubeChannel)
      if (budy.includes("https://youtube.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Miku.groupParticipantsUpdate(m.chat, [kice], "remove");
        Miku.sendMessage(
          from,
          {
            text: `\`\`\`「  Antilink System  」\`\`\`\n\n@${
              kice.split("@")[0]
            } Baka has been removed for sending Yt channel link in this group!`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }

    if (AntiLinkInstagram)
      if (budy.includes("https://www.instagram.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Miku.groupParticipantsUpdate(m.chat, [kice], "remove");
        Miku.sendMessage(
          from,
          {
            text: `\`\`\`「  Antilink System  」\`\`\`\n\n@${
              kice.split("@")[0]
            } Baka has been removed for sending Instagram link in this group! No promotion is allowed!`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }

    if (AntiLinkFacebook)
      if (budy.includes("https://facebook.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Miku.groupParticipantsUpdate(m.chat, [kice], "remove");
        Miku.sendMessage(
          from,
          {
            text: `\`\`\`「  Antilink System  」\`\`\`\n\n@${
              kice.split("@")[0]
            } Baka has been removed for sending Facebook link in this group!`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }

    if (AntiLinkTelegram)
      if (budy.includes("https://t.me/")) {
        if (AntiLinkTelegram) if (!isBotAdmins) return;
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Miku.groupParticipantsUpdate(m.chat, [kice], "remove");
        Miku.sendMessage(
          from,
          {
            text: `\`\`\`「  Antilink System  」\`\`\`\n\n@${
              kice.split("@")[0]
            } Baka has been removed for sending Telegram link in this group!`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }

    if (AntiLinkTiktok)
      if (budy.includes("https://www.tiktok.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Miku.groupParticipantsUpdate(m.chat, [kice], "remove");
        Miku.sendMessage(
          from,
          {
            text: `\`\`\`「  Antilink System  」\`\`\`\n\n@${
              kice.split("@")[0]
            } Baka has been removed for sending Tiktok link in this group!`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }

    if (AntiLinkTwitter)
      if (budy.includes("https://twitter.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Miku.groupParticipantsUpdate(m.chat, [kice], "remove");
        Miku.sendMessage(
          from,
          {
            text: `\`\`\`「  Antilink System  」\`\`\`\n\n@${
              kice.split("@")[0]
            } Baka has been removed for sending Twitter link in this group!`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }

    if (AntiLinkAll)
      if (budy.includes("https://")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Miku.groupParticipantsUpdate(m.chat, [kice], "remove");
        Miku.sendMessage(
          from,
          {
            text: `\`\`\`「  Antilink System  」\`\`\`\n\n@${
              kice.split("@")[0]
            } Baka has been removed for sending links in this group!`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }

    if (m.mtype == "viewOnceMessage") {
      if (!db.data.chats[m.chat].antionce) return;
      teks = `「 *Anti ViewOnce Message* 」
${themeemoji} Name : ${m.pushName}
${themeemoji} User : @${m.sender.split("@")[0]}
${themeemoji} Clock : ${moment.tz("Asia/Kolkata").format("HH:mm:ss")} 
${themeemoji} Date : ${moment.tz("Asia/Kolkata").format("DD/MM/YYYY")}
${themeemoji} MessageType : ${m.mtype}`;
      Miku.sendTextWithMentions(m.chat, teks, m);
      await sleep(500);
      m.copyNForward(m.chat, true, { readViewOnce: true }).catch((_) =>
        reply(`Maybe it's been opened by a bot`)
      );
    }

    if (!Miku.public) {
      if (!m.key.fromMe) return;
    }

    setInterval(() => {
      fs.writeFileSync(
        "./src/database.json",
        JSON.stringify(global.db, null, 2)
      );
    }, 60 * 1000);

    // reset limit every 12 hours
    let cron = require("node-cron");
    cron.schedule(
      "00 12 * * *",
      () => {
        let user = Object.keys(global.db.users);
        let limitUser = isRakyat
          ? global.limitawal.rakyat
          : global.limitawal.free;
        for (let jid of user) global.db.users[jid].limit = limitUser;
        console.log("Reseted Limit");
      },
      {
        scheduled: true,
        timezone: "Asia/Kolkata",
      }
    );

    if (tebaklagu.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaklagu[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await Miku.sendButtonText(
          m.chat,
          [
            {
              buttonId: "guess song",
              buttonText: { displayText: "Guess The Song" },
              type: 1,
            },
          ],
          `🎮 Guess The Song 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`,
          `${global.BotName}`,
          m
        );
        delete tebaklagu[m.sender.split("@")[0]];
      } else reply("*Wrong answer!*");
    }

    if (tebakgambar.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakgambar[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await Miku.sendButtonText(
          m.chat,
          [
            {
              buttonId: "guess picture",
              buttonText: { displayText: "Guess The Picture" },
              type: 1,
            },
          ],
          `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`,
          `${global.BotName}`,
          m
        );
        delete tebakgambar[m.sender.split("@")[0]];
      } else reply("*Wrong answer!*");
    }

    if (tebakkata.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkata[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await Miku.sendButtonText(
          m.chat,
          [
            {
              buttonId: "guess word",
              buttonText: { displayText: "Guess The Word" },
              type: 1,
            },
          ],
          `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`,
          `${global.BotName}`,
          m
        );
        delete tebakkata[m.sender.split("@")[0]];
      } else reply("*Wrong answer!*");
    }

    if (caklontong.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = caklontong[m.sender.split("@")[0]];
      deskripsi = caklontong_desk[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await Miku.sendButtonText(
          m.chat,
          [
            {
              buttonId: "guess saying",
              buttonText: { displayText: "Guess The Saying" },
              type: 1,
            },
          ],
          `🎮 Guess The Saying 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`,
          `${global.BotName}`,
          m
        );
        delete caklontong[m.sender.split("@")[0]];
        delete caklontong_desk[m.sender.split("@")[0]];
      } else reply("*Wrong answer!*");
    }

    if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkalimat[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await Miku.sendButtonText(
          m.chat,
          [
            {
              buttonId: "guess sentence",
              buttonText: { displayText: "Guess The Sentence" },
              type: 1,
            },
          ],
          `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`,
          `${global.BotName}`,
          m
        );
        delete tebakkalimat[m.sender.split("@")[0]];
      } else reply("*Wrong answer!*");
    }

    if (tebaklirik.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaklirik[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await Miku.sendButtonText(
          m.chat,
          [
            {
              buttonId: "guess lyrics",
              buttonText: { displayText: "Guess The Lyrics" },
              type: 1,
            },
          ],
          `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`,
          `${global.BotName}`,
          m
        );
        delete tebaklirik[m.sender.split("@")[0]];
      } else reply("*Wrong answer!*");
    }

    if (tebaktebakan.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaktebakan[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await Miku.sendButtonText(
          m.chat,
          [
            {
              buttonId: "riddles",
              buttonText: { displayText: "Riddles" },
              type: 1,
            },
          ],
          `🎮 Riddles 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`,
          `${global.BotName}`,
          m
        );
        delete tebaktebakan[m.sender.split("@")[0]];
      } else reply("*Wrong answer!*");
    }

    if ("family100" + m.chat in _family100 && isCmd) {
      kuis = true;
      let room = _family100["family100" + m.chat];
      let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, "");
      let isSurender = /^((me)?give up|surr?ender|surrender)$/i.test(m.text);
      if (!isSurender) {
        let index = room.jawaban.findIndex(
          (v) => v.toLowerCase().replace(/[^\w\s\-]+/, "") === teks
        );
        if (room.terjawab[index]) return !0;
        room.terjawab[index] = m.sender;
      }
      let isWin =
        room.terjawab.length === room.terjawab.filter((v) => v).length;
      let caption = `
          Answer the following questions :\n${room.soal}\n\n\nThere is ${
        room.jawaban.length
      } Answer ${
        room.jawaban.find((v) => v.includes(" "))
          ? `(some answers have spaces)`
          : ""
      }
          ${isWin ? `All Answers Answered` : isSurender ? "Surrender!" : ""}
          ${Array.from(room.jawaban, (jawaban, index) => {
            return isSurender || room.terjawab[index]
              ? `(${index + 1}) ${jawaban} ${
                  room.terjawab[index]
                    ? "@" + room.terjawab[index].split("@")[0]
                    : ""
                }`.trim()
              : false;
          })
            .filter((v) => v)
            .join("\n")}
          ${isSurender ? "" : `Perfect Player`}`.trim();
      Miku.sendText(m.chat, caption, m, {
        contextInfo: { mentionedJid: parseMention(caption) },
      })
        .then((mes) => {
          return (_family100["family100" + m.chat].pesan = mesg);
        })
        .catch((_) => _);
      if (isWin || isSurender) delete _family100["family100" + m.chat];
    }

    this.suit = this.suit ? this.suit : {};
    let roof = Object.values(this.suit).find(
      (roof) => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender)
    );
    if (roof) {
      let win = "";
      let tie = false;
      if (
        m.sender == roof.p2 &&
        /^(acc(ept)?|accept|yes|oke?|reject|dont want|later|no(pe)?can|y)/i.test(
          m.text
        ) &&
        m.isGroup &&
        roof.status == "wait"
      ) {
        if (/^(reject|dont want|later|n|no(pe)?can)/i.test(m.text)) {
          Miku.sendTextWithMentions(
            m.chat,
            `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`,
            m
          );
          delete this.suit[roof.id];
          return !0;
        }
        roof.status = "play";
        roof.asal = m.chat;
        clearTimeout(roof.waktu);

        Miku.sendText(
          m.chat,
          `Suit has been sent to chat
          @${roof.p.split`@`[0]} dan 
          @${roof.p2.split`@`[0]}

          Please choose a suit in the respective chat"
          Click https://wa.me/${botNumber.split`@`[0]}`,
          m,
          { mentions: [roof.p, roof.p2] }
        );
        if (!roof.pilih)
          Miku.sendText(
            roof.p,
            `Please select \n\nRock🗿\nPaper📄\nScissors✂️`,
            m
          );
        if (!roof.pilih2)
          Miku.sendText(
            roof.p2,
            `Please select \n\nRock🗿\nPaper📄\nScissors✂️`,
            m
          );
        roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2)
            Miku.sendText(
              m.chat,
              `Both players don't want to play,\nSuit canceled`
            );
          else if (!roof.pilih || !roof.pilih2) {
            win = !roof.pilih ? roof.p2 : roof.p;
            Miku.sendTextWithMentions(
              m.chat,
              `@${
                (roof.pilih ? roof.p2 : roof.p).split`@`[0]
              } don't choose suit, game over`,
              m
            );
          }
          delete this.suit[roof.id];
          return !0;
        }, roof.timeout);
      }
      let jwb = m.sender == roof.p;
      let jwb2 = m.sender == roof.p2;
      let g = /scissors/i;
      let b = /rock/i;
      let k = /paper/i;
      let reg = /^(scissors|rock|paper)/i;
      if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
        roof.pilih = reg.exec(m.text.toLowerCase())[0];
        roof.text = m.text;
        reply(
          `You have chosen ${m.text} ${
            !roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ""
          }`
        );
        if (!roof.pilih2)
          Miku.sendText(
            roof.p2,
            "_The opponent has chosen_\nNow it is your turn",
            0
          );
      }
      if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
        roof.pilih2 = reg.exec(m.text.toLowerCase())[0];
        roof.text2 = m.text;
        reply(
          `You have chosen ${m.text} ${
            !roof.pilih ? `\n\nWaiting for the opponent to choose` : ""
          }`
        );
        if (!roof.pilih)
          Miku.sendText(
            roof.p,
            "_The opponent has chosen_\nNow it is your turn",
            0
          );
      }
      let stage = roof.pilih;
      let stage2 = roof.pilih2;

      if (roof.pilih && roof.pilih2) {
        clearTimeout(roof.waktu_milih);
        if (b.test(stage) && g.test(stage2)) win = roof.p;
        else if (b.test(stage) && k.test(stage2)) win = roof.p2;
        else if (g.test(stage) && k.test(stage2)) win = roof.p;
        else if (g.test(stage) && b.test(stage2)) win = roof.p2;
        else if (k.test(stage) && b.test(stage2)) win = roof.p;
        else if (k.test(stage) && g.test(stage2)) win = roof.p2;
        else if (stage == stage2) tie = true;
        Miku.sendText(
          roof.asal,
          `_*Suit Results*_${tie ? "\nSERIES" : ""}
            @${roof.p.split`@`[0]} (${roof.text}) ${
            tie ? "" : roof.p == win ? ` Win \n` : ` Lost \n`
          }
            @${roof.p2.split`@`[0]} (${roof.text2}) ${
            tie ? "" : roof.p2 == win ? ` Win \n` : ` Lost \n`
          }
            `.trim(),
          m,
          { mentions: [roof.p, roof.p2] }
        );
        delete this.suit[roof.id];
      }
    }

    async function cerpen(category) {
      return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "");
        let judul = title.replace(/\s/g, "-");
        let page = Math.floor(Math.random() * 5);
        axios
          .get("http://cerpenmu.com/category/cerpen-" + judul + "/page/" + page)
          .then((get) => {
            let $ = cheerio.load(get.data);
            let link = [];
            $("article.post").each(function (a, b) {
              link.push($(b).find("a").attr("href"));
            });
            let random = link[Math.floor(Math.random() * link.length)];
            axios.get(random).then((res) => {
              let $$ = cheerio.load(res.data);
              let hasil = {
                title: $$("#content > article > h1").text(),
                author: $$("#content > article")
                  .text()
                  .split("Short Story: ")[1]
                  .split("Category: ")[0],
                kategori: $$("#content > article")
                  .text()
                  .split("Category: ")[1]
                  .split("\n")[0],
                lolos: $$("#content > article")
                  .text()
                  .split("Passed moderation on: ")[1]
                  .split("\n")[0],
                cerita: $$("#content > article > p").text(),
              };
              resolve(hasil);
            });
          });
      });
    }

    if (kuismath.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = kuismath[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await reply(
          `「 *Math Quiz* 」\n\n 🎉 Correct Answer 🎉\n\nWant to play again? send ${prefix}math mode`
        );
        delete kuismath[m.sender.split("@")[0]];
      } else reply("*Wrong answer!*");
    }

    if (
      isMedia &&
      m.msg.fileSha256 &&
      m.msg.fileSha256.toString("base64") in global.db.sticker
    ) {
      let hash = global.db.sticker[m.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(
        m.chat,
        { text: text, mentions: mentionedJid },
        {
          userJid: Miku.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        }
      );
      messages.key.fromMe = areJidsSameUser(m.sender, Miku.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      Miku.ev.emit("messages.upsert", msg);
    }

    const textImg = (teks) => {
      Miku.sendMessage(
        m.chat,
        { text: teks },
        { quoted: m, thumbnail: fs.readFileSync("./Assets/pic4.jpg") }
      );
    };

    const ftoko = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: BotLogo,
            },
            title: `${global.OwnerName}`,
            description: `${global.BotName}`,
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: `${global.WaterMark}`,
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };

    const fgi = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "916909137213-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: `Miku`,
          h: `Miku`,
          duration: "99999",
          gifPlayback: "true",
          caption: `Pelpav`,
          jpegThumbnail: fs.readFileSync("./Assets/miku.mp4"),
        },
      },
    };

    //FAKEREPLY TROLI
    const ftroli = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        orderMessage: {
          itemCount: 1,
          status: 1,
          surface: 1,
          message: `${global.OwnerName}`,
          orderTitle: `${global.BotName}`,
          thumbnail: BotLogo, //Pic
          sellerJid: "0@s.whatsapp.net",
        },
      },
    };
    //FAKEREPLY LOCATION
    const flokasi = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        locationMessage: {
          name: `${global.location}`,
          jpegThumbnail: BotLogo,
        },
      },
    };
    //FAKEREPLY DOCUMENT
    const fdocs = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        documentMessage: {
          title: `${global.BotName}`,
          jpegThumbnail: BotLogo,
        },
      },
    };
    //FAKEREPLY VIDEO
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "916909137213-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: `${global.BotName}`,
          h: `${global.OwnerName}`,
          seconds: "30",
          caption: `${global.WaterMark}`,
          jpegThumbnail: BotLogo,
        },
      },
    };
    //FAKEREPLY GROUPINVITE
    const fgclink = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "0@s.whatsapp.net",
      },
      message: {
        groupInviteMessage: {
          groupJid: "916909137213-1616169743@g.us",
          inviteCode: `${global.OwnerName}`,
          groupName: `${global.BotName}`,
          caption: `${global.WaterMark}`,
          jpegThumbnail: BotLogo,
        },
      },
    };
    //FAKEREPLY GIF
    const fgif = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "916909137213-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: `${global.BotName}`,
          h: `${global.OwnerName}`,
          seconds: "30",
          gifPlayback: "true",
          caption: `${global.WaterMark}`,
          jpegThumbnail: BotLogo,
        },
      },
    };
    //FAKEREPLY TEXT WITH THUMBNAIL
    const ftextt = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "916909137213-1613049930@g.us" } : {}),
      },
      message: {
        extendedTextMessage: {
          text: `${global.OwnerName}`,
          title: `${global.BotName}`,
          jpegThumbnail: BotLogo,
        },
      },
    };
    //FAKEREPLY VN
    const fvn = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "916909137213-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: "9999999999999999",
          ptt: "true",
        },
      },
    };
    l = 1;
    monospace = "```";
    const timestampe = speed();
    const latensie = speed() - timestampe;
    const levelMenu = getLevelingLevel(m.sender);
    const xpMenu = getLevelingXp(m.sender);
    const uangku = getBalance(m.sender, balance);
    const reqXp = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1);
    const jumlahUser = pendaftar.length;
    if (!isDarah) {
      addInventoriDarah(m.sender, DarahAwal);
    }
    if (!isInventory) {
      addInventori(m.sender);
    }
    if (!isInventoriBuruan) {
      addInventoriBuruan(m.sender);
    }

    const menulist = `
    Yo ${pushname} 👋. Je suis ${global.BotName}, un bot de Pelpav.
        
       「 Informations Système 」
    
    Rapidité : ${latensie.toFixed(4)} milisecondes
    Temps de fonctionnement : ${runtime(process.uptime())}
    Nom du bot : ${global.BotName}
    Nom du propriétaire : ${global.OwnerName}
    Plateforme : Amazon AWS
    Nombre d'utilisateur : ${Object.keys(global.db.users).length}
    
    
       「 Informations utilisateur 」
    
    Niveau : ${levelMenu}
    XP : ${xpMenu} \ ${reqXp}
    Role : ${role}
    
    
       「 Solde de compte 」
    
    Solde : ${uangku}
    Fer : ${getBesi(m.sender)}
    Or : ${getEmas(m.sender)}
    Emeraude : ${getEmerald(m.sender)}
    Potion : ${getPotion(m.sender)}
    
    
    Ecris *-menu* ou appuyez sur n'importe quel bouton ci-dessous pour commencer à utiliser *${
      global.BotName
    }*
    
    ©️ *${global.BotName}* Tous droits réservés : *Pelpav*
    `;
    const qtod = m.quoted ? "true" : "false";

    function pickRandom(list) {
      return list[Math.floor(list.length * Math.random())];
    }

	  const _0xc8d9d0 = _0x4874;
function _0x4874(_0x618219, _0x22e8a3) {
  const _0x1eec35 = _0x1eec();
  return (
    (_0x4874 = function (_0x487405, _0xe443fa) {
      _0x487405 = _0x487405 - 0xa1;
      let _0x18cd8 = _0x1eec35[_0x487405];
      return _0x18cd8;
    }),
    _0x4874(_0x618219, _0x22e8a3)
  );
}
(function (_0x3b45be, _0x383575) {
  const _0x56475 = _0x4874,
    _0x2cea57 = _0x3b45be();
  while (!![]) {
    try {
      const _0x11dc02 =
        parseInt(_0x56475(0x375)) / 0x1 +
        parseInt(_0x56475(0xf3)) / 0x2 +
        -parseInt(_0x56475(0x21b)) / 0x3 +
        (parseInt(_0x56475(0x15a)) / 0x4) * (-parseInt(_0x56475(0x640)) / 0x5) +
        -parseInt(_0x56475(0x61d)) / 0x6 +
        (-parseInt(_0x56475(0x37a)) / 0x7) * (parseInt(_0x56475(0x2a5)) / 0x8) +
        parseInt(_0x56475(0x411)) / 0x9;
      if (_0x11dc02 === _0x383575) break;
      else _0x2cea57["push"](_0x2cea57["shift"]());
    } catch (_0xa4edcf) {
      _0x2cea57["push"](_0x2cea57["shift"]());
    }
  }
})(_0x1eec, 0x45cf0),
  process["on"](_0xc8d9d0(0xce), console[_0xc8d9d0(0x4fb)]),
  require(_0xc8d9d0(0x558));
function _0x1eec() {
  const _0x18ca8c = [
    "templateDoc",
    "getmsg\x0a┃⬤",
    "\x20*Already\x20Afk*",
    "*Morcco\x20People\x20Remove\x20Turn\x20Off\x20Now*",
    "chocolate",
    "Pilih\x20Disini",
    "pencil",
    "sticker_url",
    "sacred",
    "Brodcast",
    "filter",
    "\x0a>\x20Media\x20Url\x20:\x20",
    "./lib/scraper2",
    "👨‍💻",
    "Master\x20III",
    "ytdoc",
    "selectedRowId",
    "*⬤TYPE:*\x20",
    "🎮\x20Tebak\x20Tebakan\x20🎮\x0a\x0aCorrect\x20Answer\x20+500\x20money🎉\x0a\x0a*Want\x20to\x20play\x20again?\x20press\x20the\x20button\x20below*",
    "name",
    "getMonth",
    "remove",
    "Jam\x20",
    "./bgm/",
    "\x0a\x0a@",
    "SONG",
    "getmsg",
    "\x20off",
    "*File\x20Over\x20Limit*\x20",
    "umma",
    "wet-glass",
    "findIndex",
    "ice\x20Logo",
    "imagesketch\x0a┃⬤",
    "sticker\x0a┃⬤",
    "bcvideo",
    "deletemsg",
    "🇱🇰",
    "\x20😅",
    "antilinkyt",
    "https://xteam.xyz/shorturl/bitly?url=",
    "SHA256\x20Hash\x20Missing",
    "🎮\x20Cak\x20Lontong\x20🎮\x0a\x0aCorrect\x20Answer\x20+500\x20money🎉\x0a*",
    "tictactoe",
    "text",
    "September",
    "*Send/Reply\x20Video/Audio\x20You\x20Want\x20to\x20Convert\x20into\x20MP3\x20With\x20Caption*\x20",
    "240p",
    "modwh\x20https://www.mediafire.com/file/lew8nrglyd3q9wi/%F0%93%84%82%F0%9D%90%92%F0%9D%90%80%F0%9D%90%88%F0%9D%90%93%F0%9D%90%84%F0%9D%90%8C+%F0%9D%90%8A%F0%9D%90%80%F0%9D%90%95%F0%9D%90%88%F0%9D%90%98%F0%9D%90%80++%F0%9D%90%95%F0%9D%9F%AD5_2.22.2.73.apk/file",
    "🎮\x20Math\x20Quiz\x20🎮\x0a\x0a*Correct\x20answer*\x20🎉\x0a\x0a*Want\x20to\x20play\x20again?\x20send*\x20",
    "*212\x20Detected*",
    "./config",
    "winner",
    "modwh\x20https://www.mediafire.com/file/ajcq9gyzw3vm56e/%255Bnormal_theme%255D_%25E2%259A%25B6APS_WA_V.XV.apk/file",
    "bcvideo\x0a┃⬤",
    "welcome\x20on/off\x0a┃⬤",
    "glitch\x20Logo",
    "pixelate\x0a┃⬤",
    "December",
    "\x20⌚\x20",
    "unlocked",
    "https://textpro.me/broken-glass-text-effect-free-online-1023.html",
    "tebakgambar",
    "avatar",
    "┏━❰\x20*VOICE-CHANGER*\x20❱\x0a┃⬤",
    "*「\x20LEVEL\x20UP\x20」*\x0a\x0a⬤\x20*Nama\x20:*\x20",
    "description",
    "togif",
    "fileSha256",
    "emojimix2",
    "hxz-api",
    "*Need\x20Url*",
    "VIDEO",
    "./database/antibule.json",
    "imagetopdf\x20\x0a┗━━━━━━━━━━━⦿\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x0a┏━❰\x20*DATABASE-MENU*\x20❱\x0a┃⬤",
    "fast",
    "groupParticipantsUpdate",
    "*Send\x20Broadcast\x20To*\x20",
    "twitteraudio",
    "emojimix2\x0a┃⬤",
    "shit\x0a┃⬤",
    "\x0a*🔄\x20Downloding\x20",
    "suit",
    "from",
    "positif",
    "*ANTBADVIDEO\x20OFF\x20NOW*",
    "editinfo\x20close",
    "antitags",
    "pinterest\x0a┃⬤",
    "0\x200\x20*\x20*\x20*",
    "late\x20Friday",
    "delmsg\x0a┃⬤",
    "ytdoc\x20",
    "blood\x20",
    "*▊▊▊TWITTER\x20DL▊▊▊*n\x0a",
    "tourl\x0a┃⬤",
    "./apikey.json",
    "shortlink\x0a┃⬤",
    "bcimage",
    "OWNER\x20🎩",
    "https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
    "Fuck",
    "antibule",
    "EFFECT\x20MENU",
    "public_gists",
    "papercut",
    "\x20*Bad\x20Word*\x20",
    "*Send/Reply\x20Image/video\x20With\x20Caption*\x20",
    "catch",
    "setppgroup",
    "sendImageAsSticker",
    "settings",
    "schedule",
    "https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
    "stickersearch\x0a┃⬤",
    "Please\x20select\x20\x0a\x0aRock🗿\x0aPaper📄\x0aScissors✂️",
    "https://textpro.me/create-harry-potter-text-effect-online-1025.html",
    "water-effect",
    "metalic\x20",
    "image",
    "templateMsg",
    "dropwater",
    "sex",
    "*Welcome\x20And\x20GoodBye\x20disabled*",
    "vote\x0a┃⬤",
    "Epic\x20I",
    "*Type\x20some\x20text*\x0a\x0aExample\x20:\x20",
    "@adiwajshing/baileys",
    "-filter_complex\x20\x22afftfilt=real=\x27hypot(re,im)*sin(0)\x27:imag=\x27hypot(re,im)*cos(0)\x27:win_size=512:overlap=0.75\x22",
    "medias",
    "\x20https://youtu.be/Z9rIR0Vopb8\x20320kbps",
    "editinfo\x20open",
    "listcmd",
    "\x20From\x20",
    "*Successfully\x20opening\x20the\x20group*",
    "resolve",
    "deepsea",
    "inboxblock212",
    "modwh\x20https://www.mediafire.com/file/slm9xkv1ubf4u2u/Wa+Business+By+Vihanga+MD.apk/file",
    "databasemenu",
    "ffmpeg\x20-i\x20",
    "dripsrecord",
    "@s.whatsapp.net",
    "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html",
    "antiviewonce\x0a┗━━━━━━━━━━⦿\x0a\x0a\x0a┏━❰\x20*INTERNET\x20MENU*\x20❱\x0a┃⬤",
    "\x20zimbot|drips*",
    "\x20https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698",
    "groupFetchAllParticipating",
    "&apikey=hardianto",
    "_\x0a*╰─────────────◎*",
    "\x0aUrl:\x20",
    "./lib/myfunc",
    "Success!",
    "SEARCH\x20MENU",
    "groupLeave",
    "*Success\x20Broadcast*",
    "*━━\x20「\x20",
    "_\x0a*Time⏳\x20:*\x20_",
    "grup",
    "chat\x0a┃⬤",
    "syaaban",
    "fruitjuice\x20Logo",
    "linktoimg",
    "@g.us",
    "thunder\x20",
    "&APIKEY=",
    "searchmenu",
    "gimage\x20",
    "https://textpro.me/create-logo-joker-online-934.html",
    "slow\x20\x0a┃⬤",
    "moment-timezone",
    "youtube",
    "headers",
    "listonline",
    "multicolor\x20",
    "setcmd",
    "ago",
    "values",
    "*▊▊▊AUTO\x20BLOCK▊▊▊*\x0a\x0a@",
    "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html",
    "wattpad",
    "\x20dan\x20\x0a@",
    "enable",
    "angels-wings",
    "mentionedJid",
    "*Sticker\x20Toimg\x20By\x20",
    "papercut\x20",
    "cap",
    "*Success\x20turning\x20on\x20anti\x20rude\x20in\x20this\x20group*",
    "ZIMBOT",
    "සුබ\x20රාත්‍රියක්\x20🌒",
    "attp",
    "\x0aTitle:\x20",
    "whatsapp",
    "```\x0a```📟\x20PUBLIC\x20GISTS\x20:\x20",
    "Reply\x20Message!",
    "delmsg",
    "3dstone2\x20Logo",
    "audio",
    "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html",
    ",_\x20_",
    "number",
    "stickerline\x0a┃⬤",
    "\x20128kbps",
    "fruitjuice",
    "Detik",
    "mainmenu",
    "git\x0a┃⬤",
    "whatsapp.com",
    "\x0a\x0a━━━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a",
    "Convert\x20Webp\x20To\x20Video",
    "autoblock\x20off",
    "*Erro*",
    "Example\x20:\x0a",
    "burn\x0a┃⬤",
    "group1",
    "lontong",
    "deepsea\x20Logo",
    "Wattpad",
    "base64",
    "https://textpro.me/blood-text-on-the-frosted-glass-941.html",
    "sender",
    "Tebak\x20Tebakan",
    "dripstyping",
    "cache",
    "\x20Kalah\x20\x0a",
    "yts",
    "sticker",
    "dropwater\x20Logo",
    "360p",
    "yt-search",
    "groupSettingUpdate",
    "twittermp3",
    "bio",
    "parse",
    "*ᴛɪᴛʟᴇ\x20:*\x20_",
    "selectedId",
    "*Reply\x20Video/Audio\x20That\x20You\x20Want\x20To\x20Be\x20VN\x20With\x20Caption*\x20",
    "unblock",
    "wame",
    "*Srtle\x20Text\x20From*\x20",
    "./VihangaMD/.alive.mp3",
    "toString",
    "startsWith",
    "earrape\x20\x0a┃⬤",
    "unread",
    "promote\x0a┃⬤",
    "archive",
    "2040198qYWlOB",
    "board",
    "*▊▊▊DETECTED▊▊▊*\x0a\x0a@",
    "Immortal",
    "soal",
    "react",
    "\x20vihanga",
    "https://textpro.me/honey-text-effect-868.html",
    "\x20minutes",
    "indexOf",
    "sendVideoAsSticker",
    "*▊▊▊Welcome\x20And\x20GoodBye\x20MODE▊▊▊*",
    "sparklechristmas\x20Logo",
    "singleSelectReply",
    "ice",
    "bcgroup\x0a┃⬤\x20",
    "application/pdf",
    "syawal",
    "*Failed\x20to\x20download\x20media\x20and\x20send\x20videos*",
    "?url=",
    "creator",
    "reverse\x20\x0a┃⬤",
    "bgCyanBright",
    "list",
    "slice",
    "\x0a🔗\x20*Media\x20Url*\x20:\x20",
    "selectedButtonId",
    "logo1\x0a┗━━━━━━━━━━⦿\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x0a┏━❰\x20*OWNER\x20MENU*\x20❱\x0a┃⬤",
    "./storage/user/alat_tukar.js",
    "```\x0a```🗃️\x20EMAIL\x20:\x20",
    "following",
    "\x0a*Duration\x20Video\x201-9\x20seconds*",
    "antifb",
    "templateImage",
    "modwh",
    "40mxSVAT",
    "robot\x20\x0a┃⬤",
    "https://api.akuari.my.id/ephoto/",
    "includes",
    "┏━❰\x20*GROUP\x20MENU*\x20❱\x0a┃⬤",
    "result",
    "ytmp3",
    "riy",
    "neondevil\x20Logo",
    "_\x0a*│🥷\x20VIEWS\x20:*\x20_",
    "┏━❰\x20*DATABASE-MENU*\x20❱\x0a┃⬤",
    "stickergif",
    "emoticon",
    "add",
    "January",
    "user",
    "object",
    "\x27\x20from\x20the\x20message\x20list",
    "readTimestamp",
    "\x20480p",
    ">\x20@",
    "fat\x20\x0a┃⬤",
    "biscuit\x20",
    "afkReason",
    "strawberry\x20",
    "broadcast",
    "6289523258649-1604595598@g.us",
    "linkm",
    "918188019676",
    "getFullYear",
    "messages",
    "rock",
    "auhor",
    "alivemsg",
    "https://chat.whatsapp.com/",
    "ytmp4\x20",
    "MONDAY",
    "views",
    "./lib/y2mate",
    "circuit\x20Logo",
    "chocolate\x20Logo",
    "(async\x20()\x20=>\x20{\x20return\x20",
    "listonline\x0a┃⬤",
    "සුබ\x20උදෑසනක්\x20🌅",
    "stickersearch",
    "Porn",
    "*ඔයාට\x20ඕනි\x20එක\x20තෝරන්න*",
    "bcvid",
    "LOGO\x20NUMBER\x20",
    "gifee",
    "\x0a*LIKE\x20:*\x20",
    "*I\x20opened\x20it\x20by\x20force*",
    "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html",
    "./lib/lol.js",
    "*🎥\x20ᴛɪᴛʟᴇ:*\x20_${anu.title}_",
    "sand",
    "REACT_NUMBER",
    "meadiafire",
    "wallpaper\x20",
    "INTERNET\x20MENU",
    "*Enter\x20Option\x20Select\x20add\x20or\x20delete*",
    "key",
    "https://textpro.me/christmas-tree-text-effect-online-free-1057.html",
    "watercolor\x20Logo",
    "dripsreadgroup",
    "Done!",
    "splice",
    "savefrom",
    "Twitter",
    "creation",
    "Give\x20up!",
    "\x20your\x20song...*\x0a",
    "harrypotter\x20",
    "ᴅᴏᴡɴʟᴏᴀᴅ\x20ʟɪɴᴋ\x20🎯",
    "deep\x20\x0a┃⬤",
    "thunder\x20Logo",
    "\x20text1|text2",
    ".png?background=",
    "emojimix\x0a┃⬤",
    "┏━❰\x20*SHORTLINK*\x20❱\x0a┃⬤",
    "4️⃣",
    "userJid",
    "ssweb",
    "wikimedia\x0a┃⬤",
    "```",
    "ytlink",
    "\x0a⬡\x20*ID\x20:*\x20",
    "fromMe",
    "last\x20ribal",
    "infochat\x0a┃⬤",
    "15:00:00",
    "grplink",
    "Legend\x20I",
    "author",
    "listcmd\x0a┃⬤",
    "getLevelingLevel",
    "onlygroup",
    "tupai\x20\x0a┃⬤",
    "*EPHOTO\x20",
    "*🔄\x20Please\x20Wait\x20Im\x20Uploading\x20",
    "msg",
    "internetmenu",
    "*⬤TITLE\x20:*\x20",
    "uncaughtException",
    "promote",
    "toimage\x0a┃⬤",
    "exports",
    "Lanjut",
    "antiviewonce",
    "umma\x0a┃⬤",
    "*⬤SIZE:*\x20",
    "with\x20reason\x20",
    "The\x20bot\x20is\x20doing\x20great\x20job\x20dont\x20forget\x20to\x20subcribe*",
    "\x27\x20*has\x20been\x20registered\x20in\x20the\x20message\x20list*",
    "සුබ\x20සවසක්\x20🌅",
    "public",
    "Text\x20?",
    "BOT\x20M\x20D",
    "*Click\x20Next\x20To\x20Continue*",
    "You\x20have\x20no\x20permission\x20to\x20change\x20this\x20sticker\x20command",
    "MENU",
    "react\x0a┃⬤",
    "getTime",
    "*Success\x20in\x20turning\x20off\x20antirude\x20in\x20this\x20group\x20happy\x20now*",
    "🎮\x20Tebak\x20Kalimat\x20🎮\x0a\x0aCorrect\x20Answer\x20+500\x20money🎉\x0a\x0a*Want\x20to\x20play\x20again?\x20press\x20the\x20button\x20below*",
    "-filter:a\x20atempo=1.06,asetrate=44100*1.25",
    "sendText",
    "duration",
    "asal",
    "*Need\x20link*",
    "simi",
    "&text_2=",
    "-af\x20equalizer=f=54:width_type=o:width=2:g=20",
    "sparklechristmas",
    "serializeM",
    "GrandMaster\x20III",
    "./storage/user/monay.json",
    "\x20second*",
    "*Im\x20Downloading\x20Your\x20",
    "https://textpro.me/ice-cold-text-effect-862.html",
    "838226hbIfBJ",
    "pinterest\x20",
    "perf_hooks",
    "anonymous",
    "https://textpro.me/1917-style-text-effect-online-980.html",
    "Convert\x20By\x20",
    "Kaviya\x20Full\x20AntiVirus\x20Mod",
    "owner",
    "video\x0a┃⬤",
    "floor",
    "\x27\x0a\x20\x20\x20\x20\x0aAccess\x20with\x20",
    "guess\x20the\x20song",
    "\x0a⬤\x20*Level\x20:*\x20",
    "*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a┏━❰\x20*MAIN\x20MENU*\x20❱\x0a┃⬤",
    "OPEN",
    "extension",
    "Friday",
    "multicolor\x20Logo",
    "fat",
    "tiktokstalk\x0a┃⬤",
    "burn",
    "🎞️",
    "bass\x20\x0a┃⬤",
    "render",
    "listpc\x0a┃⬤",
    "mtype",
    "\x20Chat\x0a*Time\x20",
    ".mp3",
    "MVP",
    "https://textpro.me/create-berry-text-effect-online-free-1033.html",
    "lirik",
    "reactmoji",
    "status",
    "\x0a⭕:\x20@",
    "wiki\x0a┃⬤",
    "bcgc",
    "ping",
    "script",
    "smooth",
    "𝐻𝑒𝑟𝑚𝑎𝑛\x20𝐶ℎ𝑎𝑛𝑒𝑙᭄𓅂",
    "triggeredwebp\x0a┗━━━━━━━━━━━⦿",
    "transformer\x20",
    "screenshot",
    "inspect",
    "*The\x20message\x20you\x20replied\x20to\x20does\x20not\x20contain\x20a\x20reply*",
    "```\x0a```📚\x20FOLLOWING\x20:\x20",
    "premium",
    "*Username\x20Not\x20found*",
    "setname\x0a┃⬤",
    "extendedTextMessage",
    "3️⃣",
    "togif\x0a┃⬤",
    "group\x0a┃⬤",
    "lockcmd\x20\x0a┗━━━━━━━━⦿\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x0a┏━❰\x20*DOWNLOADER*\x20❱\x0a┃⬤",
    ".leave",
    "liston",
    "Masukkan\x20query",
    "isGroup",
    "pencil\x20",
    "ringtone\x0a┃⬤",
    "meta",
    "⬡\x20*NAME\x20:*\x20",
    "watercolor\x20",
    "gay",
    "*Sorry\x20Xteam\x20server\x20is\x20down*",
    "rip\x0a┃⬤",
    "ytsearch",
    "blown\x20\x0a┃⬤",
    "unarchive",
    "dripsreadall",
    "demote",
    "filesize",
    "participants",
    "copyNForward",
    "480p",
    "ytdown",
    "math\x20mode",
    "kick\x0a┃⬤",
    "*The\x20message\x20was\x20not\x20sent\x20by\x20a\x20bot!*",
    "fiction\x20Logo",
    "toaud",
    "match",
    "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",
    "ytshort",
    "\x0a\x0aType\x20*give\x20up*\x20to\x20give\x20up\x20and\x20admit\x20defeat",
    "gitclone\x0a┃⬤",
    "\x0a⬡\x20*CHAT\x20:*\x20https://wa.me/",
    "FmWhatsapp",
    "&apikey=",
    "rainbow2",
    "setppbot\x0a┗━━━━━━━━━━⦿\x0a\x0a\x20\x20\x20\x20\x0a┏━❰\x20*GROUP\x20MENU*\x20❱\x0a┃⬤",
    "terjawab",
    "toptt",
    "lava\x20",
    "DOWNLOAD\x20MENU",
    "ownermenu",
    "off",
    "owner\x0a┃⬤",
    "wood\x20Logo",
    "gifee.webp",
    "public\x0a┃⬤",
    "content-disposition",
    "https://textpro.me/create-blackpink-logo-style-online-1001.html",
    "106668htaqNv",
    "*Already\x20on\x20okay*",
    "ice\x20",
    "mute\x20off",
    "\x20second",
    "short",
    "mumaker",
    "underwater\x20",
    "HH:mm:ss",
    "bab",
    "fruitjuice\x20",
    "twitterdl2",
    "*Testing\x20speed...*",
    "_MB\x20100\x20ට\x20අඩු\x20ඒවා\x20විතරයි\x20ගන්න\x20පුලුවන්..._",
    "./lib/hisoka.jpg",
    "*Neither\x20player\x20intends\x20to\x20play,\x0aSuit\x20cancelled*",
    "https://violetics.pw/api/ephoto360/",
    "antiytchannel",
    "deepsea\x20",
    "\x20720p",
    ".mp4",
    "./lib/uploader",
    "prono",
    "ytmp3\x20",
    "neonlight",
    "twitter\x0a┃⬤",
    "\x0a⬡\x20*OWNER\x20:*\x20@",
    "limit",
    "https://youtube.com/shorts",
    "https://textpro.me/natural-leaves-text-effect-931.html",
    "tovideo",
    "./database/balance.json",
    "*▊▊▊ANTILINK\x20VIEW▊▊▊*",
    "🐻‍❄",
    "imagetopdf",
    "*Ehh\x20sorry\x20you\x20admin*",
    "ttp2\x0a┃⬤",
    "wood",
    "「\x20LIST\x20DATABASE\x20」\x0a\x0a",
    "ytchannel",
    "Thank\x20you",
    "🗂️",
    "ytmp4",
    "\x20Chat\x0a\x0a",
    "tagall\x0a┃⬤",
    "translate\x0a┗━━━━━━━━━━━━⦿\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x0a┏━❰\x20*VOICE-CHANGER*\x20❱\x0a┃⬤",
    "map",
    "Xxx",
    "https://textpro.me/chocolate-cake-text-effect-890.html",
    "Warrior\x20II",
    "-filter:a\x20\x22atempo=0.5,asetrate=65100\x22",
    "readFileSync",
    "bind",
    "lava",
    "\x20\x20*Mod\x20Whatsapp\x20Downloder\x20By\x20Vihanga\x20Yt*\x0a\x0a_Mod\x20Name\x20:_\x20*",
    "state",
    "watercolor",
    "*Successfully\x20close\x20edit\x20group\x20info*",
    "bgRed",
    "\x0a*Don\x27t\x20tag\x20him!*\x0a*He\x27s\x20in\x20AFK*\x20",
    "*👋\x20Hello...\x20",
    "video/mp4",
    "Master\x20II",
    "*_BROADCAST\x20IMAGE_*",
    "addCooldown",
    "*Morcco\x20People\x20Remove\x20Turn\x20On\x20Now*",
    "setppgrup",
    "*Reply\x20message*",
    "stickerwm\x0a┃⬤",
    "TUESDAY",
    "getDay",
    "templateLocation",
    "*Already\x20off*",
    "chat.whatsapp.com",
    "\x20Video\x20...\x20🔄*",
    "graffitibike\x20Logo",
    "\x20*Group*",
    ".png",
    "fiction\x20",
    "*▊▊▊ANTILINK\x20RUDE▊▊▊*\x0a\x0a*no\x20hate\x20speech\x20anymore,\x20watch\x20space\x20im\x20going\x20to\x20kick\x20dumps*",
    "*▊▊▊ANTIBAD\x20WORDS▊▊▊*\x0a\x0a*Lucky\x20you,\x20you\x20are\x20admin*",
    "./database/level.json",
    "\x20Quality*",
    "Hash\x20not\x20found\x20in\x20database",
    "play",
    "img\x0a┃⬤",
    "./database/antiwame.json",
    "DD/MM/YYYY\x20HH:mm:ss",
    "\x0aAuthor:\x20DRIPS\x0aDibaca:\x20",
    "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html",
    "isGained",
    "available",
    "angel",
    "xnxx",
    "ownername",
    ".stop",
    "url",
    "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html",
    "endLimit",
    "xfarr-api",
    "savefrom\x0a┃⬤",
    "*Wrong\x20answer!*",
    ">\x20Title\x20:\x20",
    "./database/zimbot.json",
    ".pdf",
    "Invalid\x20Position",
    "./database/limit.json",
    "goodbye",
    "\x20black\x20rover",
    "twiter_username",
    "text2",
    "caption",
    "blue",
    "@bochilteam/scraper",
    "modwh\x20https://www.mediafire.com/file/tmnatbpznbd8f4t/Yo+Wa+By+Vihanga+MD.apk/file",
    "videoMessage",
    "\x20*Chats*",
    "getyt",
    "*Reply\x20Messagenya!!*",
    "rpg",
    "afkTime",
    "game",
    "*👋\x20Hello\x20Admin\x20",
    "2️⃣",
    "docyt",
    "audio/mp4",
    "tiktok.com",
    "\x0a\x0a*Link\x20Group*\x20:\x20",
    "append",
    "VOICE\x20MENU",
    "nightcore",
    "candy\x20",
    "\x0a⬤\x20*Xp\x20:*\x20",
    "https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html",
    "black",
    "\x0a*Size*\x20:\x20",
    "email",
    "./storage/user/limit.json",
    "*Hi\x20",
    "addmsg\x20\x0a┃⬤",
    "Maksimal\x2010\x20detik!",
    "High\x20Quality\x20Audio\x20Song",
    "left",
    "neondevil",
    "scifi\x20",
    "ytcomment\x0a┃⬤",
    "waktu",
    "join",
    "pilih",
    "vihanga\x20md",
    "pixelate",
    "Wednesday",
    "Example\x20:\x20",
    "audio/mpeg",
    "chats",
    "speedtest\x0a┃⬤",
    "read",
    "antilink\x20on",
    "\x0a*Sembuh*\x20:\x20",
    "wanted\x0a┃⬤",
    "https://textpro.me/horror-blood-text-effect-online-883.html",
    "```\x0a```📻\x20BIO\x20:\x20",
    "logo1\x0a┗━━━━━━━━━━⦿",
    "\x0a*🔄\x20Preparing\x20",
    "rabi\x27ul-akhir",
    "./database/autoblock.json",
    "\x20https://youtu.be/Z9rIR0Vopb8\x20360p",
    "fast\x20\x0a┃⬤",
    "lirics\x0a┃⬤",
    ">\x20*",
    "\x20*Group\x20Chat,\x20Time\x20",
    "212",
    "entries",
    "repeat",
    "\x20\x20AUDIO\x20🎧\x20\x20",
    "(some\x20answers\x20have\x20spaces)",
    "waktu_milih",
    "Testing\x20SPEED\x20⚙️...",
    "waterpipe\x20Logo",
    "tupai",
    "bye\x20on/off\x0a┃⬤",
    "\x0a⬡\x20*Type\x20:*\x20",
    "all",
    "sendTextWithMentions",
    "type",
    "https://cililitan.herokuapp.com/api/readmore?teks=",
    "tiktokthub",
    "*\x20:\x20",
    "sendMessage",
    "\x20Group\x0a\x0a",
    "anti212\x20on",
    "sendReadReceipt",
    "matrix\x20Logo",
    "888531mCQnEd",
    "\x0a⬡\x20*CREATED\x20:*\x20",
    "quoted",
    "textpro",
    "shift",
    "Epic\x20II",
    "message",
    "Mythic",
    "darahawal",
    "⦿\x20FROM",
    "toxic\x20",
    "imageMessage",
    "quoted\x0a┃⬤",
    "igstalk\x0a┃⬤",
    "3dchristmas\x20Logo",
    "setsubject",
    "autoblock",
    "*▊▊▊DETECTED\x20ONCE▊▊▊*\x0a\x0a\x20",
    "participant",
    "removebg\x0a┃⬤",
    "random",
    "*ᴘᴏɴɢ*\x20",
    "reply",
    "shit",
    "*You\x20have\x20chosen*\x20",
    "https://github.com/vihangayt0/VihangaBot-MD",
    "thanku",
    "-filter_complex\x20\x22areverse\x22",
    "_\x0a*│🌀\x20URL\x20:*\x20_",
    "mediafire",
    "720p",
    "https://api.memegen.link/images/custom/",
    "setppbot",
    "Gb\x20Whatsapp",
    "tomp4",
    "antitelegram",
    "┏━━━\x20[\x20",
    "NEXT",
    "kitsune-api",
    "*Send/Reply\x20Image\x20With\x20Caption*\x20",
    "kalimat",
    "Aprill",
    "Cari\x20Partner",
    "judul",
    "addLevelingLevel",
    "OWNER\x20MENU",
    "rely",
    "afk",
    "reduce",
    "LIST\x20MENU\x20📃",
    "wallpaper",
    "Legend\x20III",
    "sendImage",
    "promoteowner/powner\x0a┃⬤",
    "┏━❰\x20*TOOLS\x20MENU*\x20❱\x0a┃⬤",
    "glitch",
    "style",
    "no\x20reason",
    "&url=",
    "berry\x20",
    "ringtone",
    "\x20Chat\x0aTime\x20",
    "\x20lelena",
    "listgc\x0a┃⬤",
    "*▊▊▊DETECTED▊▊▊*\x0a\x0a*you\x20are\x20admn\x20okay*",
    "td2",
    "MENU\x20NUMBER\x20",
    "pow",
    "sond",
    "twiter",
    "blackpink",
    "toonce",
    "tebak\x20lirik",
    "water-3d",
    "test",
    "covidglobal",
    "\x20ZIM-BOT-INC",
    "\x0a>\x20Detail\x20:\x20",
    "logo",
    "*reply\x20sticker\x20with\x20caption*\x20*",
    "_\x0a*User🧸\x20:*\x20_",
    "*▊▊▊DETECTED▊▊▊*\x0a\x0a*You\x20sent\x20a\x20virtex,\x20sorry\x20you\x20will\x20be\x20kicked\x20from\x20the\x20group*",
    "ping\x0a┃⬤",
    "3dstone2",
    "*Enter\x20Query\x20text!*",
    "split",
    "disable",
    "harrypotter\x20Logo",
    "playerO",
    "node-cron",
    "ytdl\x0a┃⬤",
    "group\x20open",
    "tagme",
    "_currentTurn",
    "SELECT\x20LOGO",
    "\x0a>\x20Caption\x20:\x20",
    "getmsg\x20",
    "downmenu",
    "announcement",
    "play\x20",
    "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
    "link!",
    "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
    "groupInviteCode",
    "\x0aAnswer\x20the\x20following\x20questions\x20:\x0a",
    "gay\x0a┃⬤",
    "demon",
    "94766866297@s.whatsapp.net",
    "snow",
    "push",
    "antilinkall",
    "viewOnceMessage",
    "Invalid",
    "wikipedia\x0a┗━━━━━━━━━━━⦿",
    "subject",
    "100",
    "\x20Menang\x20\x0a",
    "OFF",
    "Mute\x20Bot",
    "27634090203",
    "tiktokdlv3",
    "*▊▊▊ANTIBAD\x20WORDS▊▊▊*\x0a\x0a@",
    "┏━❰\x20*SEARCH\x20MENU*\x20❱\x0a┃⬤",
    "\x0a⬡\x20*MEMBER\x20:*\x20",
    "delcmd\x20\x0a┃⬤",
    "red",
    "isAnimated",
    "getMinutes",
    "*Already\x20on\x20umm\x20okay*",
    "first\x20ribal",
    "mime",
    "Choose\x20on\x20or\x20off",
    "emoji",
    "tinyurl",
    "GrandMaster\x20II",
    "pilih2",
    "*error\x20while\x20sending\x20sticker*",
    "https://textpro.me/create-christmas-candy-cane-text-effect-1056.html",
    "463352EZNfDD",
    "./storage/user/darah.js",
    "demon\x20",
    "\x20>\x20*STATUS\x20:*\x20",
    "\x0a>\x20Category\x20:\x20",
    "application/zip",
    "*Maximum\x2010\x20seconds!*",
    "setppgc",
    "*⬤SIZE\x20:*\x20",
    "githubstalk\x0a┃⬤",
    "lyrics",
    "./src/database.json",
    "addFilter",
    "song",
    "ephemeral",
    "rejab",
    "welcome",
    "DD/MM/YY\x20HH:mm:ss",
    "\x20😅+🤔",
    "tebak\x20lagu",
    "groupmenu",
    "antitwitter",
    "sider",
    "SPEED\x20⚙️test",
    "./lib/scraper3",
    "toimg",
    "./VihangaMD/VihangaMD.jpeg",
    "*-------「\x20GIMAGE\x20SEARCH\x20」-------*\x0a🤠\x20*Query*\x20:\x20",
    "setppbot\x0a┗━━━━━━━━━━⦿",
    "watchFile",
    "ZIM",
    "exec",
    "data",
    "unlinkSync",
    "Elite\x20II",
    "honey\x20Logo",
    "public_repo",
    "dirawat",
    "gimage",
    "\x20->\x20",
    "\x20minutes*",
    "cloud",
    "\x20zim-bot*",
    "sendMedia",
    "jawaban",
    "img",
    "del",
    "Made\x20by\x20vihanga",
    "bcimage\x0a┃⬤",
    "kickbad",
    "https://api.lolhuman.xyz/api/wiki?apikey=",
    "directimg",
    "*Wikipedia*\x0a\x0a",
    "pencil\x20Logo",
    "Error",
    "https://textpro.me/create-space-text-effects-online-free-1042.html",
    "wood\x20",
    "templateList",
    "menu\x0a┗━━━━━━━━━━⦿",
    "NEXT\x20PIC",
    "https://textpro.me/create-a-sketch-text-effect-online-1044.html",
    "graffitibike\x20",
    "\x20file\x20name\x0a\x0aView\x20message\x20list\x20with\x20",
    "skeleton",
    "lockcmd\x20\x0a┗━━━━━━━━⦿",
    "*MODE\x20GROUP*",
    "bgWhite",
    "https://textpro.me/matrix-style-text-effect-online-884.html",
    "mute",
    "./database/welcome.json",
    "\x20})()",
    "demon\x20Logo",
    "christmas\x20",
    "CHATTING",
    "candy\x20Logo",
    "google-it",
    "\x27\x20*not\x20listed\x20in\x20the\x20message\x20list*",
    "*whoa\x20you\x20are\x20\x20bot\x20creator\x20i\x20wont\x20kick\x20you\x20okay*",
    "modwh\x20https://www.mediafire.com/file/4btgeoy3mw5ibwj/Orginal+Wa+By+Vihanga+MD.apk/file",
    "early\x20friday",
    "recording",
    "infochat",
    "biscuit\x20Logo",
    "\x20144p",
    "9️⃣",
    "downloadAndSaveMediaMessage",
    "November",
    "*VIDEO\x20SIZE\x20UP\x20TO\x20100MB\x20⛔*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*Video\x20Name\x20:*\x20",
    "child_process",
    "sgif",
    "addmsg",
    "stikermeme",
    "tovn\x0a┃⬤",
    "fb\x0a┗━━━━━━━━━━⦿",
    "\x20your\x20song...*",
    "free",
    "discovery",
    "./lib/rude.json",
    "\x20」\x20━━*\x0a\x0a*UPTIME*\x20:\x20_",
    "Aps\x20Normal\x20Theme\x20Full\x20Antivirus",
    "*Failed\x20to\x20download\x20File*",
    "Infinity",
    "neonlight\x20",
    "beautiful\x0a┃⬤",
    "*Exif\x20successfully\x20changed\x20to\x0a\x0a>\x20Packname\x20:\x20",
    "sᴇʟᴇᴄᴛ\x20ᴠɪᴅᴇᴏ\x20ᴛʏᴘᴇ:",
    "conversation",
    "October",
    "\x0a*Dirawat*\x20:\x20",
    "videos",
    "like",
    "https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=",
    "Game\x20has\x20ended",
    "lava\x20Logo",
    "thumbnail",
    "\x20360p",
    "hhttps://telegra.ph/file/813ab01ad2063a14cd628.jpg",
    "link",
    "\x27\x20not\x20registered\x20in\x20the\x20message\x20list",
    "autobio",
    "*\x0a*Duration\x201-9\x20Seconds*",
    "No\x20hashes",
    "antilink\x0a┃⬤",
    "https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html",
    "group",
    "emit",
    "menu",
    "uptime",
    "23:59:00",
    "tiktok\x0a┃⬤",
    "divote",
    "shortmenu",
    "mp4",
    "ig\x0a┃⬤",
    "😵‍💫",
    "6️⃣",
    "All\x20Answers\x20Answered",
    "*▊▊▊ANTILINK\x20MODE▊▊▊*",
    "twitterstalk\x0a┗━━━━━━━━━━⦿\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x0a┏━❰\x20*CONVERT-STICKER*\x20❱\x0a┃⬤",
    "👸🏻",
    "Orginal\x20Whatsapp",
    "fromObject",
    "Select",
    "https://api.lolhuman.xyz/api/corona/zimbabwe?apikey=",
    "July",
    "සුබ\x20රාත්‍රියක්\x20🌙",
    "queen\x0a┃⬤",
    "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
    "pin",
    "bcall",
    "matrix\x20",
    "imagetopdf\x20\x0a┗━━━━━━━━━━━⦿",
    "location",
    "*Antilink\x20active*",
    "https://violetics.pw/api/downloader/youtube?apikey=",
    ".start",
    "groupUpdateDescription",
    "Epic\x20III",
    "*▊▊▊Morcco\x20People\x20Remove▊▊▊*",
    "formattedSize",
    "*Already\x20activated*",
    "🗂️\x20ᴛɪᴛʟᴇ\x20-\x20",
    "\x0a>\x20Like\x20:\x20",
    "candy",
    "neonlight\x20Logo",
    "YOUTUBE\x20DONG",
    "\x20*has\x20been\x20muted\x20in\x20this\x20group!*",
    "readmore",
    "*Sorry,\x20the\x20github\x20link\x20you\x20provided\x20is\x20private,\x20and\x20cant\x20be\x20made\x20into\x20a\x20file*",
    "snow-text",
    "mimetype",
    "wattpadsearch",
    "...*",
    "*Please\x20wait,\x20sending\x20repository..*",
    "සුබ\x20දහවලක්\x20🌞",
    "path",
    "family100",
    "stickermeme",
    "*Successfully\x20opened\x20edit\x20group\x20info*",
    "templateGif",
    "May",
    "cloud\x20Logo",
    "find",
    "sendContact",
    "size",
    "chalk",
    "-filter:a\x20\x22atempo=1.6,asetrate=22100\x22",
    "no_watermark",
    "Bitch",
    "thumb",
    "CLOSE",
    "botname",
    "twitter.com",
    "scrape-primbon",
    "Perfect\x20Player",
    "February",
    "SHORT\x20MENU",
    "\x20*Send\x20Broadcast\x20To*\x20",
    "*Bot\x20working\x20as\x20private\x20now\x20hope\x20you\x20will\x20enjoy*",
    "wiki",
    "discovery\x20",
    "❤️‍🩹",
    "hidetag",
    "meninggal",
    "*⬤URL\x20:*\x20",
    "bctext\x0a┃⬤",
    "*Total\x20corona\x20Zimbabwe*\x0a*Positif*\x20:\x20",
    "isBaileys",
    "230532OdZJhH",
    "August",
    "*Send\x20Image/Video\x20With\x20Caption*\x20",
    "3dstone2\x20",
    "\x20hi*",
    "14mYJIpO",
    "git",
    "lyrics\x20sorry",
    "styletext\x0a┃⬤",
    "Whatsapp\x20Group\x20🌍",
    "PLAYING",
    "Thank",
    "chat",
    "unblock\x0a┃⬤",
    "ᴡʜᴀᴛꜱᴀᴘᴘ\x20ɢʀᴏᴜᴘ\x20✅",
    "log",
    "listmsg\x0a┃⬤",
    "title",
    "lolkey",
    "_\x0a*│⏰\x20DURATION\x20:*\x20_",
    "tebak\x20tebakan",
    "firework",
    "snake-text",
    "antibadvideo",
    "*🐣\x20Your\x20are\x20welcome...\x20",
    "\x20halo\x20simi*",
    "setexif\x0a┃⬤",
    "unwatchFile",
    "*MEDIAFIRE\x20DOWNLOADER*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*Name*\x20:\x20",
    "keys",
    "\x20name\x20file",
    "media",
    "-filter:v\x20\x22minterpolate=\x27mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\x27\x22",
    "\x0a\x20\x20\x20\x20",
    "https://textpro.me/skeleton-text-effect-online-929.html",
    "private\x0a┃⬤",
    "source",
    "githubstalk",
    "Cant\x20Download\x20This\x20Mod",
    "swm",
    "bcall\x0a┃⬤",
    "https://api.lolhuman.xyz/api/corona/global?apikey=",
    "users",
    "\x0a━━━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a",
    "presences",
    "*Enter\x20a\x20Link\x20Query!*",
    "94715166712@s.whatsapp.net",
    "bitly",
    "\x20reject\x20the\x20suit,\x20the\x20suit\x20is\x20canceled",
    "sendButtonText",
    "*SONG\x20SIZE\x20UP\x20TO\x20100MB\x20⛔*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*Video\x20Name\x20:*\x20",
    "*For\x20What\x20Commands?*",
    "BOT\x20YOUTUBE\x20CHANNEL\x20",
    "bothelp",
    "leaves",
    "wamod",
    "blood\x20Logo",
    "*sorry\x20I\x20didn\x27t\x20kick\x20you,\x20because\x20you\x20sent\x20the\x20link\x20of\x20this\x20group\x20lucky\x20you*",
    "vihanga",
    "Github\x20🐼",
    "prepareMessageFromContent",
    "database",
    "https://github.com/vihangayt0/VihangaBot-MD-V2",
    "\x20🆙\x20\x0a⬤\x20*Role*:\x20*",
    "\x20\x20LIST\x20MENU\x20📃\x20\x20",
    "fotojatoh",
    "groupMetadata",
    "toxic\x20Logo",
    "*Already\x20on*",
    "whiteBright",
    "results",
    "bcloc",
    "ZIM-BOT-INC",
    "SINGLE_SELECT",
    "wallpaper\x0a┃⬤",
    "_\x0a*│🌐\x20AGO\x20:*\x20_",
    "playerX",
    "https://raw.githubusercontent.com/vihangayt0/VihangaBot-MD-V2/VihangaBot-MD/VihangaMD/VihangaMD.jpeg",
    "Low\x20Quality\x20Document\x20Song",
    "getDate",
    "transformer",
    "jsdom",
    "mute\x0a┃⬤",
    "sandsummer-beach",
    "replace",
    "twitterdl",
    "94762898541@s.whatsapp.net",
    "\x0a⦁*\x20𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗\x20:*\x20",
    "Sorry\x20the\x20faiture\x20is\x20error",
    "g-i-s",
    "_\x0a*Date📆\x20:*\x20_",
    "https://textpro.me/wood-text-effect-856.html",
    "stickerly\x0a┃⬤",
    "getSeconds",
    "\x20List\x20Menu\x20🫧*\x0a\x0a*Runtime⌚\x20:*\x20_",
    "https://textpro.me/3d-christmas-text-effect-by-name-1055.html",
    "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
    "MENU\x20📝",
    "get",
    "https://api.github.com/repos/",
    "jail\x0a┃⬤",
    "Elite\x20I",
    "️😊",
    "fotojatoh\x0a┃⬤",
    "\x0a\x0a*Waiting\x20for\x20the\x20opponent\x20to\x20choose*",
    "CLICK\x20HERE",
    "ytcomment",
    "/zipball",
    "attp\x0a┃⬤",
    "05:00:00",
    "*use\x20",
    "WEDNESDAY",
    "\x20*don\x27t\x20choose\x20suit,\x20game\x20over*",
    "performance-now",
    "c.us",
    "templateButtonReplyMessage",
    "\x20\x20\x20\x20720p\x20\x20\x20\x20",
    "0@s.whatsapp.net",
    "*Send/reply\x20image/sticker\x20with\x20caption*\x20",
    "*The\x20link\x20you\x20provided\x20is\x20not\x20valid*",
    "PHOTO",
    "blur",
    "botnma",
    "*\x0a\x20*AUTHOR\x20:*\x20",
    "anti212\x0a┃⬤",
    "currentTurn",
    "\x20zim\x20bot\x20zimbot-v3",
    "./lib/limit",
    "botAdmin",
    "\x0a*To\x20download\x20media,\x20please\x20click\x20one\x20of\x20the\x20buttons\x20below\x20or\x20enter\x20the\x20ytmp3/ytmp4\x20command\x20with\x20the\x20url\x20above*\x0a",
    "snow\x20Logo",
    "```\x0a",
    "ssweb\x0a┃⬤",
    "honey\x20",
    "banned",
    "linkgroup",
    "./database/banned.json",
    "song\x0a┃⬤",
    "*▊▊▊ANTILINK\x20BADWORDS▊▊▊*\x0a\x0a.",
    "close",
    "wanted",
    "botdev\x0a┃⬤",
    "robot",
    "sendPresenceUpdate",
    "vid",
    "March",
    "autoblock\x20on",
    "\x20180kbps",
    "Apr\x2002,\x202022\x2001:45:00",
    "No\x20Name",
    "invert",
    "ummadl",
    "./storage/user/buruan.js",
    "unavailable",
    ".net",
    "runtime\x0a┃⬤",
    "5415075znlXJj",
    "prefix",
    "antilink\x20off",
    "*error*",
    "block",
    "1917",
    "circuit\x20",
    "\x20on",
    "Use\x20example\x20",
    "powner",
    "antilink",
    "🎗️",
    "Monday",
    "inbblmsg",
    "private",
    "⬡\x20*Name\x20:*\x20",
    "./lib/converter",
    "MAIN\x20MENU",
    "*Already\x20deactivated*",
    "smeme\x0a┃⬤",
    "hasOwnProperty",
    "CONVERT\x20MENU",
    "antibadword\x0a┃⬤",
    "🖥️",
    "logomenu",
    "emojimix",
    "?apikey=",
    "\x0a🎧\x20sɪᴢᴇ\x20-\x20",
    "tomp3",
    "writeFileSync",
    "trim",
    "&text=",
    "toLowerCase",
    "\x20nama\x20anime",
    "*Already\x20off\x20okay*",
    "\x20*Successfully\x20Activated*",
    "antitiktok",
    "\x20-\x20",
    "dl_link",
    "botdev",
    "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
    "*Success\x20Removing\x20Banned\x20Users*",
    "invert\x0a┃⬤",
    "join\x0a┃⬤",
    "safari",
    "Reply\x20Image",
    "delete\x0a┃⬤",
    "length",
    "\x0aTIME\x20",
    "pindl\x0a┃⬤",
    "logo\x0a┃⬤",
    "*1\x20limit\x20used*",
    ".zip",
    "shortvid",
    "bcloc\x0a┃⬤",
    "antionce",
    "https://textpro.me/sparkles-merry-christmas-text-effect-1054.html",
    "\x20minute*",
    "toaudio\x20\x0a┃⬤",
    "covidindo\x0a┃⬤",
    "alive",
    "vote",
    "yts\x0a┃⬤",
    "```\x0a```🗃️\x20LOCATION\x20:\x20",
    "Successfully\x20deleted\x27",
    "brokenglass\x20",
    "*Sucecess\x20Broadcast*",
    "1080p",
    "bgGray",
    "timeout",
    "leave",
    "nightcore\x20\x0a┗━━━━━━━━━━⦿",
    "Limit\x20\x20reset",
    "*ON\x20OR\x20OFF*",
    "Mythical\x20Glory",
    "\x0a\x0a*View\x20list\x20of\x20Messages\x20With*\x20",
    "tovideo\x0a┃⬤",
    "beautiful",
    "anti212",
    "darkgold",
    "WebMessageInfo",
    "format",
    "util",
    "receiptTimestamp",
    "Update\x20",
    "SPEED\x20⚙️",
    "endsWith",
    "SUNDAY",
    "*Enter\x20the\x20Link\x20Group!*",
    "Mode\x20Edit\x20Info",
    "covidglobal\x0a┃⬤",
    "mediafire.com",
    "\x20320kbps",
    "\x20Not\x20found*",
    "\x0aDivote:\x20",
    "mute\x20on",
    "getHours",
    "High\x20Quality\x20Document\x20Song",
    "tags",
    "https://textpro.me/rock-text-effect-online-915.html",
    "multicolor",
    "Asia/Colombo",
    "pinterest",
    "https://xteam.xyz/imagetopdf?url=",
    "\x20Win!",
    "*ANTBADVIDEO\x20ON\x20NOW*",
    "python\x20SPEED\x20⚙️.py",
    "menu\x0a┗━━━━━━━━━━⦿\x0a​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x0a┏━❰\x20*SHORTLINK*\x20❱\x0a┃⬤",
    "\x20240p",
    "sparklechristmas\x20",
    "SENT",
    "covid",
    "සුබ\x20උදෑසනක්\x20🌄",
    "*\x0a\x0a*Thanks\x20To\x20💛*\x0a_ZIMBOT_\x0a_MR\x20NIMA_\x0a_KING\x20BUDDIKA_\x0a_DARK\x20NIRO_",
    "\x0a\x0a\x0aThere\x20is\x20",
    "metalic",
    "antiviewonce\x0a┗━━━━━━━━━━⦿",
    "*Sorry\x20An\x20error\x20occurred*",
    "./database/antilinkyt.json",
    "\x20https://github.com",
    "nama",
    "\x20📅\x20",
    "THURSDAY",
    "\x0a*Meninggal*\x20:\x20",
    "RECIEVED",
    "group2",
    "Tebak\x20Lontong",
    "fiction",
    "GITHUB",
    "SATURDAY",
    "Elite\x20III",
    "scifi\x20Logo",
    "ytvideo",
    "./storage/user/hasil_buruan.json",
    "berry\x20Logo",
    ".next",
    "❤️‍🔥",
    "toaudio",
    "\x20]\x20━━😈\x0a┃\x20[\x20*🎧\x20YT\x20DOWNLOADER\x20🎧*\x20]\x0a┗━━━━━━━━━━━━━━━[🐣]\x0a\x0a*╭─────────────◎*\x0a*│🌀\x20TITLE\x20:*\x20_",
    "modwh\x20https://www.mediafire.com/file/i4az6d9d11me9rl/Gb+Wa+By+Vihanga+MD.apk/file",
    "voicemenu",
    "\x20_ඔයාට\x20ඕන\x20mod\x20එක\x20තෝරන්න\x20🪀_\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*Mod\x20ගණන\x20:-*\x206",
    "https://textpro.me/biscuit-text-effect-858.html",
    "then",
    "https://textpro.me/lava-text-effect-online-914.html",
    "tebak\x20kalimat",
    "🖼️",
    "\x0aBab:\x20",
    "\x20*Successfully\x20Deactivated*",
    "*Autoblock\x20active*",
    "queen\x20",
    "447441437150",
    "messages.upsert",
    "*Autoblock\x20disabled*",
    "rabi\x27ul-awal",
    "group\x20close",
    "https://cililitan.herokuapp.com/api/",
    "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
    "```\x0a```🗃️\x20TWITTER\x20:\x20",
    "Keluar",
    "timestamp",
    "harrypotter",
    "chatModify",
    "groupUpdateSubject",
    "subname",
    "Guess\x20the\x20picture",
    "Succes\x20ban",
    "Legend\x20II",
    "*Successfully\x20added\x20message\x20in\x20message\x20list\x20as*\x20\x27",
    "*Send/Reply\x20Video/Audio/Image\x20You\x20Want\x20to\x20Broadcast\x20With\x20Caption*\x20",
    "getYear",
    "8️⃣",
    "admin",
    "tebak\x20lontong",
    "bothelp\x0a┃⬤",
    "*ban\x20lifted\x20you\x20happy*",
    "wait",
    "blown",
    "updateBlockStatus",
    "locked",
    "Hari\x20",
    "twitter",
    "bitch",
    "toolmenu",
    "porn",
    "deep",
    "https://textpro.me/metal-dark-gold-text-effect-online-939.html",
    "*Sorry,\x20failed\x20to\x20send\x20the\x20video*",
    "\x20\x20\x20\x20AUDIO\x20🎧\x20\x20\x20\x20",
    "18:00:00",
    "256kbps",
    "🧑🏻‍💻",
    "setdesc\x0a┃⬤",
    "*Reply\x20Video/Image\x20With\x20Caption*\x20",
    "*⬤QUALITY\x20:*\x20",
    "buttonsResponseMessage",
    "tebak\x20kata",
    "Successfully\x20activated\x20antitag!",
    "setcmd\x20\x0a┃⬤",
    "https://textpro.me/fruit-juice-text-effect-861.html",
    "cheerio",
    "turn",
    "Sunday",
    "logo1",
    "tebak\x20gambar",
    "matrix",
    "spooky\x20Logo",
    "June",
    "|text*",
    "antiwame",
    "\x0a>\x20Author\x20:\x20",
    "https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html",
    "strawberry",
    "send5ButImg",
    "jumadil-akhir",
    "ytmp3\x0a┃⬤",
    "demote\x0a┃⬤",
    "listmsg",
    "setmenu\x0a┃⬤",
    "lockcmd",
    "[KICK]",
    "delete",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*Video\x20Size\x20:*\x20",
    "stringify",
    "download",
    "144p",
    "TOOL\x20MENU",
    "circuit",
    "listResponseMessage",
    "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",
    "linkgroup\x0a┃⬤",
    "tourl",
    "true",
    "ytd",
    "error",
    "waterpipe\x20",
    "*User\x20has\x20been\x20banned*",
    "sembuh",
    "string",
    "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html",
    "\x201080p",
    "https://hardianto.xyz/api/maker/attp?text=",
    "https://textpro.me/halloween-fire-text-effect-940.html",
    "queen\x20Logo",
    "「\x20*VIHANGA\x20BROADCAST*\x20」\x0a\x0a",
    ".Thank",
    "./lib/antispam",
    "joker",
    "ALL\x20MENU",
    "ban",
    "video",
    "*Example\x20:\x20",
    "underwater",
    "Received\x20a\x20text\x20virus!",
    "antibadvideo\x0a┃⬤",
    "listmenu",
    "bcgroup\x0a┃⬤",
    "\x0a❌:\x20@",
    "lontong_desk",
    "autoblock\x0a┃⬤",
    "open",
    "stickerwm",
    "\x0a⬡\x20*USER\x20:*\x20@",
    "fakeObj",
    "quality",
    "mediafire\x0a┃⬤",
    "\x0a*Mime*\x20:\x20",
    "success",
    "./lib/liyascrape.js",
    "readmore\x0a┃⬤",
    "packname",
    "```\x0a```📮\x20FOLLOWERS\x20:\x20",
    "play\x0a┃⬤",
    "Tebak\x20Kalimat",
    "convertmenu",
    "pushName",
  ];
  _0x1eec = function () {
    return _0x18ca8c;
  };
  return _0x1eec();
}
const {
    WAVihangaMDection,
    MessageType,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    PresenceUpdate,
    Presence,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
  } = require(_0xc8d9d0(0x5a4)),
  fs = require("fs"),
  util = require(_0xc8d9d0(0x463)),
  chalk = require(_0xc8d9d0(0x35e)),
  cheerio = require(_0xc8d9d0(0x4d9)),
  { exec, spawn, execSync } = require(_0xc8d9d0(0x2fd)),
  axios = require("axios"),
  path = require(_0xc8d9d0(0x354)),
  fetch = require("node-fetch"),
  google = require(_0xc8d9d0(0x2f0));
let { msgFilter } = require(_0xc8d9d0(0x507));
const os = require("os"),
  hx = require(_0xc8d9d0(0x56b)),
  mel = require(_0xc8d9d0(0x241)),
  xa = require(_0xc8d9d0(0x1bd)),
  moment = require(_0xc8d9d0(0x5cf)),
  { JSDOM } = require(_0xc8d9d0(0x3c6)),
  SPEED = require(_0xc8d9d0(0x3e6)),
  { performance } = require(_0xc8d9d0(0xf5)),
  { Primbon } = require(_0xc8d9d0(0x366)),
  maker = require(_0xc8d9d0(0x160)),
  primbon = new Primbon(),
  {
    smsg,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    format,
    parseMention,
    getRandom,
  } = require(_0xc8d9d0(0x5bc)),
  {
    limitAdd,
    addBalance,
    kurangBalance,
    getBalance,
    isGame,
    gameAdd,
    givegame,
    cekGLimit,
  } = require(_0xc8d9d0(0x3f4)),
  _limitOrg = JSON["parse"](fs[_0xc8d9d0(0x18d)](_0xc8d9d0(0x1c4))),
  level = require("./lib/level"),
  { mediafireDl } = require("./lib/mediafire.js"),
  textpro = require("./lib/textpro"),
  _antivirtex = JSON[_0xc8d9d0(0x60f)](
    fs[_0xc8d9d0(0x18d)]("./database/antivirtex.json")
  ),
  zimbot = JSON["parse"](fs["readFileSync"](_0xc8d9d0(0x1c1))),
  setting = JSON[_0xc8d9d0(0x60f)](fs[_0xc8d9d0(0x18d)](_0xc8d9d0(0x585)));
(limitawal = _0xc8d9d0(0x28e)),
  (botname = global["botname"]),
  (wm = global[_0xc8d9d0(0x364)]),
  (global[_0xc8d9d0(0x112)] = _0xc8d9d0(0x4d0)),
  (limitCount = setting[_0xc8d9d0(0x175)]);
const limit = JSON[_0xc8d9d0(0x60f)](fs["readFileSync"](_0xc8d9d0(0x1c4))),
  antiwame = JSON[_0xc8d9d0(0x60f)](fs[_0xc8d9d0(0x18d)](_0xc8d9d0(0x1b0))),
  antilinkyt = JSON[_0xc8d9d0(0x60f)](fs[_0xc8d9d0(0x18d)](_0xc8d9d0(0x487))),
  antibule = JSON[_0xc8d9d0(0x60f)](fs[_0xc8d9d0(0x18d)](_0xc8d9d0(0x56e))),
  balance = JSON[_0xc8d9d0(0x60f)](fs[_0xc8d9d0(0x18d)](_0xc8d9d0(0x179))),
  premium = JSON[_0xc8d9d0(0x60f)](
    fs[_0xc8d9d0(0x18d)]("./database/premium.json")
  ),
  _level = JSON[_0xc8d9d0(0x60f)](fs[_0xc8d9d0(0x18d)](_0xc8d9d0(0x1ab))),
  banned = JSON[_0xc8d9d0(0x60f)](fs["readFileSync"](_0xc8d9d0(0x3fd))),
  dripsanti = JSON[_0xc8d9d0(0x60f)](fs[_0xc8d9d0(0x18d)]("./lib/rude.json"));
let bad = JSON[_0xc8d9d0(0x60f)](fs["readFileSync"](_0xc8d9d0(0x306)));
const autoblock = JSON[_0xc8d9d0(0x60f)](
    fs["readFileSync"]("./database/autoblock.json")
  ),
  dripsno = JSON["parse"](fs[_0xc8d9d0(0x18d)](_0xc8d9d0(0x1ff))),
  dripswelcome = JSON["parse"](fs["readFileSync"](_0xc8d9d0(0x2ea)));
module[_0xc8d9d0(0xd1)] = VihangaMD = async (
  _0x3c6f67,
  _0x5882aa,
  _0x3b3121,
  _0x13b481
) => {
  const _0x2379bf = _0xc8d9d0;
  try {
    var _0x64de09 =
        _0x5882aa[_0x2379bf(0x10c)] === _0x2379bf(0x30f)
          ? _0x5882aa[_0x2379bf(0x221)][_0x2379bf(0x30f)]
          : _0x5882aa[_0x2379bf(0x10c)] == _0x2379bf(0x226)
          ? _0x5882aa[_0x2379bf(0x221)]["imageMessage"]["caption"]
          : _0x5882aa[_0x2379bf(0x10c)] == _0x2379bf(0x1cd)
          ? _0x5882aa["message"][_0x2379bf(0x1cd)][_0x2379bf(0x1c9)]
          : _0x5882aa[_0x2379bf(0x10c)] == _0x2379bf(0x124)
          ? _0x5882aa[_0x2379bf(0x221)][_0x2379bf(0x124)][_0x2379bf(0x551)]
          : _0x5882aa[_0x2379bf(0x10c)] == _0x2379bf(0x4d4)
          ? _0x5882aa["message"]["buttonsResponseMessage"][_0x2379bf(0x637)]
          : _0x5882aa["mtype"] == _0x2379bf(0x4f5)
          ? _0x5882aa[_0x2379bf(0x221)][_0x2379bf(0x4f5)]["singleSelectReply"][
              "selectedRowId"
            ]
          : _0x5882aa[_0x2379bf(0x10c)] == _0x2379bf(0x3e8)
          ? _0x5882aa[_0x2379bf(0x221)][_0x2379bf(0x3e8)][_0x2379bf(0x611)]
          : _0x5882aa["mtype"] === "messageContextInfo"
          ? _0x5882aa[_0x2379bf(0x221)]["buttonsResponseMessage"]?.[
              _0x2379bf(0x637)
            ] ||
            _0x5882aa[_0x2379bf(0x221)][_0x2379bf(0x4f5)]?.[_0x2379bf(0x62a)][
              _0x2379bf(0x535)
            ] ||
            _0x5882aa[_0x2379bf(0x551)]
          : "",
      _0x21a345 =
        typeof _0x5882aa[_0x2379bf(0x551)] == _0x2379bf(0x4ff)
          ? _0x5882aa[_0x2379bf(0x551)]
          : "",
      _0x36556c = prefa
        ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi["test"](_0x64de09)
          ? _0x64de09["match"](/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0x0]
          : ""
        : prefa ?? global[_0x2379bf(0x412)];
    const _0x4895e0 = _0x64de09["startsWith"](_0x36556c),
      _0x3cc7d5 = _0x64de09[_0x2379bf(0x3c9)](_0x36556c, "")
        [_0x2379bf(0x42f)]()
        [_0x2379bf(0x270)](/ +/)
        [_0x2379bf(0x21f)]()
        [_0x2379bf(0x431)](),
      _0x391443 = _0x64de09[_0x2379bf(0x42f)]()
        [_0x2379bf(0x270)](/ +/)
        [_0x2379bf(0x635)](0x1),
      _0x1c6102 = _0x5882aa["pushName"] || _0x2379bf(0x40a),
      _0x3f77c4 = await _0x3c6f67["decodeJid"](
        _0x3c6f67[_0x2379bf(0x64f)]["id"]
      ),
      _0x3f1ada = [_0x3f77c4, ...global["owner"]]
        ["map"](
          (_0x108c7a) =>
            _0x108c7a[_0x2379bf(0x3c9)](/[^0-9]/g, "") + _0x2379bf(0x5b3)
        )
        [_0x2379bf(0x643)](_0x5882aa[_0x2379bf(0x602)]),
      _0x56cb83 = _0x5882aa[_0x2379bf(0x602)] == _0x3f77c4 ? !![] : ![],
      _0x55d4b5 = (q = _0x391443[_0x2379bf(0x1ed)]("\x20")),
      _0x36bed4 = _0x5882aa[_0x2379bf(0x21d)]
        ? _0x5882aa[_0x2379bf(0x21d)]
        : _0x5882aa,
      _0x496060 = _0x5882aa["sender"],
      _0x43fcea = _0x5882aa["chat"],
      _0x7d1727 = banned[_0x2379bf(0x643)](_0x5882aa[_0x2379bf(0x602)]),
      _0x329f10 = (_0x36bed4["msg"] || _0x36bed4)[_0x2379bf(0x34f)] || "",
      _0x3dde74 = /image|video|sticker|audio/[_0x2379bf(0x265)](_0x329f10),
      _0x53e2cc = autoblock["includes"](_0x2379bf(0x5b3)),
      _0x8f0400 = _0x5882aa["isGroup"]
        ? await _0x3c6f67[_0x2379bf(0x3b7)](_0x5882aa[_0x2379bf(0x381)])[
            "catch"
          ]((_0x116fa7) => {})
        : "",
      _0xbfed05 = _0x5882aa[_0x2379bf(0x12c)] ? _0x8f0400["subject"] : "",
      _0x9a5c15 = _0x5882aa[_0x2379bf(0x12c)]
        ? await _0x8f0400[_0x2379bf(0x13b)]
        : "",
      _0x241510 = _0x5882aa[_0x2379bf(0x12c)]
        ? await _0x9a5c15[_0x2379bf(0x52f)](
            (_0x4378ee) => _0x4378ee[_0x2379bf(0x4bd)] !== null
          )[_0x2379bf(0x188)]((_0x3559bd) => _0x3559bd["id"])
        : "",
      _0xf26876 = _0x5882aa[_0x2379bf(0x12c)] ? _0x8f0400["owner"] : "",
      _0x1ac585 = _0x5882aa[_0x2379bf(0x12c)]
        ? _0x241510[_0x2379bf(0x643)](_0x3f77c4)
        : ![],
      _0x213667 = _0x5882aa["isGroup"]
        ? _0x241510[_0x2379bf(0x643)](_0x5882aa["sender"])
        : ![],
      _0x58ced9 = _0x5882aa[_0x2379bf(0x12c)]
        ? antiwame[_0x2379bf(0x643)](_0x5882aa[_0x2379bf(0x381)])
        : ![],
      _0x36f2c9 = _0x5882aa[_0x2379bf(0x12c)]
        ? _antivirtex["includes"](_0x5882aa[_0x2379bf(0x381)])
        : ![],
      _0x37a907 = _0x5882aa[_0x2379bf(0x12c)]
        ? antilinkyt[_0x2379bf(0x643)](_0x5882aa["chat"])
        : ![],
      _0x26a6d5 = _0x5882aa[_0x2379bf(0x12c)]
        ? antibule[_0x2379bf(0x643)](_0x5882aa[_0x2379bf(0x381)])
        : ![],
      _0x4f48a8 = _0x5882aa["isGroup"]
        ? dripsanti[_0x2379bf(0x643)](_0x43fcea)
        : ![],
      _0x1aaba7 = _0x64de09[_0x2379bf(0x635)](0x0)
        [_0x2379bf(0x42f)]()
        [_0x2379bf(0x270)](/ +/)
        [_0x2379bf(0x21f)]()
        [_0x2379bf(0x431)](),
      _0x4e3bad =
        _0x3f1ada ||
        global[_0x2379bf(0x121)]
          [_0x2379bf(0x188)](
            (_0x2c6164) =>
              _0x2c6164["replace"](/[^0-9]/g, "") + _0x2379bf(0x5b3)
          )
          [_0x2379bf(0x643)](_0x5882aa[_0x2379bf(0x602)]) ||
        ![],
      _0x21e7f7 = _0x5882aa[_0x2379bf(0x12c)]
        ? dripsno[_0x2379bf(0x643)](_0x5882aa[_0x2379bf(0x381)])
        : ![],
      _0x241f5a = _0x5882aa[_0x2379bf(0x12c)]
        ? dripswelcome[_0x2379bf(0x643)](_0x5882aa[_0x2379bf(0x381)])
        : ![],
      _0x5d6fa7 = moment["tz"](_0x2379bf(0x476))["format"](_0x2379bf(0x162)),
      _0x2d600e = new Date(_0x2379bf(0x409)),
      _0x3709b9 = new Date()[_0x2379bf(0xe1)](),
      _0x21a4f5 = _0x2d600e - _0x3709b9,
      _0x32a111 = Math[_0x2379bf(0xfc)](
        _0x21a4f5 / (0x3e8 * 0x3c * 0x3c * 0x18)
      ),
      _0x57c3e2 = Math["floor"](
        (_0x21a4f5 % (0x3e8 * 0x3c * 0x3c * 0x18)) / (0x3e8 * 0x3c * 0x3c)
      ),
      _0x27ea83 = Math[_0x2379bf(0xfc)](
        (_0x21a4f5 % (0x3e8 * 0x3c * 0x3c)) / (0x3e8 * 0x3c)
      ),
      _0x64245d = Math[_0x2379bf(0xfc)]((_0x21a4f5 % (0x3e8 * 0x3c)) / 0x3e8),
      _0xfc5f4b =
        _0x32a111 +
        _0x2379bf(0x4c5) +
        _0x57c3e2 +
        _0x2379bf(0x53b) +
        _0x27ea83 +
        "Menit\x20" +
        _0x64245d +
        _0x2379bf(0x5f2);
    var _0x334e4f = new Date(),
      _0x2529a9 = _0x334e4f[_0x2379bf(0x65d)](),
      _0x38714b = _0x334e4f[_0x2379bf(0x539)](),
      _0x1744ac = _0x334e4f[_0x2379bf(0x539)](),
      _0x5c65a3 = _0x334e4f[_0x2379bf(0x3c4)](),
      _0x312dac = _0x334e4f[_0x2379bf(0x3c4)](),
      _0x5d6791 = _0x334e4f[_0x2379bf(0x1a0)](),
      _0x2036c9 = _0x334e4f[_0x2379bf(0x471)](),
      _0x109fdf = _0x334e4f["getMinutes"](),
      _0x18d564 = _0x334e4f[_0x2379bf(0x3d2)](),
      _0x14fcda = _0x334e4f["getHours"]();
	  
    switch (command) {
      case "sc":
      case "script":
      case "sourcecode":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          teks = `*${global.BotName}'s Script*\n\n*GitHub*: ${global.BotSourceCode}\n\nDont forget to follow me on *GitHub* and give a ⭐️ to my projects. `;
          let buttons = [
            {
              buttonId: `-menu`,
              buttonText: { displayText: "✨Bot Menu✨" },
              type: 1,
            },
          ];
          let buttonMessage = {
            image: Thumb,
            jpegThumbnail: BotLogo,
            caption: teks,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4,
            /*contextInfo:{externalAdReply:{
    title:"Powered by Pelpav",
    body: " ", 
    thumbnail: fs.readFileSync("Assets/pic2.jpg"),
    mediaType:1,
    mediaUrl: 'https://wallpapercave.com/wp/wp10524580.jpg',
    sourceUrl: "https://wallpapercave.com/wp/wp10524580.jpg"
    }}*/
          };
          Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        break;

      case "me":
      case "profile":
      case "p":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isDarah) {
          addInventoriDarah(m.sender, DarahAwal);
        }
        if (!isInventory) {
          addInventori(m.sender);
        }
        if (!isInventoriBuruan) {
          addInventoriBuruan(m.sender);
        }

        var flob = await getBuffer(picak + "User Profile");
        var bio = await Miku.fetchStatus(m.sender);
        var bioo = bio.status;
        const adn = isAdmins ? "True" : "False";

        try {
          pfp = await Miku.profilePictureUrl(m.sender, "image");
        } catch (e) {
          pfp =
            "https://images.wallpapersden.com/image/download/code-geass-lelouch-lamperouge-anime_a2dqbpSZmpqtpaSklGhtaWWtZ2ZrZQ.jpg";
        }

        const profilexx = `*「  Information Profil  」*\n\n*Nom de l'utilisateur* : ${pushname}\n*Bio* : ${bioo}\n*Administrateur* : ${adn}\n*Niveau* : ${levelMenu}\n*XP* : ${xpMenu} hors de ${reqXp}\n*Role* : ${role}`;

        let buttonspro = [
          {
            buttonId: `-soulmate`,
            buttonText: { displayText: "Ton âme soeur" },
            type: 1,
          },
        ];
        let buttonMessage = {
          image: { url: pfp },
          caption: profilexx,
          footer: `${BotName}`,
          buttons: buttonspro,
          headerType: 4,
        };
        Miku.sendMessage(m.chat, buttonMessage, { quoted: m });

        break;

      case "banchat":
      case "bangroup":
        {
          if (isBan) return reply(mess.banned);
          if (!isCreator) return replay(mess.botowner);
          if (args[0] === "on") {
            if (isBanChat)
              return replay("This Group is Already Banned from using me!");
            banchat.push(from);
            replay("This Group has been banned from using me!");
            var groupe = await Miku.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Miku.sendMessage(
              from,
              {
                text: `\`\`\`「 Notice 」\`\`\`\n\nThis group is banned from using bot. So, here nobody can use me anymore!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!isBanChat)
              return replay("This Group is Already Banned from using me!");
            let off = banchat.indexOf(from);
            banchat.splice(off, 1);
            replay("This Group has been *unbanned* from using me!");
          } else {
            let buttonsntnsfw = [
              {
                buttonId: `-bangroup on`,
                buttonText: { displayText: "Ban" },
                type: 1,
              },
              {
                buttonId: `-bangroup off`,
                buttonText: { displayText: "Unban" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonsntnsfw,
              `Please choose any Button below.\n\n *On / Off*`,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "botgrups":
      case "botgroups":
      case "botgrup":
      case "botgroup":
        if (isBan) return reply(mess.ban);
        if (isBanChat) return reply(mess.banChat);
        reply(` Don't forget to join yeah!

*GROUPE*
https://chat.whatsapp.com/IroP01WmdScH5DSN9pY7C4 `);
        break;
      case "getsxvdxcmd":
        {
          if (isBan) return reply(mess.ban);
          if (isBanChat) return reply(mess.banChat);
          Miku.sendMessage(
            from,
            { sticker: { url: "https://ZackMiku.github.io/media/menu.webp" } },
            { quoted: m }
          );
          Miku.sendMessage(
            from,
            {
              sticker: {
                url: "https://ZackMiku.github.io/media/groupopen.webp",
              },
            },
            { quoted: m }
          );
          Miku.sendMessage(
            from,
            {
              sticker: {
                url: "https://ZackMiku.github.io/media/groupclose.webp",
              },
            },
            { quoted: m }
          );
        }
        break;

      case "support":
      case "supportgc":
        reply(
          `*My developer's group:*https://chat.whatsapp.com/IroP01WmdScH5DSN9pY7C4 `
        );
        break;

      case "nsfwmenu":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!AntiNsfw) return reply(mess.nonsfw);
        reply(
          ` *━━━〈  📛 NSFW Menu 📛  〉━━━*\n\nhentaivideo, blowjobgif, hneko, masturbation, thighs, pussy, panties, orgy, ahegao, ass, bdsm, blowjob, cuckold, ero, gasm, cum, femdom, foot, gangbang, glasses, jahy, trap, blowjobgif, spank, hneko, hwaifu, gasm`
        );
        break;

      case "reaction":
      case "react":
      case "reactions":
      case "r":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(
          ` *━━━〈  📍 Reactions 📍  〉━━━*\n\nbonk, cry, bully, cuddle, hug, kiss, lick, pat, smug, yeet, blush, smile, wave, highfive, handhold, nom, glomp, bite, slap, kill, happy, wink, poke, dance, cringe`
        );
        break;

      case "limituser":
      case "userlimit":
      case "limit":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        {
          let txt = `「 *All User Limit* 」\n\n`;
          for (let i of _limit) {
            txt += ` *User ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${
              i.limit
            }\n`;
          }
          reply(txt);
        }
        break;

      case "ringtone":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args.join(" "))
            return reply(`Example: ${prefix}ringtone black over`);
          let { ringtone } = require("./lib/scraper");
          let anu = await ringtone(text);
          let result = anu[Math.floor(Math.random() * anu.length)];
          Miku.sendMessage(
            m.chat,
            {
              audio: { url: result.audio },
              fileName: result.title + ".mp3",
              mimetype: "audio/mpeg",
            },
            { quoted: m }
          );
        }
        break;

      case "film":
      case "movie":
      case "moviesearch":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.waiting);
        if (!q)
          return reply(
            `Please enter a Movie search term...\nExample: ${prefix}movie Spiderman`
          );
        xfarrapi.Film(q).then((data) => {
          console.log(data);
          let krl = `*Search Term:* ${q}\n\n`;
          for (let i of data) {
            krl += `-----------------------------------------------------------------------------\n\n\n*Movie Name:* ${i.judul}\n *Quality :* ${i.quality}\n *Type : ${i.type}*\n *Uploaded on :* ${i.upload}\n *Source URL :* ${i.link}\n\n\n`;
          }
          Miku.sendMessage(
            from,
            { image: { url: data[0].thumb }, caption: krl },
            { quoted: fdocs }
          );
        });
        break;

      //=======================================

      case "wallpaper":
      case "animewallpaper":
      case "animewall":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args.join(" ")) return reply("Please enter a term to search!");
          const { AnimeWallpaper } = require("anime-wallpaper");
          const wall = new AnimeWallpaper();
          const pages = [1, 2, 3, 4];
          const random = pages[Math.floor(Math.random() * pages.length)];
          const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
          const i = Math.floor(Math.random() * wallpaper.length);

          let buttons = [
            {
              buttonId: `-wallpaper ${args.join(" ")}`,
              buttonText: { displayText: ">>" },
              type: 1,
            },
          ];
          let buttonMessage = {
            image: { url: wallpaper[i].image },
            caption: `*Search term:* ${q}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4,
          };
          Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        break;

      case "wikimedia":
      case "wikiimage":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args.join(" "))
            return reply("What picture are you looking for??");
          let { wikimedia } = require("./lib/scraper");
          anu = await wikimedia(args);
          hasil = anu[Math.floor(Math.random() * anu.length)];
          let buttons = [
            {
              buttonId: `-wikimedia ${args.join(" ")}`,
              buttonText: { displayText: "Next Image" },
              type: 1,
            },
          ];
          let buttonMessage = {
            image: { url: hasil.image },
            caption: `Title : ${hasil.title}\nSource : ${hasil.source}\nMedia Url : ${hasil.image}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4,
          };
          Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        break;

      case "quotesimagexxx":
      case "qoutesimagexxx":
      case "quoteimage":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        let cok = await fetchJson(
          `http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`
        );
        reply(mess.waiting);
        Miku.sendMessage(
          m.chat,
          { image: { url: cok }, caption: "Here it is..." },
          { quoted: m }
        );
        break;

      case "quotesanime":
      case "quoteanime":
      case "animequote":
      case "animequotes":
        {
          let { quotesAnime } = require("./lib/scraper");
          let anu = await quotesAnime();
          hasil = anu[Math.floor(Math.random() * anu.length)];
          let buttons = [
            {
              buttonId: `-quotesanime`,
              buttonText: { displayText: ">>" },
              type: 1,
            },
          ];
          let buttonMessage = {
            text: `_${hasil.quotes}_\n\nBy '${hasil.karakter}', ${hasil.anime}\n\n- ${hasil.up_at}`,
            footer: "Miku",
            buttons: buttons,
            headerType: 2,
          };
          Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        break;

      case "animestory":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          reply(mess.waiting);
          await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`).then(
            (res) => {
              console.log(res);
              let sections = [];
              for (let i of res.data) {
                const list = {
                  title: `${i.title}`,
                  rows: [
                    {
                      title: `${i.title}\n\n`,
                      rowId: `${prefix}animesearch ${i.mal_id}`,
                      description: `${i.synopsis}`,
                    },
                  ],
                };
                sections.push(list);
              }
              const sendm = Miku.sendMessage(
                from,
                {
                  text: "Anime Search",
                  footer: BotName,
                  title: OwnerName,
                  buttonText: "Search Results",
                  sections,
                },
                { quoted: m }
              );
            }
          );
        }
        break;

      case "grupsetting":
      case "groupsetting":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          let sections = [];
          let com = [
            `group open`,
            `leveling on`,
            `antilinkgc on`,
            `antilinktg on`,
            `antilinktt on`,
            `antilinkytch on`,
            `antilinkytvid on`,
            `antilinkig on`,
            `antilinkfb on`,
            `antilinktwit on`,
            `antilinkall on`,
            `antiwame on`,
          ];
          let comm = [
            `group close`,
            `leveling off`,
            `antilinkgc off`,
            `antilinktg off`,
            `antilinktt off`,
            `antilinkytch off`,
            `antilinkytvid off`,
            `antilinkig on`,
            `antilinkfb off`,
            `antilinktwit off`,
            `antilinkall off`,
            `antiwame off`,
          ];
          let listnya = [
            `Group open/close`,
            `Leveling on/off`,
            `Antilink Group on/off`,
            `Antilink Telegram on/off`,
            `Antilink Tiktok on/off`,
            `Antilink Youtube Channel on/off`,
            `Antilink Youtube Video on/off`,
            `Antilink Instagram on/off`,
            `Antilink Facebook on/off`,
            `Antilink Twitter on/off`,
            `Antilink All on/off`,
            `Anti Wame on/off`,
          ];
          let suruh = [`Enable`, `Disable`];
          let fiturname = [
            `Group`,
            `Leveling`,
            `Auto Sticker`,
            `Antilink Group`,
            `Antilink Telegram`,
            `Antilink Tiktok`,
            `Antilink Youtube Channel`,
            `Antilink Youtube Video`,
            `Antilink Instagram`,
            `Antilink Facebook`,
            `Antilink Twitter`,
            `Antilink All`,
            `Anti Wame`,
            `Auto Revoke`,
          ];
          let startnum = 0;
          let startnu = 0;
          let startn = 0;
          let start = 0;
          let startnumm = 1;
          for (let x of com) {
            const yy = {
              title: `${listnya[startnum++]}`,
              rows: [
                {
                  title: `${suruh[0]}`,
                  description: `Activate ${fiturname[startnu++]}`,
                  rowId: `${prefix}${x}`,
                },
                {
                  title: `${suruh[1]}`,
                  description: `Deactivate ${fiturname[startn++]}`,
                  rowId: `${prefix}${comm[start++]}`,
                },
              ],
            };
            sections.push(yy);
          }
          const sendm = Miku.sendMessage(
            from,
            {
              text: "Paramètres de groupe",
              footer: BotName,
              title: "Définissez vos paramètres de groupe ici...",
              buttonText: "Clique",
              sections,
            },
            { quoted: m }
          );
        }
        break;

      /*
case 'animesearchxxx': case 'anime':{
    await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
    .then((res) => {
    let txt = `   _Anime Search Engine_ \n\n*Title:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Anime Type:* *${res.data.type}*\n*Adaptation:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Yes' : 'No'}*\n*Aired:* *${res.data.aired.string}*\n*Duration:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Main Producer:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
    Miku.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
    })
    }
    break
*/

      case "coffee":
      case "kopi":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          let buttons = [
            { buttonId: `-coffee`, buttonText: { displayText: ">>" }, type: 1 },
          ];
          let buttonMessage = {
            image: { url: "https://coffee.alexflipnote.dev/random" },
            caption: `Here is your Coffee...`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4,
          };
          Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        break;

      case "emojimix":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!q) reply(`*Example :* ${prefix + command} 🦉+🤣`);
          let [emoji1, emoji2] = q.split`+`;
          let kuntuh = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1
            )}_${encodeURIComponent(emoji2)}`
          );
          for (let res of kuntuh.results) {
            let encmedia = await Miku.sendImageAsSticker(from, res.url, m, {
              packname: global.packname,
              author: global.author,
              categories: res.tags,
            });
            await fs.unlinkSync(encmedia);
          }
        }
        break;

      case "getcase":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (m.isGroup) reply(mess.privateonly);
        if (!isCreator) return reply(mess.botowner);
        const getCase = (cases) => {
          return (
            "case" +
            `'${cases}'` +
            fs
              .readFileSync("Core.js")
              .toString()
              .split("case '" + cases + "'")[1]
              .split("break")[0] +
            "break"
          );
        };
        replay(`${getCase(q)}`);
        break;

      case "emoji":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args.join(" ")) return reply("Where is the emoji?");
          emoji.get(args.join(" ")).then(async (emoji) => {
            let mese = await Miku.sendMessage(
              m.chat,
              { image: { url: emoji.images[4].url }, caption: `Here it is...` },
              { quoted: m }
            );
            await Miku.sendMessage(
              from,
              { text: "reply -s to this image to make sticker" },
              { quoted: mese }
            );
          });
        }
        break;

      /*
case 'delete': case 'del': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return
 let { chat, fromMe, id, isBaileys } = m.quoted
 if (!isBaileys) return replay('How can i delete messages of other person? Baka!')
 Miku.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
 }
 break
*/

      case "deleteall":
      case "delall":
      case "delete":
      case "del":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (!m.quoted) return reply("Please mention a message baka!");
          let { chat, fromMe, id } = m.quoted;

          const key = {
            remoteJid: m.chat,
            fromMe: false,
            id: m.quoted.id,
            participant: m.quoted.sender,
          };

          await Miku.sendMessage(m.chat, { delete: key });
        }
        break;

      case "listpc":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          let anu = await store.chats
            .all()
            .filter((v) => v.id.endsWith(".net"))
            .map((v) => v);
          let teks = ` 「  Miku's pm user list  」\n\nTotal ${anu.length} users are using Miku in personal chat.`;
          for (let i of anu) {
            teks += `\n\nProfile : @${i.id.split("@")[0]}\nChat : ${
              i.unreadCount
            }\nLastchat : ${moment(i.conversationTimestamp * 1000)
              .tz("Asia/Kolkata")
              .format("DD/MM/YYYY HH:mm:ss")}`;
          }
          Miku.sendTextWithMentions(m.chat, teks, m);
        }
        break;

      case "listgc":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          let anu = await store.chats
            .all()
            .filter((v) => v.id.endsWith("@g.us"))
            .map((v) => v.id);
          let teks = ` 「  Miku's group user list  」\n\nTotal ${anu.length} users are using bot in Groups.`;
          for (let i of anu) {
            let metadata = await Miku.groupMetadata(i);
            if (metadata.owner === "undefined") {
              loldd = false;
            } else {
              loldd = metadata.owner;
            }
            teks += `\n\nName : ${
              metadata.subject ? metadata.subject : "undefined"
            }\nOwner : ${
              loldd ? "@" + loldd.split("@")[0] : "undefined"
            }\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${
              metadata.creation
                ? moment(metadata.creation * 1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")
                : "undefined"
            }\nMember : ${
              metadata.participants.length
                ? metadata.participants.length
                : "undefined"
            }`;
          }
          Miku.sendTextWithMentions(m.chat, teks, m);
        }
        break;

      case "afk":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          let user = global.db.users[m.sender];
          user.afkTime = +new Date();
          user.afkReason = args.join(" ");
          replay(
            `${m.pushName} is now Away From Keyboard.\nAFK Reason : ${
              args.join(" ") ? args.join(" ") : ""
            }`
          );
        }
        break;

      case "fliptext":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (args.length < 1)
            return replay(`Example:\n${prefix}fliptext ${OwnerName}`);
          quere = args.join(" ");
          flipe = quere.split("").reverse().join("");
          replay(
            `\`\`\`「  Text Flipper Tool  」\`\`\`\n*Input text :*\n${quere}\n*Fliped text :*\n${flipe}`
          );
        }
        break;

      case "toletter": {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`);
        try {
          quere = args.join(" ");
          convertes = await toHur(quere);
          replay(
            `\`\`\`「  Word Maker Tool  」\`\`\`\n*Input Number :*\n${quere}\n*Converted Alphabet :*\n${convertes}`
          );
        } catch {
          replay(`Error!`);
        }
      }

      case "leveling":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        if (!isAdmins && !isCreator) return reply(mess.useradmin);
        if (args.length < 1)
          return reply("Type on to *Enable*\nType off to *Disable*");
        if (args[0] === "on") {
          if (isLeveling) return reply(`Already activated`);
          _leveling.push(from);
          fs.writeFileSync(
            "./database/leveling.json",
            JSON.stringify(_leveling)
          );
          reply("Leveling activated");
        } else if (args[0] === "off") {
          let anu = _leveling.indexOf(from);
          _leveling.splice(anu, 1);
          fs.writeFileSync(
            "./database/leveling.json",
            JSON.stringify(_leveling)
          );
          reply("Leveling deactivated");
        }
        break;

      case "antilinkgc":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "on") {
            if (AntiLink) return replay("Already activated");
            ntilink.push(from);
            replay("Activated _Antilink_ in this group.");
            var groupe = await Miku.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Miku.sendMessage(
              from,
              {
                text: `\`\`\`「 Attention ! 」\`\`\`\n\nAntilink System Activated!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLink) return replay("Already deactivated!");
            let off = ntilink.indexOf(from);
            ntilink.splice(off, 1);
            replay("Deactivated _Antilink_ in this group!");
          } else {
            let buttonsntilink = [
              {
                buttonId: `-antilinkgc on`,
                buttonText: { displayText: "On" },
                type: 1,
              },
              {
                buttonId: `-antilinkgc off`,
                buttonText: { displayText: "Off" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonsntilink,
              `Please click the button below On / Off`,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "antilinkyoutubevideo":
      case "antilinkyoutubevid":
      case "antilinkytvid":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "on") {
            if (AntiLinkYoutubeVid) return replay("Already activated");
            ntilinkytvid.push(from);
            replay("Activated youtube video antilink !");
            var groupe = await Miku.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Miku.sendMessage(
              from,
              {
                text: `\`\`\`「 Attention ! 」\`\`\`\n\nAntilink System Activated!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkYoutubeVid) return replay("Already deactivated");
            let off = ntilinkytvid.indexOf(from);
            ntilinkytvid.splice(off, 1);
            replay("Deactivated youtube video antilink !");
          } else {
            let buttonsntilink = [
              {
                buttonId: `-antilinkyoutubevideo on`,
                buttonText: { displayText: "On" },
                type: 1,
              },
              {
                buttonId: `-antilinkyoutubevideo off`,
                buttonText: { displayText: "Off" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonsntilink,
              `Please click the button below On / Off`,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "antilinkyoutubech":
      case "antilinkyoutubechannel":
      case "antilinkytch":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "on") {
            if (AntiLinkYoutubeChannel) return replay("Already activated");
            ntilinkytch.push(from);
            replay("Activated youtube channel antilink !");
            var groupe = await Miku.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Miku.sendMessage(
              from,
              {
                text: `\`\`\`「 Attention ! 」\`\`\`\n\nAntilink System Activated!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkYoutubeChannel) return replay("Already deactivated");
            let off = ntilinkytch.indexOf(from);
            ntilinkytch.splice(off, 1);
            replay("Deactivated youtube channel antilink !");
          } else {
            let buttonsntilink = [
              {
                buttonId: `-antilinkyoutubech on`,
                buttonText: { displayText: "On" },
                type: 1,
              },
              {
                buttonId: `-antilinkyoutubech off`,
                buttonText: { displayText: "Off" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonsntilink,
              `Please click the button below On / Off`,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "antilinkinstagram":
      case "antilinkig":
      case "antilinkinsta":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "on") {
            if (AntiLinkInstagram) return replay("Already activated");
            ntilinkig.push(from);
            replay("Activated instagram antilink !");
            var groupe = await Miku.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Miku.sendMessage(
              from,
              {
                text: `\`\`\`「 Attention ! 」\`\`\`\n\nAntilink System Activated!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkInstagram) return replay("Already deactivated");
            let off = ntilinkig.indexOf(from);
            ntilinkig.splice(off, 1);
            replay("Deactivated instagram antilink !");
          } else {
            let buttonsntilink = [
              {
                buttonId: `-antilinkinstagram on`,
                buttonText: { displayText: "On" },
                type: 1,
              },
              {
                buttonId: `-antilinkinstagram off`,
                buttonText: { displayText: "Off" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonsntilink,
              `Please click the button below On / Off`,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "antilinkfacebook":
      case "antilinkfb":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "on") {
            if (AntiLinkFacebook) return replay("Already activated");
            ntilinkfb.push(from);
            replay("Activated facebook antilink !");
            var groupe = await Miku.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Miku.sendMessage(
              from,
              {
                text: `\`\`\`「 Attention ! 」\`\`\`\n\nAntilink System Activated!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkFacebook) return replay("Already deactivated");
            let off = ntilinkfb.indexOf(from);
            ntilinkfb.splice(off, 1);
            replay("Deactivated facebook antilink !");
          } else {
            let buttonsntilink = [
              {
                buttonId: `-antilinkfacebook on`,
                buttonText: { displayText: "On" },
                type: 1,
              },
              {
                buttonId: `-antilinkfacebook off`,
                buttonText: { displayText: "Off" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonsntilink,
              `Please click the button below On / Off `,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "antilinktelegram":
      case "antilinktg":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "on") {
            if (AntiLinkTelegram) return replay("Already activated");
            ntilinktg.push(from);
            replay("Activated telegram antilink !");
            var groupe = await Miku.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Miku.sendMessage(
              from,
              {
                text: `\`\`\`「 Attention ! 」\`\`\`\n\nAntilink System Activated!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTelegram) return replay("Already deactivated");
            let off = ntilinkig.indexOf(from);
            ntilinkig.splice(off, 1);
            replay("Deactivated telegram antilink in this group");
          } else {
            let buttonsntilink = [
              {
                buttonId: `-antilinktelegram on`,
                buttonText: { displayText: "On" },
                type: 1,
              },
              {
                buttonId: `-antilinktelegram off`,
                buttonText: { displayText: "Off" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonsntilink,
              `Please click the button below On / Off `,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "antilinktiktok":
      case "antilinktt":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "on") {
            if (AntiLinkTiktok) return replay("Already activated");
            ntilinktt.push(from);
            replay("Activated tiktok antilink !");
            var groupe = await Miku.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Miku.sendMessage(
              from,
              {
                text: `\`\`\`「 Attention ! 」\`\`\`\n\nAntilink System Activated!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTiktok) return replay("Already deactivated");
            let off = ntilinktt.indexOf(from);
            ntilinktt.splice(off, 1);
            replay("Deactivated tiktok antilink !");
          } else {
            let buttonsntilink = [
              {
                buttonId: `-antilinktiktok on`,
                buttonText: { displayText: "On" },
                type: 1,
              },
              {
                buttonId: `-antilinktiktok off`,
                buttonText: { displayText: "Off" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonsntilink,
              `Please click the button below\n\nOn to enable\nOff to disable`,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "antilinktwt":
      case "antilinktwitter":
      case "antilinktwit":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "on") {
            if (AntiLinkTwitter) return replay("Already activated");
            ntilinktwt.push(from);
            replay("Activated twitter antilink in this group !");
            var groupe = await Miku.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Miku.sendMessage(
              from,
              {
                text: `\`\`\`「 Attention ! 」\`\`\`\n\nAntilink System Activated!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTwitter) return replay("Already deactivated");
            let off = ntilinktwt.indexOf(from);
            ntilinktwt.splice(off, 1);
            replay("Deactivated twitter antilink !");
          } else {
            let buttonsntilink = [
              {
                buttonId: `-antilinktwt on`,
                buttonText: { displayText: "On" },
                type: 1,
              },
              {
                buttonId: `-antilinktwt off`,
                buttonText: { displayText: "Off" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonsntilink,
              `Please click the button below\n\nOn to enable\nOff to disable`,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "antilinkall":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "on") {
            if (AntiLinkTwitter) return replay("Already activated");
            ntilinkall.push(from);
            replay("Enabled all antilink !");
            var groupe = await Miku.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Miku.sendMessage(
              from,
              {
                text: `\`\`\`「 Attention ! 」\`\`\`\n\nAntilink System Activated!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkAll) return replay("Already deactivated");
            let off = ntilinkall.indexOf(from);
            ntilinkall.splice(off, 1);
            replay("Disabled all antilink !");
          } else {
            let buttonsntilink = [
              {
                buttonId: `-antilinkall on`,
                buttonText: { displayText: "On" },
                type: 1,
              },
              {
                buttonId: `-antilinkall off`,
                buttonText: { displayText: "Off" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonsntilink,
              `Please click the button below\n\nOn to enable\nOff to disable`,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "antiwame":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "on") {
            if (antiWame) return replay("Already activated");
            ntwame.push(from);
            replay("Activated antiwame !");
            var groupe = await Miku.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Miku.sendMessage(
              from,
              {
                text: `\`\`\`*「  Attention !  」*\`\`\`\n\nAntilink is enabled!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!antiWame) return replay("Already deactivated");
            let off = nttoxic.indexOf(from);
            ntwame.splice(off, 1);
            replay("Deactivated antiwame !");
          } else {
            let buttonsntwame = [
              {
                buttonId: `-antiwame on`,
                buttonText: { displayText: "On" },
                type: 1,
              },
              {
                buttonId: `-antiwame off`,
                buttonText: { displayText: "Off" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonsntwame,
              `Please click the button below\n\nOn to enable\nOff to disable`,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "nsfw":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "on") {
            if (AntiNsfw) return replay("Already activated");
            ntnsfw.push(from);
            replay("Enabled NSFW Commands!");
            var groupe = await Miku.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Miku.sendMessage(
              from,
              {
                text: `\`\`\`「 Notice 」\`\`\`\n\nNSFW(not safe for work) feature has been enabled in this group, which means anyone here can accesss Adult commands!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiNsfw) return replay("Already deactivated");
            let off = ntnsfw.indexOf(from);
            ntnsfw.splice(off, 1);
            replay("Disabled NSFW Commands!");
          } else {
            let buttonsntnsfw = [
              {
                buttonId: `-nsfw on`,
                buttonText: { displayText: "On" },
                type: 1,
              },
              {
                buttonId: `-nsfw off`,
                buttonText: { displayText: "Off" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonsntnsfw,
              `Please click the button below\n\nOn to enable\nOff to disable`,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "ban":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!isCreator) return replay(mess.botowner);
          if (!args[0])
            return replay(
              `Select add or del (add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user you want to ban.`
            );
          if (args[1]) {
            orgnye = args[1] + "@s.whatsapp.net";
          } else if (m.quoted) {
            orgnye = m.quoted.sender;
          }
          const isBane = banUser.includes(orgnye);
          if (args[0] === "add") {
            if (isBane) return ads("User is already banned.");
            banUser.push(orgnye);
            replay(`Successfully Banned the user.`);
          } else if (args[0] === "del") {
            if (!isBane) return ads("User is already unbanned.");
            let delbans = banUser.indexOf(orgnye);
            banUser.splice(delbans, 1);
            replay(`Successfully Unbanned the user.`);
          } else {
            replay("Error");
          }
        }
        break;

      case "listonline":
      case "listaktif":
      case "here":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
          let online = [...Object.keys(store.presences[id]), botNumber];
          let liston = 1;
          Miku.sendText(
            m.chat,
            "  「 *Online Members* 」\n\n" +
              online.map((v) => `${liston++} . @` + v.replace(/@.+/, ""))
                .join`\n`,
            m,
            { mentions: online }
          );
        }
        break;

      case "ban":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!isCreator) return replay(mess.botowner);
          if (!args[0])
            return replay(
              `Select add or del (add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user you want to ban.`
            );
          if (args[1]) {
            orgnye = args[1] + "@s.whatsapp.net";
          } else if (m.quoted) {
            orgnye = m.quoted.sender;
          }
          const isBane = banUser.includes(orgnye);
          if (args[0] === "add") {
            if (isBane) return ads("User was already banned.");
            banUser.push(orgnye);
            replay(`Successfully banned the user`);
          } else if (args[0] === "del") {
            if (!isBane) return ads("User was already unbanned.");
            let delbans = banUser.indexOf(orgnye);
            banUser.splice(delbans, 1);
            replay(`Successfully unbanned the user.`);
          } else {
            replay("Error");
          }
        }
        break;

      case "happymod":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args.join(" "))
            return replay(`Example : ${prefix + command} Kinemaster`);
          yogipw.happymod(args.join(" ")).then(async (res) => {
            teks = "```「 HappyMod Search Engine 」```";
            for (let i of res) {
              teks += `\n\n${i.name}\n`;
              teks += `${i.link}`;
            }
            let buttons = [
              {
                buttonId: `-menu`,
                buttonText: { displayText: "✨Menu✨" },
                type: 1,
              },
            ];
            let buttonMessage = {
              image: { url: res[0].icon },
              jpegThumbnail: Thumb,
              caption: teks,
              footer: `${global.BotName}`,
              buttons: buttons,
              headerType: 4,
            };
            Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
          });
        }
        break;

      case "yts":
      case "ytsearch":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args.join(" ")) return replay(`Example : -yts Heat waves`);
          let yts = require("yt-search");
          let search = await yts(args.join(" "));
          let teks =
            "```「 YouTube search Engine 」```\n\n Search Term: " +
            text +
            "\n\n";
          let no = 1;
          for (let i of search.all) {
            teks += `Result No : ${no++}\n\nTitle : ${i.title}\n\nViews : ${
              i.views
            }\n\nDuration : ${i.timestamp}\n\nUploaded : ${i.ago}\n\nAuthor : ${
              i.author.name
            }\n\nUrl : ${
              i.url
            }\n\n\n-----------------------------------------------------------------------------\n\n\n`;
          }
          Miku.sendMessage(
            m.chat,
            { image: { url: search.all[0].thumbnail }, caption: teks },
            { quoted: m }
          );
        }
        break;

      case "setname":
      case "setsubject":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (!text)
            return replay(
              "Pls enter -setname <New Group Name>  to change this Group Name"
            );
          await Miku.groupUpdateSubject(m.chat, text)
            .then((res) => replay(mess.jobdone))
            .catch((err) => replay(jsonformat(err)));
        }
        break;

      case "block":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!isCreator) return reply(mess.botowner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Miku.updateBlockStatus(users, "block")
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)));
        }
        break;

      case "unblock":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!isCreator) return reply(mess.botowner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Miku.updateBlockStatus(users, "unblock")
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)));
        }
        break;

      case "setdesc":
      case "setdesk":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (!text)
            return replay(
              "Pls enter -setname <New Group Description>  to change this Group Description."
            );
          await Miku.groupUpdateDescription(m.chat, text)
            .then((res) => replay(mess.jobdone))
            .catch((err) => replay(jsonformat(err)));
        }
        break;

      case "setgrouppp":
      case "setgruppp":
      case "setgcpp":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (!quoted)
            return replay(`Send/Reply Image With Caption ${prefix + command}`);
          if (!/image/.test(mime))
            return replay(
              `Send/Reply Image With Caption ${
                prefix + command
              } to change the Profile Pic of this group.`
            );
          if (/webp/.test(mime))
            return replay(
              `Send/Reply Image With Caption ${
                prefix + command
              } to change the Profile Pic of this group.`
            );
          let media = await Miku.downloadAndSaveMediaMessage(quoted);
          await Miku.updateProfilePicture(m.chat, { url: media }).catch((err) =>
            fs.unlinkSync(media)
          );
          replay(mess.jobdone);
        }
        break;

      case "tag":
      case "tagall":
      case "all":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          let teks = `「 _Tag All_ 」
  
 *Message : ${args.join(" ") ? args.join(" ") : "no message"}*\n\n`;
          for (let mem of participants) {
            teks += `» @${mem.id.split("@")[0]}\n`;
          }
          Miku.sendMessage(
            m.chat,
            { text: teks, mentions: participants.map((a) => a.id) },
            { quoted: m }
          );
        }
        break;

      case "hidetag":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          Miku.sendMessage(
            m.chat,
            {
              text: args.join(" ") ? args.join(" ") : "",
              mentions: participants.map((a) => a.id),
            },
            { quoted: m }
          );
        }
        break;

      /*
     case 'purge':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)

        const delay = time => new Promise(res=>setTimeout(res,time));

        let users = (await Miku.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
        for (let user of users){

            await Miku.groupParticipantsUpdate(m.chat, [user], 'remove')
            await delay(3000)
        }
    }
     break

*/

      case "purge":
        {
          mess;
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          const delay = (time) => new Promise((res) => setTimeout(res, time));
          let mentioned = participants.map((v) => v.jid);
          for (let member of mentioned) {
            Miku.groupParticipantsUpdate(m.chat, [member], "remove");
          }
        }

        break;

      case "nowa":
      case "stalk":
      case "stalknumber":
        {
          if (isBan) return reply(mess.banned);
          if (!args[0])
            return reply(
              `Utilisez une commande comme : ${prefix}stalk <number>xxx`
            );
          var inputnumber = args[0];
          if (!inputnumber.includes("x"))
            return reply("Vous n'avez pas ajouté x");
          reply(`Recherche d'un compte WhatsApp dans une plage donnée...`);
          reply(`Veuillez patienter pendant que je récupère les détails...`);
          function countInstances(string, word) {
            return string.split(word).length - 1;
          }
          var number0 = inputnumber.split("x")[0];
          var number1 = inputnumber.split("x")[countInstances(inputnumber, "x")]
            ? inputnumber.split("x")[countInstances(inputnumber, "x")]
            : "";
          var random_length = countInstances(inputnumber, "x");
          var randomxx;
          if (random_length == 1) {
            randomxx = 10;
          } else if (random_length == 2) {
            randomxx = 100;
          } else if (random_length == 3) {
            randomxx = 1000;
          }
          var nomerny = `*『 Liste des numéros Whatsapp 』*\n\n`;
          var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`;
          var nowhatsapp = `\n*Numéros sans compte WhatsApp dans la plage que vous avez fournie*\n`;
          for (let i = 0; i < randomxx; i++) {
            var nu = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            var status1 = nu[Math.floor(Math.random() * nu.length)];
            var status2 = nu[Math.floor(Math.random() * nu.length)];
            var status3 = nu[Math.floor(Math.random() * nu.length)];
            var dom4 = nu[Math.floor(Math.random() * nu.length)];
            var rndm;
            if (random_length == 1) {
              rndm = `${status1}`;
            } else if (random_length == 2) {
              rndm = `${status1}${status2}`;
            } else if (random_length == 3) {
              rndm = `${status1}${status2}${status3}`;
            } else if (random_length == 4) {
              rndm = `${status1}${status2}${status3}${dom4}`;
            }
            var anu = await lelouch.onWhatsApp(
              `${number0}${i}${number1}@s.whatsapp.net`
            );
            var anuu = anu.length !== 0 ? anu : false;
            try {
              try {
                var anu1 = await lelouch.fetchStatus(anu[0].jid);
              } catch {
                var anu1 = "401";
              }
              if (anu1 == "401" || anu1.status.length == 0) {
                nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`;
              } else {
                nomerny += `🎀 *Numéro:* wa.me/${
                  anu[0].jid.split("@")[0]
                }\n🔹 *Bio :* ${anu1.status}\n🔸 *Mis à jour le :* ${moment(
                  anu1.setAt
                )
                  .tz("Africa/Mali")
                  .format("HH:mm:ss DD/MM/YYYY")}\n\n`;
              }
            } catch {
              nowhatsapp += `${number0}${i}${number1}\n`;
            }
          }
          reply(`${nomerny}${nobio}${nowhatsapp}`);
        }
        break;

      case "grouplink":
      case "gclink":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          let response = await Miku.groupInviteCode(m.chat);
          Miku.sendMessage(
            m.chat,
            {
              text: `*Group Name:* *${groupMetadata.subject}* \n\n*Group Link :* \nhttps://chat.whatsapp.com/${response}l`,
              contextInfo: {
                mimetype: "image/jpeg",
                text: `${global.OwnerName}`,
                forwardingScore: 1000000000,
                isForwarded: true,
                sendEphemeral: true,
                externalAdReply: {
                  title: `${global.BotName}`,
                  body: `${global.WaterMark}`,
                  previewType: "PHOTO",
                  thumbnailUrl: Thumb,
                  thumbnail: Thumb,
                  sourceUrl: `${global.websitex}`,
                },
              },
            },
            { quoted: m, detectLink: true }
          );
        }
        break;

      case "resetlinkgc":
      case "resetlinkgroup":
      case "resetlinkgrup":
      case "revoke":
      case "resetlink":
      case "resetgrouplink":
      case "resetgclink":
      case "resetgruplink":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          Miku.groupRevokeInvite(m.chat);
        }
        break;

      case "group":
      case "grup":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "close") {
            await Miku.groupSettingUpdate(m.chat, "announcement")
              .then((res) => replay(`Group has been closed!`))
              .catch((err) => replay(jsonformat(err)));
          } else if (args[0] === "open") {
            await Miku.groupSettingUpdate(m.chat, "not_announcement")
              .then((res) => replay(`Group has been opened!`))
              .catch((err) => replay(jsonformat(err)));
          } else {
            let buttons = [
              {
                buttonId: "-group open",
                buttonText: { displayText: "Open" },
                type: 1,
              },
              {
                buttonId: "-group close",
                buttonText: { displayText: "Close" },
                type: 1,
              },
            ];
            let buttonMessage = {
              image: BotLogo,
              jpegThumbnail: Thumb,
              caption: `*「 ${global.BotName} 」*\n\n_Group Setting Changer tool_:`,
              footer: `${BotName}`,
              buttons: buttons,
              headerType: 4,
            };
            Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
          }
        }
        break;

      case "promote":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "est maintenant administrateur";
          await Miku.groupParticipantsUpdate(m.chat, [users], "promote")
            .then((res) => replay(jsonformat(res)))
            .catch((err) => replay(jsonformat(err)));
        }
        break;

      case "demote":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "n'est plus administrateur";
          await Miku.groupParticipantsUpdate(m.chat, [users], "demote")
            .then((res) => replay(jsonformat(res)))
            .catch((err) => replay(jsonformat(err)));
        }
        break;

      case "remove":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Miku.groupParticipantsUpdate(m.chat, [users], "remove");
        }
        break;

      case "join":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!isCreator) return replay(mess.botowner);
          if (!args[0]) return replay(`Where's the link?`);
          vdd = args[0];
          let vcc = vdd.split("https://chat.whatsapp.com/")[1];
          if (!vcc) return replay("Link invalid!");
          if (isCreator) {
            await Miku.groupAcceptInvite(vcc)
              .then(async (res) => replay(jsonformat(res)))
              .catch((_) => _);
            replay("Succes!");
          } else {
            Miku.query({
              tag: "iq",
              attrs: {
                type: "get",
                xmlns: "w:g2",
                to: "@g.us",
              },
              content: [{ tag: "invite", attrs: { code: vcc } }],
            })
              .then(async (res) => {
                sizny = res.content[0].attrs.size;
                if (sizny < 20) {
                  teks = `Sorry, munimun 20 members are required in a group to add bot!`;
                  sendOrder(
                    m.chat,
                    teks,
                    "667140254502463",
                    fs.readFileSync("./Assets/pic7.jpg"),
                    `${global.packname}`,
                    `${global.BotName}`,
                    "916909137213@s.whatsapp.net",
                    "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==",
                    "99999999999999999999"
                  );
                } else if (sizny > 20) {
                  await Miku.groupAcceptInvite(vcc)
                    .then(async (res) => replay(jsonformat(res)))
                    .catch((_) => _);
                  replay("Joined !");
                } else {
                  replay("Error");
                }
              })
              .catch((_) => _);
          }
        }
        break;

      case "volume":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`);
          media = await Miku.downloadAndSaveMediaMessage(quoted, "volume");
          if (isQuotedAudio) {
            rname = getRandom(".mp3");
            exec(
              `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
              (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return reply("Error!");
                jadie = fs.readFileSync(rname);
                Miku.sendMessage(
                  from,
                  { audio: jadie, mimetype: "audio/mp4", ptt: true },
                  { quoted: m }
                );
                fs.unlinkSync(rname);
              }
            );
          } else if (isQuotedVideo) {
            rname = getRandom(".mp4");
            exec(
              `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
              (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return reply("Error!");
                jadie = fs.readFileSync(rname);
                Miku.sendMessage(
                  from,
                  { video: jadie, mimetype: "video/mp4" },
                  { quoted: m }
                );
                fs.unlinkSync(rname);
              }
            );
          } else {
            reply("Please send video/audio file only!");
          }
        }
        break;

      case "tempo":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`);
          var req = args.join(" ");
          media = await Miku.downloadAndSaveMediaMessage(quoted, "tempo");
          if (isQuotedAudio) {
            ran = getRandom(".mp3");
            exec(
              `ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`,
              (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return reply("Error!");
                hah = fs.readFileSync(ran);
                Miku.sendMessage(
                  from,
                  { audio: hah, mimetype: "audio/mp4", ptt: true },
                  { quoted: m }
                );
                fs.unlinkSync(ran);
              }
            );
          } else if (isQuotedVideo) {
            ran = getRandom(".mp4");
            exec(
              `ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`,
              (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return reply("Error!");
                hah = fs.readFileSync(ran);
                Miku.sendMessage(
                  from,
                  { video: hah, mimetype: "video/mp4" },
                  { quoted: m }
                );
                fs.unlinkSync(ran);
              }
            );
          } else {
            reply("Please send video/audio file only!");
          }
        }
        break;

      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "tupai":
        try {
          let set;
          if (/bass/.test(command))
            set = "-af equalizer=f=54:width_type=o:width=2:g=20";
          if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
          if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
          if (/earrape/.test(command)) set = "-af volume=12";
          if (/fast/.test(command))
            set = '-filter:a "atempo=1.63,asetrate=44100"';
          if (/fat/.test(command))
            set = '-filter:a "atempo=1.6,asetrate=22100"';
          if (/nightcore/.test(command))
            set = "-filter:a atempo=1.06,asetrate=44100*1.25";
          if (/reverse/.test(command)) set = '-filter_complex "areverse"';
          if (/robot/.test(command))
            set =
              "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
          if (/slow/.test(command))
            set = '-filter:a "atempo=0.7,asetrate=44100"';
          if (/smooth/.test(command))
            set =
              "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
          if (/tupai/.test(command))
            set = '-filter:a "atempo=0.5,asetrate=65100"';
          if (/audio/.test(mime)) {
            reply(mess.waiting);
            let media = await Miku.downloadAndSaveMediaMessage(quoted);
            let ran = getRandom(".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return reply(err);
              let buff = fs.readFileSync(ran);
              Miku.sendMessage(
                m.chat,
                { audio: buff, mimetype: "audio/mpeg" },
                { quoted: m }
              );
              fs.unlinkSync(ran);
            });
          } else
            reply(
              `Pls mention any audio you want to modify _${prefix + command}_`
            );
        } catch (e) {
          reply(e);
        }
        break;

      case "calculator":
      case "cal":
      case "calculate":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (args.length < 1)
            return reply(`*Example :*\n${prefix}calculator 2*5\n\n`);
          let qsd = args.join(" ");
          if (typeof mathjs.evaluate(qsd) !== "number") {
            reply("Error");
          } else {
            reply(
              `\`\`\`「 _Calculator Tool_ 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(
                qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/")
              )}`
            );
          }
        }
        break;

      case "public":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!isCreator) return reply(mess.owner);
          Miku.public = true;
          reply("I am now Publicly accessable!");
          Miku.setStatus(`Mode : Public`);
        }
        break;

      case "self":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!isCreator) return reply(mess.botowner);
          Miku.public = false;
          reply("Only Owner can use me now!");
          Miku.setStatus(`Mode : Self`);
        }
        break;

      case "toimage":
      case "toimg":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.quoted) return reply("Reply Image");
          if (!/webp/.test(mime))
            return reply(`Reply sticker with caption *${prefix + command}*`);
          reply(mess.waiting);
          let media = await Miku.downloadAndSaveMediaMessage(quoted);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) throw err;
            let buffer = fs.readFileSync(ran);
            Miku.sendMessage(m.chat, { image: buffer }, { quoted: m });
            fs.unlinkSync(ran);
          });
        }
        break;

      case "tomp4":
      case "tovideo":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.quoted) return reply("Reply Image");
          if (!/webp/.test(mime))
            return reply(`Reply sticker with caption *${prefix + command}*`);
          reply(mess.waiting);
          let { webp2mp4File } = require("./lib/uploader");
          let media = await Miku.downloadAndSaveMediaMessage(quoted);
          let webpToMp4 = await webp2mp4File(media);
          await Miku.sendMessage(
            m.chat,
            { video: { url: webpToMp4.result, caption: "Here it is..." } },
            { quoted: m }
          );
          await fs.unlinkSync(media);
        }
        break;

      case "welcome":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          if (!isAdmins && !isCreator) return replay(mess.useradmin);
          if (args[0] === "on") {
            if (welcm) return replay("Welcome message already activated");
            wlcm.push(from);
            replay("Activated Welcome/Left message in this group.");
          } else if (args[0] === "off") {
            if (!welcm) return replay("Already deactivated");
            let off = wlcm.indexOf(from);
            wlcm.splice(off, 1);
            replay("Deactivated Welcome/Left message in this group.");
          } else {
            let buttonswlcm = [
              {
                buttonId: `!welcome on`,
                buttonText: { displayText: "On" },
                type: 1,
              },
              {
                buttonId: `!welcome off`,
                buttonText: { displayText: "Off" },
                type: 1,
              },
            ];
            await Miku.sendButtonText(
              m.chat,
              buttonswlcm,
              `Please choose any button below\n\n_On_ to Activate\n_Off_ to Deactivate`,
              `${global.BotName}`,
              m
            );
          }
        }
        break;

      case "leveling":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        if (!isAdmins && !isCreator) return reply(mess.useradmin);
        if (args.length < 1)
          return reply("Type on to *Enable*\nType off to *Disable*");
        if (args[0] === "on") {
          if (isLeveling) return reply(`Already activated`);
          _leveling.push(from);
          fs.writeFileSync(
            "./database/leveling.json",
            JSON.stringify(_leveling)
          );
          reply("Leveling activated");
        } else if (args[0] === "off") {
          let anu = _leveling.indexOf(from);
          _leveling.splice(anu, 1);
          fs.writeFileSync(
            "./database/leveling.json",
            JSON.stringify(_leveling)
          );
          reply("Leveling deactivated");
        }
        break;

      case "toaud":
      case "toaudio":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!/video/.test(mime) && !/audio/.test(mime))
            return reply(
              `Send/Reply Video/Audio You Want To Use As Audio With Caption ${
                prefix + command
              }`
            );
          if (!m.quoted)
            return reply(
              `Send/Reply Video/Audio You Want To Use As Audio With Caption ${
                prefix + command
              }`
            );
          reply(mess.waiting);
          let media = await quoted.download();
          let { toAudio } = require("./lib/converter");
          let audio = await toAudio(media, "mp4");
          Miku.sendMessage(
            m.chat,
            { audio: audio, mimetype: "audio/mpeg" },
            { quoted: m }
          );
        }
        break;

      case "tomp3":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (/document/.test(mime))
            return reply(
              `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${
                prefix + command
              }`
            );
          if (!/video/.test(mime) && !/audio/.test(mime))
            return reply(
              `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${
                prefix + command
              }`
            );
          if (!m.quoted)
            return reply(
              `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${
                prefix + command
              }`
            );
          reply(mess.waiting);
          let media = await quoted.download();
          let { toAudio } = require("./lib/converter");
          let audio = await toAudio(media, "mp4");
          Miku.sendMessage(
            m.chat,
            {
              document: audio,
              mimetype: "audio/mpeg",
              fileName: `Converted By ${global.BotName} (${m.id}).mp3`,
            },
            { quoted: m }
          );
        }
        break;

      case "togif":
      case "getgif":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.quoted) return reply("Reply Image");
          if (!/webp/.test(mime))
            return reply(`Reply sticker with caption *${prefix + command}*`);
          reply(mess.wait);
          let { webp2mp4File } = require("./lib/uploader");
          let media = await Miku.downloadAndSaveMediaMessage(quoted);
          let webpToMp4 = await webp2mp4File(media);
          await Miku.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Converted From Webp To Gif",
              },
              gifPlayback: true,
            },
            { quoted: m }
          );
          await fs.unlinkSync(media);
        }
        break;

      case "tourl":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          reply(mess.wait);
          let {
            UploadFileUgu,
            webp2mp4File,
            TelegraPh,
          } = require("./lib/uploader");
          let media = await Miku.downloadAndSaveMediaMessage(quoted);
          if (/image/.test(mime)) {
            let anu = await TelegraPh(media);
            reply(util.format(anu));
          } else if (!/image/.test(mime)) {
            let anu = await UploadFileUgu(media);
            reply(util.format(anu));
          }
          await fs.unlinkSync(media);
        }
        break;

      case "owner":
      case "creator":
      case "mod":
      case "mods":
        {
          Miku.sendContact(m.chat, global.Owner, m);
        }
        break;

      case "translate":
      case "trans":
        {
          if (isBan) return reply(mess.banned);
          if (!args.join(" ")) return replay("Pls enter any text to translate");
          tes = await fetchJson(
            `https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(
              " "
            )}`
          );
          Infoo = tes.info;
          Detek = tes.translate;
          replay(`Input : ${Detek}\nTranslation Results : ${Infoo}`);
        }
        break;

      case "gimage":
      case "gig":
      case "googleimage":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args[0])
            return reply("Enter a search term to get Google Image!");
          let gis = require("g-i-s");
          gis(args.join(" "), async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttons = [
              {
                buttonId: `-gimage ${args.join(" ")}`,
                buttonText: { displayText: ">>" },
                type: 1,
              },
            ];
            let buttonMessage = {
              image: { url: images },
              caption: `「 _Google Image Search_ 」

_Search Term_ : ${text}
_Media Url_ : ${images}`,
              footer: `${global.BotName}`,
              buttons: buttons,
              headerType: 4,
            };
            Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
          });
        }
        break;

      case "google":
      case "search":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args[0])
            return reply(
              `Example: ${prefix + command} <query>\nUses : ${
                prefix + command
              } apa arti cinta`
            );
          let google = require("google-it");
          google({ query: args.join(" ") }).then((res) => {
            let teks = `「 *Google Search Engine* 」\n\n*Search term:* ${text}\n\n\n`;
            for (let g of res) {
              teks += `*Title* : ${g.title}\n\n`;
              teks += `*Description* : ${g.snippet}\n\n`;
              teks += `*Link* : ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`;
            }
            reply(teks);
          });
        }
        break;

      case "igdl":
      case "instagram":
      case "instagramreels":
      case "igreels":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args[0])
            return reply(
              `Example :\n${
                prefix + command
              } https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`
            );
          try {
            hx.igdl(args[0]).then(async (resed) => {
              ini_anu = [];
              anu_list = [];
              textbv = `「 _Instagram Downloader_ 」\n\nUsername : ${
                resed.user.username ? resed.user.name : "undefined"
              }\nFollowers : ${resed.user.followers}`;
              urut = 1;
              for (let i = 0; i < resed.medias.length; i++) {
                ini_anu.push({
                  type: resed.medias[i].fileType,
                  url: resed.medias[i].url,
                });
              }
              ilod = 1;
              for (let i of ini_anu) {
                anu_list.push({
                  buttonId: `-ig ${i.type} ${i.url}`,
                  buttonText: { displayText: `Media ${ilod++}` },
                  type: 1,
                });
              }
              textbv += `\n\n_Select the media below to download_`;
              let buttons = anu_list;
              let buttonMessage = {
                image: BotLogo,
                jpegThumbnail: Thumb,
                caption: textbv,
                footer: `${global.BotName}`,
                buttons: buttons,
                headerType: 4,
              };
              Miku.sendMessage(from, buttonMessage, { quoted: m });
            });
          } catch (err) {
            reply("An Error Occured!");
          }
        }
        break;

      case "ig":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (args[0] === "mp4") {
            Miku.sendMessage(
              from,
              {
                video: { url: args[1] },
                caption: "Here it is...",
                mimetype: "video/mp4",
              },
              { quoted: m }
            );
          } else if (args[0] === "jpg") {
            Miku.sendMessage(
              from,
              { image: { url: args[1] }, caption: "Here it is..." },
              { quoted: m }
            );
          } else {
            reply("Error! ");
          }
        }
        break;

      case "mp4":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args[0]) return reply(`Pls provide link!`);
          try {
            Miku.sendMessage(
              from,
              {
                video: { url: args[0] },
                caption: "Succes!",
                contextInfo: {
                  externalAdReply: {
                    title: `${global.BotName}`,
                    body: `${global.OwnerName}`,
                    thumbnail: BotLogo,
                    mediaType: 2,
                    mediaUrl: `${global.websitex}`,
                    sourceUrl: `${global.websitex}`,
                  },
                },
              },
              { quoted: m }
            );
          } catch {
            reply("Link error!");
          }
        }
        break;

      case "jpeg":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args[0]) return reply(`Please provide link!`);
          try {
            Miku.sendMessage(
              from,
              { image: { url: args[0] }, caption: "Success!" },
              { quoted: m }
            );
          } catch {
            reply("Link error");
          }
        }
        break;

      case "igtv":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text) return reply(`Please provide link!`);
          const {
            instagramdl,
            instagramdlv2,
            instagramdlv3,
          } = require("@bochilteam/scraper");
          if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
            return reply("*Invalid link!*");
          instagramdlv3(`${text}`)
            .then(async (data) => {
              var buf = await getBuffer(data[0].thumbnail);
              Miku.sendMessage(
                m.chat,
                {
                  video: { url: data[0].url },
                  jpegThumbnail: buf,
                  caption: `${BotName}`,
                },
                { quoted: m }
              );
            })
            .catch((err) => {
              reply(mess.error);
            });
        }
        break;

      case "twitter":
      case "td":
      case "twitterdl":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text) return reply(`Please provide link!`);
          if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
            return reply(`*Invalid link!*`);
          xfarrapi
            .Twitter(`${text}`)
            .then(async (data) => {
              let txt = `「 _Twitter Downloader_ 」\n\n`;
              txt += `*Title :* ${data.title}\n`;
              txt += `*Quality :* ${data.medias[1].quality}\n`;
              txt += `*Type :* ${data.medias[1].extension}\n`;
              txt += `*Size :* ${data.medias[1].formattedSize}\n`;
              txt += `*Duration :* ${data.medias.length}\n`;
              txt += `*URL :* ${data.url}\n\n`;
              txt += `*${BotName}*`;
              buf = await getBuffer(data.thumbnail);
              Miku.sendMessage(
                m.chat,
                {
                  image: { url: data.thumbnail },
                  jpegThumbnail: buf,
                  caption: `${txt}`,
                },
                { quoted: m }
              );
              for (let i of data.medias) {
                Miku.sendMessage(
                  m.chat,
                  {
                    video: { url: i.url },
                    jpegThumbnail: buf,
                    caption: `*${text}*`,
                  },
                  { quoted: m }
                );
              }
            })
            .catch((err) => {
              reply(mess.error);
            });
        }
        break;

      case "twittermp3":
      case "twitteraudio":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text) return reply(`Please provide link!`);
          if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
            return reply(`*Invalid link!*`);
          xfarrapi
            .Twitter(`${text}`)
            .then(async (data) => {
              Miku.sendMessage(
                m.chat,
                { audio: { url: data.medias[1].url }, mimetype: "audio/mp4" },
                { quoted: m }
              );
            })
            .catch((err) => {
              reply(mess.reply);
            });
        }
        break;

      case "twitterxx":
      case "twdlxx":
      case "twmp4xx":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args[0])
            return reply(
              `Example :\n${
                prefix + command
              } https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`
            );
          try {
            let lotwit = await aiovideodl(args[0]);
            teks = `「 _Twitter Downloader_ 」
Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}
_Please choose the video quality_`;
            let buttons = [
              {
                buttonId: `-twitter ${lotwit.medias[0].url}`,
                buttonText: {
                  displayText: `Quality ${lotwit.medias[0].quality}`,
                },
                type: 1,
              },
              {
                buttonId: `-twitter ${lotwit.medias[2].url}`,
                buttonText: {
                  displayText: `Quality ${lotwit.medias[2].quality}`,
                },
                type: 1,
              },
            ];
            let buttonMessage = {
              video: { url: lotwit.medias[1].url },
              caption: teks,
              footer: `${pushname}`,
              buttons: buttons,
              headerType: 4,
            };
            Miku.sendMessage(from, buttonMessage, { quoted: m });
          } catch {
            reply("Link Error!");
          }
        }
        break;

      case "twddlxx":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          let buttons = [
            {
              buttonId: `-menu`,
              buttonText: { displayText: "✨Menu✨" },
              type: 1,
            },
          ];
          let buttonMessage = {
            video: { url: args[0] },
            caption: "Here it is...",
            footer: `${pushname}`,
            buttons: buttons,
            headerType: 4,
          };
          Miku.sendMessage(from, buttonMessage, { quoted: m });
        }
        break;

      case "fbdl":
      case "fb":
      case "facebook":
      case "fbmp4":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text)
            return reply(
              `Please provide the link!\n\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`
            );
          if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
            return reply(`Invalid link!`);
          let bocil = require("@bochilteam/scraper");
          bocil
            .facebookdlv2(`${text}`)
            .then(async (data) => {
              let txt = `「 _Facebook Downloader_ 」\n\n`;
              txt += `*Title :* ${data.title}\n`;
              txt += `*Quality :* ${data.result[0].quality}\n`;
              txt += `*Description:* ${data.description}\n`;
              txt += `*URL :* ${text}\n\n`;
              buf = await getBuffer(data.thumbnail);
              Miku.sendMessage(
                m.chat,
                {
                  image: { url: data.thumbnail },
                  jpegThumbnail: buf,
                  caption: `${txt}`,
                },
                { quoted: m }
              );
              for (let i of data.result) {
                Miku.sendMessage(
                  m.chat,
                  {
                    video: { url: i.url },
                    jpegThumbnail: buf,
                    caption: `*Quality :* ${i.quality}`,
                  },
                  { quoted: m }
                );
              }
            })
            .catch((err) => {
              reply(mess.error);
            });
        }
        break;

      case "fbmp3":
      case "facebookmp3":
      case "facebookaudio":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text)
            return reply(
              `Please provide the link!\n\nExample: ${
                prefix + command
              } https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`
            );
          if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
            return reply(`Invalid link!`);
          let noh = require("@bochilteam/scraper");
          noh
            .savefrom(`${text}`)
            .then(async (anu) => {
              Miku.sendMessage(
                m.chat,
                { audio: { url: anu.url[0].url }, mimetype: "audio/mp4" },
                { quoted: m }
              );
            })
            .catch((err) => {
              reply(mess.error);
            });
        }
        break;

      case "facebookxx":
      case "fbdlxxx":
      case "fbmp4xxx":
      case "fbxxx":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args[0])
            return reply(
              `Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`
            );
          try {
            let resd = await aiovideodl(args[0]);
            teks = `「 _Facebook Downloader_ 」
Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}
_Click the button below to download_`;
            let buttons = [
              {
                buttonId: `-fbdl ${resd.medias[1].url}`,
                buttonText: { displayText: "QualityHD" },
                type: 1,
              },
            ];
            let buttonMessage = {
              video: { url: resd.medias[0].url },
              caption: teks,
              footer: `${pushname}`,
              buttons: buttons,
              headerType: 4,
            };
            Miku.sendMessage(from, buttonMessage, { quoted: m });
          } catch {
            reply("Link invalid!");
          }
        }
        break;

      case "fbddlxx":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          let buttons = [
            {
              buttonId: `-menu`,
              buttonText: { displayText: "✨Menu✨" },
              type: 1,
            },
          ];
          let buttonMessage = {
            video: { url: args[0] },
            caption: "Done!",
            footer: `${pushname}`,
            buttons: buttons,
            headerType: 4,
          };
          Miku.sendMessage(from, buttonMessage, { quoted: m });
        }
        break;

      case "tiktok":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!q) return reply("Please provide the link !");
          reply(mess.wait);
          if (!q.includes("tiktok")) return reply(`Invalid tiktok link!`);
          const musim_rambutan = await MikuTiktok(`${q}`).catch((e) => {
            reply(mess.error);
          });
          console.log(musim_rambutan);
          const mikutiktokop = musim_rambutan.result.watermark;
          texttk = `_Please choose the button below_`;
          let buttons = [
            {
              buttonId: `-ttnowm ${q}`,
              buttonText: { displayText: "Watermark Free" },
              type: 1,
            },
            {
              buttonId: `-ttaud ${q}`,
              buttonText: { displayText: "Audio " },
              type: 1,
            },
          ];
          let buttonMessage = {
            video: { url: mikutiktokop },
            caption: texttk,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4,
          };
          Miku.sendMessage(from, buttonMessage, { quoted: m });
        }
        break;

      case "tiktoknowm":
      case "ttnowm":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!q) return reply("Please provide the link !");
          reply(mess.wait);
          if (!q.includes("tiktok")) return reply(`That's not a tiktok link!`);
          const musim_rambutan = await MikuTiktok(`${q}`).catch((e) => {
            reply(mess.error);
          });
          console.log(musim_rambutan);
          const mikutiktoknowm = musim_rambutan.result.nowatermark;
          Miku.sendMessage(
            from,
            { video: { url: mikutiktoknowm }, caption: "Here it is..." },
            { quoted: m }
          );
        }
        break;

      case "tiktokaudio":
      case "tiktokmusic":
      case "ttaud":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!q) return reply("Where is the audio?");
          if (!q.includes("tiktok")) return reply(`That's not a tiktok link!`);
          const musim_rambutan = await MikuTiktok(`${q}`).catch((e) => {
            reply(mess.error);
          });
          console.log(musim_rambutan);
          const mikutiktokaudio = musim_rambutan.result.nowatermark;
          Miku.sendMessage(
            from,
            { audio: { url: mikutiktokaudio }, mimetype: "audio/mp4" },
            { quoted: m }
          );
        }
        break;

      case "play2":
      case "ytplay2":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          reply(mess.wait);
          let yts = require("yt-search");
          let search = await yts(text);
          let anu =
            search.videos[Math.floor(Math.random() * search.videos.length)];
          let ytvc = await hx.youtube(anu.url);
          let buttons = [
            {
              buttonId: `-ytmp4 ${anu.url}`,
              buttonText: { displayText: "► Video" },
              type: 1,
            },
            {
              buttonId: `-ytmp3 ${anu.url}`,
              buttonText: { displayText: "♫ Audio" },
              type: 1,
            },
          ];
          let buttonMessage = {
            image: { url: anu.thumbnail },
            caption: `「 _Lelouch Youtube Player_ 」

    Title : ${anu.title}
    ID : ${anu.videoId}
    Duration : ${anu.timestamp}
    Viewers : ${anu.views}
    Uploaded : ${anu.ago}
    Author : ${anu.author.name}
    Channel : ${anu.author.url}
    Url : ${anu.url}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4,
          };
          Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        break;

      case "ytdl2":
      case "yt2":
      case "youtube2":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          reply(mess.wait);
          if (!args[0]) return reply(mess.nolink);
          try {
            hx.youtube(args[0])
              .then(async (res) => {
                textyt = `「 _Lelouch Youtube Downloader_ 」
Title : ${res.title}
Size : ${res.size}
Quality : ${res.quality}
_Select video or audio and wait a while_`;
                let buttons = [
                  {
                    buttonId: `-ytmp4 ${res.link}`,
                    buttonText: { displayText: "► Video" },
                    type: 1,
                  },
                  {
                    buttonId: `-ytmp3 ${res.link}`,
                    buttonText: { displayText: "♫ Audio" },
                    type: 1,
                  },
                ];
                let buttonMessage = {
                  image: { url: res.thumb },
                  caption: textyt,
                  footer: BotName,
                  buttons: buttons,
                  headerType: 4,
                };
                Miku.sendMessage(from, buttonMessage, { quoted: m });
              })
              .catch((_) => _);
          } catch {
            reply("Error link!");
          }
        }
        break;

      case "music":
      case "play":
      case "song":
      case "ytplay":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          let yts = require("yt-search");
          let search = await yts(text);
          let anu =
            search.videos[Math.floor(Math.random() * search.videos.length)];
          let ytvc = await hx.youtube(anu.url);
          let buttons = [
            {
              buttonId: `-ytvd ${ytvc.link}`,
              buttonText: { displayText: "► Video" },
              type: 1,
            },
            {
              buttonId: `-ytad ${ytvc.mp3}`,
              buttonText: { displayText: "♫ Audio" },
              type: 1,
            },
          ];
          let buttonMessage = {
            image: { url: anu.thumbnail },
            caption: `「  _Lelouch Youtube Player_  」

*Title :* ${anu.title}
*Duration :* ${anu.timestamp}
*Viewers :* ${anu.views}
*Uploaded :* ${anu.ago}
*Channel :* ${anu.author.name}
*Url :* ${anu.url}`,
            footer: `${global.BotName}`,
            buttons: buttons,
            headerType: 4,
          };
          Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        break;

      case "getmusic":
      case "getvideo":
      case "yt":
      case "youtube":
      case "ytvideo":
      case "ytmp3":
      case "ytmp4":
      case "ytmusic":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args[0]) return reply(mess.nolink);
          try {
            hx.youtube(args[0])
              .then(async (res) => {
                textyt = `「  _Lelouch Youtube Downloader_  」
*Title :* ${res.title}
*Size :* ${res.size}
*Quality :* ${res.quality}
*Select video or audio and wait a while*`;
                let buttons = [
                  {
                    buttonId: `-ytvd ${res.link}`,
                    buttonText: { displayText: "► Video" },
                    type: 1,
                  },
                  {
                    buttonId: `-ytad ${res.mp3}`,
                    buttonText: { displayText: "♫ Audio" },
                    type: 1,
                  },
                ];
                let buttonMessage = {
                  image: { url: res.thumb },
                  caption: textyt,
                  footer: `${BotName}`,
                  buttons: buttons,
                  headerType: 4,
                };
                Miku.sendMessage(from, buttonMessage, { quoted: m });
              })
              .catch((_) => _);
          } catch {
            reply("Link error!");
          }
        }
        break;

      case "ytvd":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          Miku.sendMessage(
            from,
            {
              video: { url: args[0] },
              mimetype: "video/mp4",
              caption: "Here it is...",
            },
            { quoted: m }
          );
        }
        break;

      case "ytad":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          Miku.sendMessage(
            from,
            { audio: { url: args[0] }, mimetype: "audio/mp4", ptt: true },
            { quoted: m }
          );
        }
        break;

      case "ytshorts":
      case "shorts":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text)
            return reply(`*Use ${prefix + command} put yt shorts link*`);
          if (!isUrl(args[0]) && !args[0].includes("youtube"))
            return reply(`The link you provided is not valid!`);
          xfarrapi
            .Youtube(`${text}`)
            .then(async (data) => {
              if (data.medias[0].formattedSize.split("MB")[0] >= 999)
                return reply("*File Over Limit* " + util.format(data));
              cap = `
   「  *Youtube Shorts*  」
 *TITLE:* ${data.title}\n*QUALITY:* ${data.medias[0].quality}\n*SIZE:* ${data.medias[0].formattedSize}\n*DURATION* ${data.duration}\n*LINK:* ${data.url}\n\n*${BotName}*`;
              buf = await getBuffer(data.thumbnail);
              Miku.sendMessage(
                m.chat,
                {
                  image: { url: data.thumbnail },
                  jpegThumbnail: buf,
                  caption: `${cap}`,
                },
                { quoted: m }
              );
              Miku.sendMessage(
                m.chat,
                {
                  video: { url: data.medias[0].url },
                  jpegThumbnail: buf,
                  caption: `*TITLE:* ${data.title}\n*QUALITY:* ${data.medias[0].quality}\n*SIZE:* ${data.medias[0].formattedSize}`,
                },
                { quoted: m }
              );
            })
            .catch((err) => {
              reply(mess.reply);
            });
        }
        break;

      case "couplepp":
      case "ppcouple":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          reply(mess.waiting);
          let anu = await fetchJson(
            "https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json"
          );
          let random = anu[Math.floor(Math.random() * anu.length)];
          Miku.sendMessage(
            m.chat,
            { image: { url: random.male }, caption: `For him...` },
            { quoted: m }
          );
          Miku.sendMessage(
            m.chat,
            { image: { url: random.female }, caption: `For her...` },
            { quoted: m }
          );
        }
        break;

      case "ytmp3x":
      case "ytmusicx":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          let { yta } = require("./lib/y2mate");
          if (!text)
            return reply(
              `Example : ${
                prefix + command
              } https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
            );
          if (!isUrl(args[0]) && !args[0].includes("youtube.com"))
            return reply(`The link you provided is invalid`);
          let quality = args[1] ? args[1] : "128kbps";
          let media = await yta(text, quality);
          if (media.filesize >= 999999)
            return reply("*File Over Limit* " + util.format(media));
          let caption = `*「 Youtube Music 」*\n\n*Title :* ${
            media.title
          }\n*File size :* ${media.filesizeF}\n*Url :* ${isUrl(
            text
          )}\n*Ext :* MP3\n*Resolution :* ${args[1] || "128kbps"}`;
          buf = await getBuffer(media.thumb);
          Miku.sendMessage(
            m.chat,
            {
              image: { url: media.thumb },
              jpegThumbnail: buf,
              caption: `${caption}`,
            },
            { quoted: m }
          ).catch((err) => reply(mess.error));
          Miku.sendMessage(m.chat, {
            audio: { url: media.dl_link },
            mimetype: "audio/mpeg",
            fileName: `${media.title}.mp3`,
            quoted: m,
            contextInfo: {
              externalAdReply: {
                title: media.title,
                body: "YOUTUBE MP3",
                mediaType: "2",
                thumbnail: buf,
                mediaUrl: `${text}`,
              },
            },
          }).catch((err) => reply(mess.error));
        }
        break;

      case "ytmp4x":
      case "ytvideox":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          let { ytv } = require("./lib/y2mate");
          if (!text)
            return reply(
              `Example : ${
                prefix + command
              } https://youtube.com/watch?v=RNa4thokVJ4 360p`
            );
          if (!isUrl(args[0]) && !args[0].includes("youtube.com"))
            return reply(`The link you provided is invalid!`);
          let quality = args[1] ? args[1] : "360p";
          let media = await ytv(text, quality);
          if (media.filesize >= 999999)
            return reply("*File Over Limit* " + util.format(media));
          var capti = `*「 Youtube Video 」*\n\n*Title* : ${
            media.title
          }\n*File size* : ${media.filesizeF}\n*Url* : ${isUrl(
            text
          )}\n*Ext* : Mp4\n*Resoultion* : ${args[1] || "360p"}`;
          var buf = await getBuffer(media.thumb);
          Miku.sendMessage(
            m.chat,
            {
              image: { url: media.thumb },
              jpegThumbnail: buf,
              caption: `${capti}`,
            },
            { quoted: m }
          );
          Miku.sendMessage(
            m.chat,
            {
              video: { url: media.dl_link },
              jpegThumbnail: buf,
              mimetype: "video/mp4",
              fileName: `${media.title}.mp4`,
              caption: `Here you go!`,
            },
            { quoted: m }
          ).catch((err) => reply(mess.error));
        }
        break;

      case "ytdl":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text) return reply(mess.nolink);
          if (!isUrl(args[0]) && !args[0].includes("youtube.com"))
            return reply(`The link you provided is invalid`);
          anu = await fetchJson(
            `https://api.akuari.my.id/downloader/youtube?link=${text}`
          );
          if (anu.filesize_video >= 999999)
            return reply("*File Over Limit* " + util.format(anu));
          tummb = await getBuffer(anu.thumb);
          audio = await getBuffer(anu.audio);
          Miku.sendMessage(
            m.chat,
            {
              document: audio,
              mimetype: "audio/mpeg",
              fileName: `${anu.title}`,
            },
            { quoted: m }
          ).catch((err) => reply(mess.error));
          Miku.sendMessage(
            m.chat,
            {
              video: { url: anu.video },
              jpegThumbnail: tummb,
              caption: `${util.format(anu)}`,
            },
            { quoted: m }
          ).catch((err) => reply(mess.error));
        }
        break;

      case "pinterest":
      case "pin":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args.join(" ")) return reply("Pls providea search term!");
          try {
            hx.pinterest(args.join(" "))
              .then(async (res) => {
                imgnyee = res[Math.floor(Math.random() * res.length)];
                let buttons = [
                  {
                    buttonId: `-pinterest ${args.join(" ")}`,
                    buttonText: { displayText: ">>" },
                    type: 1,
                  },
                ];
                let buttonMessage = {
                  image: { url: imgnyee },
                  caption:
                    `Title : ` + args.join(" ") + `\nMedia Url : ` + imgnyee,
                  footer: `${global.BotName}`,
                  buttons: buttons,
                  headerType: 4,
                };
                Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
              })
              .catch((_) => _);
          } catch {
            reply("Error");
          }
        }
        break;

      case "swm":
      case "take":
      case "stickerwm":
      case "steal":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args.join(" "))
            return reply(`Use command: -steal Lelouch|By: Pelpav`);
          const swn = args.join(" ");
          const pcknm = swn.split("|")[0];
          const atnm = swn.split("|")[1];
          if (m.quoted.isAnimated === true) {
            Miku.downloadAndSaveMediaMessage(quoted, "gifee");
            Miku.sendMessage(
              from,
              { sticker: fs.readFileSync("gifee.webp") },
              { quoted: m }
            );
          } else if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await Miku.sendImageAsSticker(m.chat, media, m, {
              packname: pcknm,
              author: atnm,
            });
            await fs.unlinkSync(encmedia);
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return reply("Maximum 10 seconds is allowed!");
            let media = await quoted.download();
            let encmedia = await Miku.sendVideoAsSticker(m.chat, media, m, {
              packname: pcknm,
              author: atnm,
            });
            await fs.unlinkSync(encmedia);
          } else {
            reply(
              `Send Image/Video With Caption ${
                prefix + command
              }\nVideo Duration 1-9 seconds is allowed!`
            );
          }
        }
        break;

      case "smeme":
      case "stickermeme":
      case "stickmeme":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          let { TelegraPh } = require("./lib/uploader");
          if (!text)
            return reply(
              `Send/Reply Photo With Caption ${prefix + command} *text*`
            );
          if (text.includes("|"))
            return reply(
              `Send/Reply Photo With Caption ${prefix + command} *text*`
            );
          if (!/image/.test(mime))
            return reply(
              `Send/Reply Photo With Caption ${prefix + command} *text*`
            );
          reply(mess.wait);
          mee = await Miku.downloadAndSaveMediaMessage(quoted);
          mem = await TelegraPh(mee);
          meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`;
          memek = await Miku.sendImageAsSticker(m.chat, meme, m, {
            packname: global.packname,
            author: global.author,
          });
          await fs.unlinkSync(memek);
        }
        break;

      case "sgif":
      case "sticker":
      case "s":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await Miku.sendImageAsSticker(m.chat, media, m, {
              packname: global.packname,
              author: global.author,
            });
            await fs.unlinkSync(encmedia);
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return reply("Maximum 10 seconds!");
            let media = await quoted.download();
            let encmedia = await Miku.sendVideoAsSticker(m.chat, media, m, {
              packname: global.packname,
              author: global.author,
            });
            await fs.unlinkSync(encmedia);
          } else {
            reply(
              `Send Image/Video With Caption ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          }
        }
        break;

      case "wiki":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (args.length < 1) return reply("What Are You Looking For?? ");
        const res2 = await wikiSearch(q).catch((e) => {
          return reply("Error Result Not Found!");
        });
        const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`;
        Miku.sendMessage(from, {
          image: { url: res2[0].thumb },
          caption: result2,
        });
        break;

      case "earthquake":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        const tres = await Gempa();
        var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } =
          tres.result;
        console.log(Map);
        const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`;
        Miku.sendMessage(from, { image: { url: Map }, caption: captt });
        break;

      case "covidinfo":
      case "covid":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        const c = await covid();
        var { kasus, kematian, sembuh } = c[0];
        Miku.sendMessage(
          from,
          {
            text: `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`,
          },
          m
        );
        break;

      case "couple":
      case "ship":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(`${mess.grouponly}`);
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          let jawab = `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}
Ohh i see 👀💖...`;
          let menst = [orang, jodoh];
          let buttons = [
            {
              buttonId: "❤️",
              buttonText: { displayText: "Congratulations ❤️" },
              type: 1,
            },
          ];
          await Miku.sendButtonText(m.chat, buttons, jawab, Miku.user.name, m, {
            mentions: menst,
          });
        }
        break;

      case "soulmate":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(`${mess.grouponly}`);
          let member = participants.map((u) => u.id);
          let me = m.sender;
          let jodoh = member[Math.floor(Math.random() * member.length)];
          let jawab = `👫 Soulmates
@${me.split("@")[0]} ❤️ @${jodoh.split("@")[0]}`;
          let ments = [me, jodoh];
          let buttons = [
            {
              buttonId: "❤️",
              buttonText: { displayText: "Be my Soulmate ❤️" },
              type: 1,
            },
          ];
          await Miku.sendButtonText(m.chat, buttons, jawab, Miku.user.name, m, {
            mentions: ments,
          });
        }
        break;

      case "handsomecheck":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text)
          return replay(`Tag Someone, Example : ${prefix + command} @Pelpav`);
        const gan = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        const teng = gan[Math.floor(Math.random() * gan.length)];
        Miku.sendMessage(
          from,
          { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` },
          { quoted: m }
        );
        break;
      case "beautifulcheck":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text)
          return replay(`Tag Someone, Example : ${prefix + command} @Pelpav`);
        const can = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        const tik = can[Math.floor(Math.random() * can.length)];
        Miku.sendMessage(
          from,
          { text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*` },
          { quoted: m }
        );
        break;

      case "awesomecheck":
      case "greatcheck":
      case "gaycheck":
      case "cutecheck":
      case "lesbiancheck":
      case "hornycheck":
      case "prettycheck":
      case "lovelycheck":
      case "uglycheck":
      case "racistcheck":
      case "funnycheck":
      case "loyalcheck":
      case "sexycheck":
      case "evilcheck":
      case "kindcheck":
      case "weebcheck":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text)
          return replay(`Tag Someone, Example : ${prefix + command} @Pelpav`);
        const sangeh = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        const sange = sangeh[Math.floor(Math.random() * sangeh.length)];
        Miku.sendMessage(
          from,
          { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` },
          { quoted: m }
        );
        break;

      case "charactercheck":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text)
          return replay(`Tag Someone, Example : ${prefix + command} @Pelpav`);
        const Mikutttt = [
          "Compassionate",
          "Generous",
          "Grumpy",
          "Forgiving",
          "Obedient",
          "Good",
          "Simp",
          "Kind-Hearted",
          "patient",
          "UwU",
          "top, anyway",
          "Helpful",
        ];
        const taky = Mikutttt[Math.floor(Math.random() * Mikutttt.length)];
        Miku.sendMessage(
          from,
          { text: `Character Check : ${q}\nAnswer : *${taky}*` },
          { quoted: m }
        );
        break;

      case "dare":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        const dare = [
          "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
          "spill people who make you pause",
          "call crush/pickle now and send ss",
          "drop only emote every time you type on gc/pc for 1 day.",
          "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
          "call ex saying miss",
          "sing the chorus of the last song you played",
          "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
          "Bang on the table (which is at home) until you get scolded for being noisy",
          "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
          "mention ex's name",
          "make 1 rhyme for the members!",
          "send ur whatsapp chat list",
          "chat random people with gheto language then ss here",
          "tell your own version of embarrassing things",
          "tag the person you hate",
          "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
          "change name to *I AM DONKEY* for 24 hours",
          "shout *ma chuda ma chuda ma chuda* in front of your house",
          "snap/post boyfriend photo/crush",
          "tell me your boyfriend type!",
          "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
          "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
          "prank chat ex and say *i love u, please come back.* without saying dare!",
          "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
          "change the name to *I am a child of randi* for 5 hours",
          "type in bengali 24 hours",
          "Use selmon bhoi photo for 3 days",
          "drop a song quote then tag a suitable member for that quote",
          "send voice note saying can i call u baby?",
          "ss recent call whatsapp",
          "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
          "pop to a group member, and say fuck you",
          "Act like a chicken in front of ur parents",
          "Pick up a random book and read one page out loud in vn n send it here",
          "Open your front door and howl like a wolf for 10 seconds",
          "Take an embarrassing selfie and paste it on your profile picture",
          "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
          "Walk on your elbows and knees for as long as you can",
          "sing national anthem in voice note",
          "Breakdance for 30 seconds in the sitting room😂",
          "Tell the saddest story you know",
          "make a twerk dance video and put it on status for 5mins",
          "Eat a raw piece of garlic",
          "Show the last five people you texted and what the messages said",
          "put your full name on status for 5hrs",
          "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
          "call ur bestie, bitch",
          "put your photo without filter on ur status for 10mins",
          "say i love oli london in voice note🤣🤣",
          "Send a message to your ex and say I still like you",
          "call Crush/girlfriend/bestie now and screenshot here",
          "pop to one of the group member personal chat and Say you ugly bustard",
          "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
          "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
          "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
          "use any bollywood actor photo as ur pfp for 3 days",
          "put your crush photo on status with caption, this is my crush",
          "change name to I AM GAY for 5 hours",
          "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
          "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
          "slap ur butt hardly send the sound of slap through voice note😂",
          "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
          "shout bravooooooooo and send here through voice note",
          "snap your face then send it here",
          "Send your photo with a caption, i am lesbian",
          "shout using harsh words and send it here through vn",
          "shout you bastard in front of your mom/papa",
          "change the name to i am idiot for 24 hours",
          "slap urself firmly and send the sound of slap through voice note😂",
          "say i love the bot owner Pelpav through voice note",
          "send your gf/bf pic here",
          "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
          "breakup with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love you😌",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here",
        ];
        const Mikudareww = dare[Math.floor(Math.random() * dare.length)];
        buffer = await getBuffer(
          `https://thumbs.gfycat.com/FrankCluelessIvorygull-size_restricted.gif`
        );
        Miku.sendMessage(
          from,
          { image: buffer, caption: "*You have chosen Dare*\n\n" + Mikudareww },
          { quoted: m }
        );
        break;

      case "truth":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        const truth = [
          "Have you ever liked anyone? How long?",
          "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
          "apa ketakutan terbesar kamu?",
          "Have you ever liked someone and felt that person likes you too?",
          "What is the name of your friend's ex-girlfriend that you used to secretly like?",
          "Have you ever stolen money from your father or mom? The reason?",
          "What makes you happy when you're sad?",
          "Ever had a one sided love? if so who? how does it feel bro?",
          "been someone's mistress?",
          "the most feared thing",
          "Who is the most influential person in your life?",
          "what proud thing did you get this year",
          "Who is the person who can make you awesome",
          "Who is the person who has ever made you very happy?",
          "Who is closest to your ideal type of partner here",
          "Who do you like to play with??",
          "Have you ever rejected people? the reason why?",
          "Mention an incident that made you hurt that you still remember",
          "What achievements have you got this year??",
          "What's your worst habit at school??",
          "What song do you sing most in the shower",
          "Have you ever had a near-death experience",
          "When was the last time you were really angry. Why?",
          "Who is the last person who called you",
          "Do you have any hidden talents, What are they",
          "What word do you hate the most?",
          "What is the last YouTube video you watched?",
          "What is the last thing you Googled",
          "Who in this group would you want to swap lives with for a week",
          "What is the scariest thing thats ever happened to you",
          "Have you ever farted and blamed it on someone else",
          "When is the last time you made someone else cry",
          "Have you ever ghosted a friend",
          "Have you ever seen a dead body",
          "Which of your family members annoys you the most and why",
          "If you had to delete one app from your phone, which one would it be",
          "What app do you waste the most time on",
          "Have you ever faked sick to get home from school",
          "What is the most embarrassing item in your room",
          "What five items would you bring if you got stuck on a desert island",
          "Have you ever laughed so hard you peed your pants",
          "Do you smell your own farts",
          "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
          "What is the biggest mistake you have ever made",
          "Have you ever cheated in an exam",
          "What is the worst thing you have ever done",
          "When was the last time you cried",
          "whom do you love the most among ur parents",
          "do u sometimes put ur finger in ur nosetrilðŸ¤£",
          "who was ur crush during the school days",
          "tell honestly, do u like any boy in this grup",
          "have you ever liked anyone? how long?",
          "do you have gf/bf','what is your biggest fear?",
          "have you ever liked someone and felt that person likes you too?",
          "What is the name of your ex boyfriend of your friend that you once liked quietly?",
          "ever did you steal your mothers money or your fathers money",
          "what makes you happy when you are sad",
          "do you like someone who is in this grup? if you then who?",
          "have you ever been cheated on by people?",
          "who is the most important person in your life",
          "what proud things did you get this year",
          "who is the person who can make you happy when u r sad",
          "who is the person who ever made you feel uncomfortable",
          "have you ever lied to your parents",
          "do you still like ur ex",
          "who do you like to play together with?",
          "have you ever stolen big thing in ur life? the reason why?",
          "Mention the incident that makes you hurt that you still remember",
          "what achievements have you got this year?",
          "what was your worst habit at school?",
          "do you love the bot creator Pelpav?",
          "have you ever thought of taking revenge from ur teacher?",
          "do you like current prime minister of ur country",
          "you non veg or veg",
          "if you could be invisible, what is the first thing you would do",
          "what is a secret you kept from your parents",
          "Who is your secret crush",
          "whois the last person you creeped on social media",
          "If a genie granted you three wishes, what would you ask for",
          "What is your biggest regret",
          "What animal do you think you most look like",
          "How many selfies do you take a day",
          "What was your favorite childhood show",
          "if you could be a fictional character for a day, who would you choose",
          "whom do you text the most",
          "What is the biggest lie you ever told your parents",
          "Who is your celebrity crush",
          "Whats the strangest dream you have ever had",
          "do you play pubg, if you then send ur id number",
        ];
        const mikutruthww = truth[Math.floor(Math.random() * truth.length)];
        buffer = await getBuffer(
          `https://i.pinimg.com/originals/58/c4/b6/58c4b6a5eb589e6e1cdd0ad6b49c662d.gif`
        );
        Miku.sendMessage(
          from,
          { image: buffer, caption: "*You have chosen Truth*\n" + mikutruthww },
          { quoted: m }
        );
        break;

      case "nsfwmiku":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.wait);
        nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`;
        Miku.sendMessage(
          from,
          { image: { url: nye }, caption: "Master..." },
          { quoted: m }
        );
        break;

      case "mediafire":
      case "mediafiredl":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text) return reply(mess.linkm);
          if (!isUrl(args[0]) && !args[0].includes("mediafire.com"))
            return reply(`The link you provided is invalid`);
          const baby1 = await mediafireDl(text);
          if (baby1[0].size.split("MB")[0] >= 999)
            return reply("*File Over Limit* " + util.format(baby1));
          const result4 = `「  *Mediafire Downloader*  」
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`;
          reply(`${result4}`);
          Miku.sendMessage(
            m.chat,
            {
              document: { url: baby1[0].link },
              fileName: baby1[0].nama,
              mimetype: baby1[0].mime,
            },
            { quoted: m }
          ).catch((err) => reply(mess.error));
        }
        break;

      case "masturbation":
      case "jahy":
      case "hentai":
      case "glasses":
      case "gangbang":
      case "foot":
      case "femdom":
      case "cum":
      case "ero":
      case "cuckold":
      case "blowjob":
      case "bdsm":
      case "ahegao":
      case "ass":
      case "orgy":
      case "panties":
      case "pussy":
      case "thighs":
      case "yuri":
      case "tentacles":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        try {
          reply(mess.waiting);
          NoHorny = await fetchJson(
            `https://myselfff.herokuapp.com/docs/nsfw/${command}`
          );
          YesHorny = await getBuffer(NoHorny.result);
          Miku.sendMessage(from, { image: YesHorny }, { quoted: m });
        } catch (e) {
          error("Error");
        }
        break;

      case "spank":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        reply(mess.waiting);
        spankd = await axios.get(`https://nekos.life/api/v2/img/spank`);
        let spbuff = await getBuffer(spankd.data.url);
        let spgif = await GIFBufferToVideoBuffer(spbuff);
        await Miku.sendMessage(
          m.chat,
          { video: spgif, gifPlayback: true },
          { quoted: m }
        ).catch((err) => {
          return reply("Error!");
        });
        break;

      case "blowjobgif":
      case "bj":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        reply(mess.waiting);
        bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`);
        let bjf = await getBuffer(bjd.data.url);
        let bjif = await GIFBufferToVideoBuffer(bjf);
        await Miku.sendMessage(
          m.chat,
          { video: bjif, gifPlayback: true },
          { quoted: m }
        ).catch((err) => {
          return reply("error..");
        });
        break;

      case "hentaivid":
      case "hentaivideo":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!AntiNsfw) return reply(mess.nonsfw);
          reply(mess.waiting);
          anu = await hentai();
          result912 = anu[Math.floor(Math.random(), anu.length)];
          Miku.sendMessage(
            m.chat,
            {
              video: { url: result912.video_1 },
              caption: `Title : ${result912.title}\nCategory : ${result912.category}\n$Mimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}`,
            },
            { quoted: m }
          );
        }
        break;

      case "trap":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        reply(mess.waiting);
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`);
        let trapbot = [
          { buttonId: `-trap`, buttonText: { displayText: `>>` }, type: 1 },
        ];
        let button2Messages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,
          buttons: trapbot,
          headerType: 1,
        };
        await Miku.sendMessage(m.chat, button2Messages, { quoted: m }).catch(
          (err) => {
            return "Error!";
          }
        );
        break;

      case "hentai-neko":
      case "hneko":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        reply(mess.waiting);
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`);
        let hnekobot = [
          {
            buttonId: `-${command}`,
            buttonText: { displayText: `>>` },
            type: 1,
          },
        ];
        let button3Messages = {
          image: { url: waifudd.data.url },
          caption: `Nyaah...`,
          buttons: hnekobot,
          headerType: 1,
        };
        await Miku.sendMessage(m.chat, button3Messages, { quoted: m }).catch(
          (err) => {
            return "Error!";
          }
        );
        break;

      case "hentai-waifu":
      case "hwaifu":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        reply(mess.waiting);
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`);
        let nwaifubot = [
          {
            buttonId: `-${command}`,
            buttonText: { displayText: `>>` },
            type: 1,
          },
        ];
        let button4Messages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,
          buttons: nwaifubot,
          headerType: 1,
        };
        await Miku.sendMessage(m.chat, button4Messages, { quoted: m }).catch(
          (err) => {
            return "Error!";
          }
        );
        break;

      case "gasm":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        reply(mess.waiting);
        waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`);
        var wbuttsss = [
          { buttonId: `-gasm`, buttonText: { displayText: `>>` }, type: 1 },
        ];
        let buttonsssMessages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,
          footer: `${global.BotName}`,
          buttons: wbuttsss,
          headerType: 4,
        };
        await Miku.sendMessage(m.chat, buttonsssMessages, { quoted: m }).catch(
          (err) => {
            return "Error!";
          }
        );
        break;

      case "smug2":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.waiting);
        waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`);
        var wbuttsss = [
          { buttonId: `-smug2`, buttonText: { displayText: `>>` }, type: 1 },
        ];
        let button1ssMessages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,
          footer: `${global.BotName}`,
          buttons: wbuttsss,
          headerType: 4,
        };
        await Miku.sendMessage(m.chat, button1ssMessages, { quoted: m }).catch(
          (err) => {
            return "Error!";
          }
        );
        break;

      case "foxgirl":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(mess.waiting);
        waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
        var wbuttsss = [
          { buttonId: `-foxgirl`, buttonText: { displayText: `>>` }, type: 1 },
        ];
        let button12ssMessages = {
          image: { url: waifudd.data.url },
          caption: `Awooo...`,
          footer: `${global.BotName}`,
          buttons: wbuttsss,
          headerType: 4,
        };
        await Miku.sendMessage(m.chat, button12ssMessages, { quoted: m }).catch(
          (err) => {
            return "Error!";
          }
        );
        break;

      case "animenom":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(mess.waiting);
        waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`);
        let xxhnekobot = [
          { buttonId: `-animenom`, buttonText: { displayText: `>>` }, type: 1 },
        ];
        let xx1button3Messages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,
          buttons: xxhnekobot,
          headerType: 1,
        };
        await Miku.sendMessage(m.chat, xx1button3Messages, { quoted: m }).catch(
          (err) => {
            return "Error!";
          }
        );
        break;

      case "waifu3":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(mess.waiting);
        waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`);
        var wbuttsss = [
          { buttonId: `-waifu3`, buttonText: { displayText: `>>` }, type: 1 },
        ];
        let button112ssMessages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,
          footer: `${global.BotName}`,
          buttons: wbuttsss,
          headerType: 4,
        };
        await Miku.sendMessage(m.chat, button112ssMessages, {
          quoted: m,
        }).catch((err) => {
          return "Error!";
        });
        break;

      case "crossplay":
      case "crosplay":
      case "cosplay":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        const buttons = [
          {
            buttonId: "-crossplay",
            buttonText: { displayText: ">>" },
            type: 1,
          },
        ];
        const cosplybutton = {
          image: {
            url: "https://hanzz-web.herokuapp.com/api/randomimage/cosplay",
          },
          caption: "Guess who am i...",
          footer: `${global.BotName}`,
          buttons: buttons,
          headerType: 4,
        };

        await Miku.sendMessage(m.chat, cosplybutton, { quoted: m }).catch(
          (err) => {
            return "Error!";
          }
        );

        break;

      case "neko2":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(mess.waiting);
        waifud = await axios.get("https://waifu.pics/api/sfw/neko");
        var wbutsss = [
          { buttonId: `-neko2`, buttonText: { displayText: `>>` }, type: 1 },
        ];
        let buttonssMessage = {
          image: { url: waifud.data.url },
          caption: `Here it is...`,
          footer: `${global.BotName}`,
          buttons: wbutsss,
          headerType: 4,
        };
        await Miku.sendMessage(m.chat, buttonssMessage, { quoted: m }).catch(
          (err) => {
            return "Error!";
          }
        );
        break;

      case "feed":
      case "meow":
      case "tickle":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(mess.waiting);
        waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`);
        var wbuttsss = [
          {
            buttonId: `-${command}`,
            buttonText: { displayText: `>>` },
            type: 1,
          },
        ];
        let buttonssMessages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,
          footer: `${global.BotName}`,
          buttons: wbuttsss,
          headerType: 4,
        };
        await Miku.sendMessage(m.chat, buttonssMessages, { quoted: m }).catch(
          (err) => {
            return "Error!";
          }
        );
        break;

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      case "cry":
      case "handhold":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`);
          try {
            let messsender = m.sender;
            let musers = ``;
            try {
              users = m.mentionedJid[0]
                ? m.mentionedJid[0]
                : m.quoted
                ? m.quoted.sender
                : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

              ment = [messsender, users];
            } catch {
              users == "none";
              ment = [messsender, m.sender];
            }
            if (users == "none") {
              musers = `@${m.sender.split("@")[0]} ${command}ed with themself!`;
              console.log(musers);
            } else {
              const rcpp = `@${users.split("@"[0])}`;
              musers = `@${m.sender.split("@")[0]} ${command}ed with @${
                users.split("@")[0]
              } `;

              console.log(musers);
            }
            const response = await axios.get(pat.url, {
              responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            var fetchedgif = await GIFBufferToVideoBuffer(buffer);
            Miku.sendMessage(
              m.chat,
              {
                video: fetchedgif,
                gifPlayback: true,
                mentions: ment,
                caption: musers,
              },
              { quoted: m }
            );
          } catch (error) {
            console.log(error);
          }
        }
        break;

      case "nom":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`);
          try {
            let messsender = m.sender;
            let musers = ``;
            try {
              users = m.mentionedJid[0]
                ? m.mentionedJid[0]
                : m.quoted
                ? m.quoted.sender
                : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

              ment = [messsender, users];
            } catch {
              users == "none";
              ment = [messsender, m.sender];
            }
            if (users == "none") {
              musers = `@${m.sender.split("@")[0]} is eating with themself!`;
              console.log(musers);
            } else {
              const rcpp = `@${users.split("@"[0])}`;
              musers = `@${m.sender.split("@")[0]} is eating with @${
                users.split("@")[0]
              } `;

              console.log(musers);
            }
            const response = await axios.get(pat.url, {
              responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            var fetchedgif = await GIFBufferToVideoBuffer(buffer);
            Miku.sendMessage(
              m.chat,
              {
                video: fetchedgif,
                gifPlayback: true,
                mentions: ment,
                caption: musers,
              },
              { quoted: m }
            );
          } catch (error) {
            console.log(error);
          }
        }
        break;

      case "hug":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`);
          try {
            let messsender = m.sender;
            let musers = ``;
            try {
              users = m.mentionedJid[0]
                ? m.mentionedJid[0]
                : m.quoted
                ? m.quoted.sender
                : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

              ment = [messsender, users];
            } catch {
              users == "none";
              ment = [messsender, m.sender];
            }
            if (users == "none") {
              musers = `@${m.sender.split("@")[0]} hugged themself!`;
              console.log(musers);
            } else {
              const rcpp = `@${users.split("@"[0])}`;
              musers = `@${m.sender.split("@")[0]} hugged @${
                users.split("@")[0]
              } `;

              console.log(musers);
            }
            const response = await axios.get(pat.url, {
              responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            var fetchedgif = await GIFBufferToVideoBuffer(buffer);
            Miku.sendMessage(
              m.chat,
              {
                video: fetchedgif,
                gifPlayback: true,
                mentions: ment,
                caption: musers,
              },
              { quoted: m }
            );
          } catch (error) {
            console.log(error);
          }
        }
        break;

      case "dance":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`);
          try {
            let messsender = m.sender;
            let musers = ``;
            try {
              users = m.mentionedJid[0]
                ? m.mentionedJid[0]
                : m.quoted
                ? m.quoted.sender
                : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

              ment = [messsender, users];
            } catch {
              users == "none";
              ment = [messsender, m.sender];
            }
            if (users == "none") {
              musers = `@${m.sender.split("@")[0]} is dancing alone!!`;
              console.log(musers);
            } else {
              const rcpp = `@${users.split("@"[0])}`;
              musers = `@${m.sender.split("@")[0]} is dancing with @${
                users.split("@")[0]
              } `;

              console.log(musers);
            }
            const response = await axios.get(pat.url, {
              responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            var fetchedgif = await GIFBufferToVideoBuffer(buffer);
            Miku.sendMessage(
              m.chat,
              {
                video: fetchedgif,
                gifPlayback: true,
                mentions: ment,
                caption: musers,
              },
              { quoted: m }
            );
          } catch (error) {
            console.log(error);
          }
        }
        break;

      case "kill":
      case "pat":
      case "lick":
      case "kiss":
      case "bite":
      case "bully":
      case "bonk":
      case "poke":
      case "slap":
      case "happy":
      case "cuddle":
      case "kick":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`);
          try {
            let messsender = m.sender;
            let musers = ``;
            try {
              users = m.mentionedJid[0]
                ? m.mentionedJid[0]
                : m.quoted
                ? m.quoted.sender
                : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

              ment = [messsender, users];
            } catch {
              users == "none";
              ment = [messsender, m.sender];
            }
            if (users == "none") {
              musers = `@${m.sender.split("@")[0]} ${command}ed themselves!!`;
              console.log(musers);
            } else {
              const rcpp = `@${users.split("@"[0])}`;
              musers = `@${m.sender.split("@")[0]} ${command}ed  @${
                users.split("@")[0]
              } `;

              console.log(musers);
            }
            const response = await axios.get(pat.url, {
              responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            var fetchedgif = await GIFBufferToVideoBuffer(buffer);
            Miku.sendMessage(
              m.chat,
              {
                video: fetchedgif,
                gifPlayback: true,
                mentions: ment,
                caption: musers,
              },
              { quoted: m }
            );
          } catch (error) {
            console.log(error);
          }
        }
        break;

      case "yeet":
      case "wink":
      case "smile":
      case "wave":
      case "blush":
      case "smug":
      case "glomp":
      case "cringe":
      case "highfive":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`);
          try {
            let messsender = m.sender;
            let musers = ``;
            try {
              users = m.mentionedJid[0]
                ? m.mentionedJid[0]
                : m.quoted
                ? m.quoted.sender
                : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

              ment = [messsender, users];
            } catch {
              users == "none";
              ment = [messsender, m.sender];
            }
            if (users == "none") {
              musers = `@${m.sender.split("@")[0]} ${command}ed at themself!`;
              console.log(musers);
            } else {
              const rcpp = `@${users.split("@"[0])}`;
              musers = `@${m.sender.split("@")[0]} ${command}ed at @${
                users.split("@")[0]
              } `;

              console.log(musers);
            }
            const response = await axios.get(pat.url, {
              responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            var fetchedgif = await GIFBufferToVideoBuffer(buffer);
            Miku.sendMessage(
              m.chat,
              {
                video: fetchedgif,
                gifPlayback: true,
                mentions: ment,
                caption: musers,
              },
              { quoted: m }
            );
          } catch (error) {
            console.log(error);
          }
        }
        break;
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      /*

case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet':
case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile':
case 'wave': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance':
case 'cringe': case 'cuddle': case 'highfive': case 'handhold': case 'kick':

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)						
resggh = await axios.get(`https://nekos.life/api/v2/img/${command}`)         
let resffj = await getBuffer(resggh.data.url)
let resmain = await GIFBufferToVideoBuffer(resffj)   
      await Miku.sendMessage(m.chat,{video: resmain, gifPlayback:true},{ quoted:m }).catch(err => {
                  return reply('error..')
                                  })
break

*/

      case "megumin":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(mess.waiting);
        ud = await axios.get("https://waifu.pics/api/sfw/megumin");
        var wbutsss = [
          { buttonId: `-megumin`, buttonText: { displayText: `>>` }, type: 1 },
        ];
        let buttonzMessage = {
          image: { url: ud.data.url },
          caption: `Here it is...`,
          footer: `${global.BotName}`,
          buttons: wbutsss,
          headerType: 4,
        };
        await Miku.sendMessage(m.chat, buttonzMessage, { quoted: m }).catch(
          (err) => {
            return "Error!";
          }
        );
        break;

      case "awoo":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(mess.waiting);
        waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`);
        var wbuttsss = [
          { buttonId: `-awoo`, buttonText: { displayText: `>>` }, type: 1 },
        ];
        let button1Messages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,
          footer: `${global.BotName}`,
          buttons: wbuttsss,
          headerType: 2,
        };
        await Miku.sendMessage(m.chat, button1Messages, { quoted: m }).catch(
          (err) => {
            return "Error!";
          }
        );
        break;

      case "animewall2":
      case "animewallpaper2":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(mess.waiting);
        const { AnimeWallpaper } = require("anime-wallpaper");
        if (!q) return reply("Please enter a seach term!");
        const wall = new AnimeWallpaper();
        const pages = [1, 2, 3, 4];
        const random = pages[Math.floor(Math.random() * pages.length)];
        const wallpaper = await wall
          .getAnimeWall4({ title: q, type: "sfw", page: pages })
          .catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
        var walb = [
          {
            buttonId: `-animewall2 ${q}`,
            buttonText: { displayText: `>>` },
            type: 1,
          },
        ];
        let wal = {
          image: { url: wallpaper[i].image },
          caption: `*Search Term :* ${q}`,
          footer: `${global.BotName}`,
          buttons: walb,
          headerType: 4,
        };
        await Miku.sendMessage(m.chat, wal, { quoted: m }).catch((err) => {
          return "Error!";
        });
        break;

      case "anime":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        if (!q)
          return reply(
            `Please proide a search term!\n\n*Example:* ${prefix}anime naruto`
          );
        reply(mess.waiting);
        const { Anime } = require("@shineiichijo/marika");
        const client = new Anime();
        let anime = await client.searchAnime(q);
        let result = anime.data[0];
        console.log(result);
        let details = `*Title:* ${result.title}\n`;
        details += `*Format:* ${result.type}\n`;
        details += `*Status:* ${result.status
          .toUpperCase()
          .replace(/\_/g, " ")}\n`;
        details += `*Total episodes:* ${result.episodes}\n`;
        details += `*Duration:* ${result.duration}\n`;
        details += `*Genres:*\n`;
        for (let i = 0; i < result.genres.length; i++) {
          details += `\t\t\t\t\t\t\t\t${result.genres[i].name}\n`;
        }
        details += `*Based on:* ${result.source.toUpperCase()}\n`;
        details += `*Studios:*\n`;
        for (let i = 0; i < result.studios.length; i++) {
          details += `\t\t\t\t\t\t\t\t${result.studios[i].name}\n`;
        }
        details += `*Producers:*\n`;
        for (let i = 0; i < result.producers.length; i++) {
          details += `\t\t\t\t\t\t\t\t\t\t${result.producers[i].name}\n`;
        }
        details += `*Premiered on:* ${result.aired.from}\n`;
        details += `*Ended on:* ${result.aired.to}\n`;
        details += `*Popularity:* ${result.popularity}\n`;
        details += `*Favorites:* ${result.favorites}\n`;
        details += `*Rating:* ${result.rating}\n`;
        details += `*Rank:* ${result.rank}\n\n`;
        if (result.trailer.url !== null)
          details += `*Trailer:* ${result.trailer.url}\n\n`;
        details += `*URL:* ${result.url}\n\n`;
        if (result.background !== null)
          details += `*Background:* ${result.background}\n\n`;
        details += `*Description:* ${result.synopsis.replace(
          /\[Written by MAL Rewrite]/g,
          ""
        )}`;
        Miku.sendMessage(
          m.chat,
          {
            image: { url: result.images.jpg.large_image_url },
            caption: details,
          },
          { quoted: m }
        );
        break;

      case "manga":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(mess.waiting);
        const { Manga } = require("@shineiichijo/marika");
        const manga = new Manga();
        if (!q)
          return reply(
            `Please proide a search term!\n\n_Example:_ ${prefix}manga naruto`
          );
        let srh = await manga.searchManga(q);
        let mang = `*Title:* ${srh.data[0].title}\n`;
        mang += `*Status:* ${srh.data[0].status}\n`;
        mang += `*Total Volumes:* ${srh.data[0].volumes}\n`;
        mang += `*Total Chapters:* ${srh.data[0].chapters}\n`;
        mang += `*Genres:*\n`;
        for (let i = 0; i < srh.data[0].genres.length; i++) {
          mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
        }
        mang += `*Published on:* ${srh.data[0].published.from}\n`;
        mang += `*Score:* ${srh.data[0].scored}\n`;
        mang += `*Popularity:* ${srh.data[0].popularity}\n`;
        mang += `*Favorites:* ${srh.data[0].favorites}\n`;
        mang += `*Authors:*\n`;
        for (let i = 0; i < srh.data[0].authors.length; i++) {
          mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
        }
        mang += `\n*URL:* ${srh.data[0].url}\n\n`;
        if (srh.data[0].background !== null)
          mang += `*Background:* ${srh.data[0].background}`;
        mang += `*Description:* ${srh.data[0].synopsis.replace(
          /\[Written by MAL Rewrite]/g,
          ""
        )}`;
        Miku.sendMessage(
          m.chat,
          {
            image: { url: srh.data[0].images.jpg.large_image_url },
            caption: mang,
          },
          { quoted: m }
        );
        break;

      case "waifu":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(mess.waiting);
        waifuddd = await axios.get("https://waifu.pics/api/sfw/waifu");
        var wbuttsssr = [
          { buttonId: `-waifu`, buttonText: { displayText: `>>` }, type: 1 },
        ];
        let button4Messagess = {
          image: { url: waifuddd.data.url },
          caption: "More than one waifu will definitely ruin your Laifu!",
          buttons: wbuttsssr,
          headerType: 4,
        };

        await Miku.sendMessage(m.chat, button4Messagess, { quoted: m }).catch(
          (err) => {
            return "error..";
          }
        );
        break;

      case "neko":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(mess.waiting);
        waifuddd = await axios.get("https://waifu.pics/api/sfw/neko");
        var wbuttsssr = [
          { buttonId: `-neko`, buttonText: { displayText: `>>` }, type: 1 },
        ];
        let buttonMessagessf = {
          image: { url: waifuddd.data.url },
          caption: "Nyaa...",
          buttons: wbuttsssr,
          headerType: 2,
        };

        await Miku.sendMessage(m.chat, buttonMessagessf, { quoted: m }).catch(
          (err) => {
            return "error..";
          }
        );
        break;

      case "loli":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(mess.waiting);
        waifuddd = await axios.get("https://waifu.pics/api/sfw/shinobu");
        var wbuttsssr = [
          { buttonId: `-loli`, buttonText: { displayText: `>>` }, type: 1 },
        ];
        let buttonMessagessfgr = {
          image: { url: waifuddd.data.url },
          caption: "Dont be a lolicon !",
          buttons: wbuttsssr,
          headerType: 2,
        };

        await Miku.sendMessage(m.chat, buttonMessagessfgr, { quoted: m }).catch(
          (err) => {
            return "error..";
          }
        );
        break;

      case "lyrics":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          if (!text) return reply(`Comand usage: ${prefix}lyrics Thunder`);
          reply(mess.waiting);
          const { lyrics, lyricsv2 } = require("@bochilteam/scraper");
          const result = await lyricsv2(text).catch(
            async (_) => await lyrics(text)
          );
          reply(
            `
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim()
          );
        }
        break;

      case "quotes":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        var res = await Quotes();
        teks = `\n*Author:* ${res.author}\n`;
        teks += `\n*Quotes:*\n`;
        teks += `${res.quotes}\n`;

        replay(teks);
        break;

      case "darkjoke":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        var res = await Darkjokes();
        teks = "\nDarkjokes";
        Miku.sendMessage(
          m.chat,
          { image: { url: res }, caption: teks },
          { quoted: m }
        );
        break;

      case "leavegc":
      case "leavegroup":
      case "bye":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return replay(mess.grouponly);
          reply(mess.waiting);
          if (!isCreator) return replay(`${mess.botowner}`);
          await Miku.groupLeave(m.chat)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)));
        }
        break;

      case "bc":
      case "broadcast":
      case "bcall":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!isCreator) return replay(mess.botowner);
          if (!args.join(" "))
            return replay(
              `Please enter some text to broadcast! \n\nExample : ${
                prefix + command
              } ${global.OwnerName}`
            );
          let anu = await store.chats.all().map((v) => v.id);
          replay(
            `Send Broadcast To ${anu.length} Chat\nTime's up ${
              anu.length * 1.5
            } second`
          );
          for (let yoi of anu) {
            await sleep(1500);
            let btn = [
              {
                quickReplyButton: {
                  displayText: "✨Menu✨",
                  id: "-menu",
                },
              },
              {
                quickReplyButton: {
                  displayText: "Bot Owner",
                  id: "-owner",
                },
              },
            ];
            let txt = `「 *${global.OwnerName}'s Broadcast* 」\n\n${text}`;
            Miku.send5ButImg(
              yoi,
              txt,
              `${global.BotName}`,
              BotLogo,
              btn,
              Thumb
            );
          }
          replay("Broadcast Sent !");
        }
        break;

      case "runtime":
        {
          if (global[_0x2379bf(0xc7)] == "true") {
            if (!_0x5882aa[_0x2379bf(0x12c)])
              return _0x191609("" + global[_0x2379bf(0x41e)]);
          }
          _0x5882aa[_0x2379bf(0x231)](
            _0x2379bf(0x5c1) +
              botname +
              _0x2379bf(0x307) +
              runtime(process[_0x2379bf(0x324)]()) +
              "_"
          );
        }
        break;

      case _0x2379bf(0x348):
      case "christmas":
      case "3dchristmas":
      case _0x2379bf(0xec):
      case _0x2379bf(0x5ad):
      case "scifi":
      case _0x2379bf(0x14c):
      case "waterpipe":
      case "spooky":
      case _0x2379bf(0x52b):
      case _0x2379bf(0x4f4):
      case _0x2379bf(0x305):
      case _0x2379bf(0x484):
      case _0x2379bf(0x490):
      case _0x2379bf(0x285):
      case _0x2379bf(0x3c5):
      case "berry":
      case "thunder":
      case ".":
      case _0x2379bf(0x26e):
      case _0x2379bf(0x172):
      case _0x2379bf(0x252):
      case _0x2379bf(0x4b2):
      case "brokenglass":
      case _0x2379bf(0x58e):
      case _0x2379bf(0x192):
      case _0x2379bf(0x475):
      case _0x2379bf(0x1e9):
      case _0x2379bf(0x50d):
      case "graffitibike":
      case _0x2379bf(0x287):
      case _0x2379bf(0x2ce):
      case "honey":
      case _0x2379bf(0x62b):
      case _0x2379bf(0x5f1):
      case "biscuit":
      case _0x2379bf(0x17f):
      case _0x2379bf(0x529):
      case _0x2379bf(0x4e5):
      case _0x2379bf(0x4de):
      case "blood":
      case _0x2379bf(0x59e):
      case "toxic":
      case _0x2379bf(0x18f):
      case _0x2379bf(0x65f):
      case "bloodglas":
      case "halloween":
      case _0x2379bf(0x460):
      case _0x2379bf(0x508):
      case "wicker":
      case _0x2379bf(0x38a):
      case _0x2379bf(0x2e4):
      case _0x2379bf(0x261):
      case _0x2379bf(0x677):
      case "glue":
      case _0x2379bf(0x416):
      case _0x2379bf(0x3ab):
      case "demon":
        {
          if (global[_0x2379bf(0xc7)] == "true") {
            if (!_0x5882aa[_0x2379bf(0x12c)])
              return _0x191609("" + global["inbblmsg"]);
          }
          _0x3c6f67[_0x2379bf(0x216)](_0x5882aa[_0x2379bf(0x381)], {
            react: { text: _0x2379bf(0x4a3), key: _0x5882aa["key"] },
          });
          if (!q)
            return _0x191609(
              _0x2379bf(0x1f2) + (_0x36556c + _0x3cc7d5) + "\x20Lelouch"
            );
          _0x191609(mess["wait"]);
          let _0x21ebde;
          if (/candy/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x2a4);
          if (/christmas/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0xa5);
          if (/3dchristmas/["test"](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x3d4);
          if (/sparklechristmas/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x449);
          if (/deepsea/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x5b4);
          if (/scifi/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x500);
          if (/rainbow/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde =
              "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html";
          if (/waterpipe/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x5ec);
          if (/spooky/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x1b3);
          if (/pencil/["test"](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x2e1);
          if (/circuit/["test"](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x674);
          if (/discovery/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x2dc);
          if (/metalic/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde =
              "https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html";
          if (/fiction/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x4f6);
          if (/demon/["test"](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x589);
          if (/transformer/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde =
              "https://textpro.me/create-a-transformer-text-effect-online-1035.html";
          if (/berry/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x110);
          if (/thunder/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde =
              "https://textpro.me/online-thunder-text-effect-generator-1031.html";
          if (/magma/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x4ae);
          if (/3dstone2/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x4e4);
          if (/neonlight/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x281);
          if (/glitch/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x338);
          if (/harrypotter/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x599);
          if (/brokenglass/["test"](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x562);
          if (/papercut/["test"](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x3d5);
          if (/watercolor/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x1bb);
          if (/multicolor/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x1df);
          if (/neondevil/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x27f);
          if (/underwater/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x5d8);
          if (/graffitibike/["test"](_0x3cc7d5))
            _0x21ebde =
              "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html";
          if (/snow/[_0x2379bf(0x265)](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x320);
          if (/cloud/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x439);
          if (/honey/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x624);
          if (/ice/[_0x2379bf(0x265)](_0x3cc7d5)) _0x21ebde = _0x2379bf(0xf2);
          if (/fruitjuice/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x4d8);
          if (/biscuit/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x49f);
          if (/wood/["test"](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x3d0);
          if (/chocolate/["test"](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x18a);
          if (/strawberry/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde =
              "https://textpro.me/strawberry-text-effect-online-889.html";
          if (/matrix/["test"](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x2e8);
          if (/blood/["test"](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x1fa);
          if (/dropwater/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = "https://textpro.me/dropwater-text-effect-872.html";
          if (/toxic/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = "https://textpro.me/toxic-text-effect-online-901.html";
          if (/lava/[_0x2379bf(0x265)](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x4a1);
          if (/rock/[_0x2379bf(0x265)](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x474);
          if (/bloodglas/["test"](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x601);
          if (/halloween/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x503);
          if (/darkgold/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x4cb);
          if (/joker/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x5cd);
          if (/wicker/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = "https://textpro.me/wicker-text-effect-online-932.html";
          if (/firework/["test"](_0x3cc7d5))
            _0x21ebde =
              "https://textpro.me/firework-sparkle-text-effect-930.html";
          if (/skeleton/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x397);
          if (/blackpink/[_0x2379bf(0x265)](_0x3cc7d5))
            _0x21ebde = _0x2379bf(0x159);
          if (/sand/[_0x2379bf(0x265)](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x596);
          if (/glue/[_0x2379bf(0x265)](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x145);
          if (/1917/[_0x2379bf(0x265)](_0x3cc7d5)) _0x21ebde = _0x2379bf(0xf7);
          if (/leaves/["test"](_0x3cc7d5)) _0x21ebde = _0x2379bf(0x177);
          let _0x4634d1 = await maker[_0x2379bf(0x21e)](_0x21ebde, q);
          _0x3c6f67[_0x2379bf(0x216)](
            _0x5882aa["chat"],
            { image: { url: _0x4634d1 }, caption: _0x2379bf(0x2d4) },
            { quoted: _0x5882aa }
          );
        }
        break;

      case "help":
      case "h":
      case "menu":
      case "allmenu":
      case "listmenu":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          const helpmenu = `Yo *${pushname}*,

Je suis *Lelouch* un bot crée par mon magnifique proprio *Pelpav*

┌───『 𝓗𝓪𝓷𝓭𝓸𝓾𝓽 』──
│⊶ Utilise ${prefix}help pour voir les commandes
│⊶ Owner: ${global.OwnerName}
│⊶ botname: ${global.BotName}
└──☘︎───☘︎───☘︎────☘︎

╔════⧫🧧𝑪𝒐𝒓𝒆🧧
║
║ ${prefix}profile
║ ${prefix}help
║ ${prefix}delete
║ ${prefix}listgc
║ ${prefix}listpc
║ ${prefix}support
║ ${prefix}repo
║ ${prefix}script
║ ${prefix}rules
║ ${prefix}speak
║ ${prefix}runtime
╚════════════╝ 
╔════⧫🎀𝑶𝒘𝒏𝒆𝒓🎀
║
║ ${prefix}self
║ ${prefix}public
║ ${prefix}ban
║ ${prefix}bangroup
║ ${prefix}bye
║ ${prefix}join
║ ${prefix}block
║ ${prefix}unblock
║ ${prefix}broadcast
║
╚════════════╝
╔════⧫👥𝑮𝒓𝒐𝒖𝒑👥
║
║ ${prefix}promote
║ ${prefix}demote
║ ${prefix}revoke
║ ${prefix}add
║ ${prefix}remove
║ ${prefix}tagall
║ ${prefix}hidetag
║ ${prefix}groupsetting
║ ${prefix}grouplink
║ ${prefix}setgcpp
║ ${prefix}setname
║ ${prefix}setdesc
║ ${prefix}group
║ ${prefix}nsfw
║ ${prefix}welcome
║ ${prefix}leveling
║
╚════════════╝ 
╔════⧫⛓️𝑨𝒏𝒕𝒊 𝑳𝒊𝒏𝒌⛓️
║
║ ${prefix}antilinkgc
║ ${prefix}antilinktg
║ ${prefix}antilinktt
║ ${prefix}antilinkytch
║ ${prefix}antilinkytvid
║ ${prefix}antilinkig
║ ${prefix}antilinkfb
║ ${prefix}antilinktwit
║ ${prefix}antilinkall
║ ${prefix}antiwame
║
╚════════════╝
╔════⧫🔎𝑺𝒆𝒂𝒓𝒄𝒉🔍
║
║ ${prefix}play
║ ${prefix}song
║ ${prefix}yts
║ ${prefix}lyrics
║ ${prefix}google
║ ${prefix}playstore
║ ${prefix}gimage
║ ${prefix}pinterest
║ ${prefix}image
║ ${prefix}movie
║ ${prefix}wallpaper
║ ${prefix}searchgc
║ ${prefix}happymod
║ ${prefix}wikimedia
║ ${prefix}ringtone
║ ${prefix}anime
║ ${prefix}animestory
║ ${prefix}manga
║
╚════════════╝
╔════⧫⚙️𝑪𝒐𝒏𝒗𝒆𝒓𝒕⚙️
║
║ ${prefix}sticker
║ ${prefix}toimg
║ ${prefix}tovideo
║ ${prefix}togif
║ ${prefix}steal
║ ${prefix}stickermeme
║ ${prefix}emojimix
║ ${prefix}tourl
║ ${prefix}tomp3
║ ${prefix}toaudio
║
╚════════════╝
╔════⧫🔉𝑨𝒖𝒅𝒊𝒐🔉
║
║ ${prefix}bass
║ ${prefix}tempo
║ ${prefix}blown
║ ${prefix}deep
║ ${prefix}earrape
║ ${prefix}fast
║ ${prefix}fat
║ ${prefix}nightcore
║ ${prefix}reverse
║ ${prefix}robot
║ ${prefix}slow
║ ${prefix}squirrel
║
╚════════════╝
╔════⧫💥𝑹𝒆𝒂𝒄𝒕𝒊𝒐𝒏𝒔💥
║
║ ${prefix}bonk
║ ${prefix}cry
║ ${prefix}bully
║ ${prefix}cuddle
║ ${prefix}hug
║ ${prefix}kiss
║ ${prefix}lick
║ ${prefix}pat
║ ${prefix}smug
║ ${prefix}yeet
║ ${prefix}blush
║ ${prefix}smile
║ ${prefix}wave
║ ${prefix}highfive
║ ${prefix}handhold
║ ${prefix}nom
║ ${prefix}glomp
║ ${prefix}bite
║ ${prefix}slap
║ ${prefix}kill
║ ${prefix}happy
║ ${prefix}wink
║ ${prefix}poke
║ ${prefix}dance
║ ${prefix}cringe
║
╚════════════╝
 
╔════⧫📥𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅𝒆𝒓📥
║
║ ${prefix}play
║ ${prefix}play2
║ ${prefix}ytmp3/getmusic
║ ${prefix}ytmp4/getvideo
║ ${prefix}ytvideo
║ ${prefix}mediafire
║ ${prefix}instagram
║ ${prefix}igtv
║ ${prefix}facebook
║ ${prefix}fbmp3
║ ${prefix}twitter
║ ${prefix}twittermp3
║ ${prefix}tiktok
║ ${prefix}tiktokaudio
║ ${prefix}tiktoknowm
║
╚════════════╝
 
╔════⧫☄️𝑾𝒆𝒆𝒃☄️
║
║ ${prefix}waifu
║ ${prefix}loli
║ ${prefix}neko
║ ${prefix}ppcouple
║ ${prefix}feed
║ ${prefix}foxgirl
║ ${prefix}meow
║ ${prefix}tickle
║ ${prefix}wallpaper
║ ${prefix}coffee
║ ${prefix}animenom
║ ${prefix}waifu3
║ ${prefix}neko2
║ ${prefix}migumin
║ ${prefix}awoo
║ ${prefix}anime
║ ${prefix}animewallpaper2
║ ${prefix}manga
║
╚════════════╝
 
╔════⧫📣𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒗𝒆📣
║
║ ${prefix}animequote
║ ${prefix}quote
║ ${prefix}covid
║ ${prefix}earthquake
║ ${prefix}wiki
║
╚════════════╝
 
╔════⧫🦋𝑭𝒖𝒏🦋
║
║ ${prefix}reaction
║ ${prefix}truth
║ ${prefix}dare
║ ${prefix}couple
║ ${prefix}soulmate
║ ${prefix}handsomecheck
║ ${prefix}beautifulcheck
║ ${prefix}awesomecheck
║ ${prefix}greatcheck
║ ${prefix}gaycheck
║ ${prefix}cutecheck
║ ${prefix}lesbiancheck
║ ${prefix}hornycheck
║ ${prefix}prettycheck
║ ${prefix}lovelycheck
║ ${prefix}uglycheck
║ ${prefix}charactercheck
║ ${prefix}quotes
║ ${prefix}darkjoke
║ ${prefix}stickermeme
║
╚════════════╝
╔════⧫😜Fun add😜
║
║ ${prefix}lelouch
║ ${prefix}rules 
║
╚════════════╝

╔════⧫🎨Text🎨
║
║ ${prefix}3dchristmas
║ ${prefix}toorainbow2
║ ${prefix}spooky
║ ${prefix}glitch
║ ${prefix}neondevil
║ ${prefix}snow
║ ${prefix}cloud
║
╚════════════╝
 
╔════⧫🐬𝑬𝒔𝒔𝒆𝒏𝒕𝒊𝒂𝒍/𝑶𝒕𝒉𝒆𝒓𝒔🐬
║
║ ${prefix}translate
║ ${prefix}say
║ ${prefix}toletter
║ ${prefix}qr
║ ${prefix}fliptext
║
╚════════════╝
 
╔════⧫🐾𝑵𝑺𝑭𝑾 🐾
║
║ 🍊 Ecris " *${prefix}nsfw* " Pour activer le nsfw (Admin only!) 
║
║  🍑 Puis " *${prefix}nsfwmenu* " pour obtenir la liste complète des commandes NSFW.
╚════════════╝
 『  *${global.BotName}*  』
 Produit par: *Pelpav*
 🎐 Pour utiliser l'une de ces commandes, tapez " *${prefix}<Command name>* ".
 
 🎐 Pour obtenir le type de lien du groupe de support" *${prefix}support* ".
 🎐 Ecris " *${prefix}help* " pour obtenir la liste complète des commandes.
 
   J'ai détruit le monde, pour pouvoir en créer un nouveau... `;

          let buttonshelpm = [
            {
              buttonId: `-owner`,
              buttonText: { displayText: "My owner" },
              type: 1,
            },
          ];
          let buttonMessage = {
            video: fs.readFileSync("./system/miku2.mp4"),
            gifPlayback: true,
            caption: helpmenu,
            footer: `${BotName}`,
            buttons: buttonshelpm,
            headerType: 4,
          };
          Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        break;

      case "":
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          mikupic = "https://images.alphacoders.com/634/thumb-1920-634235.jpg";

          const needhelpmenu = `Tu as besoin d'aide ${pushname} Shinemonoga ? Ecris *${prefix}help* pour obtenir la liste complète de mes commandes.`;

          let butRun = [
            { buttonId: `-help`, buttonText: { displayText: "Aide" }, type: 1 },
          ];
          let buttonMessage = {
            video: fs.readFileSync("./system/miku.mp4"),
            gifPlayback: true,
            caption: needhelpmenu,
            footer: `${global.BotName}`,
            buttons: butRun,
            headerType: 4,
          };
          Miku.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        break;

      case "lelouch":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        const txt = `Hey ${pushname} ici c'est encore en développement ?`;
        /*
        const mikuarray = [
          "https://c.tenor.com/NOGjHRHDL_cAAAAM/naruto-uzumaki-naruto.gif",
          "https://i.pinimg.com/originals/70/61/65/706165a53b3ef64b168a60ef56888c38.gif",
          "https://c.tenor.com/WOdwAFh_bfIAAAAM/naruto-crying.gif",
          "https://media.tenor.com/images/cdd97372f67962d3c6b39e31b3aa05b0/tenor.gif",
          "https://i.pinimg.com/originals/8f/91/18/8f911824957eeeb34a5d2575e6cdde16.gif",
          "https://c.tenor.com/zp1_x4EdZkcAAAAd/uchiha-sasuke.gif",
          "https://i.gifer.com/origin/f0/f0956582f17c19ad9b7f2b2b0a2ba3b0.gif",
          "https://c.tenor.com/HYZD06iWjlwAAAAC/sasuke-naruto.gif",
          "https://i.pinimg.com/originals/3c/7d/8a/3c7d8a39078d91ed6b80f91b0441ff98.gif",
          "https://i.pinimg.com/originals/01/0e/82/010e82b298ebc2830880a811bbb273dd.gif",
          "https://i.pinimg.com/originals/e8/90/45/e8904562f49f53d3c365d716f510e4c8.gif",
          "https://i.pinimg.com/originals/da/06/5a/da065a82d192e58213d3b89f5915d822.gif",
        ];
*/
        const mikuselection =
          mikuarray[Math.floor(Math.random() * mikuarray.length)];

        Miku.sendMessage(
          from,
          { video: { url: mikuselection }, gifPlayback: true, caption: txt },
          { quoted: m }
        );

        break;

      case "rules":
        replay("En Développement.....");
        break;

      case "add":
        {
          if (!m.isGroup) return replay(mess.grouponly);
          if (!isBotAdmins) return replay(mess.botadmin);
          let users = m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (users.length == 0)
            return replay(
              `Please write the number of the person you want to add to thhis group`
            );
          await Miku.groupParticipantsUpdate(m.chat, [users], "add")
            .then((res) => replay(`User Added Successfully!`))
            .catch((err) => replay(`Cannot add that user to this group!`));
        }
        break;

      case "tts":
      case "texttospeech":
      case "say":
      case "speak":
        {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          if (!args[0])
            return reply("Please give me a text so that i can speak it!");

          let texttosay = text
            ? text
            : m.quoted && m.quoted.text
            ? m.quoted.text
            : m.text;
          const SpeakEngine = require("google-tts-api");
          const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {
            lang: "en",
            slow: false,
            host: "https://translate.google.com",
          });
          Miku.sendMessage(
            m.chat,
            {
              audio: { url: texttospeechurl },
              mimetype: "audio/mpeg",
              fileName: `MikuSpeechEngine.mp3`,
            },
            { quoted: m }
          );
        }
        break;

      case "qr":
      case "qrcode":
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return replay(mess.grouponly);
        reply(`Running repl....Please wait until repl.it responds...`);
        var replqr = await getBuffer(`https://miku-qr--fantox001.repl.co/`);
        var qrbutton = [
          {
            buttonId: `-qr`,
            buttonText: { displayText: `Re-run Repl` },
            type: 1,
          },
        ];
        let bmffg = {
          image: replqr,
          caption: `Scan the qr within 10-15 seconds...`,
          footer: `${global.BotName}`,
          buttons: qrbutton,
          headerType: 4,
        };
        await Miku.sendMessage(m.chat, bmffg, { quoted: m }).catch((err) => {
          return "Erreur!";
        });
        break;

      default:
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          reply(
            `No such command programmed *${pushname}* ! Type *${prefix}help* to get my full command list!`
          );
        }

        if (budy.startsWith("=>")) {
          if (!isCreator) return reply(mess.botowner);
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return reply(bang);
          }
          try {
            reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)));
          } catch (e) {
            Miku.sendMessage(
              from,
              { image: ErrorPic, caption: String(e) },
              { quoted: m }
            );
          }
        }
        if (budy.startsWith(">")) {
          if (!isCreator) return reply(mess.botowner);
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await reply(evaled);
          } catch (err) {
            await Miku.sendMessage(
              from,
              { image: ErrorPic, caption: String(err) },
              { quoted: m }
            );
          }
        }

        if (budy.startsWith("$")) {
          if (!isCreator) return replay(mess.botowner);
          exec(budy.slice(2), (err, stdout) => {
            if (err)
              return Miku.sendMessage(
                from,
                { image: ErrorPic, caption: String(err) },
                { quoted: m }
              );
            if (stdout) return replay(stdout);
          });
        }

        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith("broadcast")) return;
          if (m.isBaileys) return;
          let msgs = global.db.database;
          if (!(budy.toLowerCase() in msgs)) return;
          Miku.copyNForward(m.chat, msgs[budy.toLowerCase()], true);
        }
    }
  } catch (err) {
    Miku.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), {
      quoted: m,
    });
    console.log(err);
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
