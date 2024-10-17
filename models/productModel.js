import db from '../database/db.js';

// Função para criar um novo produto
export const createProduct = async (product) => {
    const { id_produto, nome, descricao, peso, quantidade_estoque, preco_atual } = product;
   
        await db.none(
           'INSERT INTO produto (id_produto, nome, descricao, peso, quantidade_estoque, preco_atual) VALUES ($1, $2, $3, $4, $5, $6)',
           [id_produto, nome, descricao, peso, quantidade_estoque, preco_atual]
        );  
};

// Função para obter todos os produtos
export const getAllProducts = async () => {
    await db.any('SELECT * FROM produto');
};

// Função para obter um produto por ID
export const getProductById = async (id) => {
    return await db.one('SELECT * FROM produto WHERE id_produto = $1', [id]);
};

// Função para atualizar um produto
export const updateProduct = async (id, product) => {
    const { nome, descricao, peso, quantidade_estoque, preco_atual } = product;
    
        await db.none(
            'UPDATE produto SET nome = $1, descricao = $2, peso = $3, quantidade_estoque = $4, preco_atual = $5 WHERE id_produto = $6',
            [nome, descricao, peso, quantidade_estoque, preco_atual, id]
        );
  
};

// Função para excluir um produto
export const deleteProduct = async (id) => {
    console.log(id)
    await db.none('DELETE FROM produto WHERE id_produto = $1', [id]);
};
