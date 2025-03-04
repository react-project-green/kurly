import { db } from './db.js';


/*************************** 
 *  1. 프로덕트 리스트 값 가져오기 
***************************/
export const getProductList = async({category}) => {
  let sql =``;
  
  if(category === 'new'){
    sql =`select  *, concat(dc, '%') as discountRate
          from    view_category_pro_list 
          where   pdate between date_sub((select max(pdate) from view_category_pro_list), interval 10 day) 
                        and (select max(pdate) from view_category_pro_list);`;
  }else if(category === 'best'){
     sql=`
     select vw.* , concat(dc, '%') as discountRate
      from  view_category_pro_list as vw, payments as py
      where vw.pid = py.pid
      and   py.qty >= 8
     `; 
  }else if(category === 'discount'){
    sql =`
      select   *, concat(dc, '%') as discountRate
        from   view_category_pro_list 
       where   dc >=30;
    `;
  }else if(category === 'special'){
    sql=`select  *, concat(dc, '%') as discountRate
           from  view_category_pro_list `;
  }else{
    sql=`
      select  *, concat(dc, '%') as discountRate
        from  view_category_pro_list
       where  dc >=50
    order by  dc desc;
    `;
  }
    
  const [result] = await db.execute(sql);
  return result;
}


/*************************** 
 *  2. 메인화면 아이템 서치
***************************/
export const getSearchItem = async({search}) => {
  const searchKeyWord = `%${search}%`;
  const sql =`
    select * from view_category_pro_list where name like ? 
  `;

 const [result] = await db.execute(sql, [searchKeyWord]);
 return result;
}

/*************************** 
 *  3.대분류 카테고리  값 가져오기
***************************/
export const getCategoryTitleList = async() =>{
  const sql =`select * from category`;

  const [result] = await db.execute(sql);
  return result;
};

/*************************** 
 *  3-1. 대분류 카테고리 상품 리스트 가져오기
***************************/
export const getCategoryProductList = async({cid}) =>{
  const sql =`
        select *, concat(dc, '%') as discountRate 
        from view_category_pro_list 
        where cate_depth1 = ?`;

  const [result] = await db.execute(sql, [cid]);
  return result;
};


/*************************** 
 *  4. 소분류 카테고리  값 가져오기
***************************/
export const getSubCategoryTitleList = async(req, res) =>{
  const sql =`select * from sub_category`;

  const [result] = await db.execute(sql);
  return result;
};

/*************************** 
 *  4-1. 소분류 카테고리 상품 리스트 가져오기
***************************/
export const getSubCategoryProductList = async({cid, sid}) =>{
  const sql =`
    select * , concat(dc, '%') as discountRate 
      from   view_category_pro_list 
     where   cate_depth1 = ?
       and   cate_depth2 = ?
  `;

  const [result] = await db.execute(sql, [cid, sid]);
  return result;
};