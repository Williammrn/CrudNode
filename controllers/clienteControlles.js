import { Client } from 'pg-promise/typescript/pg-subset.js';
import * as clienteModel from '../models/clienteModel.js';

export const createCliente = async (req, res) => {
    try {
        await clienteModel.createCliente(req.body);
        res.status(201).json({ message: 'Cliente criada com sucesso' });
    } catch (error) {
        console.error('Erro ao criar Cliente:', error);
        res.status(500).json({ error: 'Erro ao criar Cliente' });
    }
};

export const getAllCliente = async (req, res) => {
    try {
        const Cliente = await clienteModel.getAllCliente();
        res.status(200).json(Cliente);
    } catch (error) {
        console.error('Erro ao obter Clientes:', error);
        res.status(500).json({ error: 'Erro ao obter Clientes' });
    }
};

export const getClienteById= async (req, res) => {
    const { id } = req.params;
    try {
        const Cliente = await clienteModel.getcreateClienteById(id);
        res.status(200).json(Cliente);
    } catch (error) {
        console.error('Erro ao obter Cliente:', error);
        res.status(500).json({ error: 'Erro ao obter Cliente' });
    }
};

export const updateCliente= async (req, res) => {
    const { id } = req.params;
    try {
        await clienteModel.updateCliente(id, req.body);
        res.status(200).json({ message: 'Cliente atualizada com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar Cliente:', error);
        res.status(500).json({ error: 'Erro ao atualizar Cliente' });
    }
};

export const deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        await clienteModel.deleteCliente(id);
        res.status(200).json({ message: 'Cliente deletada com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar Cliente:', error);
        res.status(500).json({ error: 'Erro ao deletar Cliente' });
    }
};
