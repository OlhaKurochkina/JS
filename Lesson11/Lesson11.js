// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let f2 = document.forms.f2;
// f2.onsubmit = function (e){
//     e.preventDefault();
//     let name = this.name.value;
//     let age = this.age.value;
//     console.log((name, age);
//     localStorage.setItem('userData', JSON.stringify({name,age}));
// };
//
// let inputs = document.getElementsByName('input');
// let name = inputs[0];
// let age = inputs[1];
// let btn = document.getElementsByTagNameNS('button')[0];
// btn.click = function ()
// {
//     let nameValue = name.value;
//     let ageValue = age.value;
//     localStorage.setItem('userData2', JSON.stringify({name: nameValue, age: ageValue}));
// };
//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let carForm = document.forms.carForm;
// carForm.onsubmit = function (e){
//     e.preventDefault();
//     let model = this.model.value;
//     let type = this.type.value;
//     let volume = this.volume.value;
//     let car = {model:model, type:type, volume:volume};
//     let cars = JSON.parse(localStorage.getItem('cars'));
//     console.log(cars);
//     if (!cars){
//         cars = [];
//         cars.push('car');
//         localStorage.setItem('cars', JSON.stringify(cars));
//     }else {
//         cars.push ('car');
//         localStorage.setItem('cars', JSON.stringify(cars));
//     }
// };