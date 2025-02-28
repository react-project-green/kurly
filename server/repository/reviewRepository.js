import {db} from './db.js';

// review 등록
export const registerReview =  async(data) => { 
    const sql = `
        insert into reviews(subject, detail_txt, images, id, pid, date)
	                        values(?, ?, ?, ?, ?,  now());
    `;
    const values=[
        data.title,
        data.text,
        data.images,
        data.id,
        data.pid,
    ];
    const [result] = await db.execute(sql,values);
    console.log('result',result);
    
    return result;
}


// review 리스트 가져오기
export const getReviewList =  async({pid}) => { 
    const sql = `
                select  subject,
                        detail_txt,
                        images,
                        date,
                        pid,
                        member.name,
                        ifnull(count,0) as count
                from reviews,
                     member
                where reviews.id = member.id
                    and reviews.pid = ?;
    `;

    const [result] = await db.execute(sql,[pid]);
    console.log('result',result);
    
    return result;
}


// review 전체 이미지 가져오기
export const getTotalImages =  async() => { 
    const sql = `
    select images from reviews
    where images;
    `;
    
    const [result] = await db.execute(sql);
    console.log('result',result);
    
    return result;
}

// review 리스트 최신순 가져오기
export const getReviewDateList =  async({pid}) => { 
    const sql = `
                select  subject,
                        detail_txt,
                        images,
                        date,
                        pid,
                        member.name,
                        ifnull(count,0) as count
                from reviews,
                     member
                where reviews.id = member.id
                    and reviews.pid = ?
                order by date desc;
    `;

    const [result] = await db.execute(sql,[pid]);
    console.log('result',result);
    
    return result;
}
