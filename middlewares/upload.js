const fs= require('fs')

module.exports = (req, res, next) =>{
    //check if the file exists
    if(typeof req.file === 'undefined' || typeof req.body === 'undefined')
      return res.status(400).json({ msg : "Issue with uploading this image"});

    //app use upload 
    let image = req.file.path;

    //file types accepted
    if(
        !req.file.mimetype.includes("jpeg") &&
        !req.file.mimetype.includes("jpg") &&
        !req.file.mimetype.includes("png")
    ) {
        // remove file 
        fs.unlinkSync(image);
         return res.status(400).json({ msg : "This file is not supported"})
    }

    // file size must be <1MB
    if (req.file.size > 1024*1024){
        //remove file
        fs.unlinkSync(image);
        return res.status(400).json({ msg : "file is too large"})

    }
    //success 
    next();

}