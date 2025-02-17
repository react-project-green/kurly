-- 해당 파일은 shoppy.sql과 동일한 곳에 저장하여 테스트 해보세요.
-- /server/org_image 테스트용 이미지 저장해놨어요. 

show databases;
use hrdb2019;
show tables;

-- 상품 테이블
create table kurly_product(
	pid 			int 			primary key 	auto_increment,
    brend			varchar(20)		not null,
    cate_depth1		char(3) 		not null,
    cate_depth2		char(3) 		not null,
    subject			varchar(100)	not null,
    sub_desc		varchar(100) ,
    price 			int  			not null,
    dc				int,
    delivery		char(2)	,
    event_label		boolean,
    upload_img		varchar(100) ,
    org_img 		varchar(50) ,
	info_imgs 		json ,
    info_org_imgs 	json,
    detail_imgs 	json ,
    detail_org_imgs json,
    pdate 			datetime
);
desc kurly_product;
select * from kurly_product;
