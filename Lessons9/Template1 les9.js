//
// <!-- - Є масив:-->
// <!--['Main','Products','About us','Contacts']-->
// <!--Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu-->
// <!--Завдання робити через цикли.-->
// const arr =['Main','Products','About us','Contacts']
//     let ul = document.getElementsByClassName('menu');
// for (const text of arr) {
//     let li = document.createElement('li');
//     li.innerText = text;
//     ul[0].appendChild(li)


// }
//
// <!-- - Є масив-->
<!--let coursesAndDurationArray = [-->
<!--{title: 'JavaScript Complex', monthDuration: 5},-->
<!--{title: 'Java Complex', monthDuration: 6},-->
<!--{title: 'Python Complex', monthDuration: 6},-->
<!--{title: 'QA Complex', monthDuration: 4},-->
<!--{title: 'FullStack', monthDuration: 7},-->
<!--{title: 'Frontend', monthDuration: 4}-->
<!--];-->
// <!--Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration-->
// <!--Завдання робити через цикли.-->

//
// let coursesAndDurationArray = [
//         {title: 'JavaScript Complex', monthDuration: 5},
//         {title: 'Java Complex', monthDuration: 6},
//         {title: 'Python Complex', monthDuration: 6},
//         {title: 'QA Complex', monthDuration: 4},
//         {title: 'FullStack', monthDuration: 7},
//         {title: 'Frontend', monthDuration: 4},
//     ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//    let coursesAndDurationArrayDiv = document.createElement('div');
//    let title = document.createElement('h2');
//    let month = document.createElement('h3');
//
//    title.innerText = coursesAndDurationArrayElement.title;
//    month.innerText = coursesAndDurationArrayElement.monthDuration;
//
//     coursesAndDurationArrayDiv.append(title, month);
//     document.body.appendChild(coursesAndDurationArrayDiv);
// }

//
// <!-- - Є масив-->
// <!--let coursesAndDurationArray = [-->
// <!--{title: 'JavaScript Complex', monthDuration: 5},-->
// <!--{title: 'Java Complex', monthDuration: 6},-->
// <!--{title: 'Python Complex', monthDuration: 6},-->
// <!--{title: 'QA Complex', monthDuration: 4},-->
// <!--{title: 'FullStack', monthDuration: 7},-->
// <!--{title: 'Frontend', monthDuration: 4}-->
<!--];-->
<!--За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.-->
<!--  Завдання робити через цикли.-->
let coursesArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
];

for (const coursesArrayElement of coursesArray) {
    let divElement = document.createElement('div');
    divElement.classList.add('item');
    let title1 = document.createElement('h1');
    title1.classList.add('heading');
    title1.innerText = coursesArrayElement.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = coursesArrayElement.monthDuration;
    divElement.appendChild(title1);
    divElement.appendChild(p);
    document.body.appendChild(divElement);


};




