let mongoose=require("mongoose")
let colorSchema=mongoose.Schema(
    {
       colorName:{
        required: [ true, 'Color Name Is required'],
         type:String,
         minLength:2,
         maxLength:30,
         unique:true,
       },
       colorCode:{
         type:String, //#ccc
         minLength:2,
         maxLength:30,
       } ,
       colorOrder:Number,
       colorStatus:{
        type:Boolean,
        default:true
       }
    }
)
let colorModel=mongoose.model("color",colorSchema)
module.exports={colorModel}