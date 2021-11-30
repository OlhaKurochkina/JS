

// - створити конструктор,
//
//     - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// // -_____________________________________________________________________________________________________________________
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// let users = [
//     new User(1, 'pitter', 'petrolv', 'petrjov@gmail.com', 0o44332233),
//
//     new User(2, 'pittjhger', 'petrdov', 'petrdov@gmail.com', 0o44332233),
//
//     new User(3, 'pitjghter', 'petrojv', 'petdsrov@gmail.com', 0o44332233),
//
//     new User(4, 'pijbgtter', 'petrbov', 'petrfov@gmail.com', 0o44332233),
// ];



//
//



// /- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUsers = users.filter(value => value.id  % 2 === 0);
// console.log (filterUsers);


//     - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = users.sort((a, b) => a.id-b.id);
// console.log (sort);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// };
// / створити пустий масив, наповнити його 10 об'єктами Client

// let clients = [
//     new Client (1, 'vasya', 'pupkish', 'fd@gmail/com', 567, ['milk','gift','chocolate']),
//     new Client (2, 'vasya', 'pupkish', 'fd@gmail/com', 567, ['milk','gift',]),
//     new Client (3, 'vasya', 'pupkish', 'fd@gmail/com', 567, ['milk','gift','chocolate','meat']),
//     new Client (4, 'vasya', 'pupkish', 'fd@gmail/com', 567, ['milk','gift','chocolate', 'bread','soap']),
//     new Client (5, 'vasya', 'pupkish', 'fd@gmail/com', 567, ['milk','gift',]),
//     new Client (6, 'vasya', 'pupkish', 'fd@gmail/com', 567, ['milk','gift','chocolate']),
// ];
// console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = clients.sort((a,b) => a.order.length - b.order.length);
//
// console.log(sort);
