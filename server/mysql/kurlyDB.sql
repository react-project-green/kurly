drop database kurlydb;
CREATE DATABASE  IF NOT EXISTS `kurlydb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `kurlydb`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: kurlydb
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- ########################################
-- Dumping data for table `member` 1.유저 테이블
-- ########################################
DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `id` 			VARCHAR(30) 	PRIMARY KEY,
  `pwd` 		VARCHAR(50) 	NOT NULL,
  `name` 		VARCHAR(10) 	NOT NULL,
  `phone`		CHAR(13) 		NOT NULL,
  `emailname`   VARCHAR(20) 	NOT NULL,
  `emaildomain` VARCHAR(20) 	NOT NULL,
  `gender`		CHAR(1)			NOT NULL,
  `address` 	VARCHAR(80),
  `type` 		CHAR(1)	,
  `reg_date` 	DATETIME		NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

-- LOCK TABLES `KURLY_MEMBER` WRITE;
INSERT INTO `MEMBER` (`ID`, `PWD`, `NAME`,`gender`,`PHONE`, `emailname`, `emaildomain`, `ADDRESS`, `reg_date`) VALUES
('admin', 'admin', '관리자', 'f' , '010-1111-1111', 'admin', 'admin.com', '서울시 강남구', '2025-01-01'),
('test1', '1111', '홍길동', 'm' , '010-2222-2222', 'test1', 'naver.com', '서울시 구로구', '2025-01-02'),
('test2', '2222', '홍길순', 'f', '010-3333-3333', 'test2', 'gmail.com', '서울시 양천구', '2025-01-03'),
('test3', '3333', '홀리홀리', 'f', '010-3333-3333', 'test2', 'gmail.com', '서울시 양천구', '2025-01-03');
-- UNLOCK TABLES;


-- ########################################
-- Dumping data for table `product` 2.상품 테이블
-- ########################################
DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pid`               int           PRIMARY KEY    auto_increment,
  `brand`             varchar(100)  NOT NULL,
  `cate_depth1`       char(3)       NOT NULL,
  `cate_depth2`       char(3)       NOT NULL,
  `subject`           text    		NOT NULL,
  `sub_desc`          text,
  `price`             int           NOT NULL,
  `dc`                int,
   `delivery`      	  char(2)   ,
  `event_label`       TINYINT(1) DEFAULT 0,
  `upload_img`        json,
  `org_img`           json,
  `info_imgs`         json,
  `info_org_imgs`     json,
  `detail_imgs`       json,
  `detail_org_imgs`   json, 
  `pdate`             datetime
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


