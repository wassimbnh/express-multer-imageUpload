const multer = require('multer')

//set storage 
const storage = multer.diskStorage({
    //destination
    destination: function(req, res, cd){
        cb(null, './uploads/');
    },

    //filename
    filename: function (req, res, cb){
        cb(null, file.filename+"_"+Date.now()+file.originalname);
    },
});

const fileFilter = (req, file, cb) =>{
    cb(null, true)
};

let upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

module.exports = upload.single("image")