const mongoose=require('mongoose');

const MenuSchema=new mongoose.Schema(
    {
        nomQr:{type:String,
            required:true},
        name:{
            type:String,
            required:true,
        },
        plat:{
            type:Array,
            required: true,
        },
        prix:{
            type:Array,
            required: true,
        },
        user:{type:mongoose.Types.ObjectId,
            ref:'user'}
    },
    {timestamps:true}
);
module.exports=mongoose.model('menu',MenuSchema);