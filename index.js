import express from "express"
import router from "./router/route.js";
import Connection from './db.js';
import cors from 'cors'


const app = express();
Connection();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(router)

app.listen(8000,()=>{
    console.log("Server running on port 8000")
})
