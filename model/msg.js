import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type: String
    },
    message:{
        type: String
    }
});

const Message = mongoose.model('Message', msgSchema);

export default Message;