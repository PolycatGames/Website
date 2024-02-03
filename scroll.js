document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.scroll-animation');

    function checkScroll() {
        animatedElements.forEach((element) => {
            let scrollPos = window.scrollY + window.innerHeight;
            let elementTop = element.offsetTop;
            let elementBottom = elementTop + element.offsetHeight;

            // Check if the top or bottom of the element is within the viewport
            if ((elementBottom > window.scrollY) && (elementTop < scrollPos)) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
                element.opacity = 0;
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load in case elements are already in view
});