-- ########################################
-- Dumping data for table `QNA`  3.문의 테이블
-- ########################################
DROP TABLE IF EXISTS `qna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qna` (
  `no` 				int 		 	PRIMARY KEY 	auto_increment,
  `id` 				varchar(20) 	NOT NULL,
  `pid` 			int  			NOT NULL,
  `title`			varchar(20)		NOT NULL,
  `content` 		varchar(1000) 	NOT NULL,
   CONSTRAINT `QNA_FK_ID` FOREIGN KEY (`id`) REFERENCES `member` (`id`),
   CONSTRAINT `QNA_FK_PID` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


-- ########################################
-- Dumping data for table `wish`  4. 위시리스트 테이블
-- ########################################
DROP TABLE IF EXISTS `wish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wish` (
  `no` 				int 		 	PRIMARY KEY 	auto_increment,
  `id`				varchar(20)		NOT NULL,
  `pid` 			int				NOT NULL,
   CONSTRAINT `WISH_FK_ID` FOREIGN KEY (`id`) REFERENCES `member` (`id`),
   CONSTRAINT `WISH_FK_PID` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

-- ########################################
-- Dumping data for table `cart`  5.장바구니 테이블
-- ########################################
DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `no` 				int 		 	PRIMARY KEY 	auto_increment,
  `id`				varchar(20)		NOT NULL,
  `pid` 			int				NOT NULL,
  `qty` 			int				NOT NULL,
   CONSTRAINT `CART_FK_ID` FOREIGN KEY (`id`) REFERENCES `member` (`id`),
   CONSTRAINT `CART_FK_PID` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO `cart` (`id`, `pid`, `qty`) 
VALUES('test1', 7, 3),('test2', 3, 5),('test1', 12, 6),
('test2', 1, 1),('test1', 9, 2),('test2', 14, 7),
('test1', 5, 3),('test2', 10, 1),('test1', 2, 8),
('test2', 15, 1),('test1', 6, 1),('test2', 8, 12);

-- ########################################
-- Dumping data for table `review`   6.리뷰테이블
-- ########################################
DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `rid` 			int		 		PRIMARY KEY 	auto_increment,
  `id`				varchar(20)		NOT NULL,
  `pid` 			int				NOT NULL,
  `content` 		varchar(500)	NOT NULL,
  `reg_date`		datetime,
  `image`			varchar(100),
   CONSTRAINT `REVIEW_FK_ID` FOREIGN KEY (`id`) REFERENCES `member` (`id`),
   CONSTRAINT `REVIEW_FK_PID` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


-- ########################################
-- Dumping data for table `notice`  7.공지사항 테이블
-- ########################################
DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `no` 				int		 		PRIMARY KEY 	auto_increment,
  `id`				varchar(20)		NOT NULL,
  `title` 			varchar(20)		NOT NULL,
  `content` 		varchar(1000)	NOT NULL,
  `reg_date`		datetime,
  `type` INT NOT NULL COMMENT '0=공지, 1=FAQ',
   CONSTRAINT `NOTICE_FK_ID` FOREIGN KEY (`id`) REFERENCES `member` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


-- ########################################
-- Dumping data for table `payments` 8.결제 테이블
-- ########################################
DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `oid` 			int		 		PRIMARY KEY 	auto_increment,
  `id`				varchar(20)		NOT NULL,
  `pid`				int				NOT NULL,
  `tid` 			varchar(50)		NOT NULL,
  `qty`				int 			NOT NULL,
  `total_price` 	int				NOT NULL,
  `type` 			varchar(30)		NOT NULL,
  `odate` 			datetime		NOT NULL,
  `zipcode`			varchar(10)     NOT NULL,
  `address`			varchar(200)     NOT NULL,
  `address_detail`  varchar(200)     NOT NULL,
   CONSTRAINT `PAYMENTS_FK_ID` FOREIGN KEY (`id`) REFERENCES `member` (`id`),
   CONSTRAINT `PAYMENTS_FK_PID` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO payments (id, pid, tid, qty, total_price, type, odate, zipcode, address, address_detail)
VALUES 
('test1', 1,  'TID001', 10, 10000, 'card', now(), '12345', '서울시 구로구', '상세주소1'),
('test2', 2,  'TID002', 8, 20000, 'card', now(), '12345', '서울시 양천구', '상세주소2'),
('test1', 3,  'TID003', 9, 15000, 'card', now(), '12345', '서울시 구로구', '상세주소1'),
('test2', 4,  'TID004', 10, 18000, 'card', now(), '12345', '서울시 양천구', '상세주소2'),
('test1', 5,  'TID005', 4, 22000, 'card', now(), '12345', '서울시 구로구', '상세주소1'),
('test2', 6,  'TID006', 6, 30000, 'card', now(), '12345', '서울시 양천구', '상세주소2'),
('test1', 7,  'TID007', 10, 17000, 'card', now(), '12345', '서울시 구로구', '상세주소1'),
('test2', 8,  'TID008', 2, 26000, 'card', now(), '12345', '서울시 양천구', '상세주소2'),
('test1', 9,  'TID009', 5, 19000, 'card', now(), '12345', '서울시 구로구', '상세주소1'),
('test2', 10, 'TID010', 6, 21000, 'card', now(), '12345', '서울시 양천구', '상세주소2'),
('test1', 11, 'TID011', 9, 24000, 'card', now(), '12345', '서울시 구로구', '상세주소1'),
('test2', 12, 'TID012', 10, 28000, 'card', now(), '12345', '서울시 양천구', '상세주소2');


-- ########################################
-- view_categoty_pro_list 뷰테이블 생성
-- ########################################
create view view_categoty_pro_list 
as
select pid
	 , subject as name
	 , sub_desc as description
	 , price as originalPrice
	 , dc 
	 , concat(format(price - (price * (dc * 0.01)),0),'원') as discountedPrice
	 , concat('http://localhost:9000/',JSON_UNQUOTE(JSON_EXTRACT(upload_img, '$[0]'))) as image_url
     , pdate
from product; 



-- ########################################
-- Dumping routines for database 'kurlyDB'
-- ########################################
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

