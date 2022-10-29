//parentNode
// var itemList = document.querySelector('#items');
// console.log(itemList);

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'lightgray';

//parentElement
var itemList = document.querySelector('#items');
console.log(itemList);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'lightgray';

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor = 'red';

//lastChild
console.log(itemList.lastChild);
// itemList.lastChild.textContent = 'red';

//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color = 'red';

//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color = 'red';

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling);

// createElement

// createDiv
var newDiv = document.createElement('div');
// console.log(newDiv);

// add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// add/set attribute
newDiv.setAttribute('title', 'Hello Div');
// console.log(newDiv);

// create text node
var newDivText = document.createTextNode('Hello World');

//append Child
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);

// add element before item 1
var item1Span = document.createElement('span');

var item1Text = document.createTextNode('Hello World');
item1Span.appendChild(item1Text);
console.log(item1Span);

var main = document.querySelector('.container #items');
console.log(main);
var li = document.querySelector('.list-group-item');
// console.log(li);
main.insertBefore(item1Span, li);
console.log(item1Span);