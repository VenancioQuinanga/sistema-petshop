import express from 'express';
import controller from '../controllers/professor_turma_controller.js';
import validate_token from '../middlewares/validar_token.js';

const router = express.Router();

router.post('/', validate_token, controller.create);
router.get('/', validate_token, controller.read);
router.patch('/:params', validate_token, controller.update);
router.delete('/:params', validate_token, controller.delete);

export default router