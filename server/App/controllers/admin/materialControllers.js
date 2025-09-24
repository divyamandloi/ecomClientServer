
let materialCreate=(req,res)=>{

    let obj={
    
            status:1,
            msg:'Material added successfully'
        }
        res.send(obj)
}
let materialView=(req,res)=>{

    let obj={
    
            status:1,
            msg:'Material view successfully'
        }
        res.send(obj)
}

let materialDelete=(req,res)=>{

    let obj={
    
            status:1,
            msg:'Material deleted successfully'
        }
        res.send(obj)
}
let materialUpdate=(req,res)=>{

    let obj={
    
            status:1,
            msg:'Material updated successfully'
        }
        res.send(obj)
}
module.exports={materialCreate,materialView,materialUpdate,materialDelete}