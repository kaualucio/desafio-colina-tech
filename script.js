const allSections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('header nav ul a')
const menuHamburguer = document.querySelector('button#menu-hamburguer')
const menuMobile = document.querySelector('div.mobile-nav > nav')

let isOpen = !!menuHamburguer.getAttribute('value')

navLinks.forEach(element => {
  element.addEventListener('click',() => {
    navLinks.forEach(el => {
      el.classList.remove('active')
    }); 
    element.classList.add('active')
  })
}); 

menuHamburguer.addEventListener('click', () => {
  if(isOpen) {
    menuMobile.classList.remove('hidden')
    menuMobile.classList.add('flex')
    isOpen = false
  } else {
    menuMobile.classList.remove('flex')
    menuMobile.classList.add('hidden')
    isOpen = true
  }
})

