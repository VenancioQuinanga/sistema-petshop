import Sequelize from 'sequelize';
import config from './config.js';

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    define: config.define,
  }
);

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados feita com sucesso!');
  } catch (error) {
    console.error('A conexão com o banco de dados falhou:', error.message);
    process.exit(1); // Encerra a aplicação em caso de erro crítico
  }
}

export default sequelize;