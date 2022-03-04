var X = 21; //Assigns the value 21 to the global variable X

function math1() {  //Defining a function with a name
    document.write(X + 10 + "<br>");    //Displaying the results of adding X and 10
}

function math2() {
    var Y = 31  //Assigns the value 31 to the local variable Y 
    document.write(X + 3 + "<br>");      //Displaying the results of adding X and 3
    document.write(X + Y + "<br>");     //Displaying the results of adding the global variable X with the local variable Y
}

function math3() {      //Defining a function with a name
    document.write(Y + 10 + "<br>");     //Intentionally using local variable Y to create error in console log 
}

math1();        //Calling on the math1() function
math2();        //Calling on the math2() function
math3();        //Calling on the math3() function

function get_Date() {       //Defining a Function with a name
    if (new Date() .getHours() < 22) {    //If statement that compares the value of the local Hour to 22 if it is past 10:00 P.M. A message will not display
        document.getElementById("Check").innerHTML = "It is still before 10:00 P.M. <br>";  //Writes the string if the statement above is true
    }
}

function get_Month() {       //Defining a Function with a name
    if (new Date() .getMonth() == 2) {    //If statement that compares the value of the local Date to 2 if it is equal to 2 a message will display
        document.getElementById("Check_month").innerHTML = "It is March! ";  //Writes the string if the statement above is true
    }
}

function Age_function(){    //Definign a function with a name
    Age = document.getElementById("Age").value;     //Assigning the value of the Element with the "Age" ID to Age
    if (Age >= 18) {    //If statement comparing Age and 18 
        Vote = "You are old enough to vote!";   //This string will be assigned to Vote if Age is greater than or equal to 18
    }
    else {      //Else statemnet to specify what to do if false
        Vote = "You are not old enough to vote" //This string will be assigned to Vote if Age is less than 18
    }
    document.getElementById("howOld").innerHTML = Vote; //Putting Vote where the "howOld" ID is
}

function timeFunction() {       //Defines a function with a name
    var Time = new Date().getHours();       //Assigns the local hour to the variable Time
    var Reply;              //Sets a variable called Reply
    if (Time < 12 == Time > 0) {        //If statement that compares time with 12 and 0 
        Reply = "It is morning time!";  //This string will be assigned to Reply if Time is less than 12 AND greater than 0
    }
    else if (Time >=12 == Time < 18) {      //Else if statement that compares time with 12 and 0
        Reply = "It is afternoon.";         //This string will be assigned to Reply if Time is greater than or equal to 12 AND less than 18
    }

    else {  //Else statement to specify what to do if false
        Reply = "It is evening time.";  //This string will be assigned to Reply if the statements before do not apply
    }
    document.getElementById("timeOfDay").innerHTML = Reply; //Putting Reply where the "timeOfDay" ID is
}