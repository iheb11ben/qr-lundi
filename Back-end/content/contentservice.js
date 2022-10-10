const content = require('./modelcontent');

const createQR =(data)=>{
   return content.create(data)
}
const getQR =(id)=>{
   console.log("idservice",id);
   return content.findById(id)
}
const getallQR =()=>{
   return content.find()
}
const getcontentbyIdUser =(id)=>{
   
   return content.find({user:id})
}






module.exports={createQR,getQR,getallQR,getcontentbyIdUser}