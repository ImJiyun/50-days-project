## [TIL] FEB 2 2025

### GOAL : roating navigation 구현

- Point : animation + position of `<nav>`

### 1. Adjacent Sibling Selector (인접 형제 선택자)

- A + B: 요소 B 중에서 바로 앞에 요소 A가 있는 B를 선택

```html
<nav>
  <ul>
    <li><i class="fas fa-home"> Home</i></li>
    <li><i class="fas fa-user-alt"> About</i></li>
    <li><i class="fas fa-envelope"> Contact</i></li>
  </ul>
</nav>
```

```css
nav ul li + li {
  margin-left: 15px;
  transform: translateX(-150%);
}

nav ul li + li + li {
  margin-left: 30px;
  transform: translateX(-200%);
}
```

- `nav ul li + li` : `nav` 안의 `ul` 안에 있는 첫 번째 `li` 다음에 오는 `li` 요소들을 선택
- `nav ul li + li + li` : 세 개 이상의 연속된 `li` 중에서 세 번째 이후의 `li` 요소들 선택

### 2. `transform: rotate(deg);`

- 회전 기준점(`transform-origin`)을 기준으로 회전 (기본값은 중앙)
- deg > 0 : 시계 방향(clockwise)으로 회전
- deg < 0 : 반시계 방향(counterclockwise)으로 회전

```css
.container {
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear; /* smooth change */
  width: 100vw; /* takes up the whole the viewpoint horizontally */
  min-height: 100vh;
  padding: 50px;
}

/* transform origin : when rotating the origin, by default it's the middle */
.container.show-nav {
  transform: rotate(-20deg);
}
```

- `transform: rotate(-20deg);` : 반시계 방향으로 20도 회전

### 3. `transform: translateX()`

- 요소를 수평 방향으로 이동
- 음수 값 : 요소를 오른쪽으로 이동
- 양수 값 : 요소를 왼쪽으로 이동
- % : **요소 자신의 크기**를 기준으로 계산

```css
nav ul li {
  text-transform: uppercase;
  color: #fff;
  margin: 40px 0;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;
}
```

- `translateX(-100%);` : 요소의 해당 너비의 100%를 기준으로 오른쪽으로 이동

### 4. `auto`

- **block 요소**의 좌우 여백을 자동으로 조정하여 부모 요소 안에서 가운데 정렬
- **반드시 요소의 width가 설정되어 있어야 함**
- 세로 중앙 정렬은 적용되지 않음

```css
.content {
  max-width: 1000px;
  margin: 50px auto;
}
```

- `margin: 50px auto;` : 좌우 margin을 자동으로 설정하여 가운데 정렬

### 5. JS code

```javascript
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));
```
