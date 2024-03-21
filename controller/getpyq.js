import Pyq from "../model/pyq.js"
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getallpyq = async(req,res)=>{
    try {
        // Fetch data from the database
        const data = await Pyq.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getfile=async(req,res)=>{
       const fileName = req.params.filename;
    const filePath = path.join(__dirname, '..', './uploads', fileName);
    console.log(filePath)
  
    fs.exists(filePath, (exists) => {
      if (exists) {
        res.download(filePath);
      } else {
        res.status(404).send('File not found.');
      }
    });
};
