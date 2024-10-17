import * as productModel from '../models/productModel.js';

// Assumindo que você tenha um arquivo de configuração do banco de dados

// Função para criar um produto
export const createProduct = async (req, res) => {
    try {
         await productModel.createCliente(req.body);
         res.status(201).send('Produto criado com sucesso');
    } catch (error) {
         console.error('Erro ao criar produto:', error);
         res.status(500).send('Erro ao criar produto');
    }

};

// Função para obter todos os produtos
export const getAllProducts = async (req, res) => {
    try {
        const products = await clienteModel.getAllCliente();
        res.status(200).json(products);
    } catch (error) {
        console.error('Erro ao obter produtos:', error);
        res.status(500).send('Erro ao obter produtos');
    }
    
};

// Função para obter um produto por ID
export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productModel.getProductById(id);
        res.status(200).json(product);
    } catch (error) {
        console.error('Erro ao obter produto:', error);
        res.status(500).send('Erro ao obter produto');
    }
};


// Função para atualizar um produto
export const updateProduct = async (req, res) => {
    try {
        await productModel.updateProduct(req.body);
        res.status(200).send('Produto atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).send('Erro ao atualizar produto');
    }
};

// Função para deletar um produto
export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        await productModel.deleteProduct(id);
        res.status(200).send('Produto deletado com sucesso');
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        res.status(500).send('Erro ao deletar produto');
    }
};
