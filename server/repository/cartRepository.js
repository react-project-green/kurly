import { db } from "./db";

/* 장바구니 전체조회 */

export const getItems = async() => {
    const sql = `
        
    `;

    const [result] =  await db.execute(sql);

    return result; 
}