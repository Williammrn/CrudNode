import db from '../database/db.js';
import * as pessoaModel from '../models/pessoaModel.js';

export const createPerson = async (req, res) => {
    try {
        await pessoaModel.createPerson(req.body);
        res.status(201).json({ message: 'Pessoa criada com sucesso' });
    } catch (error) {
        console.error('Erro ao criar pessoa:', error);
        res.status(500).json({ error: 'Erro ao criar pessoa' });
    }
};

export const getAllPeople = async (req, res) => {
    try {
        const people = await pessoaModel.getAllPeople();
        res.status(200).json(people);
    } catch (error) {
        console.error('Erro ao obter pessoas:', error);
        res.status(500).json({ error: 'Erro ao obter pessoas' });
    }
};

export const getPersonById = async (req, res) => {
    const { id } = req.params;
    try {
        const person = await pessoaModel.getPersonById(id);
        res.status(200).json(person);
    } catch (error) {
        console.error('Erro ao obter pessoa:', error);
        res.status(500).json({ error: 'Erro ao obter pessoa' });
    }
};

export const updatePerson = async (req, res) => {
    const { id } = req.params;
    try {
        await pessoaModel.updatePerson(id, req.body);
        res.status(200).json({ message: 'Pessoa atualizada com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar pessoa:', error);
        res.status(500).json({ error: 'Erro ao atualizar pessoa' });
    }
};

export const deletePerson = async (req, res) => {
    const { id } = req.params;
    try {
        await pessoaModel.deletePerson(id);
        res.status(200).json({ message: 'Pessoa deletada com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar pessoa:', error);
        res.status(500).json({ error: 'Erro ao deletar pessoa' });
    }
};
