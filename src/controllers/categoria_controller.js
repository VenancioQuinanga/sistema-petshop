import model from '../models/categoria.js'
import crud from '../global/crud.js'

class category_controller extends crud{
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

export default new category_controller()