## [TIL] FEB 3 2025

### GOAL : Hiden Search Widget 구현

### 1. `position`

- `static`
  - 기본값
  - 요소가 일반적인 문서 흐름에 따라 배치되며, `top`, `right`, `bottom`, `left` 속성이 적용되지 않음
- `relative`
  - 요소를 원래 위치를 기준으로 상대적으로 이동
  - `top`, `right`, `bottom`, `left` 속성 요소의 원래 위치에서 얼마만큼 이동할지 지정 가능
  - 요소가 화면상에서 이동할 수 있지만, 그 요소가 원래 차지하고 있던 공간은 그대로 남음
- `absolute`
  - 요소를 가장 가까운 position을 가진(`relative`, `absolute`, `fixed`, `sticky` 중 하나가 설정된) 부모 요소를 기준으로 배치
  - 만약 해당 부모가 없다면, 문서의 `body`를 기준으로 함
  - 요소는 일반적인 문서 흐름에서 제외되어 다른 요소에 영향을 주지 않음
- `fixed`
  - 요소를 브라우저 뷰포트를 기준으로 고정
  - 스크롤해도 항상 같은 위치에 표시
- `sticky`
  - 스크롤에 따라 `relative`와 `fixed` 사이의 동작
  - 일반적으로 요소는 문서 흐름에 따라 배치되다가, 스크롤이 특정 임계점에 도달하면 고정(`fixed`)된 것처럼 동작

```html
<body>
  <div class="search">
    <input type="text" class="input" placeholder="Search..." />
    <button class="btn">
      <i class="fas fa-search"> </i>
    </button>
  </div>
  <script src="./script.js"></script>
</body>
```

```css
.search {
  position: relative;
  height: 50px;
}

.search .input {
  background-color: #fff;
  border: 0;
  font-size: 18px;
  padding: 15px;
  height: 50px;
  width: 50px;
  transition: width 0.3 ease;
}

.btn {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  transition: transform 0.3 ease; /* btn needs to move over */
}
```

### 2. JS code

```javascript
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  // toggle = adds the class if it's not present, removes it if it is
  search.classList.toggle("active");
  input.focus();
});
```

- `search.classList.toggle("active");` : active 클래스가 있으면 제거, 없으면 추가
