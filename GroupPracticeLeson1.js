// Функція для визначення типу змінної:
// Написати функцію для визначення типу змінної.
// Функція отримує будь-яке значення в якості аргументу
// і визначає тип цієї змінної. Виводить в консоль
// повідомлення `Тип змінної: type`

function value(x) {
    return `Тип змінної: ${typeof(x)}`;
}
console.log(value(5));



console.log('/////////////TASK 2////////////////')
// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевір, що другим символом цього рядка є літера 'b'.
// Якщо так - виведи 'Так' у консоль, в противному випадку виведи 'Ні'.

let text = 'abcde';
console.log(text[1] === 'b') ? true : false;

console.log('/////////////TASK 3////////////////')
// Напишіть функцію, яка приймає аргумент і визначає його тип даних.
// Якщо тип - строка, функція повертає "string", якщо число - "number",
// в іншому випадку - "unknown".

function typeValue(value) {
    if (typeof value === "string") {
        return "string";
    } else if (typeof value === "number") {
        return "number";   
    } else {
        return "unknown";
    }
}
console.log(typeValue('str'));

console.log('/////////////TASK 4////////////////')
// Оголоси функцію hasDiscount(age, isStudent, isPensioner),
// яка перевіряє, чи покупець має право на знижку.
// І повертає true - якщо має право на знижку і false, якщо - ні.
// Покупець має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік покупця;
// isStudent - буль (вказує чи є покупець студентом);
// isPensioner - буль  (вказує чи є покупець пенсіонером);


function hasDiscount(age, isStudent, isPensioner) {
    return (age >= 12 && age <= 18) || isStudent || isPensioner; 
}
console.log(hasDiscount(22, true, false));

console.log('/////////////TASK 5////////////////')

// Оголоси функцію canRegisterOnSite(age, hasAcceptedTerms),
// яка перевіряє, чи може користувач зареєструватись на сайті.
// І повертає true - якщо може зареєструватись і false, якщо - ні.
// Користувач може зареєструватись, якщо йому виповнилося 13 років
// і він прийняв умови використання.
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача;
// hasAcceptedTerms - буль (вказує чи прийняв користувач умови використання);

function canRegisterOnSite(age, hasAcceptedTerms) {
    if (age >= 13 && hasAcceptedTerms) {
        return true;
    } else {
        return false
    }
}

console.log(canRegisterOnSite(21, true));


console.log('/////////////TASK 6////////////////')

// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

function checkString(value) {
    if (typeof value === "string" && !value.includes("$")) {
        return `Довжина рядяка - ${value.length} символів`;
    }
    else {
        return "Некорректне введення данних"
    }
}
console.log(checkString("samarkandауцауцу"));
console.log(checkString("samar$kandауцауцу"));
console.log(checkString(5));


console.log('/////////////TASK 7////////////////')
// Оголоси функцію calculateSquare(value).
// Функція має перевіряти чи є отримане значення - число
// або за можливості перетворити рядок на число
// Якщо це число функція возводить число у квадрат і виводить рядок
// `The square of ${numberValue} is ${squaredNumber}`
// numberValue - отримане число або перетворене з рядка число.
// squaredNumber - numberValue у квадраті.
// Якщо значення не є числом, функція повертає рядок 'Invalid input!'.

console.log('/////////////TASK 8////////////////')

//Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
const max = 50;
const min = 23;

for (let i = max; i >= min; i --) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        console.log(`Не парні числа ${i}`);
    }
}

console.log('/////////////TASK 9////////////////')
// За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
const maxX = 50;
const minN = 0;
let total = 0;
for (i = minN; i <= maxX; i+=1) {
    if (i % 2 === 0) {
        total += i;
    }
}
console.log(total)
 

console.log('/////////////TASK 9////////////////')

// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"

function formatMinutesToTime(minutes) {
    let hours = Math.floor(minutes / 60);
    const modHours = String(hours).padStart(2, 0);
    const modMin = String(minutes % 60).padStart(2, 0);
    return `${modHours}:${modMin}`
}
console.log(formatMinutesToTime(70));
