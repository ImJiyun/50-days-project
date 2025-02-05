## [TIL] FEB 5 2025

### GOAL : Scroll Animation 구현

Idea : scroll event 발생 시 홀수 번째 상자는 오른쪽에서 왼쪽으로 이동, 짝수 번째 상자는 왼쪽에서 오른쪽으로 이동 (`transform : translateX` 이용)

### 1. `innerHeight`

- 브라우저 Viewport 높이를 pixel 기준으로 반환하는 속성

### 2. `getBoundingClientRect()`

- HTML 요소의 크기와 위치를 Viewport 기준으로 반환하는 메서드

### JS Code

```javascript
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  // where is the trigger point?
  const triggerBottom = (window.innerHeight / 5) * 4; // 뷰포트의 4/5 지점
  // window.innerHeight : returns the height of the viewport

  boxes.forEach((box) => {
    // getBoundingClientRect : a rectangle that describes the size and position of it
    const boxTop = box.getBoundingClientRect().top; // get the top of a particular box

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
```

- 상자의 윗 부분 높이가 포트의 4/5 지점보다 작으면, `show` class 추가
