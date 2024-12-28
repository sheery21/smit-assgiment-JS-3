// Chapter On 1

// Questions 1

// let num=10
// document.write(`<h1>Result</h1>`)
// document.write(`<h2>The valu of a is 10</h2> `)
// document.write(`-----------------------------------<br/>`)
// document.write(`The valu of a is: ${++a}<br/>`)
// document.write(`The valu of a is: ${a}<br/><br/>`)
// document.write(`The valu of a is: ${a++}<br/>`)
// document.write(`The valu of a is: ${a}<br/><br/>`)
// document.write(`The valu of a is: ${--a}<br/>`)
// document.write(`The valu of a is: ${a}<br/><br/>`)
// document.write(`The valu of a is: ${a--}<br/>`)
// document.write(`The valu of a is: ${a}<br/>`)

// Questions 2

// let num1=2, num2=1;
// document.write(` ${-- num1 - --num2 + ++num2 + num2--}<br/>`)

// Question3

// let username =prompt("Enter Your user name")
  
 
// if ("username" ){
//     document.write(`<b>Hello ${username} Wellcom </b><br/> `)
// }
// else{
//     document.write(`Hello Wellcom`)
// } 
 
// Questions 3
// let input = prompt("Enter a Number To Show In Multiplication Table (default is 5):")
// let number= input ? parseInt(input) :5;

// document.write(`<h1>Multiplication Table for ${number}</h1>`)
// for (let i = 1; i <= 10; i++) {
//    document.write(`${number} x ${i} = ${number* i}<br/>`)
// }

// Questions 4

// let a = prompt("Enter your Subject")
// let Eng =("english")

// if (a == Eng){
//     document.write(`<h1> English 100 54 ${54%100}  </h1>`)
// }
// else{
//    document.write(`<h1>Your Fall</h1>`)
// }
// let b = prompt("Enter your Subject")
// let urdu =("urdu")
// if (b == urdu){
//     document.write(`<h1> Urdu 100 54 ${54%100}  </h1>`)
// }
// else{
//    document.write(`<h1>Your Fall</h1>`)
// }
// let c = prompt("Enter your Subject")
// let math =("math")
// if (c == math){
//     document.write(`<h1> Math 100 48 ${48%100}  </h1>`)
// }
// else{
//    document.write(`<h1>Your Fall</h1>`)
// }
//  let d = prompt("Enter your tottol Marks")
//  let aTotal = 100 +100 + 100
//  let bTotal =54 + 54 + 48
//  let Marks =("Mark")


//      document.write(`<h1> Your Total ${Marks} is <br/> ${aTotal} ${bTotal} ${aTotal%bTotal} <br/> Your Grade is A </h1>`)
 
 
// CHAPTER NO 2


// Question 1

// let a = prompt("Enter your City")
// let b = ("karachi")
// let c =("lahore")
// let d = ("islamabad")
// if(a==b) {
//    document.write(`<h1> WELLCOM TO CITY OF LIGHTS</h1>`)
// }else if(a==c) {
//    document.write(`<h1> WELLCOM TO KHOTA CITY</h1>`)
// }else if(a==d){
//    document.write(`<h1> WELLCOM TO BARGER CITY</h1>`)
// }else{
//    document.write(`<h1> YOUR CITY IS NOT FOUND</h1>`)
// }

// Qiestions 2

// let a= prompt("Please enter your gender")

// if(a=="male"){
//   document.write(`<h1>Good Morning Sir. </h1>`)
// }else if(a=="female"){
//   document.write(`<h1>Good Morning Ma'am. </h1>`)
// }

// Question 3

// let a =prompt("traffic signal")

// if(a=="red"){
//    document.write(`<h1>Must Stop</h1>`)
// }else if(a=="green"){
//  document.write(`<h1>Ready to move</h1>`)
// }else if(a=="yellow"){
//   document.write(`<h1>Move now</h1>`)
// }else {
//   console.log("Invalid input! Please enter red, yellow, or green.");
// }

// Question 4

// let a = prompt("Enter remaining fuel in your car")

// if(a == 0.25){
//    document.write(`<h1>Please refill the fuel in your car</h1>`)
// }else{
//    document.write(`<h1>You have enough fuel.</h1>`)
// }

// Questions 5

// let a =4

// if (++a === 5){
//    alert(`<h1>given condition for variable a is true"</h1>`)
// }
// let b =82

// if (b++ === 82){
//    alert(`given condition for variable a is true`)
// }

// if (c++ === 13){
//    alert(`condition 1 is true`)
// }
// if (c === 13){
//   alert("condition 2 is true");
//   }
//   if (++c < 14){
//   alert("condition 3 is true");
//   }
//   if(c === 14){
//   alert("condition 4 is true");
//   }

//  let a = 20000
//  let b = 2000
//  let c =a+b
//  if (c ===a+b) {
//    alert(`The cost equals`)
//  }

