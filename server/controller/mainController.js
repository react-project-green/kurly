import * as repository from '../repository/mainyRepository.js'; 

/*************************** 
 *  1. 프로덕트 리스트 값 가져오기 
***************************/
export const getProductList = async(req, res) => { 
  let result = [];
  (req.body.category === 'search') ? result = await getSearchItem(req.body.searchKeyword) 
    : result = await repository.getProductList(req.body);
  res.json(result);
  res.end();
};

/*************************** 
 *  2. 메인화면 아이템 서치
***************************/
const getSearchItem = async(search) => {
  const result = await repository.getSearchItem({search}); 
  return result;
};


/*************************** 
 *  3. 대분류 카테고리 리스트 || 상품 리스트 가져오기
***************************/
export const getCategoryProductList = async(req, res) =>{
  const result =  (req.body.cid === undefined) 
    ? await repository.getCategoryTitleList()
    : await repository.getCategoryProductList({cid: req.body.cid});
  res.json(result);
  res.end();
};

/*************************** 
 *  4. 소분류 카테고리 리스트 || 상품 리스트 가져오기
***************************/
export const getSubCategoryProductList = async(req, res) =>{
  const result = (req.body.cid === undefined && req.body.sid === undefined) 
    ? await repository.getSubCategoryTitleList()
    : await repository.getSubCategoryProductList({cid: req.body.cid, sid:req.body.sid})
  res.json(result);
  res.end();
};

/*************************** 
 *  5. 유저 정보 가져오기 - address
***************************/
export const getUserInfo = async(req, res) => {
  const result = await repository.getUserInfo(req.body);
  res.json(result);
  res.end();
};

/*************************** 
 *  6. 유저 address 업데이트
***************************/
export const getUserAddressUpdate = async(req, res) => {
  let result;
  
  result = await repository.getUserAddressUpdate(req.body);
  if(result)  result = await repository.getUserInfo(req.body);
  res.json(result);
  res.end();
};

/*************************** 
 *  7. 최근 본 상품 가져오기 
***************************/
export const getRecentlyViewItem = async(req, res) =>{
  const result = await repository.getRecentlyViewItem(req.body);
  res.json(result);
  res.end();
};