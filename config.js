const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_00_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI3LFxuICAgICAgICA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgNTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjExLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAzNixcbiAgICAgICAgNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuY245d2duWFJCZjZtb0RUQmt0c1I2THZlV3BTelF5NERyK2J4cS81UG1ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwRGJGNXZUeFNMS0x0b205c0JWMXNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMxZjRlMDI5LTEyYjUtNDMyNS04ZTUyLWJhYmYwNWE0NTI5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAxMjIsXG4gICAgICA2MCxcbiAgICAgIDI1NSxcbiAgICAgIDEzLFxuICAgICAgNzEsXG4gICAgICAxNzksXG4gICAgICA2MixcbiAgICAgIDU4LFxuICAgICAgMjI5LFxuICAgICAgMjE3LFxuICAgICAgMyxcbiAgICAgIDE4OSxcbiAgICAgIDI4LFxuICAgICAgMTE4LFxuICAgICAgNSxcbiAgICAgIDk3LFxuICAgICAgMjIwLFxuICAgICAgMTksXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDIzMSxcbiAgICAgIDg4LFxuICAgICAgNzcsXG4gICAgICAyMDEsXG4gICAgICA1MixcbiAgICAgIDczLFxuICAgICAgMTkzLFxuICAgICAgMTQ5LFxuICAgICAgMTYzLFxuICAgICAgOTcsXG4gICAgICA3OSxcbiAgICAgIDAsXG4gICAgICAxNTMsXG4gICAgICAyMDIsXG4gICAgICAyMzEsXG4gICAgICA1LFxuICAgICAgNzAsXG4gICAgICAxNTcsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjc4UzNBOUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjAzOTA4NzE6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNzgyMDI0MDQwNjA0Ojc3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tqNWo3Y0ZFT1NSOXJrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTzljbDRNdmtLZXJmcnRrZ0JVVitNWjgxK3I4djg0YlNzaXptTUZKSFNIND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0QUNLZ1Y0a28vNGpyV3E4Q1hRV29TaXhXamhINGlGaG1TNmFMbEFVSzJCVlBQbmpEbGxlcXI5d2dzNUI5cHU2cG80MktyVEZpODJNM2xlbGtxTXRCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxYUJ6VkR6aVVpN25vS3ViVXBRdEs4ZmJHMXRoNWFQd2xtMzZkY2Jzb3d0UHAyRkNOM1A5emwxMmx2MnF2TjVac3BOc25oL3Jjd1ltRFI1SVlJSUhEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTIwMzkwODcxOjc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMDg1OTkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFFc0FBTDBLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUVzQUFMMEsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2aENuSDFSMUFXbkVzSUduZkU4MUJSa3NlOWJheWcxUHBoOXJiM1gyOXJnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTc3ODE5MjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDc1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE1ODE2MTU4MDFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
