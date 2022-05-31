// Your code here
function greet() {
    var name = window.prompt("What is your name?");
    alert("Hello, " + name);

    var age = window.prompt("How old are you?");
    console.log(parseInt(age));

    //Step 4
    var hasHadBirthday = confirm("Have you had a birthday yet this year?");
    
    //Step 5
    let currentYear = new Date().getFullYear();
    console.log(parseInt(currentYear));
    
    if (hasHadBirthday) {
        let birthdayYes = currentYear - age
        alert("You were born in " + birthdayYes);
    } else {
        let birthdayNo = currentYear - (age + 1)
        alert("You were born in " + birthdayNo);
    }

}