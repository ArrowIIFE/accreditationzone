//external imports
const mongoose = require("mongoose");

//Schema
const PmoaSchema = mongoose.Schema({
    id:{
        type: Number
    },

    fullname:{
        type:String,
        required:true,
        trim:true
    },
    designation:{
        type:String,
        required:true,  
        trim:true
    },
    organization:{
        type:String,
        required:true
    },
    
    zoneone:{
        type: String,
    },
    zonetwo:{
        type: String,
        },
    zonethree:{
        type: String,
    },
    zonefour:{
        type: String,
    },
    zonefive:{
        type: String,
    },
    zonesix:{
        type: String,
    },
    formno:{
        type:String,
        required:true,
    },   
    pmoa:{
            type: String,
    },
    
    image:{
        type:String
    },
    role:{
        type:String,
        enum:["admin", "user"],
        default:"user"
    }
}

);

const Pmoa =mongoose.model("Pmoa", PmoaSchema);
module.exports = Pmoa;