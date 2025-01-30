## [TIL] JAN 30 2025

### GOAL : 클릭 시 카드 확장하기

- Idea : 클릭했을 때 특정 카드만 .active style 적용

1. flex property

```css
.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  flex: 0.5; /* determines how much the element takes the space */
  cursor: pointer;
  margin: 10px;
  position: relative;
  transition: flex 0.7s ease-in;
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0; /* make h3 invisible */
}

.panel.active {
  flex: 5;
}
```

`flex: <flex-grow> <flex-shrink> <flex-basis>;`

- flex-grow : 요소가 다른 flex item들에 비해 얼마나 확장될지 결정
  - 값이 5이면 `flex: 1`을 가진 요소들보다 큰 공간을 차지
- flex-shrink : 컨테이너 크기가 줄어들 때 요소가 얼마나 줄어들지 결정
  - 0이면 다른 요소들과 동일한 비율로 줄어듦
  - 1이면 요소가 줄어들지 않음 (기본값 1)
- flex-basis : flex-grow가 적용되기 전 요소의 기본 크기 결정
  - 기본값 0. 요소의 크기가 flex-grow 값에 의해 결정

2. transition

`transition: <property> <duration> <timing-function> <delay>;`
- `property` : 애니메이션을 적용할 CSS 속성 
- `duration` : 전환(transition)이 진행되는 시간
- `timing-function` : 애니메이션 속도를 조절하는 방식.
- `delay` : 애니메이션 시작 전 대기 시간


3. JS code

```javascript
const panels = document.querySelectorAll('.panel'); // put elements into node list

// GOAL : when click events happen, we wanna add a class "active"
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    // classList : gives a list of classes
    console.log(panel.classList);
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
```

- `querySelectorAll` : node list 반환
- `classList` : HTML 요소의 클래스 목록 조작할 수 있는 property
    1. `element.classList.add("className")` : 클래스 추가
    2. `element.classList.remove("className")` : 클래스 제거
    3. `element.classList.toggle("className")` : 클래스 있으면 제거, 없으면 추가
    4. `element.classList.contains("className")` : 특정 클래스 포함 여부 확인 (`true` or `false` 반환)
    5. `element.classList.add("oldClass", "newClass")` : 기존 클래스를 새로운 클래스로 변경 
