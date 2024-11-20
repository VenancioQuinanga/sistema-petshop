import express from 'express';
import cors from 'cors';
import path from 'path';

const configs = (app) => {
  app.use(express.json()) // Para interpretar JSON no corpo das requisições
  app.use(express.urlencoded({ extended: true })) // Para interpretar dados codificados em URL
  app.use(express.static(path.resolve('public'))) // Configura o diretório de arquivos estáticos
  app.use(
    cors({
      origin: 'http://localhost:5173', // Substitua pelo domínio correto em produção
      methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos HTTP permitidos
      credentials: true, // Permite cookies/sessões compartilhadas
    })
  )
}

export default configs