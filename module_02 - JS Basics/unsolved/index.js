// Your code here
function greet() {
    var name = window.prompt("What is your name?");
    alert("Hello, " + name);

    var age = window.prompt("How old are you?");
    console.log(parseInt(age));

    //Step 4
    confirm("Have you had a birthday yet this year?");

    /*function confirmAction () {
        let confirmAction = confirm("Have you had a birthday yet this year?");
        if (confirmAction) {
            alert("You were born in ");
        } else {
            alert("You were born in ")
        }
    }*/

    /*Step 5: use new Date().getFullYear()
    let today = new Date();
    let dd = today.getDate();
    let month = today.getMonth() + 1;

    const yyyy = today.getFullYear(); */

}