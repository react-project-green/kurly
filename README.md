

# Kurly Clone Cording 팀프로젝트

## 25.02.28 참고사항 
1. `App.js / login` 경로 수정 <br>
     - 로그인 페이지 네비게이션 연결하신 분들은  `/login`  -> `/member/login`으로 경로 수정 해야 로그인 페이지로 넘어갑니다
2. kurlyDB 및 테스트 테이블 관련 
     - `server/mysql/kurlyDB.sql`
          - 추후 팀원들 변경사항 반영하여 업데이트 예정
          - 업데이트 후에 기존 kurlyDB 드랍과 새로운 DB 생성은 모두 함께 있을 때 진행하면 좋을 것 같아용~ 
     
     - `server/mysql/kurly.sql` 
          - 테이블 조회, 구조 확인
          - 팀원 각자 필요한 테이블 생성 및 변경 테스트 하는 공간으로 만들었어요 확정이 된 후 kuryDB로 통합하는 것이 좋을 것 같습니당
          - 상품상세페이지의 review 탭 테스트, 장바구니 페이지 진입 해보고 싶다면 여기서 테이블 생성하시면 됩니다~ 


## ⚙️ 설치 라이브러리 
### client
```bash
npm i
npm i react-bootstrap
npm i react-slick --save
npm i slick-carousel --save
npm i antd
npm i react-daum-postcode
```

### server
```bash
npm init --yes
npm i express --save
npm i mysql2
npm i cors
npm i nodemon --save-dev
npm i
```
## ✨ Notice
- @ 클릭시 상품등록 페이지로 이동
- MySQL 엑셀파일 import 방법 링크 <br>
     🔗 https://docs.google.com/document/d/1i-fSyf0fiAIxes1XgFarcSiYTNz78uyrBF80Sx3AAgg/edit?tab=t.0  <br>
- WBS 구글 스프레드시트 링크 <br>
     🔗 https://docs.google.com/spreadsheets/d/1efKJctb6Yvo3z2QcAqwEk18eivzJ61jYt6foYRShAQk/edit?usp=sharing  <br>
- 배열에서 두개 이상 경로가 있는 이미지 불러오기  <br>
     배열인 값은  쿼리에서 직접 주소를 붙이지 말고 아래처럼 태그 앞에 로컬 호스트 주소 추가하여 map을 통해 값을 추출해주세요 
   ```
   <img src={`http://localhost:9000/${item}`}></img> 
   ```
   <br>
- 

<br><br><br>
   

---

### <p align="center">🚧공사중🚧</p>


## 프로젝트 소개
### 📆 프로젝트 기간
- 2025.02.24 ~ 진행중
### 🙋‍♀️ 팀구성

<br>

## 프로젝트 설명
### 설계 - ERD 
- 추후 업데이트
<br>

## 프로젝트 시연
- 추후 업데이트
<br>

## 😨trouble shooting



