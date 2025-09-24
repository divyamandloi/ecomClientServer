let express = require('express');
let mongoose =require('mongoose')//call mongoose here
require('dotenv').config()
let App =express();
let cors=require('cors');
const { adminRoutes } = require('./App/routes/admin/adminRoutes');
App.use(cors())
App.use(express.json())

//Connectivity with db using mangoose 
//http://localhost:8000/admin
App.use('/admin',adminRoutes)

//http://localhost:8000

mongoose.connect(process.env.DBCONNECTIONURL)//DBCONNECTIONURL = mongodb://127.0.01:27017/ecomproject8pmDB
.then((res)=>{
    App.listen(process.env.PORT)
})
// App.listen('8000',()=>{

// })