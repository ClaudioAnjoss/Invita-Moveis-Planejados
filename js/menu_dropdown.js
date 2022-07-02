let dropdown = document.querySelector('.bg-menu-responsive');

dropdown.addEventListener('click', () => {
    dropdown.innerHTML = '<i class="fa-solid fa-caret-up"></i>'

    if(dropdown.className == 'nav-link bg-menu-responsive show') {
        dropdown.innerHTML = '<i class="fa-solid fa-caret-down"></i>'
    }
})

dropdown.addEventListener('focusout', () => {
    dropdown.innerHTML = '<i class="fa-solid fa-caret-down"></i>'
})