const { colorModel } = require("../../models/colorModel")

let colorCreate = async (req, res) => {

    console.log(req.body);

    // let colorRes=await colorModel.insertOne(colorInsertObj)

    //Insert

    // let insertObj={
    //     colorName:req.body.colorName,
    //     colorCode:req.body.colorCode,
    //     colorOrder:req.body.colorOrder,
    //     colorStatus:req.body.colorStatus
    // }
    let obj
    try {
        let colorCollection = await colorModel(req.body)
        let colorRes = await colorCollection.save() //Insert
        obj = {
            status: 1,
            msg: "Color Added",
            colorRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = "Color name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.colorName) {
                errorMessage = err.errors.colorName.message
            }
        }

        obj = {
            status: 0,
            errorMessage,

        }
        res.send(obj)
    }


}

let colorView = async (req, res) => {

    ///skip(0) Start
    //limit(5) Limit
    //Frontend Page Number Send
    // page key send  ->query
    let skip=0
    let limit=5
    
    if(req.query.limit){
        limit=req.query.limit;
        
    }

    if(req.query.page){
        skip=(req.query.page-1)*limit
        
    }
    let colorData = await colorModel.find().skip(skip).limit(limit) //5

    let colorDatalength = await colorModel.find() //[20]

    let obj = {
        status: 1,
        colorData,
        length:colorDatalength.length, //Number of Rows-13
        totPages: Math.ceil(colorDatalength.length/limit)//2.3=3
    }

    res.send(obj)
}

let colorDelete = (req, res) => {

    let { id } = req.params;
    let obj
    colorModel.deleteOne({ _id: id })
        .then((delRes) => {
            obj = {
                status: 1,
                msg: "Color Delete",
                delRes
            }

            res.send(obj)
        })
        .catch((err) => {
            obj = {
                status: 0,
                err
            }
            res.send(obj)
        })

}
let colorUpdate = async (req, res) => {
    
    let { id } = req.params;
    let obj
    try {
        let colorRes = await colorModel.updateOne(
            {
                _id: id
            },
            {
                $set: req.body
            }
        )

        obj = {
            status: 1,
            msg: "Color Updated",
            colorRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = "Color name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.colorName) {
                errorMessage = err.errors.colorName.message
            }
        }

        obj = {
            status: 0,
            errorMessage,

        }
        res.send(obj)
    }

}

let multiDelete = (req,res) => {
    let { ids } = req.body //Array
    let obj
    colorModel.deleteMany({ _id: ids })
        .then((delRes) => {
            obj = {
                status: 1,
                msg: "Color Delete",
                delRes
            }

            res.send(obj)
        })
        .catch((err) => {
            obj = {
                status: 0,
                err
            }
            res.send(obj)
        })
}


let singleData=async (req,res)=>{
    let {id}=req.params;
     let colorData = await colorModel.findOne({_id:id})
    let obj = {
        status: 1,
        colorData
    }

    res.send(obj)
}


let statusUpdate=async (req,res)=>{
   let { ids } = req.body //Array   [ id1,id2 ] 

//    for(let id of ids){
//         //Data Get ->Old Status
//         let oldata=await colorModel.findOne({_id:id})
//         let currentStatu=oldata.colorStatus
//          await colorModel.updateOne({_id:id},{$set:{
//             colorStatus:!currentStatu
//          }})
//    }
//
   let updateRes=await  colorModel.updateMany(
        { _id:ids },
        [
            {
                $set:{
                   colorStatus:{
                    $not:"$colorStatus"
                   } 
                }
            }
        ]
   )
    let obj = {
        status: 1,
        msg:"Status updated",
     
    }

    res.send(obj)


}
module.exports = { colorCreate, colorView, colorDelete, colorUpdate, multiDelete,singleData,statusUpdate }