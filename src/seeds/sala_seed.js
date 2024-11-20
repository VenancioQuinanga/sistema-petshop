import model from "../models/sala.js";

const room_seed = async () => {
  try {
    // As salas que serão criadas
    const rooms = [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
    ];

    model.findAll()
    .then((data)=>{
      if (data.length != 0) return
      model.bulkCreate(rooms)
    })
    .catch((error)=> console.log('Erro ao buscar dados!'))

    console.log('Seed de salas inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir seed de salas:', error);
  }
};

export default room_seed