const {createQR,getQR,getallQR,getcontentbyIdUser,updateContent}= require('./contentservice');
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


const updateContentController=async(req,res)=>{
    const{
        body:{nom,nomQr,prenom,phone,email,adresse,ville,user},
        params:{id:contentID}
    }=req
    const Conetent_to_update=await updateContent(contentID,req.body)
    if(!Conetent_to_update){
        return res.send('id non trouvable')
    }
    res.status(StatusCodes.OK).send('Content up to date')
}


module.exports={createQrController,getQrController,getAllQrController,getbyIdUserController,updateContentController}