import { db } from "../repository/db.js";

/***********************************
        장바구니 전체조회 
************************************/

export const getItems = async({id}) => {

    // 쿼리 수정하기
    const sql = `
        select * from view_cart_list
        where id = ?
    `;

    const [result] =  await db.execute(sql, [id]);

    return result; 
}



/*************************************
        장바구니 새로운 아이템 저장
*************************************/


export const addCart = async({id, cartList }) => {
    let result_rows = 0; // [1,1,1] 결과 누적
    const result = await Promise.all( 

        cartList.map(async (item)=>{
            const values = [id, item.pid, item.qty];

            const sql = `
                insert into cart( id, pid, qty)
                    values(?,?,?)
            `;
            const [result] =  await db.execute(sql, values);
            return result.affectedRows; // 성공시 1 실패시 0 반환
        }) 
    )
    // 추가 행수 계산 [1,1,1] => 3
    result_rows = result.reduce((acc, cur) => acc + cur, 0)
    
    // result_rows -> 컨트롤러에 추가된 행의 갯수 전달
    return {'result_rows': result_rows}; 
}


/*************************************
        장바구니 새로운 아이템 업데이트
*************************************/


export const updateQty = async() => {
    const sql = `
        
    `;

    const [result] =  await db.execute(sql);

    return result; 
}





/*************************************
        장바구니 전체 카운트 조회
*************************************/

export const getCount = async() => {
    const sql = `
        
    `;


    const [result] =  await db.execute(sql);

    return result; 
}


/*************************************
        장바구니 아이템 삭제
*************************************/


export const deleteItem = async() => {
    const sql = `
        
    `;

    const [result] =  await db.execute(sql);

    return result; 
}