//  if (true){
//   alert("True");
//   }
//   if(false){
//     alert("False");
//   }

  // if ("car"<"cat"){
  //   alert("Car and Cat are the same");
  // }

  // Questions 6
  // let Subject1 =+(prompt("Enter marks obtained in Subject 1"))
  // let Subject2 =+(prompt("Enter marks obtained in Subject 2"))
  // let Subject3 =+(prompt("Enter marks obtained in Subject 3"))
  // let total =+(prompt("Enter a tatal marks"))

  // let percentage = (Subject1+Subject2+Subject3)
  // let average = (percentage/total)*100

  // let grat ;
  // if(average >= 90){
  //   grat = "A+"
  // }else if(average >= 80){
  //   grat = "A"
  // }else if(average >= 60){
  //   grat = "B"
  // }else if(average >=50){
  //   grat = "C"
  // }
  // else {
  //   grat = "Fall"
  // }
  // document.write(`<h1> Result Summary</h1> <br/>`)
  // document.write(`<h2>Total Maeks: ${total} </h2> <br/>`)
  // document.write(`<h2> Obtained Marks: ${percentage} </h2> <br/>`)
  // document.write(`<h2> Obtained Marks: ${average}% </h2> <br/>`)
  // document.write(`<h2> Grate: ${grat}% </h2> <br/>`)

// Questions 7

// let i=10
// let gass = parseInt(prompt("Gass the number "))
// if (gass===i){
//   document.write(`<h2>Bingo! Correct answer </h2>`)
// }else if (gass===++i || gass===--i){
//   document.write(`<h2>Close enough to the correct answer </h2>`)
// } else {
//     document.write("Sorry, that's not correct. Try again!");
//   }
// Prompt the user to enter a number

// Questions 8

// let a =parseInt( prompt("check whether the given number isdivisible by 3"))
// if(a %3 ==0){
//   alert("The number is divisible by 3")
//   }else {
//   alert("The number is not divisible by 3")
// }
 
// Questions 9

// let number = parseInt( prompt("checks whether the given input is an even number or an odd number"))

// if(number % 2 == 0){
//   alert("This Number Is Even ")
//   } else {
//   alert("This Number Is Odd ")
// }

// Questions 10

// let temperature=prompt("Check the Temperature")

//  if(temperature >= 40){
//   alert("It's too hot OutSide")
//   }else if(temperature >= 30){
//    document.write(`today's Wather is Narmal. `)
//   }else if(temperature >=20){
//     document.write(`Today's Wather is Cool. `)
//   }else if(temperature >=10){
//     document.write(`OMG! Today's Wather is so cool. `)
//   }

// Questions 11

// let operatro =prompt("Enter the oprertor to parform the calculation (enter the +,-,*,/,%) ")
// let num1 =prompt("Enter the number to parform the calculation ")
// let num2 =prompt("Enter the number to parform the calculation ")

// let Result;
 
// if (operatro=="+"){
//   Result = parseFloat(num1) + parseFloat(num2);
// }else if (operatro=="-"){
//   Result = parseFloat(num1) - parseFloat(num2);
// }else if (operatro=="*"){
//   Result = parseFloat(num1) * parseFloat(num2);
// }else if (operatro=="%"){
//   Result = parseFloat(num1) % parseFloat(num2);
// }else if (operatro=="/"){
//   Result = parseFloat(num1) / parseFloat(num2);
// }

// alert("The result is " + Result);

// CHAPTER =3

// Question 1

// let input =  prompt("Enter your Hint: ASCIIcodes")
//  let ascii = input.charCodeAt();

//  if(ascii >= 48 && ascii <= 57){
//    alert("This is a number")
//  }else if (ascii >= 65 && ascii <= 90){
//    alert("This is a Upparcase letter")
//  }else if(ascii >= 97 && ascii <= 122 ){
//    alert("This is a lowercase letter")
//  }

// Question 2

// let num1 = +prompt("Enter a number")
// let num2 = +prompt("Enter a number")
// if (num1 > num2){
//   console.log(` the larger number is ${num1}`)
//  }
//  else if (num2 > num1){
//   console.log(`the larger number is  ${num2}`)
//  }else{
//   console.log(`Both numbers are equal`)
//  }

// Question 3

// let num = prompt("Enter a number")

// if(num >0){
//   console.log(`${num} is a positve number`)
// }else if(num < 0){
//   console.log(`${num} is a nagavte number`)
// }else{
//   console.log(`The number is zero.`)
// }

// Question 4

// Question 5

// let pass =prompt("Entar Your Password")
// let password = 2109286

// if(pass==password){
//   alert("correct! The password you entered matches the original password")
// }else{
//   alert("Incorrect! The password you entered does not match the original password")
// }

// Question 6

// var greeting=prompt("Enter your ")
// var hour = 3;
// if (hour < 18) {
// greeting = "Good day";
// }else {
// greeting = "Good evening";
// }
// console.log(greeting);

// Question 7

//  let tim = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):")