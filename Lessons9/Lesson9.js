// <!--Все робити за допомоги js.-->
// <!-- - створити блок,-->
let div = document.createElement('div');
document.body.appendChild(div);
div.innerText = 'Свежие новости Украины, последние новости из-за рубежа, новости политики, экономики, спорта, культуры, технологий, шоу-бизнеса ..'


//
// <!-- - додати йому класи wrap, collapse, alpha, beta-->

// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.classList.add('wrap');

// <!-- - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту-->

div.style.color = 'red';
div.style.background = 'silver';
div.style.fontSize = '20px';


// <!-- - додати цей блок в body.-->


// <!-- - клонувати його повністю, та додати клон в body.--
const divClon = div.cloneNode(true);
divClon.innerText = 'Новости, статьи и мнения экспертов. Главные новости и события Украины и мира от редакции сайта Сегодня.';
divClon.style.background = 'grey';
document.body.appendChild(divClon);