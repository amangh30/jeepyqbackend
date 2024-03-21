import express from "express"
import router from "./router/route.js";
import Connection from './db.js';
const cors = require('cors');

const app = express();
Connection();
const corsOptions ={
    origin:'https://jeepyq.vercel.app', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(router)

app.listen(8000,()=>{
    console.log("Server running on port 8000")
})
