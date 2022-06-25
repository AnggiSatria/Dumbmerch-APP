const multer = require("multer");

exports.uploadFile = (imageFile) => {
    const storage = multer.diskStorage({
        destination : function(req, file, cb){
            cb(null, "uploads")
        },
        filename: function(req, file, cb){
            cb(null, Date.now() + "-" + file.originalname.replace(/\s/g,""))
        }
    });


    // cek type file
    const fileFilter = function(req, file, cb){
        if(file.fieldname === imageFile){
            if(!file.originalname.match(/\.(jpg|JPG|JPEG|jpeg|png|PNG|gif|GIF)$/)){
                req.fileValidationError = {
                    message : "ONLY IMAGE FILE ARE ALLOWED"
                }
                return cb(new Error("only image file allowed"), false)
            }
        }
        cb(null, true)
    }

    // file size
    const sizeInMB = 10;
    const maxSize = sizeInMB * 1000 * 1000

    const upload = multer({
        storage,
        fileFilter,
        limits: {
            fileSize: maxSize,
        },
    }).single(imageFile)

    return (req, res, next) => {
        upload(req, res, function(err){
            if(req.fileValidationError){
                return res.status(400).send(req.fileValidationError)
            }

            // if(!req.file && !err){
            //     return res.status(400).send({
            //         message : "Please Select File To Uploads"
            //     })
            // }

            if(err){
                if(err.code === "LIMIT_FILE_SIZE"){
                    return res.status(400).send({
                        message : "Max File Size 10 MB",
                    })
                }
                return res.status(400).send(err);
            }
            return next()
        })
    }

}