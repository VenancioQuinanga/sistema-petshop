import multer from 'multer'
import path from 'path'

// Caminho onde sera armazeda o arquivo
const file_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/docs`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const file_upload = multer({
  storage: file_storage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // subir apenas arquivo no formato pdf ou docx
      return cb(new Error("Por favor, envie apenas pdf ou docx!"));
    }
    cb(undefined, true);
  },
});

export default file_upload