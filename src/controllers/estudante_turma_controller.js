import crud from '../global/crud.js'
import model from '../models/estudante_turma.js'
import user from '../models/usuario.js'
import address from '../models/endereco.js'
import category from '../models/categoria.js'
import Class from '../models/turma.js'
import course from '../models/curso.js'
import period from '../models/periodo.js'
import level from '../models/classe.js'
import room from '../models/sala.js'

class student_class_controller extends crud{
  create(req, res){
    super.create(req, res, model)
  }

  async read(req, res) {
    model.findAll({
      raw: true , 
      attributes: ['id', 'student_id', 'class_id'],
      include: [
        {model: user,      
          attributes: ['id', 'name', 'email', 'birth_date', 'bio',
            'profile_photo', 'points', 'gender', 'category_id', 'address_id'],
          include: [
            {model: address, attributes: ['neighborhood','street','house']},
            {model: category, attributes: ['category']}
          ]
        },
        {model: Class, 
          attributes: ['id', 'description', 'course_id', 'level_id', 'period_id', 'room_id'],
          include: [
            {model: course, attributes: ['name']},
            {model: level, attributes: ['name']},
            {model: period, attributes: ['name']},
            {model: room, attributes: ['number']}
          ]
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

export default new student_class_controller()