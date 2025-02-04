## [TIL] FEB 4 2025

### GOAL : Blurry Loading 구현

### 1. CSS

```css
.bg {
  background: url("https://images.unsplash.com/photo-1616321741705-e9a4073af35c?q=80&w=792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    no-repeat center center/cover;
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  z-index: -1;
  filter: blur(0px);
}
```

- `background : url("url") 반복 위치/크기`
  - 반복
    - `no-repeat` : 이미지를 한 번만 표시
    - `repeat` : 요소를 가득 채우도록 이미지 반복 (기본값)
  - 위치
    - x축 방향 정렬 / y축 방향 정렬
    - `center center` : 화면 정중앙 배치
    - `left top` : 좌측 상단 배치
  - 크기
    - `cover` : 요소의 너비와 높이에 맞게 배경 비율 유지 (이미지가 잘릴 수 있음)
    - `contain` : 이미지의 비율을 유지하면서 전체가 보이도록 조정
- `filter: blur()` : 요소에 흐림 효과 추가

### 2. JS Code

```javascript
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30); // 30 milliseconds

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int); // stop the interval
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
```

### `innerText`

- HTMl 태그를 제외하고 텍스트 반환
- 렌더링된 텍스트만 반환 (적용된 css 속성이 `display: none`인 경우 반환되지 않음)
- 텍스트 변경 가능

### `textContent`

- HTMl 태그를 제외하고 텍스트 반환
- 숨겨진 텍스트도 반환 (`display: none`이 적용된 요소도 반환됨)
- 텍스트 변경 가능

### `innerHTML`

- HTML 태그 포함하여 반환
- 텍스트 변경 가능 (HTML 태그 적용 가능)

### `setInterval()`
- 일정한 시간 간격마다 지정한 함수를 반복 실행
- `clearInterval()`을 이용해 중지
- `setTImeout()`과 차이점 : `setTImeout()`은 한 번만 실행하고 끝나는 반면, `setInterval()`은 특정 시간마다 반복 실행됨.