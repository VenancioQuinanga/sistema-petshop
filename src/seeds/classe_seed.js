import model from "../models/classe.js";

const level_seed = async () => {
  try {
    // As classes que serão criadas
    const levels = [
      { name: '10º' },
      { name: '11º' },
      { name: '12º' },
      { name: '13º' }
    ];

    model.findAll()
    .then((data)=>{
      if (data.length != 0) return
      model.bulkCreate(levels)
    })
    .catch((error)=> console.log('Erro ao buscar dados!'))

    console.log('Seed de classes inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir seed de classes:', error);
  }
};

export default level_seed