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
// headerTitle.style.borderBottom = 'solid 3px black';

// var h2title = document.getElementsByClassName('title');
// h2title[0].style.fontWeight = 'bold';
// h2title[0].style.color = 'green';


// does not have any effect on the new li because there is no class
var item = document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor = 'green';

for(var i=0; i< item.length; i++)
{
    item[i].style.fontWeight = 'bold';
  

}


// works on the new li element because it is going by the tag not class
var li = document.getElementsByTagName('li');

li[1].style.backgroundColor = 'green';

console.log(li);

li[2].style.fontWeight = 'bold';

for(var i=0; i< li.length; i++)
{
    li[i].style.backgroundColor = 'lightgray';
    li[i].style.fontWeight = 'bold';
}