var hamburgerButton = document.getElementById('hamburger-button')
var hamburgerMenu = document.getElementById('hamburger-menu')
var isOpen = false; 

hamburgerButton.addEventListener ('click', function() {
    
    isOpen = isOpen === true ? false : true
    if (isOpen) {
        hamburgerMenu.classList.add('greeting__menu-active')
    }
    if (!isOpen) {
        hamburgerMenu.classList.remove('greeting__menu-active')
    }
})
