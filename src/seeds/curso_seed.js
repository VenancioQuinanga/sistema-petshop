import model from "../models/curso.js";

const course_seed = async () => {
  try {
    // Os cursos que serão criados
    const courses = [
      { name: 'Informática' },
      { name: 'Mecânica' },
      { name: 'Contabilidade' },
      { name: 'Eletricidade' }
    ];

    model.findAll()
    .then((data)=>{
      if (data.length != 0) return
      model.bulkCreate(courses)
    })
    .catch((error)=> console.log('Erro ao buscar dados!'))

    console.log('Seed de cursos inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir seed de cursos:', error);
  }
};

export default course_seed