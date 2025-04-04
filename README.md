### <div align=center>![header](https://capsule-render.vercel.app/api?type=waving&color=0:672092,100:ECCDFF&width=1000&height=200&section=header&text=Kurly%20Clone%20Cording%20Team%20Project&fontSize=30&fontColor=FFFFFF&fontAlignY=35)</div>


## 프로젝트 소개
- 마켓컬리 클론 코딩 팀 프로젝트
- 마켓컬리는 직매입 방식의 식품/화장품 판매를 전문으로 하는 쇼핑몰 사이트입니다. 일부 지역 한정으로 당일 주문 시 다음 날 새벽에 배송되는 "새벽배송" 서비스를 제공하고 있으며 주로 1-2인 가구, 30-40대 여성이 주 고객입니다. 본 프로젝트는 마켓 컬리 중 뷰티 컬리를 메인으로 구현하고 있으며 탐색, 새벽배송, 인기 있는 제품을 추천받고 구매할 수 있는 모든 과정을 한 곳에서 경험할 수 있도록 돕습니다.
### 📄 개요

### 📆 프로젝트 기간
- 2025.02.24 ~ 2025.03.07 
  
### 🙋‍♀️ 팀구성

<br>

## 프로젝트 설명
### 설계단계 - ERD 
- 추후 업데이트
<br>

## 🖥구현기능 
📁 회원가입
- 회원가입 유효성 체크 (필요 정보 입력, 약관 동의 입력)
- api를 활용한 주소 자동 입력 (daum postcode api)

📁 로그인
- 로그인 유호성 체크
- 로그인 상태 유지 및 암호화(jsonwebtoken) 
- 아이디 찾기 및 임시비밀번호 발급 기능
  
📁 마이페이지
- 구매내역 최신순 조회
- 찜목록 조회
- 개인정보 수정(비밀번호, 주소, 핸드폰 번호 변경) DB연동 실시간 업데이트
- 카카오톡 실시간 상담톡 문의 기능 구현(kakao api)
- 헤더에서 상품 검색 시 해당 상품 출력
- 검색어 자동 고정
  
📁 메인페이지 
- 이미지 슬라이드 (slick)
- DB연동 제품 정보 조회 후 상품 출력
- 오늘의 특가 이벤트 아이템 노출
- 특정 구매 횟수를 넘은 상품의 경우 인기 상품 카테고리로 분류

📁 카테고리 서브 페이지, 사이드바
- DB연동 카테고리 조회
- 마우스 hover에 따른 크기 조절
- 최근 본 상품 사이드바 기능 구현
- 스크롤 이동에따라 사이드바 이동
  
📁 상세페이지
- 로그인시 찜하기, 문의하기, 장바구니 담기 기능 구현
- 찜하기 실시간 DB 연동
- 문의하기 클릭시 모달 팝업에 게시글 작성 구현
- 한 번에 여러개의 상품 장바구니 추가 기능 구현
  
📁 장바구니
- 장바구니 내에서 수량 증가/감소 기능
- 상품별 개별체크 및 모두 선택 기능 구현
- 상품별 개수 변경 가능 및 가격 반영
- 선택된 상품의 갯수, 가격에 따른 총가격 표시
  
📁 결제 페이지
- 결제 예정 품목 출력
- 쿠폰 할인 적용 및 가격 반영
- 토스페이 구매 기능(toss payment api)
- 배송 주소 변경 기능 구현 (daum postcode api)

📁 관리자 페이지
- 신규 상품 정보, 이미지 추가 기능 구현
- 신규 상품 추가시 메인 페이지에서 신상품 출력 기능 구현

<br>

### 📚기술 스택

<div align=left> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
  <br>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">
  <br>
</div>



## 프로젝트 시연 & 기능 설명

## 📎 배포 링크
http://kurly-react.s3-website.ap-northeast-2.amazonaws.com/

