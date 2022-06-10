//Добавление задача//

const lists = document.querySelectorAll('.list');

//Функция по добавлению наших элементов списка//
function addTask() {
    const btn = document.querySelector('.add__btn');
    const addBtn = document.querySelector('.add__item-btn');
    const cancelBtn = document.querySelector('.cancel__item-btn');
    const textaria = document.querySelector('.textarea');
    const form = document.querySelector('.form');

    let value; //Будем брать с textarea, помещать в эту переменную и выводить элементом списка


    //на btn вешаем обработчик событий, то что при клике у нас будет вызываться стрелочная функция, где будет открываться наша форма//
    btn.addEventListener('click', () => {
        form.style.display = 'block';
        btn.style.display = 'none';
        addBtn.style.display = 'none';

        textaria.addEventListener('input' , e => {
            value = e.target.value;

            if (value) {
                addBtn.style.display = 'block';
            } else {
                addBtn.style.display = 'none';
            }
        });
    });

    cancelBtn.addEventListener('click', () => {
        textaria.value = '';
        value = '';
        form.style.display = 'none';
        btn.style.display = 'block';

    });

    addBtn.addEventListener('click', () => {
        const newItem = document.createElement('div');
        newItem.classList.add('list__item');
        newItem.draggable = true;
        newItem.textContent = value;
        lists[0].append(newItem);

        textaria.value = '';
        value = '';
        form.style.display = 'none';
        btn.style.display = 'block';
    });
}

addTask ();