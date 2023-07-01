const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Specify the destination folder for saving the images
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = file.originalname.split('.').pop();
    const filename = file.fieldname + '-' + uniqueSuffix + '.' + extension;
    const imagePath = 'public/images/' + filename;
    cb(null, filename);
    req.imagePaths = req.imagePaths || []; // Store image paths in the request object
    req.imagePaths.push(imagePath);
  },
});

exports.upload = multer({ storage: storage }).fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
]);
