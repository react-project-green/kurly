import { db } from "./db.js";


export const add = async (formData) => {

        // "id" : id,
        // "tid" : tid,
        // "type" : type,
        // "totalPrice" : totalPrice,
        // "orderList" : orderList

        const result = await Promise.all( //[1,1,1,1,1,1]
                formData.orderList.map(async (item) => {
                        const values = [
                                item.qty,
                                // formData.,
                                formData.type,
                                formData.tid,
                                formData.id,
                                item.pid

                        ];
                        const sql = `
                        insert into orderList( size, qty, tprice ,type, tid, id, pid, odate)
                        values(?,?,?,?,?,?,?,current_date())
                `;
                        const [result] = await db.execute(sql, values);// promise형태로 실행
                        return result.affectedRows;
                })
        )

        const result_rows = result.reduce((acc, cur) => acc + cur, 0);

        return { "result_rows": result_rows }; // 결과가 잘 나오면 json 형태로 넘어감


}



/** 전체 주문 정보 가져오기 : getOrderList */

export const getOrderList = async ({ id, checkedItems }) => {

        if (!Array.isArray(checkedItems) || checkedItems.length === 0) {
                console.error("checkedItems가 올바르지 않습니다:", checkedItems);
                return [];
        }

        const placeholders = checkedItems.map(() => "?").join(",");

        const sql = `
            SELECT * FROM view_cart_list
            WHERE id = ? AND no IN (${placeholders})
        `;

        // 배열 앞에 `id` 추가해서 SQL 실행
        const [result] = await db.execute(sql, [id, ...checkedItems]);

        return result;


}


