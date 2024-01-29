// let docQuery=(str)=>document.querySelector(str);
// let questionStatement=docQuery('.question');
// questionStatement.textContent=' this is added';


let age=parseInt(prompt("Enter the age of the user"));
if(age<10)
    alert("You are junior you are allowed for small rides");
else if(age<40 && age>10)
    alert("You are senior you are eligible for all the rides");
else
    alert("You are super senior you are not allowed on dangerous rides");