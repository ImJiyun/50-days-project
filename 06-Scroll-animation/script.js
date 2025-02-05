const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  // where is the trigger point?
  const triggerBottom = (window.innerHeight / 5) * 4;
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
