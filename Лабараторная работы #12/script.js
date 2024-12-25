//example 1
// Создаем исходный массив чисел
const arr = [1, 2, 3];
// Применяем метод map для создания нового массива, где каждый элемент преобразуется по формуле (элемент + 10) * 3
const newArr = arr.map(item => (item + 10) * 3);
// Выводим результат: [33, 36, 39]
console.log(newArr); 

//example 2
// Массив с годами рождения
const year = [2006, 2002, 2015];
// Используем map для вычисления возраста каждого человека
// Получаем текущий год и вычитаем год рождения
const age = year.map(year => new Date().getFullYear() - year);
console.log(age);

//example 3
// Массив объектов, содержащий информацию о людях
const persons = [
    {name: 'Nikolay', age: 18, isAdmin: false },
    {name: 'Ivan', age: 18, isAdmin: false },
    {name: 'Nikolay2', age: 18, isAdmin: true },
    {name: 'Buber', age: 55, isAdmin: true },
    {name: 'Mails', age: 49, isAdmin: true }
];
// Используем filter для создания нового массива, содержащего только совершеннолетних людей
const fullage = persons.filter(person => person.age >= 18);
console.log(fullage);

//example 4
// Массив объектов с информацией о студентах и их оценках
const students = [
    { name: 'Исмаил', scores: [2, 4, 2] },
    { name: 'Коля', scores: [4, 2, 4] },
    { name: 'Буберчик', scores: [5, 3, 5] }
];

// Используем map для создания массива средних оценок
const averageScores = students.map(student => {
    // Используем reduce для суммирования всех оценок студента
    // Начальное значение аккумулятора (sum) равно 0
    const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
    // Делим сумму оценок на количество оценок для получения среднего значения
    return totalScore / student.scores.length;
});
console.log(averageScores);

//example 5
// Массив строк с названиями языков программирования
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

// Создаем собственную функцию, работающую как встроенный метод map
function mapForEach(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        // Добавляем в новый массив результат применения функции fn к каждому элементу
        newArray.push(
            fn(arr[i])
        );
    }
    return newArray;
}

// Создаем функцию, которая проверяет длину строки
const lenArray = mapForEach(strArray, function(item) {
    // Используем тернарный оператор:
    // Если длина строки <= 3, возвращаем 0
    // В противном случае возвращаем 1
    return item.length <= 3 ? 0 : 1;
});

// Выводим результат: [1, 1, 0, 1, 0]
// 1 - для строк длиннее 3 символов (JavaScript, Python, Java)
// 0 - для строк длиной 3 символа или меньше (PHP, C)
console.log(lenArray);