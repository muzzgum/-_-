// Задание 3: Проверка фамилии на палиндром
// Палиндром - это слово, которое читается одинаково слева направо и справа налево
// Например: "казак", "шалаш", "топот"
const isPalindrome = (surname) => {
    // split('') - разбивает строку на массив символов
    // reverse() - переворачивает массив
    // join('') - соединяет массив обратно в строку
    const reversed = surname.split('').reverse().join('');
    return surname === reversed;
};

// Получаем элемент ввода фамилии из HTML по id
const userSurname = document.getElementById('name');

// Проверяем введенную фамилию на палиндром и выводим результат
if (isPalindrome(userSurname)) {
    console.log(`${userSurname} полиндром`);
} else {
    console.log(`${userSurname} не полиндром`);
}

// Задание 4: Вычисление среднего арифметического значения
// Функция принимает массив чисел и возвращает их среднее значение
const average = (arr) => {
    // reduce используется для суммирования всех элементов массива
    // (sum, num) => sum + num - функция для сложения текущего элемента с суммой
    // 0 - начальное значение суммы
    const total = arr.reduce((sum, num) => sum + num, 0);
    return total / arr.length; // делим сумму на количество элементов
};

// Запрашиваем у пользователя ввод чисел через prompt
let userInputNumbers = prompt('Введите числа для вычисления среднего значения (без запятых и пробелов):');
// Преобразуем строку в массив чисел
let numbersArray = Array.from(userInputNumbers).map(Number);

// Проверяем, что массив не пустой
if (numbersArray.length > 0) {
    console.log(`Среднее значение: ${average(numbersArray)}`);
} else {
    console.log('Вы не ввели ни одного числа.');
}

// Задание 5: Расчет дней до Нового года
const daysUntilNewYear = () => {
    const today = new Date(); // Текущая дата
    // Создаем дату следующего Нового года (1 января следующего года)
    const nextYear = new Date(today.getFullYear() + 1, 0, 1);
    const diffTime = nextYear - today; // Разница в миллисекундах
    // Переводим миллисекунды в дни и округляем вверх
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(`до нг осталось: ${days}`);
    return days;
};

// Задание 6: Пустая функция
// Демонстрация функции, которая ничего не делает и возвращает undefined
const emptyFunction = () => {};
console.log(emptyFunction());

// Задание 7: Операции с массивом чисел
// Запрашиваем числа у пользователя
let userInput = prompt('Введите числа для создания массива (без пробелов и запятых):');
const numbers = Array.from(userInput).map(Number);

// Функция для суммирования всех элементов массива
const sumAll = (arr) => arr.reduce((sum, num) => sum + num, 0);

// Функция для фильтрации четных чисел
const chetnye = (arr) => arr.filter(num => num % 2 === 0);

// Функция для умножения каждого элемента массива на 2
const quadratchisla = (arr) => arr.map(num => num * 2);

// Выводим результаты всех операций
console.log(sumAll(numbers));    // Сумма всех чисел
console.log(chetnye(numbers));   // Массив четных чисел
console.log(quadratchisla(numbers)); // Массив чисел, умноженных на 2

// Задание 8: Фильтрация email адресов
// Запрашиваем строку для поиска в email адресах
let userEmail = prompt('Введите адрес электронной почты для фильтрации:');

// Массив с примерами email адресов
const emails = ['admin@gmail.com', 'user@yandex.ru', 'test@hotmail.com'];

// Функция фильтрации email адресов
// Возвращает массив адресов, которые содержат введенную пользователем строку
const filterEmails = (email) => emails.filter(e => e.includes(email));

// Выводим отфильтрованные email адреса
console.log(filterEmails(userEmail));
