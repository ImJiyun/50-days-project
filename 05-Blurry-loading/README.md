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