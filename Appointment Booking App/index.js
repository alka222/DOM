var myForm=document.querySelector('#my-form');
var itemList=document.getElementById('users');

var nameInput=document.getElementById('name');
var emailInput=document.getElementById('email');

myForm.addEventListener('submit',onsubmit);

function onsubmit(e){

    e.preventDefault();

    if(nameInput.value==='' || emailInput.value==='')   {
        
        alert('please enter fields')
    }

    else  {

        let myObj=  {
        name:nameInput.value,
        email:emailInput.value
        }

        let myobj_serialized=JSON.stringify(myObj);
        localStorage.setItem(myObj.email,myobj_serialized);
        let myobj_deserialized=JSON.parse(localStorage.getItem("myObj"))

        
        var li=document.createElement('li');
        li.className='items';
        li.appendChild(document.createTextNode(localStorage.getItem(myObj.email)));
        console.log(localStorage.getItem(myObj.email))


        var deletbtn=document.createElement('button');
        deletbtn.className='btn btn-danger btn-sm float-right delete';
        deletbtn.appendChild(document.createTextNode('delete'));
        li.appendChild(deletbtn);

        var editbtn=document.createElement('button');
        editbtn.className='btn btn-sm float-right edit';
        editbtn.appendChild(document.createTextNode('edit'));
        li.appendChild(editbtn);

        itemList.appendChild(li);
    }
}
