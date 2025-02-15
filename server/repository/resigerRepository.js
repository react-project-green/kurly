import {db} from './db.js';

// 상품등록
export const resigerProduct = async (formData ) => {
    console.log('formData',formData);
    
    const sql=`
                insert into kurly_product(
                                    brend,
                                    cate_depth1,
                                    cate_depth2,
                                    subject,
                                    sub_desc,
                                    price,
                                    dc,
                                    event_label,
                                    upload_img,
                                    org_img
                                    )
                values(?,?,?,?,?,?,?,?,?,?)
    `;
    const value=[
        formData.brend ,
        formData.depth1 ,
        formData.depth2 ,
        formData.subject ,
        formData.description ,
        formData.price ,
        formData.dc || 0,
        formData.event || 0,
        formData.uploadImg || null,
        formData.orgImg || null
    ]
    const [result] = await db.execute(sql,value);
    console.log('result 결과값 받기---->',result);
    
    return {'affectedRows': result.affectedRows};
}

// 상품리스트
export const getList = async () => {
    const sql =`
                select  pid,
                    brend as brand,
                    cate_depth1,
                    cate_depth2,
                    subject as name,
                    sub_desc as description,
                    format(price,0) as originalPrice,
                    dc,
                    concat(dc,'%') as discountRate,
                    format((price * (100 - dc) *0.01),0) as discountedPrice,
                    event_label,
                    concat('http://localhost:9000/',upload_img) as image_url
            from kurly_product
    `;

    const [result] = await db.execute(sql);
    console.log('상품리스트 result', result);
    
    return result;
}

// 상세 페이지
export const getDetail = async({pid}) => {
    console.log('pid',pid);
    const sql = `
            select  pid,
                    brend as brand,
                    cate_depth1,
                    cate_depth2,
                    subject as name,
                    sub_desc as description,
                    format(price,0) as originalPrice,
                    dc,
                    concat(dc,'%') as discountRate,
                    format((price * (100 - dc) *0.01),0) as discountedPrice,
                    truncate((price * (100 - dc) *0.01),0) as dcPrice,
                    event_label,
                    concat('http://localhost:9000/',upload_img) as image_url
            from kurly_product
            where pid = ?
    `;
    const [result] = await db.execute(sql,[pid]);
    console.log('result pid filter', result);
    
    return result;
}