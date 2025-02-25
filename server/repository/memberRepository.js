import { db } from "./db.js";
/******************************
 * Signup : 회원가입 쿼리 
 ******************************/
export const signupMember = async(formData) =>{
    const sql = `
    insert into member(id, pwd, name, phone, emailname, emaildomain, gender, address, reg_date )
                values(?,?,?,?,?,?,?,?, now())
    `
    const values = [
        formData.id, 
        formData.pwd, 
        formData.name, 
        formData.phone, 
        formData.emailname, 
        formData.emaildomain,
        formData.gender, 
        formData.address 
    ];
    const [result, fields] = await db.execute(sql, values); 
    return {"result_rows": result.affectedRows};
};
/******************************
 * Signup : 아이디 중복체크 쿼리 
 ******************************/
export const getIdCheck = async({id})=>{
    const sql = `select count(id) as result from member where id = ?;`; 
    const [result, fields] = await db.execute(sql, [id]) 
    return result[0];
};
/******************************
 * Login : 로그인  
 ******************************/
export const loginMember = async({id, pwd})=> { // {id: 'test', pwd: '1234'}
    const sql = `
    select count(*) as result_rows from member
	where id = ? and pwd = ?;
    `; 
    const [result] = await db.execute(sql, [id, pwd]);
    return result[0]; 
}

