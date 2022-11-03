var myForm = document.querySelector('#my-form');

var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');

myForm.addEventListener('submit', onsubmit);



function onsubmit(e){

    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){

        alert('please enter all fields');
    }

    else{

        let myObj = {

            name: nameInput.value,
            email: emailInput.value

        }
        
        let myObj_serialized = JSON.stringify(myObj);

        localStorage.setItem('myObj', myObj_serialized);
        // console.log(localStorage);

        let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'));
        console.log(myObj_deserialized);
        
        // localStorage.setItem('myObj', myObj);
        // console.log(localStorage);

    }
}

