// - створити функцію яка обчислює та повертає площу прямокутника висотою
// function sq (a, b) {
//     let result = a*b;
//     return result;
// }
// let result = sq (4,5);
// console.log(result);

// - створити функцію яка обчислює та повертає площу кола
// function rad (r) {
//     let result = (Math.PI*r**2);
//     return result;
//
// }
// let f = rad (5);
// console.log(f);
// let f1 = rad (10);
// console.log(f1);

// // - створити функцію яка обчислює та повертає площу циліндру
// function sc (r, h){
//     let result = 2*Math.PI*r**2+2*Math.PI*r*h;
//     return result;
// }
// let sc1 = sc (67, 25);
// console.log(sc1);
//
// // - створити функцію яка приймає масив та виводить кожен його елемент



// function  m (lol) {
//     for (const lil of lol){
//         console.log(lil);
//     }
//     console.log(lol);
// }
//
// m([1 ,3 ,4, 5,6,7,7])



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function  paragraph (arg) {
//     document.write(`<p> ${arg} </p>`);
// }
//
// paragraph ('hi')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function paragraph2 (arg){
//     document.write(`<ul>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`</ul>`)
// }
//
// paragraph2('celebration')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function paragraph2 (word, calc){
//     document.write(`<ul>`);
//     for (let i = 0; i < calc; i++){
//         document.write(`<li>${word}</li>`);
//     }
//     document.write(`</ul>`)
// }
//
// paragraph2('hello', 300)
//
//
//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mass = [9, true, 'kjnuumi', 258]
//
// function bulmas (turn) {
//     document.write(`<ul>`);
//     for (const tr of turn) {
//         document.write(`<li>${tr}</li>`);
//     }
//     document.write(`</ul>`)
//     console.log(turn);
// }
// bulmas(mass)

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let mas = [
//     {id: 1, name: 'vasya',  age: 20},
//     {id: 2, name: 'petya',  age: 22},
//     {id: 3, name: 'slava',  age: 19},
//     {id: 4, name: 'olya',  age: 17},
// ]
//  function ina (data){
//     for (const fr of data) {
//         document.write(`</br>`)
//         document.write(`<div>${fr.id}</div>`);
//         document.write(`<div>${fr.name}</div>`);
//         document.write(`<div>${fr.age}</div>`);
//         document.write(`</br>`)
//
//     }
//     console.log(data);
//  }
//  ina(mas)