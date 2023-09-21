const mongoose=require("mongoose")
const express = require('express');
const app = express();

mongoose.connect("mongodb+srv://hmyle:C6lrHMWYYDO2K5Bz@cluster0.sujlcna.mongodb.net/?retryWrites=true&w=majority")
// mongoose.set('strictQuery', true)

.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection =  new mongoose.model('LogInCollection',logInSchema)

// const LogInCollection = [
//     { name: 'Alice', password: "a1234" },
//     { name: 'Bob', password: "a1234" },
//     { name: 'Charlie', password: "a1234" }
//   ];
  
//   logInCollection.insertMany(LogInCollection)
//   .then(() => console.log('Many documents saved'))
//   .catch((error) => console.log(error.message));


module.exports=LogInCollection