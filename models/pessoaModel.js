// models/pessoaModel.js
import db from '../db.js'; // Certifique-se de que o caminho está correto

// Função para criar uma nova pessoa
export const createPerson = async (person) => {
    const { id_pessoa,nome, email, telefone } = person;
    await db.none(
        'INSERT INTO pessoa (id_pessoa, nome, email, telefone) VALUES ($1, $2, $3, $4)',
        [id_pessoa, nome, email, telefone]
    );
};

// Função para obter todas as pessoas
export const getAllPeople = async () => {
    return await db.any('SELECT * FROM pessoa');
};

// Função para obter uma pessoa pelo ID
export const getPersonById = async (id) => {
    return await db.one('SELECT * FROM pessoa WHERE id_pessoa = $1', [id]);
};

// Função para atualizar uma pessoa
export const updatePerson = async (id, person) => {
    const { nome, email, telefone } = person;
    await db.none(
        'UPDATE pessoa SET nome = $1, email = $2, telefone = $3 WHERE id_pessoa = $4',
        [nome, email, telefone, id]
    );
};

// Função para deletar uma pessoa
export const deletePerson = async (id) => {
    await db.none('DELETE FROM pessoa WHERE id_pessoa = $1', [id]);
};
