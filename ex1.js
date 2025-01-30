// document.getElementById('student_message').innerHTML = "Q1";

let Name = 'Sanan';
let age = 21;
document.getElementById("student_message").innerHTML = "Hy my name is " + Name + " and I am " + age + " years old";


// document.getElementById('student_message1').innerHTML = "Q2";
let result = 101/7;
let format = result.toFixed(2);

document.getElementById('student_message2').innerHTML = format;


let phone1 = "988866552";
let phone2 = "99087612366";
let phone3 = 876543123;

if(phone1.length==9){
    document.getElementById('student_message3').innerHTML = phone1 +" is valid";
}
else{
    document.getElementById('student_message4').innerHTML = phone1 + " is not valid";
}

if (phone2.length==9) {
    document.getElementById('student_message5').innerHTML = phone2 + " is valid";
}
else{
    document.getElementById('student_message6').innerHTML = phone2 + " is not valid";
}
if (phone3.length==9) {
    document.getElementById('student_message7').innerHTML = phone3 + " is valid";
}
else{
    document.getElementById('student_message8').innerHTML = phone3 + " is not valid";
}

// document.getElementById('student_message4').innerHTML = "Q4";
let n1 = 32;
let n2 = 6;
result = Math.pow(n1, n2)

document.getElementById('student_message9').innerHTML = result;

// document.getElementById('student_message5').innerHTML = "Q5";

// valid variable
// 1- attempt_2
//2- $num1
// 3- NAME

//invalid variable
//first-name
//typeof
//2ndAttempt
//full name

var quantity = "25";
    var number = 6;
    var pressure;
    var temperature = null;

    document.getElementById('student_message10').innerHTML = (quantity += quantity); 
    document.getElementById('student_message10').innerHTML = ( (7+5) / number + 2 ); 
    document.getElementById('student_message12').innerHTML = (pressure); 
    document.getElementById('student_message13').innerHTML = (temperature); 
    document.getElementById('student_message14').innerHTML = (typeof pressure); 
    document.getElementById('student_message15').innerHTML = (typeof temperature);