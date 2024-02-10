let btnSubmit=document.getElementById('submit')
let nameField=document.getElementById('name');
let pass=document.getElementById('pass');
let email=document.getElementById('email');





let validate=function (){
    if(nameField.textContent==='');
    alert('Please enter your name');
}

btnSubmit.addEventListener('click',validate)