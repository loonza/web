(function () {
    window.addEventListener('load', () => {
        const loadTime = (performance.now() / 1000).toFixed(3);
        const loadTimeElement = document.getElementById('load-time');
        if (loadTimeElement) {
            loadTimeElement.textContent = `Время загрузки: ${loadTime} секунд`;
        }
    });

    const menuItems = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();

    menuItems.forEach(item => {
        const itemHref = item.getAttribute('href').split('/').pop();
        if (itemHref === currentPage) {
            item.classList.add('active');
        }

        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover');
        });
    });
})();
