exports.uploadSingle = (req, res) => {
    // Access the uploaded single image using req.file
    const file = req.file;
  
    // Process and save the file as needed
  
    res.status(200).json({ message: 'Single image uploaded successfully.' });
  };
  
  exports.uploadMultiple = (req, res) => {
    // Access the uploaded multiple images using req.files
    const files = req.files;
  
    // Process and save the files as needed
  
    res.status(200).json({ message: 'Multiple images uploaded successfully.' });
  };