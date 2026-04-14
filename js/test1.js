// Задание 1
//Легендарный FizzBuzz
// Выведите в консоль числа от 1 до 30. Но соблюдайте правила:

// Если число делится на 3 без остатка → выведите "Fizz".
// Если число делится на 5 без остатка → выведите "Buzz".
// Если число делится и на 3, и на 5 → выведите "FizzBuzz".
// В остальных случаях выводите само число.

for (let i = 1; i < 30; i++) {
  if (i % 3 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else console.log(i);
}

// Задание 2
// Сумматор (Цикл While)
// Используя цикл while, вычислите сумму всех целых чисел от 1 до 100 включительно.
// Выведите итоговый результат в консоль.
// (Подсказка: итоговая сумма должна быть 5050)

sum = 0;
i = 1;

while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);

// Задание 3: Прогноз погоды (for...of)
// Дан массив температур за неделю. Используя цикл for...of,
// найдите самое высокое значение (максимум) и самое низкое (минимум).

const temperatures = [22, 25, 19, 30, 28, 15, 23];

let max = temperatures[0];
let min = temperatures[0];

for (const temperat of temperatures) {
  if (temperat > max) {
    max = temperat;
  }
  if (temperat < min) {
    min = temperat;
  }
}

console.log(max);
console.log(min);

// Задание 4: Нумерованный список (entries)
// Дан массив имён. Используя цикл for...of и метод массива .entries(), выведите список в формате:
// "1. Алексей"
// "2. Мария"
// и так далее.

const names = ['Алексей', 'Мария', 'Иван', 'Елена'];

for (let [index, value] of names.entries()) {
  console.log(index + 1, value);
}

// Задание 5: Фильтр данных (for...in)
// Дан объект профиля пользователя. Используя цикл for...in,
// выведите в консоль только те свойства (ключи и значения), тип которых — string.

const profile = {
  name: 'Анна',
  role: 'Admin',
  age: 28,
  city: 'Киев',
  isActive: true,
  email: 'anna@example.com',
};

for (let key in profile) {
  if (typeof profile[key] === 'string') {
    console.log(key, profile[key]);
  }
}

// Задание 6: Побег из лабиринта (Метки и break)
// Найдите первую пару чисел (i, j) в диапазоне от 1 до 10 каждое, произведение которых равно 42.
// Требование: Как только пара найдена, нужно немедленно выйти из обоих вложенных циклов,
// используя метку (label).

outer: for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    sum = i * j;
    if (sum === 42) {
      console.log(sum);
      break outer; // Прерывает ВНЕШНИЙ цикл!
    }
  }
}

// Задание 7: Таблица умножения
// Выведите в консоль таблицу умножения для числа 7 (от 1 до 9) в красивом формате:
// "7 x 1 = 7"
// "7 x 2 = 14"

const seven = 7;

for (let i = 1; i <= 9; i++) {
  let sum = seven * i;
  console.log(`${seven} x ${i} = ${sum}`);
}
