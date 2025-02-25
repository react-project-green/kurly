import * as repository from '../repository/categoryRepository.js'; 

/*************************** 
 *  1. 프로덕트 리스트 값 가져오기 
***************************/
export const getProductList = async(req, res) => { 
  const result = await repository.getProductList(req.body);
  res.json(result);
  res.end();
};

/*************************** 
 *  2. 대분류 카테고리  값 가져오기
***************************/
export const getCategoryProductList = async(req, res) =>{
  const result = await repository.getCategoryProductList();
  res.json(result);
  res.end();
};