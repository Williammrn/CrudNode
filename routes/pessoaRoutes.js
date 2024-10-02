// routes/pessoaRoutes.js
import express from 'express';
import * as pessoaController from '../controllers/pessoaController.js';

const router = express.Router();

router.post('/people', pessoaController.createPerson);
router.get('/people', pessoaController.getAllPeople);
router.get('/people/:id', pessoaController.getPersonById);
router.put('/people/:id', pessoaController.updatePerson);
router.delete('/people/:id', pessoaController.deletePerson);

export default router;
