document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuButton = document.querySelector('.mobile-menu-button');
    var nav = document.querySelector('nav');

    mobileMenuButton.addEventListener('click', function () {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});