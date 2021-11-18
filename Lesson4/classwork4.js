// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numbers (num, num1, num2){
//     if (num < num1 && num < num2){
//         console.log (num);
//     }else if (num1<num && num1 < num2){
//         console.log (num1);
//     }else if (num2<num && num2 < num1){
//         console.log (num2);
//     }
//
// }
// let num = 10
// let num1 = 23
// let num2 = 15
//
// numbers(num,num1,num2)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numbers (num, num1, num2){
//     if (num > num1 && num > num2){
//         console.log (num);
//     }else if (num1>num && num1 > num2){
//         console.log (num1);
//     }else if (num2>num && num2 > num1){
//         console.log (num2);
//     }
//
// }
// let num = 10
// let num1 = 23
// let num2 = 15
//
// numbers(num,num1,num2)

// - створити функцію яка повертає найбільше число з масиву

// let frd = [1,5,8, 10, 5999, 2, -2]
//
// function br (qwer){
//     let max = qwer[0] ;
//     for (i=0; i <qwer.length; i++){
//         if (qwer[i] > max) {
//             max = qwer[i]
//         }
//     }
//     console.log(max);
// }
//
// br(frd)

// - створити функцію яка повертає найменьше число з масиву
// let frd = [1,5,8, 10, 5999, 2, -2]
//
// function br (qwer){
//     let min = qwer[0] ;
//     for (i=0; i <qwer.length; i++){
//         if (qwer[i] < min) {
//             min = qwer[i]
//         }
//     }
//     console.log(min);
// }
//
// br(frd)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function calc (arr){
//     let res = 0;
//     for (const num of arr){
//         res = res + num;
//     }
//     return res;
// }
// let res1 = calc ([13, 14, 10]);
// console.log (res1)
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function calc (){
//     let res =0;
//     for (const argument of arguments){
//         res = (res+argument);
//     }
//     return res/arguments.length;
// }
// let res1 = calc (30, 30, 30);
// console.log (res1)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].