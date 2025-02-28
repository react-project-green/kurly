USE kurlydb;
SHOW TABLES; 

CREATE TABLE `member` (
  `id` 			VARCHAR(30) 	PRIMARY KEY,
  `pwd` 		VARCHAR(50) 	NOT NULL,
  `name` 		VARCHAR(10) 	NOT NULL,
  `phone`		CHAR(13) 		NOT NULL,
  `emailname`   VARCHAR(20) 	NOT NULL,
  `emaildomain` VARCHAR(20) 	NOT NULL,
  `gender`		CHAR(1)			NOT NULL,
  `address` 	VARCHAR(80),
  `reg_date` 	DATETIME		NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

select * from product;
select * from member;

desc qna;
desc wish;
desc qna;
desc cart;
desc review;
desc notice;
desc payments;
desc category;
desc sub_category;

select count(id) as result from member where id ="test1";

-- ########################################
-- view_cart_list 뷰테이블 생성
-- ########################################


show tables;
select * from product;
select * from member;
select * from cart;
select * from view_cart_list;

create view view_cart_list
as 
select  c.id as cid,
		c.qty as qty,
		m.id as id,
		m.address as address,
		p.pid as pid,
        p.delivery as delivery ,
		p.subject as subject,
		p.sub_desc as sub_desc,
		p.price as price,
        p.dc as dc,
		upload_img
from cart c,
	member m,
	product p
where c.id = m.id 
		and c.pid = p.pid;
   
-- detail review
create table reviews(
	rid			int 			primary key 	auto_increment,
    subject		varchar(50)		not null,
    detail_txt	varchar(1000)	not null,
    images		json,
	date		datetime		not null,
	id			VARCHAR(30) 	not null,
    pid 		int 			not null,
    count 		int
);
