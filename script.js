function one() {
    document.getElementById("moon").innerHTML = "Actually, Yes. If you are looking for a guy talking a lot about Javascript. This is a beginners guide.";
}
function two() {
    document.getElementById("js").innerHTML = "No not really, but in the beginning they saw that there was a need for a language that was approachable, that you could put directly in the web page.";
}



//my age in dogyears from codecademy
const myAge = 52;
let earlyYears = 2;
earlyYears *= 10,5;
let laterYears = myAge - 2;
laterYears *=4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
let myName = "Dick"
console.log(`My name is ${myName}.
           I am ${myAge} years old in human years 
           which is ${myAgeInDogYears} years old in dog years.`);