# Kurly Clone Cording 팀프로젝트


### 250222 업데이트 내용
`server/upload_files : product` 테이블 이미지 폴더 <br>
`server/mysql/kurlydb.sql, kurly.sql` : DB파일, 테이블 조회 테스트 파일

전달해야할 것 같은 내용이 많아서 우선 리드미에 적었습니다 모두 확인되면 삭제하겠습니다~  <br>
`kurlydb` 파일로 `product`, `member` 테이블 조회 및 이미지 화면 출력 테스트 완료했습니다 <br>
기초 데이터 추가하실 것이 있다면 db파일에 추가하여 공유 및 사용하시면 될것같아요~ 


### 250222 업데이트 관련 참고 사항
1. product 테이블의 
이미지 경로 컬럼의 타입이 json일 경우 배열 안에 컬럼으로 구분된 문자열이 두개 이상 들어가면
문자열로만 반환이 되어서 타입 `varchar` 로 바꿔놓았습니다 문제가 있으면 말씀해주세요

2. {products.map(product => (<img src={`http://localhost:9000/${parseJSON(product.info_imgs)[0]}`} />))} <br>
db에서 쿼리 수정 없이 데이터 받아와서 이미지태그로 사용할 때 예시입니다, <br> 서버 주소와 parseJSON 메서드 사용하여야 정상 출력됩니다

3. 기존에 올라가있던 upload_files 폴더는 지우지 않고 upload_files2로 폴더명 변경하였습니다!

   ![image](https://github.com/user-attachments/assets/558942f4-b87c-42a9-9d6c-da9246375fe8)


---


## ⚙️ 설치 라이브러리 
### client
```bash
npm i
npm i react-bootstrap
npm i react-slick --save
npm i slick-carousel --save
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


