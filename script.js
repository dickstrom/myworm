function one() {
    document.getElementById("moon").innerHTML = "Actually, Yes. If you are looking for a guy talking a lot about Javascript. This is a beginners guide.";
}
function two() {
    document.getElementById("js").innerHTML = "No not really, but in the beginning they saw that there was a need for a language that was approachable, that you could put directly in the web page.";
}
function ageInDogYears() {
    console.log("Your age in dogyears");
    let age = document.getElementById("age").value;
    const firstYear = 14;
    let yearsToCount = age -1
    let remainingYears = yearsToCount * 7;
    let dogYears = firstYear + remainingYears;
    document.getElementById("dogYears").innerHTML = dogYears;
}

