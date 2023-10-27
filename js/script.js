const year = document.querySelector('#year')
year.textContent = new Date().getFullYear()


const userScroll = () => {
    const navbar = document.querySelector('.navbar')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-sticky')
            navbar.classList.add('bg-dark')
        } else {
            navbar.classList.remove('navbar-sticky')
            navbar.classList.remove('bg-dark')
        }
    })
}

document.addEventListener('DOMContentLoaded', userScroll)