// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0
// while (i < array.length) {
//     console.log(array[i])
//     i++
// }


//     2. перебрати його циклом for
//
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// for ( let i = 0; i < array.length; ) {
//     document.write(`<div> ${array[i]} </div>`)
//
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0
// while (i < array.length) {
//     if (i % 2 !==0) {
//         console.log(array[i])
//     }
//
//     i++
// }



// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let array = [2,17,13,6,22,31,45,66,100,-18];
// for ( let i = 0; i < array.length; i++) {
//     if (i % 2 !== 0) {
//         document.write(`<div> ${array[i]} </div>`)
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
let array = [2,17,13,6,22,31,45,66,100,-18];
let i = 0
while (i < array.length) {
    if (i % 2 ===0) {
        console.log(array[i])
    }

    i++
}


// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
