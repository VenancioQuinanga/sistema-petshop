import model from "../models/periodo.js";

const period_seed = async () => {
  try {
    // Os periodos que serão criados
    const periods = [
      { name: 'Manhã' },
      { name: 'Tarde' },
    ];

    model.findAll()
    .then((data)=>{
      if (data.length != 0) return
      model.bulkCreate(periods)
    })
    .catch((error)=> console.log('Erro ao buscar dados!'))

    console.log('Seed de periodos inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir seed de periodos:', error);
  }
};

export default period_seed