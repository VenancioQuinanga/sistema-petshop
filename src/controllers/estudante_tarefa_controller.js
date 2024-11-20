import crud from '../global/crud.js'
import model from '../models/estudante_tarefa.js'
import homework from '../models/tarefa.js'
import lesson from '../models/aula.js'
import subject from '../models/disciplina.js'
import Class from '../models/turma.js'
import user from '../models/usuario.js'
import category from '../models/categoria.js'
import address from '../models/endereco.js'

class student_homework_controller extends crud{
  create(req, res){
    super.create(req, res, model)
  }

  async read(req, res) {
    model.findAll({
      where: {},
      raw: true , 
      attributes: ['id', 'student_id', 'homework_id'],
      include: [
        {model: user,      
          attributes: ['id', 'name', 'email', 'birth_date', 'bio',
            'profile_photo', 'points', 'gender', 'category_id', 'address_id'],
          include: [
            {model: address, attributes: ['neighborhood','street','house']},
            {model: category, attributes: ['category']}
          ]
        },
        {model: homework, 
          attributes: ['id', 'description', 'points', 'date', 'delivery_date', 'lesson_id'],
          include: [
            {model: lesson, 
              attributes: ['id', 'description', 'date', 'subject_id', 'class_id', 'teacher_id'],
              include: [
                {model: subject, attributes: ['name']},
                {model: Class, attributes: ['name']},
                {model: user,
                  attributes: ['id', 'name', 'email', 'birth_date', 'bio',
                    'profile_photo', 'points', 'gender', 'category_id', 'address_id'],
                  include: [
                    {model: address, attributes: ['neighborhood','street','house']},
                    {model: category, attributes: ['category']}
                  ]
                }
              ]
            }
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

export default new student_homework_controller()