function Ride_Function() {      //Defines A function with a name
    var Height, Can_ride;       //Defining two Variables
    Height = document.getElementById("Height").value;   //Assigning the value of the element with the "Height" ID to the Height variable    
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";   //Using ternary operation to compare the Height variable and 52, Phrases for True or False to assign to the Can_ride variable
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";     //Putting the Can_ride variable with a concatenated string where the "Ride" ID is
}

function age_function() {   //Defines A function with a name
    var Age, Can_vote;  //Defining two Variables
    Age = document.getElementById("age").value;     //Assigning the value of the element with the "age" ID to the Age variable
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";   //Using ternary operation to compare the age variable and 18, Phrases for True or False to assign to the Can_vote variable
    document.getElementById("Can_vote").innerHTML = Can_vote + " to vote.";     //Putting the Can_vote variable with a concatenated string where the "Vote" ID is
}

function Vehicle(Make, Model, Year, Color) {        //Defines A function with a name and has Constructors (Vehicle() is an object constructor)
    this.Vehicle_Make = Make;       //Using the "this" keyword to indicate an owner of the property "Vehicle_Make" being assign the value of the "Make" object 
    this.Vehicle_Model = Model;     //Using the "this" keyword to indicate an owner of the property "Vehicle_Model" being assign the value of the "Model" object 
    this.Vehicle_Year = Year;       //Using the "this" keyword to indicate an owner of the property "Vehicle_Year" being assign the value of the "Year" object 
    this.Vehicle_Color = Color;     //Using the "this" keyword to indicate an owner of the property "Vehicle_Color" being assign the value of the "Color" object 
}
var Jack = new Vehicle("Lamborghini ", "Aventador ", 2019, "Black ")        //Assigning the Jack variable as the owner of a new Vehicle instance and the values of each object
var Jill = new Vehicle("Toyota ", "Camry ", 2006, "Blue ")      //Assigning the Jill variable as the owner of a new Vehicle instance and the values of each object
var Holly = new Vehicle("Tesla ", "Model 3 ", 2020, "Silver ")      //Assigning the Holly variable as the owner of a new Vehicle instance and the values of each object
function myFunction(){      //Defines A function with a name    
    document.getElementById("Keywords_and_Constructors").innerHTML =                                                                    //Putting Concatenated strings and the value of multiple objects owned by Jack
    "Jack Drives a " + Jack.Vehicle_Color + Jack.Vehicle_Make + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;           //where the "Keywords_and_Constructors" ID is
}

function Character(Sex, Age, Height, Weight ) {     //Defines A function with a name and has Constructors (Character() is an object constructor)
    this.Character_Sex = Sex;       //Using the "this" keyword to indicate an owner of the property "Character_Sex" being assign the value of "Sex" object
    this.Character_Age = Age ;      //Using the "this" keyword to indicate an owner of the property "Character_Age" being assign the value of "Age" object
    this.Character_Height = Height;     //Using the "this" keyword to indicate an owner of the property "Character_Height" being assign the value of "Height" object
    this.Character_Weight = Weight;     //Using the "this" keyword to indicate an owner of the property "Character_Weight" being assign the value of "Weight" object
}
var Jermain = new Character("Male", 24, 185, 165)     //Assigning the Jacko varaible as the owner of a new Character instance and the values of each object
var Beyonce = new Character("Female", 21, 167, 125 )      //Assigning the Beyonce varaible as the owner of a new Character instance and the values of each object
var Lilly = new Character("Female", 26, 180, 135)       //Assigning the Lilly varaible as the owner of a new Character instance and the values of each object
function Char_Function(){       //Defines A function with a name
    document.getElementById("Jermain_info").innerHTML = "Jermain is a " + Jermain.Character_Age + " year old " + Jermain.Character_Sex      //Putting concatenated strings and the value of multiple
    + " who is " + Jermain.Character_Height + "cm tall and weighs " + Jermain.Character_Weight ;                                            //objects owned by Jermain where the "Jermain_info" is
}

function count_function() {     //Defines A function with a name
    document.getElementById("Counting").innerHTML = Count();
    function Count() {      //Defines A function with a name nested within a function
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1}       //Defines A function with a name nested within a nested function
        Plus_one();     //Calls on the Plus_one() Function
        return Starting_point;  //Displays the result of the Staring_point
    }
}