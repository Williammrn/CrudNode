import db from '../database/db.js';

// Função para criar um novo produto
export const createProduct = async (product) => {
    const { id_produto, nome, descricao, peso, quantidade_estoque, preco_atual } = product;
  
    
    try {
        await db.none(
            'INSERT INTO produto (id_produto, nome, descricao, peso, quantidade_estoque, preco_atual) VALUES ($1, $2, $3, $4, $5, $6)',
            [id_produto, nome, descricao, peso, quantidade_estoque, preco_atual]
        );
        
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        throw error; // ou tratar o erro de alguma outra forma
    }
};


// Função para obter todos os produtos
export const getAllProducts = async (req, res) => {
    try {
        const products = await db.any('SELECT * FROM produto');
        res.status(200).json(products);
    } catch (error) {
        console.error('Erro ao obter produtos:', error);
        res.status(500).json({ error: 'Erro ao obter produtos' });
    }
};

// Função para obter um produto por ID
export const getProductById = async (id) => {
    return await db.oneOrNone('SELECT * FROM produto WHERE id_produto = $1', [id]);
};

// Função para atualizar um produto
// Função para atualizar um produto
export const updateProduct = async (id, product) => {
    const { nome, descricao, peso, quantidade_estoque, preco_atual } = product;

    try {
        await db.none(
            'UPDATE produto SET nome = $1, descricao = $2, peso = $3, quantidade_estoque = $4, preco_atual = $5 WHERE id_produto = $6',
            [nome, descricao, peso, quantidade_estoque, preco_atual, id]
        );
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        throw error; // ou você pode lançar uma nova mensagem de erro
    }
};


// Função para excluir um produto
export const deleteProduct = async (id) => {
    console.log(id)
    await db.none('DELETE FROM produto WHERE id_produto = $1', [id]);
};
