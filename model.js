const { string } = require("i/lib/util")
const mongoose=require("mongoose")

const BrandName=mongoose.Schema({
    brandname:{
        type:String,
        require:true,
    },
    data:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("brandname",BrandName)