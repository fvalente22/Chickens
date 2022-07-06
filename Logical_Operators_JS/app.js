// const password = prompt("Enter your password")
// if(password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("VALID PASSWORD")
// } else {
//     console.log("INCORRECT FORMAT FOR PASSWORD")
// }



//0-5 free
// 5-10 pay $10
// 10-65 $20
// 65+ free

// const age = 64
// if(age >=0 && age < 5 || age >= 65){
//     console.log("FREE")
// } else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("invalid age")
// }



// const firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("Try Again!");
// }


const age = 44;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You are not a baby or a senior!")
}
