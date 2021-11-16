// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let array = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', 'f', true, false ];
//
// for (let i=0; i < array.length; i++) {
//     document.write(`<div> step ${array[i]}</div>`);
// }
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let right = [];
// right[10] = 'kik';
// console.log(right);

//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let d = 0; d<=9; d++){
//     document.write(`<div> steps  </div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let c = 0; c<=9; c++){
//     document.write(`<div> left ${c+1} </div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

//
// let i = 0;
// while (i< 20) {
//     document.write(`<div> <h1> first it is mean first </h1></div>`)
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 1;
// while (i< 21) {
//     document.write(`<div> <h1> first it is mean first ${i} </h1></div>`)
//     i++
// }
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [1, 2, 4, 5, 33, 66, 77, 88, 99, 11];
// for ( number of numbers ) {
//     if ( number % 2 === 0 ) {
//         console.log(number);
//     }
// }
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let letters = ['life','is','the','best','of','the','world','magics'];
// for (letter of letters) {
//     console.log(letter);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let adreses =[
//     {city: 'Kiev', people: 3500,  slary: true},
//     {city: 'NewYork', people: 250,  slary: false},
//     {city: 'London', people: 730,  slary: true},
//     {city: 'Istanbul', people: 3500,  slary: true},
//     {city: 'Brovary', people: 3500,  slary: false},
//     {city: 'Chernigiv', people: 3500,  slary: true},
//     {city: 'Lviv', people: 3500,  slary: true},
//     {city: 'Khrakhov', people: 3500,  slary: false},
//     {city: 'Kharkov', people: 4500,  slary: true},
//     {city: 'Dnepr', people: 3500,  slary: true},
//
// ]
//
// console.log(adreses);
//
// let w=0;
// while (w < adreses.length) {
//     console.log(adreses[w])
//     w++
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let adreses =[
//     {city: 'Kiev', people: 3500,  salary: true},
//     {city: 'NewYork', people: 250,  salary: false},
//     {city: 'London', people: 730,  salary: true},
//     {city: 'Istanbul', people: 3500,  salary: true},
//     {city: 'Brovary', people: 3500,  },
//     {city: 'Chernigiv', people: 3500, },
//     {city: 'Lviv', people: 3500,  salary: true},
//     {city: 'Khrakhov', people: 3500,  salary: false},
//     {city: 'Kharkov', people: 4500,  salary: true},
//     {city: 'Dnepr', people: 3500,  salary: true},
//
// ]
// for (const sal of adreses) {
//     for (const key in sal) {
//         if ( typeof sal[key] === 'boolean'){
//             console.log(sal[key])
//         }
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let adreses =[
//     {city: 'Kiev', people: 3500,  salary: true},
//     {city: 'NewYork', people: 250,  salary: false},
//     {city: 'London', people: 730,  salary: true},
//     {city: 'Istanbul', people: 3500,  salary: true},
//     {city: 'Brovary', people: 3500,  },
//     {city: 'Chernigiv', people: 3500, },
//     {city: 'Lviv', people: 3500,  salary: true},
//     {city: 'Khrakhov', people: 3500,  salary: false},
//     {city: 'Kharkov', people: 4500,  salary: true},
//     {city: 'Dnepr', people: 3500,  salary: true},
//
// ]
// for (const pep of adreses) {
//     for (const key in pep) {
//         if ( typeof pep[key] === "number"){
//             console.log(pep[key])
//         }
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let adreses =[
//     {city: 'Kiev', people: 3500,  salary: true},
//     {city: 'NewYork', people: 250,  salary: false},
//     {city: 'London', people: 730,  salary: true},
//     {city: 'Istanbul', people: 3500,  salary: true},
//     {city: 'Brovary', people: 3500,  },
//     {city: 'Chernigiv', people: 3500, },
//     {city: 'Lviv', people: 3500,  salary: true},
//     {city: 'Khrakhov', people: 3500,  salary: false},
//     {city: 'Kharkov', people: 4500,  salary: true},
//     {city: 'Dnepr', people: 3500,  salary: true},
//
// ]
// for (const cit of adreses) {
//     for (const key in cit) {
//         if ( typeof cit[key] === "string"){
//             console.log(cit[key])
//         }
//     }
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let  left = [];
//
// left[0] = 'kik';
// left[1] = 23;
// left[2] = false;
// left[3] = 'kik1';
// left[4] = true;
// left[5] = {};
//
// for (const leftElement of left) {
//     console.log(leftElement);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let e =0; e<=10; e++ ) {
//     document.write(`<div> шаг ${e} </div>`);
//     console.log(`step ${e}`);
//
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let e =1; e<=100; e++ ) {
//     document.write(`<div> шаг ${e} </div>`);
//     console.log(`step ${e}`);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let e =1; e<=100; e+=2 ) {
//     document.write(`<div> шаг ${e} </div>`);
//     console.log(`step ${e}`);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let e = 0; e <= 100; e++) {
//     if (e % 2 === 0) {
//         document.write(`<div> шаг ${e} </div>`);
//         console.log(`step ${e}`);
//     } else console.log('false')
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let e = 0; e <= 100; e++) {
//     if (e % 2 !== 0) {
//         document.write(`<div> шаг ${e} </div>`);
//         console.log(`step ${e}`);
//     } else console.log('false')

// }
