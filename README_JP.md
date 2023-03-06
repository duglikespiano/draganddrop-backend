# draganddrop_backend(jp)

##### [한국어 버전은 이 곳을 클릭해주세요](README.md)

##### [Click here for English version](README_EN.md)

## - Index -

1. 概要
2. Project 目標
3. Postman API 呼び出し試演
4. 今後具現予定機能
5. 改善必要内容
   </br>
   </br>

### 1. 概要

- Project タイトル: draganddrop_backend
- 期間 : 2023.02.20 - 2023. 03. 03(12 日)
- 人員 : 1 人
- 技術スタック : </br>
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
  </br>
  </br>

### 2. Project 目標

1. DRAG & DROP を通じた Webpage の DOM 操作の為の CRUD API 製作
2. frontend server との連動出来るように具現する事
3. Postman の API 呼び出し機能を使う事
   </br>
   </br>

### 3. Postman API 呼び出し試演 </br>

1. 全ての contents 呼び出す</br>
   <img src='./ref/all_read.gif'>
2. content 追加</br>
   <img src='./ref/content_add.gif'>
3. content 修正</br>
   <img src='./ref/content_modify.gif'>
4. content 削除</br>
   <img src='./ref/content_remove.gif'>
5. content 順番変更</br>
   <img src='./ref/contents_order_modify.gif'>
6. category 追加</br>
   <img src='./ref/category_add.gif'>
7. category 修正</br>
   <img src='./ref/category_modify.gif'>
8. category 削除</br>
   <img src='./ref/category_remove.gif'>
9. category 順番変更</br>
   <img src='./ref/categories_order_modify.gif'>
10. category 間 content 移動</br>
    <img src='./ref/contents_move.gif'>
    </br>
    </br>

### 4. 今後具現予定機能

- QUERY TRANSACTION を具現する事
  </br>
  </br>

### 5. 改善必要内容

- DEADLOCK ERROR の原因を把握して修正する事
