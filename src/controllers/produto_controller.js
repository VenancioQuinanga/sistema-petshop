import model from '../models/produto.js'
import crud from '../global/crud.js'
import user from '../models/usuario.js'
import address from '../models/endereco.js'
import category from '../models/categoria.js'

class product_controller extends crud{
  create(req, res){
    super.create(req, res, model)
  }

  async read(req, res) {
    model.findAll({
      where: {},
      raw: true , 
      attributes: ['id', 'name', 'description', 'price', 'status', 'user_id'],
      include: [
        {model: user, attributes: ['id', 'name', 'email', 'birth_date', 'bio',
            'profile_photo', 'points', 'gender', 'category_id', 'address_id'],
          include: [
            {model: address, attributes: ['neighborhood','street','house']},
            {model: category, attributes: ['category']}
          ]
        }
      ]
    })
    .then((data)=> {
      if (data.length != 0) res.status(200).json(data)
      else res.status(204).json({msg: 'Empty'})
    })
    .catch((error) => res.status(400).json({msg: error.message}))
  }

  update(req, res){
    super.update(req, res, model)
  }

  delete(req, res){
    super.delete(req, res, model)
  }
}

export default new product_controller()