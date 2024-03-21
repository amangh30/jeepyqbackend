import Message from "../model/msg.js";

export const sendmsg = (req,res)=>{
    const data = req.body;
    const newdata = new Message(data);
    newdata.save()
    .then(savedResponse => {
      console.log('Response saved successfully:', savedResponse);
      return res.status(200).json("Message Sent Successfullly");
    })
    .catch(error => {
      console.error('Error saving response:', error);
    });
}