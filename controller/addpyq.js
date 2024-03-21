import Pyq from "../model/pyq.js"

const addpyq=(req,res)=>{
    let pyq = new Pyq({
        subject:req.body.subject,
        year: req.body.year,
        date: req.body.date,
        shift: req.body.shift,
    })
    if(req.file){
        pyq.file = req.file.filename
    }
    pyq.save()
    .then(response=>{
        res.json({
            message:"File added"
        })
    })
    .catch(error=>{
        res.json(error)
    })
}

export default addpyq;
