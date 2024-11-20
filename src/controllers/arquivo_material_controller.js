import crud from '../global/crud.js'
import model from '../models/arquivo_material.js'
import lesson_material from '../models/material_aula.js'
import lesson from '../models/aula.js'
import user from '../models/usuario.js'
import subject from '../models/disciplina.js'
import Class from '../models/turma.js'
import category from '../models/categoria.js'
import address from '../models/endereco.js'
import level from '../models/classe.js'
import period from '../models/periodo.js'
import room from '../models/sala.js'
import course from '../models/curso.js'

class file_material extends crud{
  async create(req, res){
    const body = req.body
    const link = req.file?.filename || null

    model.create({
      description: body.description,
      link: link,
      material_id: body.material_id,
    })
    .then((data) => res.status(201).json({msg: 'Arquivo subido com sucesso!'}))
    .catch((error) => res.status(400).json({msg: error.message}))
  }

  async read(req, res) {
    model.findAll({
      where: {},
      raw: true , 
      attributes: ['id', 'description', 'link', 'material_id'],
      include: [
        {model: lesson_material, 
          attributes: ['id', 'title', 'description', 'date', 'lesson_id'],
          include: [
            {model: lesson, 
              attributes: ['id', 'description', 'date', 'subject_id', 'class_id', 'teacher_id'],
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
                },
                {model: subject, attributes: ['name']}
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

export default new file_material()