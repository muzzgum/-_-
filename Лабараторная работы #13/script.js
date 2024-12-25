// Пример 1: Создание объектов с помощью фабричной функции
const Info = Symbol('displayInfo');

/**
 * Создает объект персоны с указанным именем и возрастом
 * @param {string} name - Имя персоны
 * @param {number} age - Возраст персоны
 * @returns {Object} Объект с свойствами name и age
 */
const createPerson = (name, age) => {
    return {
        name: name,
        age: age
    };
};

// Создаем различные объекты персон для разных целей
const bankClient = createPerson("Иван", 30);    // Клиент банка
const clinicWorker = createPerson("Мария", 28); // Работник клиники
const citizen = createPerson("Алексей", 35);    // Гражданин

// Выводим информацию о каждой персоне
console.log(bankClient.name, bankClient.age);
console.log(clinicWorker.name, clinicWorker.age);
console.log(citizen.name, citizen.age);


// Пример 2: Использование switch для проверки введенного числа
/**
 * Запрашиваем у пользователя число и преобразуем строку в число
 * с помощью унарного оператора +
 */
const number = +prompt('Загадайте цифру до 9', '');

// Проверяем введенное число и выводим соответствующее сообщение
switch (number) {
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
        console.log('Вы ввели число 2');
        break;
    case 3:
        console.log('Вы ввели число 3');
        break;
    case 4:
        console.log('Вы ввели число 4');
        break;
    case 5:
        console.log('Вы ввели число 5');
        break;
    case 6:
        console.log('Вы ввели число 6');
        break;
    case 7:
        console.log('Вы ввели число 7');
        break;
    case 8:
    case 9: // Объединенные случаи для 8 и 9
        console.log('Вы ввели число 8, а может и 9');
        break;
    default: // Если введено что-то другое
        console.log('Значение не соответствует верному');
}

// Пример 3: Определение четверти часа
/**
 * Запрашиваем у пользователя минуты (0-59)
 * и определяем, к какой четверти часа они относятся
 */
let min = +prompt('Введите число от 0 до 59', '');

// Используем switch(true) для проверки диапазонов
switch (true) {
    case (min >= 0 && min < 15):
        console.log("Первая четверть часа");
        break;
    case (min >= 15 && min < 30):
        console.log("Вторая четверть часа");
        break;
    case (min >= 30 && min < 45):
        console.log("Третья четверть часа");
        break;
    case (min >= 45 && min < 60):
        console.log("Четвертая четверть часа");
        break;
    default:
        console.log("Значение не соответствует верному");
}

// Пример 4: Проверка первой цифры введенной строки
/**
 * Запрашиваем у пользователя строки с цифрами
 * и проверяем первый символ первой строки
 */
let str = prompt('Введите любые цифры', '');
let phoneNumber = prompt('Введите некоторое количество цифр', '');

// Проверяем первый символ строки с помощью charAt(0)
switch (str.charAt(0)) {
    case '1':
    case '2':
    case '3':
        console.log('Первая цифра 1, 2 или 3');
        break;
    default:
        console.log('нет');
}