const timeline = document.querySelector('.timeline');
timeline.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})
const volume__line = document.querySelector('.volume__line');
volume__line.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})
const menuIcon = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        menuIcon.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (menuIcon.classList.contains('active')) {
                document.body.classList.remove('lock');
                menuIcon.classList.remove('active');
                menuBody.classList.remove('active');
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}