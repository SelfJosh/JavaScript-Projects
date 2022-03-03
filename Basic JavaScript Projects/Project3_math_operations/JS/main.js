function addition_function() {
    var addiition = 2 + 2 ;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addiition;
}

function subtraction_function() {
    var subtraction = 10 - 15 ;
    document.getElementById("Math2").innerHTML = "10 - 15 = " + subtraction;
}

function multiplication_function() {
    var multiply = 12 * 12 ;
    document.getElementById("Math3").innerHTML = "12 * 12 = " + multiply;
}

function division_function() {
    var divide = 264 / 8 ;
    document.getElementById("Math4").innerHTML = "264 / 8 = " + divide;
}

function math1_function() {
    var solve = (16 + 4) * 15 / 5 -3 ;
    document.getElementById("Math5").innerHTML = "(16 + 4) * 15 / 5 -3 = " + solve;
}

function remainder_function() {
    var remain = 25 % 6 ;
    document.getElementById("Math6").innerHTML = " If you divide 25 by 6 you get a remainder of? =  " + remain;
}

function negation_function() {
    var x = 10 ;
    document.getElementById("Math7").innerHTML = " 10 negated is =  " + -x;
}

function increment_function() {
    var inc = 9;
    inc++;
    document.getElementById("Math8").innerHTML = "9 incremented is = " + inc;
}

function decrement_function() {
    var dec = 9;
    dec--;
    document.getElementById("Math9").innerHTML = "9 decremented is = " + dec;
}

 function rand_function() {
     document.getElementById("Math10").innerHTML = Math.round(Math.random() * 100);
 }

 function power_function() {
    document.getElementById("Math11").innerHTML = document.getElementById("Math11").innerHTML + Math.pow(2,6);
}
