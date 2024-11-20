import model from '../models/transacao_material.js'
import crud from '../global/crud.js'
import lesson_material from '../models/material_aula.js'

class transaction_material_controller extends crud{
  create(req, res){
    super.create(req, res, model)
  }

  async read(req, res) {
    model.findAll({
      where: {},
      raw: true , 
      attributes: ['id', 'price', 'date', 'seller_id', 'buyer_id', 'material_id'],
      include: [
        {model: lesson_material, 
          attributes: ['id', 'description', 'title', 'date', 'lesson_id']
        }
      ]
    })
    .then((data)=> {
      if (data.length != 0) res.status(200).json(data)
      else res.status(204).json({msg: 'Vázio'})
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

export default new transaction_material_controller()