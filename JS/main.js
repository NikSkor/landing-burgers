var hamburgerButton = document.getElementById('hamburger-button')
var hamburgerMenu = document.getElementById('hamburger-menu')
var hamburgerIcon = document.getElementById('hamburger-picture')
var exitButton = document.getElementById('lineblock')
var isOpen = false; 

hamburgerButton.addEventListener ('click', function() {
    
    isOpen = isOpen === true ? false : true
    if (isOpen) {
        hamburgerMenu.classList.add('greeting__menu-active')
        hamburgerIcon.classList.add('hamburger-menu__picture-active')
        exitButton.classList.add('hamburger-menu-lineblock-active')
        
        
    }
    if (!isOpen) {
        hamburgerMenu.classList.remove('greeting__menu-active')
        hamburgerIcon.classList.remove('hamburger-menu__picture-active')
        exitButton.classList.remove('hamburger-menu-lineblock-active')
    }
})

