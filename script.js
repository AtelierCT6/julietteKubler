window.addEventListener('load', () => {
  let menubtn = document.querySelector(".menupic");
  let closebtn = document.getElementById('close');
  let menucard = document.getElementById('smallmenu')

  menubtn.addEventListener('click', () => {
    menucard.classList.remove('nonactive');
    menucard.classList.add("active");
  })

  closebtn.addEventListener('click', () => {
    menucard.classList.remove('active');
    menucard.classList.add("nonactive");
  })
});