// querySelector 

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px black';

var input = document.querySelector('input');
console.log(input);
input.value = 'Hello';

var submit = document.querySelector('input[type=submit]');
console.log(submit);
submit.value = 'Send';

var item = document.querySelector('.list-group-item');
console.log(item);
item.style.color = 'red';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
console.log(secondItem);
secondItem.style.color = 'blue';
secondItem.style.backgroundColor = 'green'

var lastItem = document.querySelector('.list-group-item:last-child');
console.log(lastItem);
lastItem.style.color = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
console.log(thirdItem);
thirdItem.style.display = 'none';

// querySelectorAll

var items = document.querySelectorAll('.list-group-item');
console.log(items);
items[1].style.color = 'green';

var oddItems = document.querySelectorAll('li');
console.log(oddItems);

for(var i=0; i< oddItems.length; i++)
{
    oddItems[i].style.backgroundColor= 'lightgreen';
}