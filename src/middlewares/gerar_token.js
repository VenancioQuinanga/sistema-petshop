import jwt from 'jsonwebtoken';
import jwt_secret_key from '../configs/webtoken.js';

async function generate_token(req, res, id, email) {  
  try {
    const token = jwt.sign(
      { id: id, email: email }, // Dados do payload
      jwt_secret_key,          // Chave secreta
      { expiresIn: '24h' }     // Opções
    );

    // Retornar resposta com o token
    res.status(200).json({
      msg: 'Autenticação feita com sucesso!',
      id: id,
      token: token
    });
  } catch (error) {
    console.error('Erro ao gerar o token:', error);
    res.status(400).json({ msg: 'Falha ao gerar token!' });
  }
}

export default generate_token;
