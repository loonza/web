document.getElementById('service-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Перехватываем отправку формы

    const serviceName = document.getElementById('service-name').value;
    const rentalPeriod = document.getElementById('rental-period').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const description = document.getElementById('description').value;

    const container = document.getElementById('table-container');

    container.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('generated-table');

    const headerRow = document.createElement('tr');
    ['Название услуги', 'Срок аренды', 'Номер телефона', 'Описание'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    const dataRow = document.createElement('tr');
    [serviceName, rentalPeriod, phoneNumber, description].forEach(text => {
        const td = document.createElement('td');
        td.textContent = text;
        dataRow.appendChild(td);
    });
    table.appendChild(dataRow);

    container.appendChild(table);
});


document.getElementById('save-params').addEventListener('click', function() {
    const serviceName = document.getElementById('service-name').value;
    const rentalPeriod = document.getElementById('rental-period').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const description = document.getElementById('description').value;

    const params = { serviceName, rentalPeriod, phoneNumber, description };
    localStorage.setItem('serviceParams', JSON.stringify(params));
    alert('Параметры сохранены!');
});


document.getElementById('load-params').addEventListener('click', function() {
    const params = JSON.parse(localStorage.getItem('serviceParams'));
    if (params) {
        document.getElementById('service-name').value = params.serviceName;
        document.getElementById('rental-period').value = params.rentalPeriod;
        document.getElementById('phone-number').value = params.phoneNumber;
        document.getElementById('description').value = params.description;
        alert('Параметры загружены!');
    } else {
        alert('Нет сохраненных параметров!');
    }
});
