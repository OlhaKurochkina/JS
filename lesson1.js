// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write


// let xxx = 'hello';
// console.log(xxx, 'xxx');
// alert(xxx)
// document.write(`<div>${xxx}</div>`);
// let xxx1 = 'owu';
// console.log(xxx1);
// document.write(`<div>${xxx1}</div>`);
// alert(xxx1)
// let xxx3 = 'com';
// document.write(`<div>${xxx3}</div>`);
// console.log(xxx3);
// alert(xxx3)
// let xx2 = 'ua';
// console.log(xx2);
// document.write(`<div>${xx2}</div>`);
// alert(xx2)
// let x1 = 1;
// console.log(x1);
// document.write(`<div>${x1}</div>`);
// alert(x1)
// let x2 = 10;
// console.log(x2);
// document.write(`<div>${x2}</div>`);
// alert(x2)
// let x3 = -999;
// console.log(x3);
// document.write(`<div>${x3}</div>`);
// alert(x3)
// let x4 = 123;
// console.log(x4);
// document.write(`<div>${x4}</div>`);
// alert(x4)
// let x5 = 3.14;
// console.log(x5);
// document.write(`<div>${x5}</div>`);
// alert(x5)
// let x6 = 2.7;
// console.log(x6);
// document.write(`<div>${x6}</div>`);
// alert(x6)
// let x7 =16;
// console.log(x7);
// document.write(`<div>${x7}</div>`);
// alert(x7);



// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let xxx = 'hello';
// xxx = 'hel';
// console.log(xxx);
// alert(xxx)
// document.write(`<div>${xxx}</div>`);
//
// let xxx1 = 'owu';
// xxx1 = 'ow';
// console.log(xxx1);
// document.write(`<div>${xxx1}</div>`);
// alert(xxx1)
// let xxx3 = 'com';
// xxx3 = 'cm';
// console.log(xxx3);
// document.write(`<div>${xxx3}</div>`);
// alert(xxx3)
// let xx2 = 'ua';
// xx2 = 'au';
// console.log(xx2);
// document.write(`<div>${xx2}</div>`);
// alert(xx2)
// let x1 = 1;
// x1 = 2;
// console.log(x1);
// document.write(`<div>${x1}</div>`);
// alert(x1)
// let x2 = 10;
// x2 = 11;
// console.log(x2);
// document.write(`<div>${x2}</div>`);
// alert(x2)
// let x3 = -999;
// x3 = -888;
// console.log(x3);
// document.write(`<div>${x3}</div>`);
// alert(x3)
// let x4 = 123;
// x4 = 321;
// console.log(x4);
// document.write(`<div>${x4}</div>`);
// alert(x4)
// let x5 = 3.14;
// x5 = 3.15;
// console.log(x5);
// document.write(`<div>${x5}</div>`);
// alert(x5)
// let x6 = 2.7;
// x6 = 2.8;
// console.log(x6);
// document.write(`<div>${x6}</div>`);
// alert(x6)
// let x7 = 16;
// x7 = 17;
// console.log(x7);
// document.write(`<div>${x7}</div>`);
// alert(x7)
// let xy = (10 > 15);
// xy = (10 < 15);
// console.log(xy);
// document.write(`<div>${xy}</div>`);
// alert(xy)
// let yx = (10 === 10);
// yx = (10 === 11)
// console.log(yx);
// document.write(`<div>${yx}</div>`);
// alert(yx)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let firstName = 'olya'
// let middleName = 'vitaliivna'
// let lastName = 'smiian'
//
// let fullName = firstName + ' ' + middleName + ' ' + lastName
// console.log(fullName);


// let mes1 = prompt('Your name?');
// let mes2 = prompt(' Your middlename?');
// let mes3 = prompt(' Your age');
// // let full = 'Hello' + ' ' + mes1 + ' ' + mes2 + ' ' + mes3
// let message = `Вітаю ${mes1} ${mes2}. Тобі ${mes3}`
//
// alert(message);

// console.log(`Вітаю ${mes1} ${mes2}. Тобі ${mes3}`);
// console.log(full);


// let user {
//
// }


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
    let a = 100;
    console.log(typeof a);
    let b = '100';
    console.log(typeof b);
    let c = true;
    console.log(typeof c);



// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

console.log(5 < 6);
// 5 ? 6 -> true
console.log(5 === 6);
// 5 ? 6 -> false
console.log(5 > 6);
// 5 ? 6 -> false
console.log(5 >= 6)
// 5 ? 6 -> false
console.log(10 === 10);
// 10 ? 10 -> true
console.log(10 >= 10);
// 10 ? 10 -> true
console.log(10 < 10);
// 10 ? 10 -> false
console.log(10 < 10)
// 10 ? 10 -> false
console.log(10 !== 10);
// 10 ? 10 -> false
console.log(123 === '123');
// 123 ? '123' -> false
console.log(123 !== '123');
// 123 ? '123' -> true

//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); - 205
// document.write(str - a + "<br/>"); -15
// document.write(str * "2" + "<br/>"); - 40
// document.write(str / 2 + "<br/>"); -10




