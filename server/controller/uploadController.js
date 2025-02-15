import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname  )
    }
  })
  
  const upload = multer({ storage: storage }).single('file');

// 파일 저장
export const uploadFile = (req,res) => {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            
          return
        }
        console.log('req.file test test--->',res.req.file);
        res.send({
            'upload_name': req.file.path,
            'org_name': req.file.originalname
        })
        // 정상적으로 완료됨
      })
    
}