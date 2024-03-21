export const check = (req,res)=>{
    try{
            if(req.body.password=="123")
        return res.status(200).json({success:true})
    else
        return res.status(200).json({success:false})
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}