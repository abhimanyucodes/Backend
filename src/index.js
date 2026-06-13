// import dotenv from "dotenv";
// dotenv.config({
//     path: "./env"
// });
import connectDb from "./db/index.js";
import dns from "dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);


connectDb();