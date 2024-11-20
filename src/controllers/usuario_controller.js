import jwt from 'jsonwebtoken'
import jwt_secret_key from '../configs/webtoken.js'
import path from  'path'
import generate_token from '../middlewares/gerar_token.js'
import hash_password from '../helpers/encriptar_senha.js'
import verify_password from '../helpers/verificar_senha.js'
import crud from '../global/crud.js'
import model from '../models/usuario.js'
import address from '../models/endereco.js'
import category from '../models/categoria.js'

class user_controller extends crud{
  async create(req, res){
    const body = req.body
    const image = req.file?.filename || null
    const hashed_password = await hash_password(body.password)

    address.create({
      neighborhood: body.neighborhood,
      street: body.street,
      house: body.house,
    })
    .then((addressData)=>{

      return model.create({
        name: body.name,
        email: body.email,
        password: hashed_password,
        birth_date: body.birth_date,
        bio: body.bio,
        telephone: body.telephone,
        gender: body.gender,
        profile_photo: image,
        points: body.telephone,
        address_id: addressData.id,
        category_id: body.category_id,
      })
    })
    .then((data) => res.status(201).json({msg: 'Usuário criado com sucesso!'}))
    .catch((error) => res.status(400).json({msg: error.message}))
  }

  async read(req, res) {
    model.findAll({
      where: {},
      raw: true , 
      attributes: ['id', 'name', 'email', 'birth_date', 'bio',
       'profile_photo', 'points', 'gender', 'category_id', 'address_id'],
      include: [
        {model: address, attributes: ['neighborhood','street','house']},
        {model: category, attributes: ['category']}
      ]
    })
    .then((data)=> {
      if (data.length != 0) res.status(200).json(data)
      else res.status(204).json({msg: 'Vázio'})
    })
    .catch((error) => res.status(400).json({msg: error.message}))
  }

  async authenticate(req, res) {
    const email = req.body.email;
    const password = req.body.password;
  
    try {
      // Verificar se o usuário existe
      const user = await model.findOne({ where: { email: email } });
  
      if (!user) {
        return res.status(422).json({ message: 'Não há usuário cadastrado com este email!' });
      }
  
      // Verificar a senha com bcrypt
      const passwordMatch = await verify_password(password, user.password);
      if (!passwordMatch) {
        return res.status(422).json({ message: 'Senha inválida' });
      }
  
      // Gerar token
      generate_token(req, res, user.id, user.email);
    } catch (error) {
      console.error('Erro na autenticação:', error);
      return res.status(500).json({ message: 'Erro interno no servidor' });
    }
  }
  

  async filter(req, res){
    const params = req.params.params

    await model.findOne({
      where: {
        id: params,
      },
      raw: true , 
      attributes: ['id', 'name', 'email', 'birth_date', 'bio',
       'profile_photo', 'points', 'gender', 'category_id', 'address_id'],
      include: [
        {model: address, attributes: ['neighborhood','street','house']},
        {model: category, attributes: ['category']}
      ]
    })
    .then((data)=> {
      if (data.length != 0) res.status(200).json(data)
      else res.status(204).json({msg: 'Empty'})
    })
    .catch((error) => res.status(400).json({msg: error.message}))
  }

  async getUserByToken(req, res){
    const token = req.params.token

    if (!token) return res.status(401).json({ error: "Acesso negado!" });

    // find user
    try {
      const decoded = jwt.verify(token, jwt_secret_key);
  
      const userId = decoded.id;
    
      await model.findOne({
        where: {
          id: userId
        },
        raw: true , 
        attributes: ['id', 'name', 'email', 'birth_date', 'bio',
       'profile_photo', 'points', 'gender', 'category_id', 'address_id'],
      })
      .then((data)=> {
        if (data.length != 0) res.status(200).json(data)
        else res.status(204).json({msg: 'Empty'})
      })
      .catch((error) => res.status(400).json({msg: error.message}))
        const user = await model.findOne({where:{ id: userId 
      }});
    
    } catch (error) {
      return res.status(404).json({ msg: `${error}. Token inválido. ` });
    }
  }

  async update(req, res){
    try {
      const body = req.body;
      const params = req.params;
      const hashed_password = await hash_password(body.password)
  
      // Atualiza o Usuário
      const user = await model.findOne({
        where: { id: params.params }
      });
  
      if (user) {
        const image = req.file?.filename || user.profile_photo
        user.name = body.name
        user.email = body.email
        user.password = hashed_password
        user.birth_date = body.birth_date
        user.bio = body.bio
        user.gender = body.gender
        user.profile_photo = image
        user.points = body.points
        user.category_id = body.category_id

        await user.save();
      } else {
        return res.status(404).json({ msg: 'Usuário não encontrado!' });
      }

      // Atualiza o endereço
      const address = await address.findOne({
        where: { id: body.fk_address },
      });
  
      if (address) {
        address.neighborhood = body.neighborhood
        address.house = body.street,
        address.street = body.house,
        
        await address.save();
      } else {
        return res.status(404).json({ msg: 'Endereço não encontrado!' });
      }

      // Retorna sucesso
      return res.status(201).json({ msg: 'Usuário atualizado com sucesso!' });
  
    } catch (error) {
      // Trata erros
      return res.status(400).json({ msg: error.message });
    }
  }
  
  async getPhoto(req, res){
    try {
      const photo = req.params.photo;
      const photoPath = path.resolve(__dirname, '../../public/img/users/', photo); // Caminho absoluto
      res.status(200).sendFile(photoPath);
    } catch (err) {
      res.status(404).send(`Foto não encontrada.`);
    }
  }

  delete(req, res){
    super.delete(req, res, model)
  }
}

export default new user_controller()