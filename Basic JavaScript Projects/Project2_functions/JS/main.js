function button() {                                         //Defining a function and naming it
    var str1 = "This is the text!";
    var str2= " This is another set of text";                   //Defining a variable and giving it 
                                                            //a string value
    document.getElementById("text").innerHTML = str1 + str2;       //Putting the value
}                                                           //of the variable
                                                            //with the "text" i



function Funct2() {
    var sentence = "I am learning ";
    sentence += "a lot from this course!";
    document.getElementById("Concatenate").innerHTML = sentence;
}