## 🎞 시연영상 (풀버전) 
[![유튜브 이동](https://github.com/user-attachments/assets/7317a9aa-17fe-409b-ac34-593ebff500e4)](https://www.youtube.com/watch?v=kZ_qybqN7Aw)
(이미지 클릭시 유튜브 링크로 이동합니다.) 

## 📜 기능설명
### 1️⃣ 헤더
![Image](https://github.com/user-attachments/assets/55c04063-e813-4a96-b2b0-f70bcb0f4c87) 

![Image](https://github.com/user-attachments/assets/ab23c13b-611b-430b-8ee7-f7c4c4a46705) 

![Image](https://github.com/user-attachments/assets/41736d68-2bbf-49fa-a504-9f68df4b4b1c) 

![Image](https://github.com/user-attachments/assets/d0b5eeb5-e980-443d-baa4-900ac64b8180) 

![Image](https://github.com/user-attachments/assets/cabf80f1-98eb-4f32-9b0a-3ce9a78d00a2) 

### 2️⃣ 메인 페이지
![Image](https://github.com/user-attachments/assets/63ae0139-18e6-49ef-9dd9-baeccb2b0e14) 

![Image](https://github.com/user-attachments/assets/5d8f8cc5-07e7-4fce-94e3-444a3550820a) 

![Image](https://github.com/user-attachments/assets/1e858eb5-8553-4bfe-99a0-9b7e45d2cae2) 

![Image](https://github.com/user-attachments/assets/9c2a5cb9-8e25-4780-83a5-49c0e5cfeeb6) 

### 3️⃣ 사이드바 / 푸터
![Image](https://github.com/user-attachments/assets/667e72dc-079f-46d9-bee5-300a481b426f) 

![Image](https://github.com/user-attachments/assets/4d574c2b-bf5f-4ebb-9df2-5af0e5fbc53e) 

### 4️⃣ 상품 상세 페이지
![Image](https://github.com/user-attachments/assets/fc386a18-0827-45b7-b667-8fa10c272302)
![Image](https://github.com/user-attachments/assets/9f81b1fa-e262-4a8e-bd6a-0ff424021562)
![Image](https://github.com/user-attachments/assets/e25cc1e4-9d7d-4401-aa91-bf600a6350f0)
![Image](https://github.com/user-attachments/assets/bc9cc345-f4a5-48f9-aacd-96dcde578e58)

### 5️⃣ 장바구니
![Image](https://github.com/user-attachments/assets/fe0bca3f-16d6-44a6-8fc2-6766d5f1d127)
![Image](https://github.com/user-attachments/assets/55975290-3773-4f74-b2ed-ecbf13ba29fd)
![Image](https://github.com/user-attachments/assets/fa8c00bf-481d-4676-a081-7c7f138bf904)
![Image](https://github.com/user-attachments/assets/f6879d66-1a5c-4508-8a98-cdbdfb62890a)
![Image](https://github.com/user-attachments/assets/58200051-deca-4acb-bf89-22ff8c0e5f28)

### 6️⃣ 결제 
![Image](https://github.com/user-attachments/assets/c1ca4999-db50-4584-aec8-34f843809aa7)
![Image](https://github.com/user-attachments/assets/614eee61-4605-43d7-a500-8f827c1cb736)
![Image](https://github.com/user-attachments/assets/387ba85e-7595-4321-8744-bc187f83cf06)
![Image](https://github.com/user-attachments/assets/8164c95a-c513-42fa-8974-28e9b7c49631)
![Image](https://github.com/user-attachments/assets/61a08592-d770-4e33-a3d0-9712f250e964)
![Image](https://github.com/user-attachments/assets/0476495d-5651-4f8e-95ba-dbdb513cf74e)
 
### 7️⃣ 마이페이지 
![Image](https://github.com/user-attachments/assets/6e94bcd5-72eb-40aa-b1dd-71cffa0c644a)
![Image](https://github.com/user-attachments/assets/7f97be46-29c4-4d2d-a33a-9fb3084cdaac)

### 8️⃣ 상품등록
![Image](https://github.com/user-attachments/assets/2c93c118-f0b9-4bff-b6a3-19c33e13e17d)

<br>

## 😨trouble shooting
- MySQL의 이미지를 axios로 끌어올 때 이미지 url에 {}까지 함께 출력되는 이슈 발생. csv로 product 정보를 추가하여 이슈 해결.
- 찜하기 버튼(하트) 클릭시 localstorage에 저장하여 찜목록을 구현하였으나 다른 아이디로 로그인 시에도 같은 물건이 찜목록에 포함된 것을 발견, 실시간 연동에 어려움이 있음. DB에 wish-list테이블을 생성하여 실시간 공유 형식으로 변경하여 해결함.
- 구매시 주문번호와 구매날짜를 직관적으로 출력하기 위해 view테이블로 생성하여 공유하는 기존형식에서 order-list 테이블을 생성함. 주문번호, 구매 내역을 날짜순으로 저장하도록 하여 해결함.
- 상세 페이지에서 많은 hook사용, 많은 콜스택으로 에러 발생. 여러 컴포넌트로 나눠 생성하여 오류 해결함.
- 개인정보 수정을 한 버튼으로 수정 및 업데이트를 진행하면 수정되지 않은 정보들을 빈값으로 인식하여 오류 발생. 수정 버튼 클릭시 수정 가능한 데이터들을 input으로 변환하여 업데이트 될 수 있도록 하여 해결함.
<br>
   
## ❗ Reference
- 본 프로젝트는 마켓컬리를 참조하여 학습 목적으로 만들어졌습니다.
- 학습용으로 만들어진 사이트이므로 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제가 될 수 있습니다.
- 본 프로젝트에서 사용하고 있는 사진의 저작권은 모두 마켓컬리에 있습니다. 
<br>

<br><br><br>

