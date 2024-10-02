import db from '../database/db.js'; // Um nível acima da pasta controllers
// Assumindo que você tenha um arquivo de configuração do banco de dados

// Função para criar um produto
export const createProduct = async (req, res) => {
    const { id_produto, nome, descricao, peso, quantidade_estoque, preco_atual } = req.body;

    try {
        await db.none(
            'INSERT INTO produto (id_produto, nome, descricao, peso, quantidade_estoque, preco_atual) VALUES ($1, $2, $3, $4, $5, $6)',
            [id_produto, nome, descricao, peso, quantidade_estoque, preco_atual]
        );
        res.status(201).send('Produto criado com sucesso');
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).send('Erro ao criar produto');
    }
};

// Função para obter todos os produtos
export const getAllProducts = async (req, res) => {
    try {
        const products = await db.any('SELECT * FROM produto');
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
        const product = await db.one('SELECT * FROM produto WHERE id_produto = $1', id);
        res.status(200).json(product);
    } catch (error) {
        console.error('Erro ao obter produto:', error);
        res.status(500).send('Erro ao obter produto');
    }
};

// Função para atualizar um produto
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, peso, quantidade_estoque, preco_atual } = req.body;

    try {
        await db.none(
            'UPDATE produto SET nome = $1, descricao = $2, peso = $3, quantidade_estoque = $4, preco_atual = $5 WHERE id_produto = $6',
            [nome, descricao, peso, quantidade_estoque, preco_atual, id]
        );
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
        await db.none('DELETE FROM produto WHERE id_produto = $1', id);
        res.status(200).send('Produto deletado com sucesso');
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        res.status(500).send('Erro ao deletar produto');
    }
};
