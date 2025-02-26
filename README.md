## 250225 업데이트 내용

   ### ➕ `server/mysql/kurlyDB` : 컬리 DB 파일 수정
   - `kurlyDB`파일 수정되었습니다.
   -  #### 컬리DB 실행 전 `drop database kurlydb;` 로 기존 데이터베이스 삭제 해주세요
   ( mysql 커넥션 다시 진행 해야 데이터 베이스 보입니다.)
   

   ### ➕ 배열에서 두개 이상 경로가 있는 이미지 불러오기 
   - 배열인 값은  쿼리에서 직접 주소를 붙이지 말고 아래처럼 태그 앞에 로컬 호스트 주소 추가하여 map을 통해 값을 추출해주세요 
   ```bash
<img src={`http://localhost:9000/${item}`}></img> 
```

   ### ➕ DB 데이터 수정 및 추가
   1. member테이블에 test3 으로 값 추가하였습니다 
         기존 test1, test2는 장바구니 테이블 등에 값이 들어가있는데 기존 값 없이 테스트 할 수 있는 test3 아이디 추가하였습니다.
         `id : test3 / pw : 3333`
   2. 카테고리 테이블 삭제 - 카테고리 테스트 후 정상출력되면 그때 카테고리 테이블은 DB파일 수정 후 공유 예정
   3. 멤버테이블의 type은 null허용처리 했습니다 



---

# Kurly Clone Cording 팀프로젝트
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
npm init --yes : 프로젝트 초기화 -Node 모듈 설치
npm i express --save : 익스프레스 서버 라이브러리 설치
npm i mysql2 : mysql연동 라이브러리 설치
npm i cors   : 리엑트 연동시 특정 도메인 허용
npm i nodemon --save-dev : 
npm i
```
## ✨ Notice
- @ 클릭시 상품등록 페이지로 이동
- MySQL 엑셀파일 import 방법 링크
     🔗 https://docs.google.com/document/d/1i-fSyf0fiAIxes1XgFarcSiYTNz78uyrBF80Sx3AAgg/edit?tab=t.0
- WBS 구글 스프레드시트 링크
     🔗 https://docs.google.com/spreadsheets/d/1efKJctb6Yvo3z2QcAqwEk18eivzJ61jYt6foYRShAQk/edit?usp=sharing
<br><br><br><br>






