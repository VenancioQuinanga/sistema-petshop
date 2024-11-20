import dotenv from 'dotenv';
dotenv.config() //Importando as variaveis de ambiente

export default {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  define: {
    timestamps: true,
  },
};