import express from 'express';
import controller from '../controllers/arquivo_material_controller.js';
import file_upload from '../helpers/upload_arquivo.js';
import validate_token from '../middlewares/validar_token.js';

const router = express.Router();

router.post('/', 
    validate_token, 
    file_upload.single('file'), 
    controller.create
);
router.get('/get_file/:file', controller.getFile)
router.get('/', validate_token, controller.read);
router.patch('/:params', validate_token, controller.update);
router.delete('/:params', validate_token, controller.delete);

export default router