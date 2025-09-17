//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUovUTk0VGNvUlE2NWlnZUhMWlQ1NEJhUW1aVGZITzd5V2pVTXRET25YVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTc4aEFZN2cxTEh2aTVCN0RIMXl5ODh4S0laSVJLNWw3UzZRZ2UyZXN3TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtR1I4dEM1Rmx2aUhlWXVNc3RXNHJRcFI0MFFzVGZnUURWWHUyRHJYMEdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6MmhQR3lzeFIxendQek5yM3haMnlINk9oV2Q5bW53YTBjY0lzTWJ4T3ljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFQczFIa2VWYWFQaWZnZ1NJWVdDY3h2cFBrTWkwQlcxazhxMitUbC94R0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYyRGRycjQzUDRVUlBpSm01VnloV2pqVlkzeWl4ZnhSTUIvd1dRNnhMR009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZMc1N1TVVrZ1YzdjM3RWs2WEdMQkVCU2tqTUNFUm4xODVjSUVqaGVIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ZqblZRQ2t2NGJvOUsyK1k5cVVZWnl4RDd1d05Mc1ZGSm51TUM4bGlHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZPd3g3cDhvdzJVb1pZd2tmRUpyNTNtbzRwM0VkN2hpUlMzVDlRMGdNTzVOTzF3SUFNMUdhcXVGUnVYa2RtbTdOYTd3N0NZeXNnNnYvaTVFY1Fkb0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJaT2E3VWkxTkNMeUNaQ0V0VGlaM21QcWFEcVM5TGZhOTNUWGk0Skd5dDlNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5TExTazJDUVM3ZTRJbFN4S2hKVzhnIiwicGhvbmVJZCI6IjhlNWE4NzA4LTViZDQtNDhjZC04YjJkLTQzYTU2MjBjMDJhYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoNm96T0dyQk9TYzNVenpYblBJODZpNkxRY0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2M0UnkvRENqY1dTVVlCMk9vZk9sSXhQQWFzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZGUDlLR0E4IiwibWUiOnsiaWQiOiI5NDcyOTc3NTI1OTo5MEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjM0ODc1NDY5OTg5NDc6OTBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOK2FqT01DRUtxTHFzWUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNNW5YUGc2RGx1NWtXRU9TdU9hY1Z1cFgzV2JTZGRtNksreWR6WHpQMkgwPSIsImFjY291bnRTaWduYXR1cmUiOiI3UzNRL3M1b3dCZGJxTFBQZTdsQ2tGNm9SYzNWSW04MTlwU010VUJuK2FuOUtlNXUvN25mYWZpWHFHRElUWTdsQWlwUTNxRkpPYzJBeEtMOTlPdHdEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaVN3eUQrZVhscFhPYWduRzVtQTRzdTh1bzNMUENNekZMRVh3eFZJT2MzYnVJMDhNY1BEMzFKSFFQV293OTFRQnI0YjV0cDFIcGpEQUdMWXFTQllxQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyOTc3NTI1OTo5MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUT1oxejRPZzVidVpGaERrcmptbkZicVY5MW0wblhadWl2c25jMTh6OWg5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTgxMDI5NzAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSDgvIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
