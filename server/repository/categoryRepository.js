import { db } from './db.js';

export const getProductList = async({category}) => {
  let sql =``;
  console.log('akdja-->', category);
  
  if(category === 'new'){
    sql =`select  *, concat(dc, '%') as discountRate
            from    view_categoty_pro_list 
           where   pdate = (select max(pdate) from view_categoty_pro_list)`;
  }else if(category === 'best'){
     sql=`
     select vw.* 
      from  view_categoty_pro_list as vw, payments as py
      where vw.pid = py.pid
      and   py.qty >= 8
     `; 
  }else if(category === 'discount'){
    sql =`
      select   *, concat(dc, '%') as discountRate
        from   view_categoty_pro_list 
       where   dc >=30;
    `;
  }else{
    sql=`select  *, concat(dc, '%') as discountRate
            from    view_categoty_pro_list `;
  }
    
  const [result] = await db.execute(sql);
  console.log('result-->>>',result);
  
  return result;
}