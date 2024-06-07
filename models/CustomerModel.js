
const {Schema,model} = require("mongoose")
const validator = require("validator")

const customerSchema = new Schema({
    Username : {
        type: String,
        required: [true,"Username is required"],
        minlength: [3,"Username must be atleast 3 characters"],
        unique: true
    },
    Name:{
        type: String,
        required:[true, "Name field cannot be empty"]
    },
    Surname:{
        type: String,
        required: [true, "Surname field cannot be empty"],
    },
    Password:{
        type: String,
        required: [true, "Password field is required"]
    },
    Email:{
        type: String,
        required: [true, "Email field is required"],
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Email is Invalid"
            }
    },
    PhoneNumber: {
        type: String,
        required: [true, "Phonenumber field is required"],
        unique: true,
        validate: {
            validator: function(v) {
                return validator.isMobilePhone(PhoneNumber, 'tr-TR');
            },
            message: "Phonenumber is Invalid"
        }
        
    }
})

const customer = model("customer",customerSchema)
module.exports = customer