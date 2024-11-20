import model from '../models/usuario.js' 

const user_seed = async () => {
  try {
    // Os usuários que serão criados
    const users = [
      { 
        name: 'Game Over', 
        email: 'gameover@gmail.com', 
        telephone: '923456532',
        password: '123456',
        bio: 'Game Over is very crazy skua',
        birth_date: '08/08/2000',
        gender: 'Masculino',
        profile_photo: 'default.png',
        points: 0,
        category_id: 1,
        address_id: 1
      },
      { 
        name: 'Over Code', 
        email: 'overcode@gmail.com', 
        telephone: '926545432',
        password: '123456',
        bio: 'Over Code the black man whoah',
        birth_date: '07/04/2001',
        gender: 'Masculino',
        profile_photo: 'default.png',
        points: 0,
        category_id: 1,
        address_id: 2
      }
    ];

    // Insere os dados
    model.findAll()
    .then((data)=>{
      if (data.length != 0) return
      model.bulkCreate(users)
    })
    .catch((error)=> console.log('Erro ao buscar dados!'))

    console.log('Seed de usuários inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir seed de usuários:', error);
  }
};

export default user_seed