const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const playerSchema=new Schema({
    Name:{
        type:String,
        required:true,
        unique:true
    },
    BornDate:{
        type:Date,
        required:true
    },
    PRole:{
        type:String,
        required:true,
        
    },
    BowlingStyle:{
        type:String,
    },
    BatingStyle:{
        type:String,
    },
    Team:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true,
        default:"User"
    },
    Profile:{
        type:String,
       
    }
},{
    collation:'cricket',
    timestamps:true
}
)

module.exports=mongoose.model('cricket',playerSchema);
