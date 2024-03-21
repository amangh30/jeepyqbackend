import express from "express"
import router from "./router/route.js";
import Connection from './db.js';
import cors from "cors"

const app = express();
Connection();
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(8000,()=>{
    console.log("Server running on port 8000")
})