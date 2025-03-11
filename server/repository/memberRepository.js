import { db } from "./db.js";
/******************************
 * Signup : 회원가입 쿼리 
 ******************************/
export const signupMember = async (formData) => {
    const sql = `
    insert into member(id, pwd, name, phone, emailname, emaildomain, gender, address, detailaddress, zipcode, reg_date )
                values(?,?,?,?,?,?,?,?,?,?, now())
    `
    const values = [
        formData.id,
        formData.pwd,
        formData.name,
        formData.phone,
        formData.emailname,
        formData.emaildomain,
        formData.gender,
        formData.address,
        formData.detailaddress,
        formData.zipcode
    ];
    const [result, fields] = await db.execute(sql, values);
    return { "result_rows": result.affectedRows };
};
/******************************
 * Signup : 아이디 중복체크 쿼리 
 ******************************/
export const getIdCheck = async ({ id }) => {
    const sql = `select count(id) as result from member where id = ?;`;
    const [result, fields] = await db.execute(sql, [id])
    return result[0];
};
/******************************
 * Login : 로그인  
 ******************************/
export const loginMember = async ({ id, pwd }) => { // {id: 'test', pwd: '1234'}
    const sql = `
    select count(*) as result_rows from member
	where id = ? and pwd = ?;
    `;
    const [result] = await db.execute(sql, [id, pwd]);
    return result[0];
}

/******************************
 * Login : 로그인 유저 타입 확인 
 * 2025.02.25 - 김다희
 ******************************/
export const getUserType = async ({ id }) => {
    const sql = `
        select type from member where id = ?
    `;

    const [result] = await db.execute(sql, [id]);
    return result[0];
}

/******************************
 * Order : 이름, 핸드폰번호, 주소, 이메일
 ******************************/
export const getUserName = async ({ id }) => {
    const sql = `
        select name,
        id, 
        pwd,
        phone,
        zipcode,
        address,
        detailaddress,
        concat(emailname, emaildomain) as email
        from member where id = ?
    `;

    const [result] = await db.execute(sql, [id]);
    return result[0];
}
/****************************** 
 * mypage : 이름, 핸드폰번호, 주소, 이메일
 ******************************/
export const getMypage = async ({ id }) => {
    const sql = `
        select name,
        id, 
        pwd,
        phone,
        zipcode,
        address,
        detailaddress,
        emailname,
        emaildomain
        from member where id = ?
    `;

    const [result] = await db.execute(sql, [id]);
    return result[0];
}
/******************************
 * MyPage : 비밀번호, 핸드폰번호, 주소, 이메일 수정
 ******************************/
export const updateMember = async (formData) => { 
    
    const sql = `
        UPDATE member 
        SET 
            phone = ?, 
            emailname = ?, 
            emaildomain = ?, 
            pwd = ?, 
            address = ?, 
            detailaddress = ?, 
            zipcode = ?,
            name = ?
        WHERE id = ?
    `;
    const values = [
        formData.phone,         
        formData.emailname,     
        formData.emaildomain,   
        formData.pwd,           
        formData.address,       
        formData.detailaddress, 
        formData.zipcode,  
        formData.name,     
        formData.id             
    ];
    const [result] = await db.execute(sql, values);

    return {result_rows : result.affectedRows};
};

/******************************
 * carts : 장바구니 주소 수정
 ******************************/

export async function addressUp(formData) {  // ✅ export 방식 확인
    console.log("📢 업데이트 요청 데이터:", formData);

    const sql = `
        UPDATE member 
        SET 
            address = ?, 
            detailaddress = ?, 
            zipcode = ?
        WHERE id = ?
    `;
    const values = [         
        formData.address,       
        formData.detailaddress, 
        formData.zipcode,       
        formData.id             
    ];

        const [result] = await db.execute(sql, values);
        return { result_rows: result.affectedRows };
};
