import Pyq from "../model/pyq.js"
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import mongoose from "mongoose"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getallpyq = async(req,res)=>{
 try {
        // Fetch data from the database
        const data = await Pyq.find();
         console.log(data)
        res.send(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getfile=async(req,res)=>{
  const fileId = req.params.id;
  try {
    // Check if fileId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(fileId)) {
      return res.status(400).send('Invalid file ID.');
    }

    // Find file in MongoDB using Mongoose
    const file = await Pyq.findById(fileId).exec();
    if (!file) {
      return res.status(404).send('File not found.');
    }

    // Set response headers
    res.set({
      'Content-Type': file.file.contentType,
      'Content-Disposition': `attachment; filename="${file.file.filename}"`
    });

    // Send file data
    res.send(file.file.data);
  } catch (err) {
    console.error('Error downloading file:', err);
    res.status(500).send('Error downloading file.');
  }
}

