import express from 'express';
import * as pessoaController from '../controllers/pessoaController.js';

const router = express.Router();

router.post('/', pessoaController.createPerson); // Altere para '/' em vez de '/people'
router.get('/', pessoaController.getAllPeople);
router.get('/:id', pessoaController.getPersonById);
router.put('/:id', pessoaController.updatePerson);
router.delete('/:id', pessoaController.deletePerson);

export default router;
