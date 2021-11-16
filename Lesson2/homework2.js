// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt('enter time');
// if (time <=15) {
//     document.write('<h1>first part of hour</h1>');
//     } else if (time >15 && time <=30){
//     document.write('<h1> second  part of hour</h1>');
//     } else if (time >30 && time <=45) {
//     document.write('<h1> third  part of hour</h1>');
//     } else if (time >45 && time <=60) {
//     document.write('<h1> fourth  part of hour</h1>');
//
// }

//
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let date = +prompt('enter date')
// if (date <=10) {
//     document.write('<h1>first part of month</h1>');
// } else if (date >10 && date <=20){
//     document.write('<h1> second  part of month</h1>');
// } else if (date >20 && date <=31) {
//     document.write('<h1> third  part of month</h1>');
//
// }


//
// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//

// let test =!!'' ? 'Вірно': 'Неправильно';
// console.log(test);
//
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
// let test1 =!!'100' ? 'Вірно': 'Неправильно';
// console.log(test1);

//
//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


// let a = +prompt('Чому рівняється a?');
// if (a > 0 || a < 0) {
//     document.write('<div>Вірно</div>');
//
// } else {
//     document.write('<div>Невірно</div>');
// }



//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.


// let key = prompt('Введите порядковый номер дня недели');
// switch (key){
//     case '1':
//         console.log('Лекция 1');
//         break;
//     case '2':
//         console.log('Практика за понедельник');
//         break;
//     case '3':
//         console.log('Лекция 2');
//         break;
//     case '4':
//         console.log('Практика за вторник');
//         break;
//     case '5':
//         console.log('Лекция 3');
//         break;
//     case '6':
//         console.log('Практикуйся сам как можешь');
//         break;
//     case '7':
//         console.log('Завтра снова лекция. Мои поздравления!');
//         break;
//
// }

//
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let a = 400;
// if( a%4===0){
//     console.log('високосний')
// } else {
//     console.log('невисокосний')
// }


//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!



// let name = prompt('Яка «офіційна» назва JavaScript?');
// if (name === 'ECMAScript') {
//    document.write('<h1> Правильно</h1>');
// } else {
//     document.write('<h1> Не знаєте? ECMAScript!</h1>');
// }
