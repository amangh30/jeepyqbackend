import express from "express"
import { check } from "../controller/check.js";
import { sendmsg } from "../controller/msg.js";
import upload from "../middleware/upload.js";
import addpyq from "../controller/addpyq.js";
import { getallpyq, getfile } from "../controller/getpyq.js";

const router = express.Router();

router.get('/getall',getallpyq)
router.get('/getfile/:id',getfile)
router.post('/check',check)
router.post('/msg',sendmsg)
router.post('/add',upload.single('file'),addpyq)


export default router;
