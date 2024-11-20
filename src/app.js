import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './database/conexao.js'; // Importando a conexão ao banco de dados
import configs from './configs/sets.js'; // Importando o arquivo de rotas
import routes from './routes/routes.js'; // Importando o arquivo de rotas
import models from './models/models.js'; // Importando os models
import hash_password from './helpers/encriptar_senha.js'

dotenv.config();
const app = express();
//hash_password('123456')
// Aplicando as configurações do express
configs(app)

// Aplicando as rotas
routes(app)

// Conectando com banco de dados
connectToDatabase()

export default app