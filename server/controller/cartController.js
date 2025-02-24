import * as repository from '../repository/cartRepository.js ' 


/* 장바구니 전체 조회 */

export const getItems = async(req, res) => {
    const result = await repository.getItems(req.body);
    res.json(result)
    res.end();
};