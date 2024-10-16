import db from '../database/db.js'; // Certifique-se de que o caminho está correto

// Função para criar uma nova cliente
export const createCliente = async (cliente) => {
    const { id_cliente,id_pessoa,bairro,logradouro,numero_residencial,complemento,cidade,cep } = cliente;
    await db.none(
        'INSERT INTO cliente (id_cliente,id_pessoa,bairro,logradouro,numero_residencial,complemento,cidade,cep) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [id_cliente,id_pessoa,bairro,logradouro,numero_residencial,complemento,cidade,cep]
    );
};

// Função para obter todas as clientes
export const getAllCliente = async () => {
    return await db.any('SELECT * FROM cliente');
};

// Função para obter uma cliente pelo ID
export const getClienteById = async (id) => {
    return await db.one('SELECT * FROM cliente WHERE id_cliente = $1', [id]);
};

// Função para atualizar uma cliente
export const updateCliente = async (id, cliente) => {
    const { bairro,logradouro,numero_residencial,complemento,cidade,cep } = cliente;
    await db.none(
        'UPDATE cliente SET  bairro = $1 ,logradouro = $2 ,numero_residencial = $3,complemento = $4,cidade = $5,cep = $6 WHERE id_cliente = $4',
        [bairro,logradouro,numero_residencial,complemento,cidade,cep, id]
    );
};

// Função para deletar uma cliente
export const deleteCliente = async (id) => {
    await db.none('DELETE FROM cliente WHERE id_cliente = $1', [id]);
};
