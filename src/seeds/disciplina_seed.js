import model from "../models/disciplina.js";

const subject_seed = async () => {
  try {
    // As disciplinas que serão criadas
    const subjects = [
      { name: 'L.Portuguesa' },
      { name: 'Matemática' },
      { name: 'Física' },
      { name: 'Química' }
    ];

    model.findAll()
    .then((data)=>{
      if (data.length != 0) return
      model.bulkCreate(subjects)
    })
    .catch((error)=> console.log('Erro ao buscar dados!'))

    console.log('Seed de disciplina inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir seed de disciplina:', error);
  }
};

export default subject_seed