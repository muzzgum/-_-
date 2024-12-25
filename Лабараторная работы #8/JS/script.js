/**
 * Генерирует случайное целое число в заданном диапазоне
 * @param {number} min - Минимальное значение
 * @param {number} max - Максимальное значение
 * @returns {number} Случайное целое число
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Инициализация массива случайными числами
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(getRandomInt(-10, 30));
}

// Создаем неизменяемую копию исходного массива
const originalNumbers = [...randomNumbers];

/**
 * Обработчики событий для кнопок
 */

// Показать исходный массив
document.getElementById('showOriginalButton').addEventListener('click', () => {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Исходный массив: [${originalNumbers.join(', ')}]`;
});

// Преобразование отрицательных чисел
document.getElementById('transformButton').addEventListener('click', () => {
    randomNumbers = randomNumbers.map(num => {
        if (num < 0) {
            return num * num; // Возводим отрицательные числа в квадрат
        }
        return num;
    });
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Преобразованный массив: [${randomNumbers.join(', ')}]`;
});

// Вычисление среднего значения положительных чисел
document.getElementById('averagePositiveButton').addEventListener('click', () => {
    const positiveNumbers = randomNumbers.filter(num => num > 0);
    const average = positiveNumbers.reduce((sum, num) => sum + num, 0) / positiveNumbers.length;
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Среднее значение положительных чисел: ${average.toFixed(2)}`;
});

/**
 * Симулирует выпадение цветов с подсчетом статистики
 * Выполняет 1,000,000 итераций
 */
function simulateColors() {
    const results = { 
        red: 0,   // Счетчик для красного
        black: 0, // Счетчик для черного
        white: 0  // Счетчик для белого
    };
    
    // Проводим симуляцию
    for (let i = 0; i < 1000000; i++) {
        const randomValue = Math.floor(Math.random() * 3);
        if (randomValue === 0) results.red++;
        else if (randomValue === 1) results.black++;
        else if (randomValue === 2) results.white++;
    }
    
    // Выводим результаты
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        Результаты симуляции:<br>
        Красный: ${results.red} раз (${(results.red/10000).toFixed(2)}%)<br>
        Черный: ${results.black} раз (${(results.black/10000).toFixed(2)}%)<br>
        Белый: ${results.white} раз (${(results.white/10000).toFixed(2)}%)
    `;
}

// Запуск симуляции при нажатии на кнопку
document.getElementById('simulateButton').addEventListener('click', simulateColors);