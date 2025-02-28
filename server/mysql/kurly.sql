USE kurlydb;
SHOW TABLES; 

-- 각 테이블 조회
select * from product;
select * from member;
select * from qna;
select * from wish;
select * from cart;
select * from review;
select * from notice;
select * from payments;
select * from view_categoty_pro_list;
select * from view_cart_list;


-- 각 테이블 구조

desc product;
desc member;
desc qna;
desc wish;
desc cart;
desc review;
desc notice;
desc payments;
desc view_categoty_pro_list;
desc view_cart_list;




-- ########################################
-- 팀원별로 테이블 생성하고 테스트 하기 위해 생성한 것입니다. 
-- 수정 있을 수 있으니 확정되면 kurlyDB에 추가될 예정
-- ########################################

-- view_cart_list 테이블
	-- 장바구니 페이지 진입시 필요한 테이블 입니다!! 

create view view_cart_list
as 
select  c.no as no,
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


-- detail review 테이블
	-- 수정 있을 수 있으니 kurlydb에 추가해야 할 때 말할 예정
	-- detail에서 리뷰 테스트 해보고 싶으신 분들은 여기서 별도로 생성 부탁드립니다!! 


create table reviews(
	rid			int 			primary key 	auto_increment,
    subject		varchar(50)		not null,
    detail_txt	varchar(1000)	not null,
    images		json,
	date		datetime		not null,
	id			VARCHAR(30) 	not null,
    pid 		int 			not null
);
