const {
    createUrlController,
    getUrlController,
    getUrlByIdController,
    updateUrlController,
    deleteUrlController,getUrlbyUserController}=require('./urlController')
    const urlRouter=require('express').Router()

    urlRouter.route('/').post(createUrlController).get(getUrlController)
    urlRouter.route('/:id').get(getUrlByIdController).patch(updateUrlController).delete(deleteUrlController)
urlRouter.route('/user/:id').get(getUrlbyUserController)
module.exports=urlRouter