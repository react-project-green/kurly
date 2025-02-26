import { db } from "../repository/db.js";

/* 장바구니 전체조회 */

export const getItems = async() => {
    const sql = `
        select * from view_cart_list
    `;

    const [result] =  await db.execute(sql);

    return result; 
}