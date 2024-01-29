// let docQuery=(str)=>document.querySelector(str);
// let questionStatement=docQuery('.question');
// questionStatement.textContent=' this is added';


let num1=parseInt(prompt("Enter the first number"));
let num2=parseInt(prompt("Enter the second number"));
let num3=parseInt(prompt("Enter the third number"));
let ans=num1*num2*num3;
if(ans<0)
    alert("The sign is -");
else
    alert("The sign is +")