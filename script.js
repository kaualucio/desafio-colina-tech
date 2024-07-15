const allSections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('header nav ul a')


navLinks.forEach(element => {
  element.addEventListener('click',() => {
    navLinks.forEach(el => {
      el.classList.remove('active')
    }); 
    element.classList.add('active')
  })
}); 