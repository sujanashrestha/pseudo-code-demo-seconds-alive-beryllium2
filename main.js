let birthYear = prompt("What is your year of birth?");
let birthMonth = prompt("What is your month of birth?");
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let secondsInMonth = 60 * 60 * 24 *30
let secondsInYear = 12 * secondsInMonth
let secondsInBirthYear = secondsInMonth * (12 - birthMonth);
let secondsInCurrentYear = secondsInMonth * currentMonth 
let secondsInBetweenYears = (currentYear - birthYear - 1) * secondsInYear
let secondsSinceBirth = secondsInBirthYear + secondsInCurrentYear + secondsInBetweenYears
document.write(
    "The number of seconds you have lived is : " + 
    secondsSinceBirth
    )