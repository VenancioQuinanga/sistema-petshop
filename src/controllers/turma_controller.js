import model from '../models/turma.js'
import crud from '../global/crud.js'
import level from '../models/classe.js'
import room from '../models/sala.js'
import period from '../models/periodo.js'
import course from '../models/curso.js'

class class_controller extends crud{
  create(req, res){
    super.create(req, res, model)
  }

  async read(req, res) {
    model.findAll({
      where: {},
      raw: true , 
      attributes: ['id', 'description', 'course_id', 'level_id', 'period_id', 'room_id'],
      include: [
        {model: course, attributes: ['name']},
        {model: level, attributes: ['name']},
        {model: period, attributes: ['name']},
        {model: room, attributes: ['number']}
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

export default new class_controller()