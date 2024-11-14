(function () {
    window.addEventListener('load', () => {
        const loadTime = (performance.now() / 1000).toFixed(3);
        const loadTimeElement = document.getElementById('load-time');
        if (loadTimeElement) {
            loadTimeElement.textContent = `Время загрузки: ${loadTime} секунд`;
        }
    });

})();
