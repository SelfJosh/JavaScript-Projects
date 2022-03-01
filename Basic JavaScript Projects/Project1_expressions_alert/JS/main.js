alert("Hey don\'t close me!"); //This shows an alert with that text
window.alert("Okay don\'t do it again!"); //This shows an alert window with that text

var X = 'Concantenate ';    // Defining a variable with a string
var Y = 'Me';               // Defining a variable with a string
var str = new String((X) + (Y)); // Defining a new string varible that 
                                //concantenates two previous string variables
document.write(str.fontcolor("blue"));// This sets the font of the string to blue

var express1 = 10 * 25; // An expression

document.write(express1);   //Display variable "express1"

function button() {                                         //Defining a function and naming it
    var str = "This is the button text!";                   //Defining a Varianle and giving it 
                                                            //a string value
    document.getElementById("button_text").innerHTML = str; //Putting the value
}                                                           //of the variable
                                                            //with the "button_text" id