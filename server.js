const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const app=express();
const port=process.env.PORT||5000
const uri=process.env.ATLAS_URI;
app.use(express.json());
app.use(cors());
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Atlas Db Connected");
})
app.listen(port,()=>{
    console.log(`Server Started Running On Port:${port}`);
})
