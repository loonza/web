(function () {
    window.addEventListener('load', () => {
        // Display page load time
        const loadTime = (performance.now() / 1000).toFixed(3);
        const loadTimeElement = document.getElementById('load-time');
        if (loadTimeElement) {
            loadTimeElement.textContent = `Время загрузки: ${loadTime} секунд`;
        }

        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    });
})();