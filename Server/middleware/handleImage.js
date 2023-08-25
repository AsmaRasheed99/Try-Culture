const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'public/images',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = file.originalname.split('.').pop();
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension);
  },
});

exports.uploadSingle = multer({ storage: storage }).single('image');
// exports.uploadMultiple = multer({ storage: storage }).array('images', 2)