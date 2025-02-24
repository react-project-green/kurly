import { db } from './db.js';

export const getProductList = async({category}) => {
  let sql =``;
  
  if(category === 'new'){
    sql =`select  *, concat(dc, '%') as discountRate
            from    view_categoty_pro_list 
           where   pdate = (select max(pdate) from view_categoty_pro_list)`;
  }else if(category === 'best'){
     sql=`
     select vw.* , concat(dc, '%') as discountRate
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
  }else if(category === 'special'){
    sql=`select  *, concat(dc, '%') as discountRate
           from  view_categoty_pro_list `;
  }else{
    sql=`
      select  *, concat(dc, '%') as discountRate
        from  view_categoty_pro_list
       where  dc >=50
    order by  dc desc;
    `;
  }
    
  const [result] = await db.execute(sql);
  return result;
}