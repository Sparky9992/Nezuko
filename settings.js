const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "918839439805 , 923190825808";
}

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://carabot9:ishaan09@cluster0.wbn9l.mongodb.net/?retryWrites=true&w=majority";
global.prefa = process.env.PREFIX || ":"
global.ggle = process.env.GOOGLE_API || "none"
global.wter = process.env.WEATHER_API || "none"
global.pgdb = process.env.DATABASE_URL || "none";
global.port = process.env.PORT || 8080;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
