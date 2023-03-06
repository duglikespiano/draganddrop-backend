# draganddrop_backend(kr)

##### [Click here for English version](README_EN.md)

##### [日本語バージョンはこちらをクリックして下さい](README_JP.md)

## - 목차 -

1. 개요
2. 프로젝트목표
3. Postman API호출 시연
4. 차후구현예정기능
5. 개선필요내용
   </br>
   </br>

### 1. 개요

- 프로젝트명 : draganddrop_backend
- 기간 : 2023.02.20 - 2023. 03. 03(12일)
- 인원 : 1인
- 기술스택 : </br>
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
  </br>
  </br>

### 2. 프로젝트목표

1. DRAG & DROP을 통한 웹페이지 DOM 조작을 위한 CRUD API 제작
2. 프론트엔드서버와 연동 가능하도록 구현 할 것
3. Postman API 호출 테스트 기능을 사용 할 것
   </br>
   </br>

### 3. Postman API호출 시연 </br>

1. 모든 contents 불러오기</br>
   <img src='./ref/all_read.gif'>
2. content 추가</br>
   <img src='./ref/content_add.gif'>
3. content 수정</br>
   <img src='./ref/content_modify.gif'>
4. content 삭제</br>
   <img src='./ref/content_remove.gif'>
5. content 순서변경</br>
   <img src='./ref/contents_order_modify.gif'>
6. category 추가</br>
   <img src='./ref/category_add.gif'>
7. category 수정</br>
   <img src='./ref/category_modify.gif'>
8. category 삭제</br>
   <img src='./ref/category_remove.gif'>
9. category 순서변경</br>
   <img src='./ref/categories_order_modify.gif'>
10. category간 content이동</br>
    <img src='./ref/contents_move.gif'>
    </br>
    </br>

### 4. 차후구현예정기능

- QUERY TRANSACTION 구현 할 것
  </br>
  </br>

### 5. 개선필요내용

- DEADLOCK ERROR 원인 파악 후 수정 할 것
