import multer from 'multer'
import path from 'path'

// Caminho onde sera armazeda a imagem
const image_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/img/users/`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const image_upload = multer({
  storage: image_storage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // subir apenas imagens no formato png e jpg
      return cb(new Error("Por favor, envie apenas png ou jpg!"));
    }
    cb(undefined, true);
  },
});

export default image_upload