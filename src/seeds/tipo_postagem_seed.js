import model from "../models/tipo_postagem.js";

const post_types_seed = async () => {
  try {
    // Os tipos de postagem que serão criados
    const post_types = [
      { type: 'post' }
    ];

    model.findAll()
    .then((data)=>{
      if (data.length != 0) return
      model.bulkCreate(post_types)
    })
    .catch((error)=> console.log('Erro ao buscar dados!'))

    console.log('Seed de tipos de postagem inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir seed de tipos de postagem:', error);
  }
};

export default post_types_seed