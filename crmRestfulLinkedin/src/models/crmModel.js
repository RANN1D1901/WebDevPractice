var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName:{
        type:String,
        required:"Enter First Name"
    },
    lastName:{
        type:String,
        required:"Enter First Name"
    },
    email:{
        type:String
    },
    company:{
        type:String
    },
    phone:{
        type:Number
    },
    createdDate:{
        type:Date,
        default: Date.now
    }
});
mongoose.model('Contact', ContactSchema);

export default ContactSchema;