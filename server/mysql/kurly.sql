USE kurlydb22;
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

delete table member 