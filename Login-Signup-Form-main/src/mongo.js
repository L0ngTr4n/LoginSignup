const mongoose=require("mongoose")
const express = require('express');
const app = express();

mongoose.connect("mongodb+srv://L0ngTr4n:longtd2411@test.nemlrfl.mongodb.net/LoginSignup")
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

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

// const LogInCollection = [
//     { name: 'Alice', password: 1234 },
//     { name: 'Bob', password: 1234 },
//     { name: 'Charlie', password: 1234 }
//   ];
  
//   logInCollection.insertMany(LogInCollection)
//   .then(() => console.log('Many documents saved'))
//   .catch((error) => console.log(error.message));


module.exports=LogInCollection