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
- 회원가입 : 회원가입 유효성 검사
- 로그인 : 로그인 유호성 검사, localstorage의 token을 이용하여 로그인 상태 유지, 아이디 찾기 및 임시비밀번호 발급 기능 
- 메인페이지 : 48시간 한정 이벤트 아이템 노출, 특정 구매 횟수를 넘은 상품의 경우 인기 상품 카테고리로 분류,
             슬릭으로 이벤트 배너 자동 스와이프
- 상세페이지 : 찜하기, 문의, 장바구니 담기
- 마이페이지 : 최근 구매내역/찜목록 조회, 개인정보 수정, 카카오톡 실시간 상담톡 문의 기능 구현
- 장바구니 : 장바구니 내에서 수량 증가/감소 기능 
- 구매 페이지 : 쿠폰 할인 적용, 토스페이 구매 기능
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

gif
![2025-03-10-17-29-33](https://github.com/user-attachments/assets/593dbf57-3109-4dcf-91d6-7917db5d4e4c)





https://github.com/user-attachments/assets/7ec0ddcd-5201-4a20-af79-e3963b93d706




### ☑️ 설치 라이브러리  

<b>client</b>
  
```bash
npm i
npm i react-bootstrap
npm i react-slick --save
npm i slick-carousel --save
npm i antd
npm i react-daum-postcode
npm install @tosspayments/tosspayments-sdk
npm i sass
npm i react-icons
```

<b>server</b>
```bash
npm init --yes
npm i express --save
npm i mysql2
npm i cors
npm i nodemon --save-dev 
```
### ☑️footer
- @ 누르면 상품등록으로 이동

<br>

## 😨trouble shooting
- MySQL의 이미지를 axios로 끌어올 때 이미지 url에 {}까지 함께 출력되는 이슈 발생. csv로 product 정보를 추가하여 이슈 해결.
- 찜하기 버튼(하트) 클릭시 localstorage에 저장하여 찜목록을 구현하였으나 다른 아이디로 로그인 시에도 같은 물건이 찜목록에 포함된 것을 발견, 실시간 연동에 어려움이 있음. DB에 wish-list테이블을 생성하여 실시간 공유 형식으로 변경하여 해결함.
- 구매시 주문번호와 구매날짜를 직관적으로 출력하기 위해 view테이블로 생성하여 공유하는 기존형식에서 order-list 테이블을 생성함. 주문번호, 구매 내역을 날짜순으로 저장하도록 하여 해결함.
- 상세 페이지에서 많은 hook사용, 많은 콜스택으로 에러 발생. 여러 컴포넌트로 나눠 생성하여 오류 해결함.
- 개인정보 수정을 한 버튼으로 수정 및 업데이트를 진행하면 수정되지 않은 정보들을 빈값으로 인식하여 오류 발생. 수정 버튼 클릭시 수정 가능한 데이터들을 input으로 변환하여 업데이트 될 수 있도록 하여 해결함.
<br>


## ✨ Notice
- MySQL 엑셀파일 import 방법 링크 <br>
     🔗 https://docs.google.com/document/d/1i-fSyf0fiAIxes1XgFarcSiYTNz78uyrBF80Sx3AAgg/edit?tab=t.0  <br>
- WBS 구글 스프레드시트 링크 <br>
     🔗 https://docs.google.com/spreadsheets/d/1efKJctb6Yvo3z2QcAqwEk18eivzJ61jYt6foYRShAQk/edit?usp=sharing  <br>
- 배열에서 두개 이상 경로가 있는 이미지 불러오기  <br>
     배열인 값은  쿼리에서 직접 주소를 붙이지 말고 아래처럼 태그 앞에 로컬 호스트 주소 추가하여 map을 통해 값을 추출해주세요 
   ```
   <img src={`http://54.180.92.85:9000/${item}`}></img> 
   ```
   <br>

   
## ❗ Reference
- 본 프로젝트는 마켓컬리를 참조하여 학습 목적으로 만들어졌습니다.
- 학습용으로 만들어진 사이트이므로 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제가 될 수 있습니다.
- 본 프로젝트에서 사용하고 있는 사진의 저작권은 모두 마켓컬리에 있습니다. 
<br>

<br><br><br>

