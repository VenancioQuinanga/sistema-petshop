import jwt from 'jsonwebtoken'
import jwt_secret_key from '../configs/webtoken.js'

  function validate_token(req, res, next){
    const req_token = req.headers['authorization']

    if(req_token){ 
        const token = req_token.split(' ')[1]
        jwt.verify(token, jwt_secret_key, (error, data)=>{
            if(error) res.status(401).json({msg: 'Token Inválido...!'})
            else {
                req.token = token
                req.user = {id: data.id, email: data.email}
                next()
            }
        })
    }
    else res.status(401).json({msg: 'Token inválido...!'})
    
  }

export default validate_token