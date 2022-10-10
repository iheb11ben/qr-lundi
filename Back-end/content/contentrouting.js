const ContentRoute = require('express').Router()
const {createQrController,getQrController,getAllQrController,getbyIdUserController}= require('./contentController');
// const multer = require('../middleware/multer')
ContentRoute.route('').post(createQrController)
ContentRoute.route('/affiche/:id').get(getQrController)
ContentRoute.route('/affiche').get(getAllQrController)
ContentRoute.route('/afficheUser/:id').get(getbyIdUserController)
module.exports=ContentRoute