import * as repository from '../repository/reviewRepository.js';

// review  등록
export const registerReview = async (req,res) => {
    const result = await repository.registerReview(req.body);
    res.json(result);
    res.end();
}

// review 리스트 가져오기
export const getReviewList = async (req,res) => {  
    const result = await repository.getReviewList(req.body);
    res.json(result);
    res.end();
}

// review 전체 이미지 가져오기
export const getTotalImages = async (req,res) => {  
    const result = await repository.getTotalImages();
    res.json(result);
    res.end();
}