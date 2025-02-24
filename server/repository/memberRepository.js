import { db } from "./db.js";

export const signupMember = async(formData) =>{
    const sql = `
    insert into member(id, pwd, name, phone, emailname, emaildomain, gender, address, reg_date)
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
        formData.address, 
        null
    ];
    const [result, fields] = await db.execute(sql, values); 
    return {"result_rows": result.affectedRows};
}