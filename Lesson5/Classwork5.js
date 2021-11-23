// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const minN = ((a,b,c) => {
//     if (a>b && a>c){
//         if (b>c){
//             console.log(a,b,c);
//         } else{
//             console.log(a,c,b);
//         }
//     }else if (b>a && b>c){
//         if (a>c) {
//             console.log(b, a, c)
//         }else {
//             console.log (b,c,a);
//             }
//     }else if (c>b && c>a){
//         if (b>a){
//             console.log (c,b,a);
//         }else{
//             console.log (c,a,b);
//         }
//     }
//
//     return null
//
// })(10,20,15)
//
//
// console.log(minN)


// function minN (a,b,c){
//     if (a>b && a>c){
//         if (b>c){
//             console.log(a,b,c);
//         } else{
//             console.log(a,c,b);
//         }
//     }else if (b>a && b>c){
//         if (a>c) {
//             console.log(b, a, c)
//         }else {
//             console.log (b,c,a);
//             }
//     }else if (c>b && c>a){
//         if (b>a){
//             console.log (c,b,a);
//         }else{
//             console.log (c,a,b);
//         }
//     }
// }
//
//
// console.log(minN(10,20,15))
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// - створити функцію яка повертає найбільше число з масиву

//  let maxfrom = (dr)=>{
//     let max = dr[0];
//
//     for (const  number of dr){
//         if (number > max){
//             max = number;
//         }
//     }
//     return max
// }
//
// console.log(maxfrom ([10, 15, 12, 11, 14]))


// function maxfrom (numbers){
//     let max = numbers[0];
//     for (const  number of numbers){
//         if (number > max){
//             max = number;
//         }
//     }
//     return max
// }
//
// console.log(maxfrom ([10, 15, 12, 11, 14]))

// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const arrayofNumbers = [10, 15, 12, 11, 14]
// const sed = (array) => {
//     let sum = 0;
//     for (number of array){
//         sum = sum + number;
//     }
//     return { sum, array }
// }
// const { sum, array } = sed(arrayofNumbers)
//
// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const sed1 = () => {
//      return sum/array.length
// }
//
// console.log(sed1());


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].