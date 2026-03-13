// поинт 1.1
const BIRTH_YEAR = 2006; //нельзя поменять в дальнейшем эту переменнную

//поинт 1.2
let currentCity = 'Харьков';
currentCity = 'Токио';
console.log(currentCity); // будет Токио посколку мы поменяли значение в переменной

// поинт 2.1
let fruit = 'Яблоко';
{
  let fruit = 'Банан';
  console.log('Внутри блока:', fruit); // Что выведет? -> будет Внутри блока: Баннан
}
console.log('Снаружи блока:', fruit); // А здесь? -> будет Снаружи блока: Яблоко

// point 2.2
{
  console.log(animal); // Что будет: undefined, ошибка или "Кот"? -> undefined
  var animal = 'Кот';
}

// point 3
const user = { name: 'Иван' };
user.name = 'Пётр'; // Сработает ли это? -> да
console.log(user.name);

// user = { name: 'Сергей' }; // А это? Попробуйте разкомментировать и проверить. -> будет ошибка

// point 4
//Какие из этих названий переменных вызовут ошибку? Исправьте неправильные названия:

//let 1stPlace = "Winner"; // failed
//let my-variable = 10; // failed
let _secret = 'top'; // passed
let name$Price = 99; // passed
//let function = "test"; (используется как имя) // failed

// point 5
// Eсть две переменные с данными:
const number = {
  a: 5,
  b: 10,
};

a = 10;
b = 5;
console.log(a, b);
// Поменяйте их значения местами так, чтобы в a стало 10, а в b — 5.
// Условие: Не используйте временную переменную temp.
// Подсказка: Вспомните про деструктуризацию: [a, b] = [b, a].

//-------------------------------------------------------------------------------
// point 1
console.log(typeof 'Hello'); // Ответ: ? -> str
console.log(typeof 42); // Ответ: ? -> num
console.log(typeof true); // Ответ: ? -> bool
console.log(typeof undefined); // Ответ: ? -> undefined
console.log(typeof null); // Ответ: ? (Внимание, ловушка!) -> object (историческая шляпа)
console.log(typeof [1, 2, 3]); // Ответ: ? -> object
console.log(typeof { a: 1 }); // Ответ: ? -> object
console.log(typeof function () {}); // Ответ: ? -> function

// point 2 - idk, how is it works: ${}
let = product;
let = price;
let = quantity;

console.log('product ${}');

// point 3
//Предскажите, какое логическое значение (true или false)
//вернет каждое выражение, если его обернуть в Boolean():

// 0 → ? -> false
// "" (пустая строка) → ? -> false
// "0" (строка с нулем) → ? -> true
// " " (строка с пробелом) → ? -> false // но будет странно если пробел будет считаться
// [] (пустой массив) → ? -> true
// null → ? -> false
// undefined → ? -> false
// -1 → ? -> true
// NaN → ? -> false

// point 4
console.log('5' + 3); // Результат: 53, склейка строк
console.log('5' - 3); // Результат: 2
console.log('5' * '2'); // Результат: 10
console.log(true + true); // Результат: 2, узнал чет новое
console.log('' + 1 + 0); // Результат: 10
console.log('' - 1 + 0); // Результат: -1
console.log(null + 1); // Результат: 1, null = 0, чет новое
console.log(undefined + 1); // Результат: NaN, вообще тут был хз но узнал это потом

// point 5
// Выполните следующие шаги и выведите результат каждого в консоль:

// Очистите строку от лишних пробелов по краям (trim).
// Сделайте все буквы заглавными.
// Проверьте, содержит ли строка подстроку "язык".
// Замените слово "лучший" на "мощный".
// С помощью slice() достаньте из строки только слово "JavaScript".
const sentence = ' JavaScript - лучший язык программирования! ';
console.log(sentence.trim());
console.log(sentence.toUpperCase());
console.log(sentence.includes('язык')); //-> true
console.log(sentence.replace('лучший', 'мощный'));
console.log(sentence.slice(1, 11));

// point 6
console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(NaN === NaN); // false (Сюрприз!), NaN никогда не равен ничему даже самому себе, узнать пришлось
console.log(0 == false); // true
console.log('' == false); // true
