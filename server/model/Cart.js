const {model}=require("mongoose");

module.exports=model("cart",{
    goodsid:String,
    imgurl:String,
    title:String,
    price:Number,
    count:Number
})