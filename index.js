const { Telegraf } = require("telegraf");
const axios = require("axios");
require("dotenv").config();

const bot = new Telegraf(process.env.TELEGRAM_API_KEY);
bot.start((ctx) => ctx.reply("Welcome To BOT created by kirtikumar"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.command("categories", async (ctx) => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products/categories");
      if (res.data && res.data.length > 0) {
        ctx.reply(res.data.join("\n")); 
      } else {
        ctx.reply("No categories found.");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      ctx.reply("An error occurred while fetching categories.");
    }
  });
  
bot.launch();
