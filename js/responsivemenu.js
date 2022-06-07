const menuIcon = document.querySelector('.menu-icon');
const listItems = document.querySelector('menu .navbar ul')

menuIcon.addEventListener('click', function() {

    let menu = document.querySelector('menu .right')
        // if (menu.style.display === 'flex') {
        //     menu.style.display = 'none'
        // } else {
        //     menu.style.display = 'flex'
        // }
    listItems.classList.toggle('show')
    menu.classList.toggle('show')


})