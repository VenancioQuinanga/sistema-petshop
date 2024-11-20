import model from '../models/classe.js'
import crud from '../global/crud.js'

class level_controller extends crud{
  create(req, res){
    super.create(req, res, model)
  }

  read(req, res){
    super.read(req, res, model)
  }

  update(req, res){
    super.update(req, res, model)
  }

  delete(req, res){
    super.delete(req, res, model)
  }
}

export default new level_controller()