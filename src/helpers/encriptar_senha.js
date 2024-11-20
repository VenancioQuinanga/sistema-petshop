import bcrypt from 'bcrypt'
const saltRounds = 10; // Quantidade de "saltos" para aumentar a complexidade do hash

async function hash_password(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed Password:', hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.error('Erro ao gerar o hash:', error);
    throw error;
  }
}

export default hash_password