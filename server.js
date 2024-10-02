import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes.js';
import pessoaRoutes from './routes/pessoaRoutes.js'

const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usar as rotas de produtos
app.use('/products', productRoutes);
app.use('/pessoa', pessoaRoutes); // Prefixo para rotas de pessoas
// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
