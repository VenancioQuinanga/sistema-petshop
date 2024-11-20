import model from '../models/evento_agendado.js'
import crud from '../global/crud.js'

class scheduled_event_controller extends crud{
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

export default new scheduled_event_controller()