## [TIL] FEB 1 2025

### GOAL : progress steps 구현

- Idea : 클릭했을 때 특정 step만 .active, disabled style 적용

### 1. CSS variable

```css
:root {
  --line-border-fill: #3498db;
  --line-border-empty: #e0e0e0;
}

.circle.active {
  border-color: var(--line-border-fill);
}
```

- 스타일 속성을 변수처럼 저장하고 사용
- 특정 요소 내에서 선언 필요
- :root에서 선언 시 전역 변수로 어디에서든 사용 가능

### 2. `::before`

```css
/* entire step */
.progress-container::before {
  content: ""; /* when we use before, we have use specify content */
  background-color: var(--line-border-empty);
  position: absolute;
  top: 50%;
  left: 0;
  height: 4px;
  width: 100%;
  transform: translateY(-50%);
  z-index: -1; /* set element behind*/
}
```

- 가상 요소(Pseudo-element) 중 하나로, 선택한 요소 앞에 스타일을 추가할 때 사용
- content 속성은 필수
- DOM에 실제 요소가 추가되는 것이 아니라 스타일링만 적용됨.

### 3. `:focus`

```css
/* when the button is clicked */
.btn:focus {
  outline: 0; /* Removes the default foucus outline */
}
```

- 가상 클래스(Pseudo-class) 중 하나로, 사용자가 요소를 클릭하거나 키보드로 선택했을 때 적용되는 스타일
- `input`, `button`, `a` 요소에서 많이 사용됨.
- 기본 동작 : outline 표시

### 4. `:disabled`

```html
<button class="btn" id="prev" disabled>Prev</button>
<button class="btn" id="next">Next</button>
```

```css
/* when the button has disabled property */
.btn:disabled {
  background-color: var(--line-border-empty);
  cursor: not-allowed; /* it indicates the btn is not clickable */
}
```

- 비활성화된 HTML 요소에 적용되는 CSS 가상 클래스
- 위의 경우 `cursor: not-allowed;`로 마우스 포인터가 🚫 금지 모양으로 변경됨.

### 5. `style` property

```javascript
progress.style.width =
  ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
```

- element.style은 해당 요소의 인라인 스타일을 직접 조작할 수 있는 프로퍼티
- 동적으로 요소 스타일 변경 가능

### 6. JS code

```javascript
// 1. HTML 요소 가져오기
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

// 현재 활성화된 단계 추적
let currentActive = 1;

// next 버튼 클릭시 다음 단계로 이동
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

// prev 버튼 클릭시 다음 단계로 이동
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

// DOM 조작
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  // prgress bar 업데이트
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // 버튼 활성화 / 비활성화
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
```
