import mongoose from "mongoose";

const pyqSchema = new mongoose.Schema({
    subject:{
        type:String
    },
    year:{
        type: String
    },
    date:{
        type: String
    },
    shift:{
        type: String
    },
    file:{
        type:String
    }
});

const Pyq = mongoose.model('PYQ', pyqSchema);

export default Pyq;