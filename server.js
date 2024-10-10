import express from 'express';
import bodyParser from 'body-parser';
import pessoaRoutes from './routes/pessoaRoutes.js'; // Verifique se o caminho está correto



const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usar as rotas de produtos
//app.use('/products', productRoutes);
app.use('/people', pessoaRoutes);  // Prefixo para rotas de pessoas

app.use((req, res, next) => {
    console.log(`Rota não encontrada: ${req.method} ${req.url}`);
    res.status(404).send('Rota não encontrada');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});