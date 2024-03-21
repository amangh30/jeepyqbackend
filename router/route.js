import express from "express"
import { check } from "../controller/check.js";
import { sendmsg } from "../controller/msg.js";
import upload from "../middleware/upload.js";
import addpyq from "../controller/addpyq.js";
import { getallpyq, getfile } from "../controller/getpyq.js";

const router = express.Router();

router.get("/", (req, res) => {
res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
 });
router.get('/getall',getallpyq)
router.get('/getfile/:filename',getfile)
router.post('/check',check)
router.post('/msg',sendmsg)
router.post('/add',upload.single('file'),addpyq)


export default router;
