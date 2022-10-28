// console.log(document);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.all[10].innerText);

// document.all[10].innerText = "Hello";

// console.log(document.all[10].innerText);

// console.log(document.forms[0]);
// console.log(document.images);

//getElementByID

// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');

// headerTitle.textContent = 'Hello';

// console.log(headerTitle);
headerTitle.style.borderBottom = 'solid 3px black';

var h2title = document.getElementsByClassName('title');
h2title[0].style.fontWeight = 'bold';
h2title[0].style.color = 'green';

var li = document.getElementsByClassName('list-group-item');
li[2].style.backgroundColor = 'green';

var item = document.getElementById('items');
console.log(item);
item.style.fontWeight = 'bold';




