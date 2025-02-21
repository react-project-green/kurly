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
  `type` 		CHAR(1)			NOT NULL,
  `reg_date` 	DATETIME		NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


-- LOCK TABLES `KURLY_MEMBER` WRITE;
INSERT INTO `MEMBER` (`ID`, `PWD`, `NAME`,`gender`,`PHONE`, `emailname`, `emaildomain`, `ADDRESS`, `reg_date`) VALUES
('admin', 'admin', '관리자', 'f' , '010-1111-1111', 'admin', 'admin.com', '서울시 강남구', '2025-01-01'),
('test1', '1111', '홍길동', 'm' , '010-2222-2222', 'test1', 'naver.com', '서울시 구로구', '2025-01-02'),
('test2', '2222', '홍길순', 'f', '010-3333-3333', 'test2', 'gmail.com', '서울시 양천구', '2025-01-03');
-- UNLOCK TABLES;




-- ########################################
-- Dumping data for table `product` 2.상품 테이블
-- ########################################
DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pid` 				int 		 	PRIMARY KEY 	auto_increment,
  `brand` 				varchar(20)		NOT NULL,
  `cate_depth1` 		char(3) 		NOT NULL,
  `cate_depth2` 		char(3) 		NOT NULL,
  `subject`				varchar(100)    NOT NULL,
  `sub_desc` 			varchar(100),
  `price` 				int				NOT NULL,
  `dc` 					int,
   `delivery`		char(2)	,
  `event_label` 		TINYINT(1) DEFAULT 0,
  `upload_img` 			varchar(100),
  `org_img` 			varchar(50),
  `info_imgs`			varchar(100),
  `info_org_imgs`		varchar(50),
  `detail_imgs` 		varchar(100),
  `detail_org_imgs` 	varchar(50), 
  `pdate` 				datetime
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


-- LOCK TABLES `product` WRITE;
INSERT INTO `product` (
  `brand`, `cate_depth1`, `cate_depth2`, `subject`, `sub_desc`, `price`, `dc`, `delivery`,
  `event_label`, `upload_img`, `org_img`, `info_imgs`, `info_org_imgs`, `detail_imgs`, `detail_org_imgs`, `pdate`
) VALUES
('설화수',101,001,'[설화수] 자음 2종 세트 (자음수, 자음유액) ','풍성하게 즐기는 스테디셀러세트(+쇼핑백 선택 가능)',140000,10,'상온',1,'["upload_files/1.jpg"]',null,'["upload_files/1_1_1.jpg","upload_files\\\\1_1_2.jpg"]',null,'["upload_files/1_2_1.jpg"]',null,now()),
('달바',101,001,'[달바] 화이트 트러플 퍼스트 스프레이 세럼 100ml 2개 세트 (옐로우 미스트 세럼)(+마스크팩 1매 증정)','윤기와 보습을 더하는 산뜻 미스트 ',59800,43,'상온',1,'["upload_files/2.jpg"]',null,'["upload_files/2_1_1.jpg","upload_files/2_1_2.jpg"]',null,'["upload_files/2_2_1.jpg","upload_files/2_2_2.jpg"]',null,now()),
('피토메르',101,002,'[타임특가][피토메르] 특별 기획 세트 (올리고포스세럼 30ml+멜팅크림 30ml+올리고 비타C세럼 15ml)','홈 에스테틱을 위한 기획 세트',272000,65,'상온',1,'["upload_files/3.jpg"]',null,'["upload_files/3_1_1.jpg","upload_files/3_1_2.jpg"]',null,'["upload_files/3_2_1.jpg"]',null,now()),
('라 메르',101,002,'[라 메르] 크렘 드 라 메르 30ml','깊은 보습감을 선사하는 기적의 크림',312000,15,'상온',1,'["upload_files/4.jpg"]',null,'["upload_files/4_1_1.jpg","upload_files/4_1_2.jpg"]',null,'["upload_files/4_2_1.jpg","upload_files/4_2_2.jpg"]',null,now()),
('피지오겔',101,002,'[피지오겔] DMT 로션 선물세트(로션 200ml, 크림30ml, 토너 50ml, 클렌징 젤 30ml) (쇼핑백 포함)','피지오겔 베스트 상품으로 구성된 선물세트',47500,37,'상온',1,'["upload_files/5.jpg"]',null,'["upload_files/5_1_1.jpg","upload_files/5_1_2.jpg"]',null,'["upload_files/5_2_1.jpg","upload_files/5_2_2.jpg"]',null,now()),
('에스티로더',102,001,'[에스티로더] 더블웨어 파운데이션 30ml 8종(택1, 펌핑기 증정)','무너짐 없는 베이스 메이크업의 비결',91000,15,'상온',0,'["upload_files/6.jpg"]',null,'["upload_files/6_1_1.jpg","upload_files/6_1_2.jpg"]',null,'["upload_files/6_2_1.jpg","upload_files/6_2_2.jpg"]',null,now()),
('달바',102,001,'[달바] 워터풀 핑크 톤업 선크림 50ml (비건)','맑은 광채를 더해주는 혼합자차',34000,29,'상온',0,'["upload_files/7.jpg"]',null,'["upload_files/7_1_1.jpg","upload_files/7_1_2.jpg"]',null,'["upload_files/7_2_1.jpg","upload_files/7_2_2.jpg"]',null,now()),
('프레시안',102,002,'[프레시안] 에그라이크 크림 블러쉬 6종 (택1)','메이크업 아티스트 나겸쌤 공동개발 블러쉬',22000,5,'상온',0,'["upload_files/8.jpg"]',null,'["upload_files/8_1_1.jpg","upload_files/8_1_2.jpg"]',null,'["upload_files/8_2_1.jpg","upload_files/8_2_2.jpg"]',null,now()),
('글린트',102,002,'[글린트] 하이라이터 피치문 기획세트','맑고 청초한 피치빛 광채',22000,10,'상온',1,'["upload_files/9.jpg"]',null,'["upload_files/9_1_1.jpg","upload_files/9_1_2.jpg"]',null,'["upload_files/9_2_1.jpg","upload_files/9_2_2.jpg"]',null,now()),
('페리페라',102,002,'[페리페라] 약과몰입에디션NEW 맑게 물든 선샤인 치크 2종(택1)','두 볼을 맑게 물들인 햇살 컬러',8000,18,'상온',1,'["upload_files/10.jpg"]',null,'["upload_files/10_1_1.jpg","upload_files/10_1_2.jpg"]',null,'["upload_files/10_2_1.jpg","upload_files/10_2_2.jpg"]',null,now()),
('아벤느',103,001,'[아벤느] 미셀라 클렌징 워터 트리플 기획세트 (400mL*3개, 화장솜 50매)','화장솜 증정, 풍성한 용량으로 알차게 꾸려낸',81000,51,'상온',1,'["upload_files/11.jpg"]',null,'["upload_files/11_1_1.jpg","upload_files/11_1_2.jpg"]',null,'["upload_files/11_2_1.jpg"]',null,now()),
('바비 브라운',103,001,'[바비브라운] 수딩 클렌징 오일 200ml','부담 없이 사용하는 스테디셀러 ',79900,15,'상온',1,'["upload_files/12.jpg"]',null,'["upload_files/12_1_1.jpg","upload_files/12_1_2.jpg"]',null,'["upload_files/12_2_1.jpg"]',null,now()),
('마녀공장',103,001,'[마녀공장] 퓨어 클렌징 오일 200ml','순하고 강력한 클렌징 오일',29000,40,'상온',1,'["upload_files/13.jpg"]',null,'["upload_files/13_1_1.jpg","upload_files/13_1_2.jpg"]',null,'["upload_files/13_2_1.jpg"]',null,now()),
('에스트라',103,001,'[에스트라] 아토베리어365 버블클렌저 150ml 2개 세트(+클렌저 50ml 증정)','',34000,15,'상온',0,'["upload_files/14.jpg"]',null,'["upload_files/14_1_1.jpg","upload_files/14_1_2.jpg"]',null,'["upload_files/14_2_1.jpg"]',null,now()),
('바이오더마',103,002,'[바이오더마] 센시비오 H2O 500ml 듀오','촉촉함을 전하는 워터 클렌저 듀오',42000,20,'상온',0,'["upload_files/15.jpg"]',null,'["upload_files/15_1_1.jpg","upload_files/15_1_2.jpg"]',null,'["upload_files/15_2_1.jpg"]',null,now()),
('닥터아토',104,001,'[닥터아토] 실키 포켓 선스틱 17g','백탁 없이 보송한 저자극 선스틱',23900,62,'상온',1,'["upload_files/16.jpg"]',null,'["upload_files/16_1_1.jpg","upload_files/16_2_1.jpg"]',null,'["upload_files/16_2_1.jpg"]',null,now()),
('라로제',104,001,'[라로제] 클린 선스틱 SPF 50 PA++++18.5g(워터프루프)','피부와 환경까지 생각한 선스틱',29000,10,'상온',0,'["upload_files/17.jpg"]',null,'["upload_files/17_1_1.jpg","upload_files/17_1_2.jpg"]',null,'["upload_files/17_2_1.jpg"]',null,now()),
('맥',104,002,'[맥] 라이트풀 C3 톤업 밤(로즈 톤업 밤) SPF30 / PA+++ 2종(택1)','간편한 밤 타입 톤업 베이스',75000,15,'상온',1,'["upload_files/18.jpg"]',null,'["upload_files/18_1_1.jpg","upload_files/18_1_2.jpg"]',null,'["upload_files/18_2_1.jpg"]',null,now()),
('정샘물',104,002,'[정샘물] 정샘물 키즈 마일드 선 쿠션 18g(SPF50+/PA++++)','시원한 쿨링감의 톤업 무기자차',30000,20,'상온',1,'["upload_files/19.jpg"]',null,'["upload_files/19_1_1.jpg","upload_files/19_1_2.jpg"]',null,'["upload_files/19_1_1.jpg"]',null,now()),
('베비언스',104,002,'[베비언스] BB핑크퐁 선쿠션 15g','아이 피부에 안심하고 톡톡',19800,0,'상온',0,'["upload_files/20.jpg"]',null,'["upload_files/20_1_1.jpg","upload_files/20_1_2.jpg"]',null,'["upload_files/20_2_1.jpg"]',null,now());

-- UNLOCK TABLES;


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

-- ########################################
-- Dumping data for table `category` 9.카텍고리 테이블
-- ########################################
DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `cid` 			int		 		PRIMARY KEY 	auto_increment,
  `title`			varchar(20)		NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

-- ########################################
-- Dumping data for table `sub_category` 10.서브카테고리 테이블
-- ########################################
DROP TABLE IF EXISTS `sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_category` (
  `no` 			int		 		PRIMARY KEY 	auto_increment,
  `sid` 			int		 		NOT NULL,
  `title`			varchar(20)		NOT NULL,
  `cid`				int				NOT NULL,
   CONSTRAINT `SUB_CATEGORY_FK_ID` FOREIGN KEY (`cid`) REFERENCES `category` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
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


