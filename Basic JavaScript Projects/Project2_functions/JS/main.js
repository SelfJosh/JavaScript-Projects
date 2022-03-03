function button() {                                         //Defining a function and naming it
    var str1 = "This is the text!";
    var str2= " This is another set of text";                   //Defining a variable and giving it 
                                                            //a string value
    document.getElementById("text").innerHTML = str1 + str2;       //Putting the value
}                                                           //of the variable
                                                            //with the "text" iD



function Funct2() {     //Defining a function with a name
    var sentence = "I am learning ";    //Assigning a variable with a string
    sentence += "a lot from this course!"; // Concatenating the variable with another string
    document.getElementById("Concatenate").innerHTML = sentence; // Putting the value of the variable where the "Concatenate" ID is
}