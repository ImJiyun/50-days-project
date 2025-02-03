const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  // toggle = adds the class if it's not present, removes it if it is
  search.classList.toggle("active");
  input.focus();
});
