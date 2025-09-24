let express=require("express")
const { materialCreate, materialView, materialDelete, materialUpdate } = require("../../controllers/admin/materialControllers")
let materialRoutes=express.Router()

materialRoutes.post("/create",materialCreate)
//http://localhost:8000/admin/color/view
materialRoutes.get("/view",materialView)

materialRoutes.delete("/delete/:id",materialDelete)

//materialRoutes.post("/multi-delete",multiDelete)

//materialRoutes.post("/status-update",statusUpdate)

//materialRoutes.get("/edit-color/:id",singleData)

materialRoutes.put("/update/:id",materialUpdate)


module.exports={materialRoutes}