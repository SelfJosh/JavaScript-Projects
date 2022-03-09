alert(document.getElementById("p1").innerHTML)      //Putting the content of the "p1" ID in the Alert box

function countToTen() {     //Defining a function and name
    var Digit = "";         //Defining a variable and setting equal to "" to be able to hold a value later
    var x = 1;              //Defining a variable and setting  equal to 1
    while (x < 11 ) {       //While loop that compares x to 11
        Digit += "<br>" + x;//While x is less than 11 the Digit variable will be equal to and added to "<br>" + x meaning everytime the loop executes it will add the two x's and set it equal to Digit 
        x++;                //Increments x by 1
    }
    document.getElementById("countingTen").innerHTML = Digit;//Assigning the Digit variable and putting it where the "countingTen" ID is
}

function findLength() {     //Defining a function with a name 
    var Input = document.getElementById("input").value;     //Defining a variable and setting it equal to the value of the "input" ID 
    var Length = Input.length;      //Defining a variable and setting equal to the length of the variable Input 
    document.getElementById("Length").innerHTML = Length;       //Assigning the Length variable and putting it where the "Length" ID is
}

var Instruments = ['Guitar', "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];   //Defining a variable and setting it equal to an array
var Contents = "";      //Defining a variable and setting it equal to "" to hold a value later
var y;      //Defining a variable 
function instrumentLoop() {     //Defining a function with a name
    for (y = 0; y < Instruments.length; y++) {      //For loop that sets y equal to 0, it then compares y to the length of the array within the Instruments variable, everytime this finishes executing it will increment y by 1
        Contents += Instruments[y] + "<br>";        //For everytime y is less than the length of the Instruments Array the Contents variable will add and set the Object in the array with the index of [y] + "<br>" equal to itself
    }
    document.getElementById("Instrument").innerHTML = Contents; //Putting the Contents variable where the "Instrument" ID is
}

function myArray() {        //Defining a function with a name
    var moves = []          //Defining a variable and an empty array
    moves[0] = "Low Punch"; //Putting "Low Punch" in the index of moves[0]
    moves[1] = "High Punch";//Putting "High Punch" in the index of moves[1]
    moves[2] = "Power Punch";//Putting "Power Punch" in the index of moves[2]
    moves[3] = "Low Kick";//Putting "Low Kick" in the index of moves[3]
    moves[4] = "High Kick";//Putting "High Kick" in the index of moves[4]
    moves[5] = "Power Kick";//Putting "Power Kick" in the index of moves[5]
    moves[6] = "Throw";//Putting "Throw" in the index of moves[6]
    document.getElementById("moveList").innerHTML = `Cannot use ${moves[6]}. Lvl 3 needed`;     //Putting a string that concatonates the object at the index of moves[6] where the "moveList" ID is
}

function constantFunction() {   //Defining a function with a name
    const Vehicle = {model:"Chiron ", make:"Bugatti ", year:"2018 "}        //Defining a constant and setting equal to 3 properties with strings assigned to each property 
    document.getElementById("Constant").innerHTML = "Your new car is a " + Vehicle.year + Vehicle.make + Vehicle.model + "!";   //Putting a string and concatonating it with the strings of different properties of the Vehicle constant where the "Constant" ID is
}

var x = 22      //Defining a variable and setting it equal to 22
document.getElementById("var").innerHTML = x;   //Putting the x variable where the "var" ID is 
{
    let x = 2000000                             //Using let to assign x equal to 2000000 inside of curly brackets
    document.getElementById("let").innerHTML = x;//Putting the x variable where the "let" ID is
}
document.getElementById("both").innerHTML = x;//Putting the x variable where the "both" ID is


function returnFunction() { //Defining a function with a name
    return "Did you that the number " + Math.PI + " is easy to remember. Its as easy as pi!";     //Stops the function and returns the strings and the number of Pi
}

document.getElementById("PI").innerHTML = returnFunction();        //Putting the result of the returnFunction() where the "PI" ID is 

let SmartLamp = {       //Using let to create an object with different properties 
    State: "On",        //Defining a property and setting equal to a string
    Brightness: "75%",  //Defining a property and setting equal to a string
    Color: "Eggshell White",    //Defining a property and setting equal to a string
    Description: function() {   //Defining a property and setting it equal to a function
        return "The Lamp is currently " + this.State + " emitting an " + this.Color + " at " + this.Brightness; //This ends the functions and returns teh strings concatanated withe the strings the properties called on
    }
};
document.getElementById("smartLamp").innerHTML = SmartLamp.Description();       //Putting the property Description of the SmartLamp object where the "smartLamp" ID is

function breakFunction() {  //Defining a function with a name
    var phrase = "";        //Defining a variable and setting it equal to "" 
    for (let x = 0; x < 6; x++) {       //Using a for loop that uses let to assign x equal to 0, then compares x to 6, and when finished increments x by 1
        if (x == 5) { break;}           //If x is equal to 5 then the loop will "break"
        phrase += "<br>" + x;           //Setting and adding the right operand to the phrase variable
    }
    document.getElementById("Break").innerHTML = phrase;        //Putting the phrase variable where the "Break" ID is
}

function continueFunction() {       //Defining a function with a name
    var phrase2 = "";           //Defining a variable and setting it equal to "" 
    for (let x = 0; x < 7 ; x++) {      //Using a for loop that uses let to assign x equal to 0, then compares x to , and when finished increments x by 1
        if(x % 2) {continue;}           //If x is divided by 2 and there is a remainder it will "continue" or skip to the next value    (Skips odds)
        phrase2 += "<br>" + x;          //If x is divided by 2 and there is no remainder it will set and add the right operande to the phrase2 variable (Displays evens)
    }
    document.getElementById("Continue").innerHTML = phrase2;            //Putting the phrase2 variable where the "Continue" ID is
}