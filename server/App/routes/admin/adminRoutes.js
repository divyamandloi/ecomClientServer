let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { materialRoutes } = require("./materialRoutes")

let adminRoutes=express.Router()
//http://localhost:8000/admin/color


adminRoutes.use("/color",colorRoutes)
adminRoutes.use("/material",materialRoutes)
// //http://localhost:8000/admin/login
// adminRoutes.post("/login",(req,res)=>{
//     let obj={
//         status:1,
//         msg:"Login Done"
//     }

//     res.send(obj)
// })

module.exports={adminRoutes}