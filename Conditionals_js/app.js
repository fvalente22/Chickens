// let random = Math.random()
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5")
//     console.log(random)
// } else {
//     console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!")
// }
// console.log(random);




// const dayOfWeek = prompt ('Enter a Day').toLocaleLowerCase(); 
// //lower case code is saying to turn anything written to lower case

// if(dayOfWeek === 'monday') {
//     console.log("UGHH I HATE MONDAYS")
// } else if (dayOfWeek === 'saturday') {
//     console.log("I love Saturdays!")
// } else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE DECENT")
// } else {
//     console.log("MEH")
// }


// 0 - 5 - FREE 
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10 

// const age = 66;

// if (age < 5) {
//     console.log("You are a baby. You get in for free")
// } else if (age < 10) {
//     console.log("You are a child. You pay $10")
// } else if (age < 65) {
//     console.log("You are an adult, you pay $20");
// } else {
//     console.log("You are a senior, you pay $10")
// }


const password = prompt("Please enter a new password")

if(password.length >= 6) {
    if (password.indexOf(' ') === -1){
        console.log("Valid Password")
    } else {
        console.log("Password cannot contain spaces")
    }
 } else {
     console.log("PASSWORD TOO SHORT! Must be 6+ characters")
 }

