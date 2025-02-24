import * as repository from '../repository/categoryRepository.js'; 

export const getProductList = async(req, res) => {
  const result = await repository.getProductList(req.body);
  res.json(result);
  res.end();
};