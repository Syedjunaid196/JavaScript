let salary = document.getElementById('salary')
let rentalIncome = document.getElementById('rentalIncome');
let otherIncome = document.getElementById('otherIncome');

let valueOfSalary = salary.value;
let valueOfRentalIncome = rentalIncome.value;
let valueOfOtherIncome = otherIncome.value;
let totalWelth = Number(valueOfSalary) + Number(valueOfRentalIncome) + Number(valueOfOtherIncome)

let totalIncome = document.getElementById('totalIncome');
totalIncome.value = totalWelth;
console.log(totalWelth)
