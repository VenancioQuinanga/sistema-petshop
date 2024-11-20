import express from 'express';
import controller from '../controllers/usuario_controller.js';
import validate_token from '../middlewares/validar_token.js';
import image_upload from '../helpers/upload_imagem.js'

const router = express.Router();

router.get('/', validate_token, controller.read)
router.get('/:params', validate_token, controller.filter)
router.get('/get_photo/:photo', controller.getPhoto)
router.get('/getuserbytoken/:token', controller.getUserByToken); 

router.post('/', 
    validate_token, 
    image_upload.single("profile_photo"), 
    controller.create
)
router.post('/authenticate', controller.authenticate)

router.patch('/:params', validate_token, controller.update)

router.delete('/:params', validate_token, controller.delete)

export default router