// import dotenv from "dotenv";
// dotenv.config({
//     path: "./env"
// });
import { app } from "./app.js";
import connectDb from "./db/index.js";
import dns from "dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);


connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is listing at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB Connection Failed!!!",err);
})