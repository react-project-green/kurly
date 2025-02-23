import express from 'express';
import cors from 'cors';
import path from 'path';
import registerRouter from './router/registerRouter.js';
import uploadRouter from './router/uploadRouter.js';
import categoryRouter from './router/categoryRouter.js'; 

const server = express();
const port = 9000;
//common
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
server.use('/upload_files', express.static(path.join("upload_files"))); 

// middle ware

server.get('/test',(req,res) =>{
    res.send('<h1>화면에 잘 보이는지 테스트 해보세요.</h1>')
});

// 상품등록
server.use('/product', registerRouter);
server.use('/upload', uploadRouter);
server.use('/cart', uploadRouter);


// 메인페이지 -> 카테고리 상품리스트
server.use('/main', categoryRouter);


server.listen(port,() => {
    console.log('start ----->>', port); 
});