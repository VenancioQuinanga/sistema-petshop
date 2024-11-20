import model from "../models/endereco.js";

const address_seed = async () => {
  try {
    // Os endereços que serão criados
    const addresses = [
      { 
        neighborhood: 'Golfe 2', 
        house: 'Casa n°34', 
        street: 'Rua 2, das flores'
      },      
      { 
        neighborhood: 'K.Kilamba', 
        house: 'Casa n°78', 
        street: 'Rua 3'
      }
    ];

    model.findAll()
    .then((data)=>{
      if (data.length != 0) return
      model.bulkCreate(addresses)
    })
    .catch((error)=> console.log('Erro ao buscar dados!'))

    console.log('Seed de endereços inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir seed de endereços:', error);
  }
};

export default address_seed