// Задание 1: Базовые инструменты
// Напишите стрелочную функцию getMax(a, b), которая возвращает большее из двух чисел.
// Напишите функцию clamp(value, min, max), которая "зажимает" число в указанный диапазон:
// Если value меньше min → вернуть min.
// Если value больше max → вернуть max.
// Если внутри диапазона → вернуть value.
// clamp(15, 0, 10) → 10
// clamp(-5, 0, 10) → 0

// const getMax = (a, b) => (a > b ? a : b);

// function clamp(value, min, max) {
//   if (value < min) {
//     return min;
//   } else if (value > max) {
//     return max;
//   } else return value;
// }

// Задание 2: Гибкие параметры (Default Values)
// Напишите функцию formatPrice(price, currency = "₽", decimals = 2),
// которая возвращает красиво отформатированную строку цены.

// Используйте метод .toFixed(decimals) для округления.
// formatPrice(1500) → "1500.00 ₽"
// formatPrice(29.9, "$") → "29.90 $"
// formatPrice(100, "€", 0) → "100 €"

// function formatPrice(price, currency = '₽', decimals = 2) {
//   const prices = price.toFixed(decimals);
//   return prices + ' ' + currency;
// }

// console.log(formatPrice(1500)); // "1500.00 ₽"
// console.log(formatPrice(29.9, '$')); // "29.90 $"
// console.log(formatPrice(100, '€', 0)); // "100 €"

// Задание 3: Магия Rest и Spread
// Напишите функцию average(...numbers), которая принимает любое количество аргументов
// и возвращает их среднее арифметическое.
// average(10, 20, 30) → 20
// Используя оператор spread (...), объедините два объекта настроек.
// Значения из userStyle должны перекрывать значения из styleDefaults.
const styleDefaults = { color: 'black', size: 14, bold: false };
const userStyle = { color: 'blue', bold: true };

// Ваш код:
// const mergedStyle = { ... };
