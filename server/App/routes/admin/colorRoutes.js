let express=require("express")
const { colorCreate, colorView, colorDelete, colorUpdate, multiDelete, singleData, statusUpdate } = require("../../controllers/admin/colorContollers")
let colorRoutes=express.Router()



colorRoutes.post("/create",colorCreate)
//http://localhost:8000/admin/color/view
colorRoutes.get("/view",colorView)

colorRoutes.delete("/delete/:id",colorDelete)

colorRoutes.post("/multi-delete",multiDelete)

colorRoutes.post("/status-update",statusUpdate)

colorRoutes.get("/edit-color/:id",singleData)

colorRoutes.put("/update/:id",colorUpdate)



module.exports={colorRoutes}