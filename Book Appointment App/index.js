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

        localStorage.setItem('username', nameInput.value);
        localStorage.setItem('useremail', emailInput.value);

    // console.log(nameInput.value);
    // console.log(emailInput.value);
    }
}

