import model from "../models/categoria.js";

const category_seed = async () => {
  try {
    // As categorias que serão criadas
    const categories = [
      { category: 'Professor' },
      { category: 'Estudante' }
    ];

    model.findAll()
    .then((data)=>{
      if (data.length != 0) return
      model.bulkCreate(categories)
    })
    .catch((error)=> console.log('Erro ao buscar dados!'))

    console.log('Seed de categorias inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir seed de categorias:', error);
  }
};

export default category_seed