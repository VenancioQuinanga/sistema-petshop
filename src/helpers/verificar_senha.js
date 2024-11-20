import bcrypt from 'bcrypt'
const saltRounds = 10; // Quantidade de "saltos" para aumentar a complexidade do hash

async function verify_password(password, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (isMatch) {
      console.log('Senha correta!');
    } else {
      console.log('Senha incorreta!');
    }
    return isMatch;
  } catch (error) {
    console.error('Erro ao comparar as senhas:', error);
    throw error;
  }
}

export default verify_password