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
