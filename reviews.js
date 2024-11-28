document.addEventListener('DOMContentLoaded', function () {
    const apiContainer = document.getElementById('api-content');
    const preloader = document.getElementById('preloader');


    function fetchReviews() {
        return new Promise((resolve, reject) => {

            preloader.classList.remove('hidden');


            const random = Math.random();
            const filter = random > 0.5 ? '?id_gte=100' : '?id_lte=200';


            fetch(`https://jsonplaceholder.typicode.com/comments${filter}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Ошибка сети');
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }


    function renderReviews(data) {
        apiContainer.innerHTML = '';
        const table = document.createElement('table');
        table.classList.add('tariff-table');


        const headerRow = document.createElement('tr');
        ['Автор', 'Email', 'Отзыв'].forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);


        data.forEach(item => {
            const row = document.createElement('tr');
            const authorCell = document.createElement('td');
            const emailCell = document.createElement('td');
            const bodyCell = document.createElement('td');

            authorCell.textContent = item.name;
            emailCell.textContent = item.email;
            bodyCell.textContent = item.body;

            row.appendChild(authorCell);
            row.appendChild(emailCell);
            row.appendChild(bodyCell);

            table.appendChild(row);
        });

        apiContainer.appendChild(table);
    }


    fetchReviews()
        .then(data => {
            preloader.classList.add('hidden');
            renderReviews(data);
        })
        .catch(error => {
            preloader.classList.add('hidden');
            apiContainer.innerHTML = `<div id="error-message">⚠ Что-то пошло не так. Попробуйте ещё раз позже.</div>`;
            console.error(error);
        });
});
