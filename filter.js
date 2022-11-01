var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addForm);

// delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);



// ADD ITEMS
function addForm(e) {

    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var itemDesc = document.getElementById('desciption').value;

    // create new li for each input submit
    var li = document.createElement('li');
    var span = document.createElement('span');

    // add class
    li.className = 'list-group-item';
    
    // console.log(li);

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    span.appendChild(document.createTextNode(' ' +itemDesc));

    li.appendChild(span);

    // create delete button element
    var deleteBtn = document.createElement('button');

    // add calss to delete btn element
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // add text node to delete btn
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    // create edit element btn
    var editBtn = document.createElement('button');
    // add class to edit btn
    editBtn.className = 'btn btn-success btn-sm float-right edit';

    // create text node to edit btn
    editBtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(editBtn);

    // append li to ui tag
    itemList.appendChild(li);

    // console.log(li);

}


// REMOVE ITEMS
function removeItem(e){

    e.preventDefault();
    // console.log(1);

    if(e.target.classList.contains('delete')){
        // console.log(1);

        if(confirm('Are you sure?')){
        var li = e.target.parentElement;
        // console.log(li);
        itemList.removeChild(li);
        }
    }
}

// FILTER ITEMS
function filterItems(e){


    // convert to lowercase
    const text = e.target.value.toLowerCase();

    // console.log(text);

    // get all li tags
    const items = document.getElementsByTagName('li');

    // convert to array
    Array.from(items).forEach(function(item) {
        
        const itemName = item.firstChild.textContent;
        const desciption = item.childNodes[1].textContent;
        // console.log(desciption);

        if(itemName.toLowerCase().indexOf(text) != -1 || desciption.toLowerCase().indexOf(text) != -1){

            item.style.display = 'block';
        }

        else{
            item.style.display = 'none';
        }
        
    });
   
}