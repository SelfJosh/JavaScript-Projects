function addition_function() { //Defines a function with a name
    var addiition = 2 + 2 ; //Defines a variable and math and the variable will hold the answer
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addiition; //Putting the value of a string and the variable where the "Math1" ID is
}

function subtraction_function() { //Defines a function with a name
    var subtraction = 10 - 15 ; //Defines a variable and math and the variable will hold the answer
    document.getElementById("Math2").innerHTML = "10 - 15 = " + subtraction; //Putting the value of a string and the variable where the "Math2" ID is
}

function multiplication_function() { //Defines a function with a name
    var multiply = 12 * 12 ;    //Defines a variable and math and the variable will hold the answer
    document.getElementById("Math3").innerHTML = "12 * 12 = " + multiply; //Putting the value of a string and the variable where the "Math3" ID is
}

function division_function() {  //Defines a function with a name
    var divide = 264 / 8 ;  //Defines a variable and math and the variable will hold the answer
    document.getElementById("Math4").innerHTML = "264 / 8 = " + divide; //Putting the value of a string and the variable where the "Math4" ID is
}

function math1_function() { //Defines a function with a name
    var solve = (16 + 4) * 15 / 5 -3 ;  //Defines a variable and math and the variable will hold the answer
    document.getElementById("Math5").innerHTML = "(16 + 4) * 15 / 5 -3 = " + solve; //Putting the value of a string and the variable where the "Math5" ID is
}

function remainder_function() { //Defines a function with a name
    var remain = 25 % 6 ;   //Defines a variable and math and the variable will hold the answer
    document.getElementById("Math6").innerHTML = " If you divide 25 by 6 you get a remainder of? =  " + remain; //Putting the value of a string and the variable where the "Math6" ID is
}

function negation_function() {  //Defines a function with a name
    var x = 10 ;    //Defines a variable and a number
    document.getElementById("Math7").innerHTML = " 10 negated is =  " + -x; //Putting the value of a string and the negated variable where the "Math7" ID is
}

function increment_function() { //Defines a function with a name
    var inc = 9;    //Defines a variable and a number
    inc++;  //increments the variable by 1
    document.getElementById("Math8").innerHTML = "9 incremented by 1 is = " + inc; //Putting the value of a string and the variable where the "Math8" ID is
}

function decrement_function() { //Defines a function with a name
    var dec = 9;    //Defines a variable and a number
    dec--;  //decremnets the variable by 1
    document.getElementById("Math9").innerHTML = "9 decremented by 1 is = " + dec; //Putting the value of a string and the variable where the "Math9" ID is
}

 function rand_function() { //Defines a function with a name
     document.getElementById("Math10").innerHTML = Math.round(Math.random() * 100); //Putting the value of Math object method to get a random number between 0 and 100 where the "Math10" ID is
 }

 function power_function() {    //Defines a function with a name
    document.getElementById("Math11").innerHTML = document.getElementById("Math11").innerHTML + Math.pow(2,6); //Putting the value of the "Math11" ID and the value of a Math object method where the "Math11" ID is
}
