const {createQR,getQR,getallQR,getcontentbyIdUser}= require('./contentservice');
const {StatusCodes}= require('http-status-codes')


const createQrController=async(req,res)=>{
    // req.body.filename
    
    res.status(StatusCodes.CREATED).send(await createQR(req.body))

}

const getQrController=async(req,res)=>{
    console.log("id",req.params.id);
    res.send(await getQR(req.params.id))
}
const getAllQrController=async(req,res)=>{
    
    res.send(await getallQR())
}
const getbyIdUserController=async(req,res)=>{
    
    res.send(await getcontentbyIdUser(req.params.id))
}




module.exports={createQrController,getQrController,getAllQrController,getbyIdUserController}