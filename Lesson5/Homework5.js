// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// ________________________________________
// let sq = ((a, b) => a * b)(30, 1);
// console.log(sq);
// ________________________________________
// let sq = (a, b) => a * b;
//
// console.log(sq(20, 30));

// ________________________________________


//
//     (function (a, b) {
//         let result = a * b;
//         console.log(result)
//     })(4, 5)


// _______________________________________________________________________________________________________________________
// - створити функцію яка обчислює та повертає площу кола
//
// let rad = (r) => Math.PI * r ** 2;
// console.log(rad(3));
// _______________________________________________________________________________________________________________________
// - створити функцію яка обчислює та повертає площу циліндру

// let sc = (r, h) => 2 * Math.PI * r ** 2 + 2 * Math.PI * r * h;
//
// console.log(sc(5, 4));
// _______________________________________________________________________________________________________________________
// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let m = (...mas) => {
//     console.log(...mas);
// }
// m(1, 2, 3, 4)
// _______________________________________________________________________________________________________________________
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//
// let paragraph = (arg) => document.write(`<p> ${arg} </p>`);
//
// paragraph('Vetal')
// _______________________________________________________________________________________________________________________
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//

// let paragraph2 = (arg) => {
//     document.write(`<ul>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`</ul>`);
// };
//
// paragraph2('good');

// _______________________________________________________________________________________________________________________
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let paragraph2 = (word, calc) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < calc; i++) {
//         document.write(`<li>${word}</li>`);
//     }
//     document.write(`</ul>`)
// }
//
// paragraph2('hello', 10)
// _______________________________________________________________________________________________________________________

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// (function bulmas (turn) {
//     document.write(`<ul>`);
//     for (const tr of turn) {
//         document.write(`<li>${tr}</li>`);
//     }
//     document.write(`</ul>`)
//     console.log(turn);
// }) ([9, true, 'kjnuumi', 258])
//
// ______________________________________________________________________________________________________________________
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//  (function ina (data){
//     for (const fr of data) {
//         document.write(`</br>`)
//         document.write(`<div>${fr.id}</div>`);
//         document.write(`<div>${fr.name}</div>`);
//         document.write(`<div>${fr.age}</div>`);
//         document.write(`</br>`)
//
//     }
//     console.log(data);
//  })([
//     {id: 1, name: 'vasya',  age: 20},
//     {id: 2, name: 'petya',  age: 22},
//     {id: 3, name: 'slava',  age: 19},
//     {id: 4, name: 'olya',  age: 17},
// ])

