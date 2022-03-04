function fullSentence() {  //Defines and names a function
    var part_1 = "I have ";     //Assigns a string to a variable
    var part_2 = "made this ";      //Assigns a string to a variable
    var part_3 = "into a complete ";        //Assigns a string to a variable
    var part_4 = "sentence.";       //Assigns a string to a variable
    var wholeSentence = part_1.concat(part_2,part_3,part_4); //Using the .concat() method to concatenate the strings and assign that to the variable
    document.getElementById("Concatenate").innerHTML = wholeSentence;   //Putting the varianle where the "Concatenate" ID is
}

function sliceMethod() {        //Defines and names a function
    var Sentence = "All work and no play makes Johnny a dull boy."; //Assigning the string to the variable
    var Section = Sentence.slice(27,33);    //Using the .slice() method to take a part of the string and assign it to the variable
    document.getElementById("Slice").innerHTML = Section;   //Putting the variable where the "Slice" ID is
}   

function upperMethod() {        //Defines and names a function
    var Name = "john";          //Assigning the string to the variable
    var upName = Name.toUpperCase();        //Using the .toUpperCase() method to turn all characters to upper case and assigning that to a variable
    document.getElementById("upperCase").innerHTML = upName;    //Putting the variable where the "upperCase" ID is
}

function searchMethod(){        //Defines and names a function
    var Phrase = "This is the phrase."      //Assigning the string to the variable
    var location = Phrase.search("the");    //Using the .search() method to locate where the first object with that value is and assign it to the variable
    document.getElementById("Search").innerHTML = location;     //Putting the variable where the "Search" ID is
}

function toStringMethod() {     //Defines and names a function
    var X = 182     //Assigning the number 182 to the variable
    document.getElementById("String").innerHTML = X.toString();     //Using the toString() method to make the variable that was a number into a string and put it where the "String" ID is
}

function toPrecisionMethod() {      //Defines and names a function
    var X = 1239.418624231;     //Assigns the number 1239.418624231 to the variable
    document.getElementById("Precise").innerHTML = X.toPrecision(10);   //Using the toPrecision() method to format the number and put the variable where the "Precise" ID is
}

function toFixedMethod() {      //Defines and names a function
    var X = 1239.418624231;     //Assigns the number 1239.418624231 to the variable
    document.getElementById("Fix").innerHTML = X.toFixed(1);   //Using the toFixed() method to format the number and put the variable where the "Fix" ID is
}

function valueOfMethod() {      //Defines and names a function
    var X = 56 ;     //Assigns the number 56 to the variable
    document.getElementById("Value").innerHTML = X.valueOf();   //Using the valueOf() method to retrun the value of the number and put the variable hwere the "Value"ID is
}

