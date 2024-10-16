import express from "express";
import clienteControlles from '../controllers/clienteControlles.js'

const router = express.Router();

router.post('/', clienteControlles.createPerson); 
router.get('/', clienteControlles.getAllPeople);
router.get('/:id', clienteControlles.getPersonById);
router.put('/:id', clienteControlles.updatePerson);
router.delete('/:id', clienteControlles.deletePerson);

export default router;