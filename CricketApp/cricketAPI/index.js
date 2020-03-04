const express=require("express")
const app=express();
const router=express.Router();
const cors=require('cors');
const mongoose=require('mongoose');
const player=require('./player')



app.use('/uploads',express.static('./uploads'))
app.use(express.json());
app.use(router);
app.use(cors());
app.use('/player',player)

app.get('/',function(req,res){
    res.send("hello");
})



mongoose.connect('mongodb://localhost:27017/playersDB',{});
mongoose.connection.on('Error',function(err){
    if(err){
        console.log("Error in connecting Database");
        process.exit(1);
    }
    
}).once('open',function(){
    console.log("Connected")
})
app.listen(3007,function(err,data){
    if(err){
        console.log(err)
        return;
    }
    else{
        console.log("Connected successfully")
    }
})

module.exports=app;