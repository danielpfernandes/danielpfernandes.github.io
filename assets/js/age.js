// Age calculator
function calculateAge(birthday) { // birthday is a date
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // milliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
}
document.getElementById("age").innerText = calculateAge(new Date(1981, 5));