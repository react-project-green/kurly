import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
      console.log('file---->>', file);
      
      cb(null, Date.now() + '-' + file.originalname )
    }
  })
 

  export const fileUploadMultiple = (req,res) => {
    // console.log('req.body',req.body);
    // console.log('req.query',req.query);
    // console.log('req.query.maxFiles',req.query.maxFiles);
    console.log('req.files-------------->>',req.files);
    
    const maxFiles = parseInt(req.query.maxFiles);
    const upload = multer({ storage: storage }).array('files', maxFiles);

    upload(req, res, function (err) {
        if (err) {
            console.log(err)
            
        }else{
            console.log('upload file list --->', req.files);
            let originalname = [];
            let uploadname = [];
            for(let file of req.files){
                originalname.push(file.originalname);
                uploadname.push(`http://localhost:9000/${file.path}`);
            }
            res.json({
                'originalname': originalname,
                'uploadname' : uploadname
            });
            res.end();
        }
    

      })
  }
