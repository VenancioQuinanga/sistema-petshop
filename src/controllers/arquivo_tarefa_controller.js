import crud from '../global/crud.js'
import model from '../models/arquivo_tarefa.js'
import homework from '../models/tarefa.js'
import Class from '../models/turma.js'
import lesson from '../models/aula.js'
import subject from '../models/disciplina.js'
import user from '../models/usuario.js'
import category from '../models/categoria.js'
import address from '../models/endereco.js'
import course from '../models/curso.js'
import level from '../models/classe.js'
import period from '../models/periodo.js'
import room from '../models/sala.js'

class file_homework extends crud{
  async create(req, res){
    const body = req.body
    const link = req.file?.filename || null

    model.create({
      description: body.description,
      link: link,
      homework_id: body.homework_id,
    })
    .then((data) => res.status(201).json({msg: 'Arquivo subido com sucesso!'}))
    .catch((error) => res.status(400).json({msg: error.message}))
  }

  async read(req, res){
    model.findAll({
      raw: true,
      attributes: ['description', 'link', 'homework_id'],
      includes: [
        {model: homework, 
          attributes: ['id', 'description', 'points', 'date', 'delivery_date', 'lesson_id'],
          include: [
            {model: lesson, 
              attributes: ['id', 'description', 'date', 'subject_id', 'class_id', 'teacher_id'],
              include: [
                {model: subject, attributes: ['name']},
                {model: Class, 
                  attributes: ['id', 'description', 'course_id', 'level_id', 'period_id', 'room_id'],
                  include: [
                    {model: course, attributes: ['name']},
                    {model: level, attributes: ['name']},
                    {model: period, attributes: ['name']},
                    {model: room, attributes: ['number']}
                  ]
                },
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
  }

  update(req, res){
    super.update(req, res, model)
  }

  async getFile(req, res){
    try {
      const file = req.params.file;
      const photoPath = path.resolve(__dirname, '../../public/docs', file); // Caminho absoluto
      res.status(200).sendFile(photoPath);
    } catch (err) {
      res.status(404).send(`Arquivo não encontrado.`);
    }
  }

  delete(req, res){
    super.delete(req, res, model)
  }
}

export default new file_homework()