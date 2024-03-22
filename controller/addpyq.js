import Pyq from "../model/pyq.js"

const addpyq= async(req,res)=>{
    const file = req.file;
    let pyq = new Pyq({
        subject:req.body.subject,
        year: req.body.year,
        date: req.body.date,
        shift: req.body.shift,
    })
    if(!(req.file)){
        return res.status(400).send('No file uploaded.');
    }
    try {
        pyq.file.filename =file.originalname
        pyq.file.contentType =file.mimetype
        pyq.file.data =file.buffer
        await pyq.save();
        res.send('File uploaded successfully.');
      } catch (err) {
        console.error(err);
        res.status(500).send('Error uploading file.');
      }
    };

export default addpyq;