document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    const nav = document.getElementById('nav');

    const updateDisplay = () => {
        if (window.innerWidth > 480) {
            menu.style.display = 'none';
            close.style.display = 'none';
            nav.style.display = 'block';
        } else {
            menu.style.display = 'block';
            close.style.display = 'none';
            nav.style.display = 'none';
        }
    };

    updateDisplay(); // set initial state

    menu.addEventListener('click', () => {
        nav.style.display = 'block';
        menu.style.display = 'none';
        close.style.display = 'block';
    });

    close.addEventListener('click', () => {
        nav.style.display = 'none';
        menu.style.display = 'block';
        close.style.display = 'none';
    });

    window.addEventListener('resize', updateDisplay); // update UI on resize
});
