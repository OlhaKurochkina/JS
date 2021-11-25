// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// const str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// str.forEach((gh, index) => console.log(gh.length, 'element', index))
// _____________________________________________________________________________________________________________________

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// _____________________________________________________________________________________________________________________


// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// let newStr = str.map((word) => {
//     return word.toUpperCase();
// })
//
// console.log(newStr);
// _____________________________________________________________________________________________________________________


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let str = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// let newStr = str.map((word) => {
//     return word.toLowerCase();
// })
//
// console.log(newStr);
// _____________________________________________________________________________________________________________________

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.length);
// let s = str.trim()
// console.log(s, s.length);
// //
// _____________________________________________________________________________________________________________________

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
//
// const stringToarray = (strinValueToArray) => strinValueToArray.split(' ')
//
// let arr = stringToarray(str);
//
// console.log(arr)
//
// document.write(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// //
//// _____________________________________________________________________________________________________________________
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// const delete_characters = (str, length) => {
//     let newArr = str.split(' ')
//     return newArr.filter((word) => word.length === length)
// }
// document.writeln(delete_characters(str, 7))
// console.log(delete_characters(str, 6));


// _____________________________________________________________________________________________________________________

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// const insert_dash = (str) => {
// let newStr = str.replaceAll(' ', '-');
// return newStr.toUpperCase()
// }
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// _____________________________________________________________________________________________________________________

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = "thanks";
// let str2 = "qknklknlknlknlkn"
//  let stringArgument = (str) => {
//      let chartAr = str.slice(0,1);
//      return chartAr.toUpperCase() + str.slice(1);
//
// }
// document.writeln(stringArgument(str));
// document.writeln(stringArgument(str2));

//// _____________________________________________________________________________________________________________________
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     let newArr = str.split(' ')
//     let formatArray = []
//     for (const word of newArr) {
//         let newWord = word.toUpperCase().slice(0, 1) + word.slice(1)
//         formatArray.push(newWord)
//     }
//     return formatArray.join(' ')
// }
//
// let phrase = 'i have trouble'
//
// console.log(capitalize(phrase));