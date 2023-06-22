const cloudinay = require("cloudinary");
const fs = require('fs')

cloudinay.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY,
})



const uploadControllers = {
    uploadImage: async (req,res) =>{
        try {
            //get the file 
            const file = req.file;

            //upload it to cloudinary
            cloudinay.v2.uploader.upload(
                file.path,
                {
                    folder:'image',
                    width: 150,
                    height: 150,
                    crop: "fill",
                },
                (err, result) =>{
                    if (err) throw err;
                    fs.unlinkSync(file.path);
                res.status(200).json({
                    msg: "Uploaded Successfully ",
                    url: result.secure_url
                });
                }
            );


        }catch(err){
            res.status(500).json({ msg : err})
        }

    },

};

module.exports = uploadController;