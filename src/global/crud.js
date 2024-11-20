export default class crud {
    async create(req, res, model){
      model.create(req.body)
        .then((data)=> res.status(201).json({message: 'Criado com sucesso!', data: data}))
        .catch((error)=> res.status(400).json({message: error.message}))
    }

    async read(req, res, model){
      model.findAll({raw: true})
        .then((data)=> res.status(200).json({data: data}))
        .catch((error)=> res.status(404).json({message: error.message}))
    }
 
    async update(req, res, model){
      const params = req.params

      model.update(req.body, {where: {id: params.id}})
      .then((data)=> res.status(200).json({message: 'Atualizado com sucesso!'}))
      .catch((error)=> res.status(404).json({message: error.message}))
    }

    async delete(req, res, model){
      const params = req.params
      model.destroy({where: {id: params.id}})
      .then((data)=> res.status(200).json({message: 'Deletado com sucesso!'}))
      .catch((error)=> res.status(400).json({message: error.message}))
    }
  }