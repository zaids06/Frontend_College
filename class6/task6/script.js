let prodName = ['Pen', 'Pencil', 'Eraser', 'Notebook', 'TextBook'];
let prodQuantity = [2, 3, 0, 4, 5];
let prodPrice = [10, 4, 5, 30, 50];
let totalPriceFunc = function () {
    for (let i = 0; i < prodQuantity.length; i++)
        console.log(`Total Inventory Value of ${prodName[i]} = ${prodPrice[i] * prodQuantity[i]}`);
}
totalPriceFunc();
let outOfStock = function () {
    for (let i = 0; i < prodQuantity.length; i++)
        (prodQuantity[i] === 0) ? console.log(`${prodName[i]} is out of stock`) : a = 10;
}
outOfStock();
let highestPrice = function () {
    highestVal = prodPrice[0];
    for (let i = 1; i < prodQuantity.length; i++)
        (prodPrice[i] > highestVal) ? highestVal = prodPrice[i] : highestVal += 0;
    console.log(`Highest Price = ${highestVal}`);
}
highestPrice();
let find = prompt('Enter the product name');
flag = false;
for (let i = 0; i < prodQuantity.length; i++)
    if (find === prodName[i]) {
        flag = true;
        console.log(`Product name = ${prodName[i]}, Product Quantity = ${prodQuantity[i]}, Product Price = ${prodPrice[i]}`);
    }
if (!flag)
    console.log("Product not found");
