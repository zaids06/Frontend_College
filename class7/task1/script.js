let year = parseInt(prompt("Enter the year you want!!"));
let ans;
if ((year % 4 == 0) && (!(year % 100 == 0)))
    ans = true;
if (!ans)
    (year % 400 == 0) ? ans = true : ans = false;

ans ? console.log("IS leap year") : console.log("Is not leap year");