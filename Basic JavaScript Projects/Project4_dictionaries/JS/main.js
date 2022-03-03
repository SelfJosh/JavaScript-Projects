var Car = {     //Defines a variable with a name
    Model:"Aventador ",         //
    Make:"Lamborghini ",        // Contents of Variable AKA a dictionary
    Year:2018,                  //
    Engine:"V8 Twin Turbo"      //
}

function my_dictionary() {      //Defines a function with a name                
    delete Car.Engine           //Deletes the Engine property of the Car variable
    document.getElementById("Dictionary").innerHTML = Car.Model + Car.Make + Car.Year + " " + Car.Engine;   //Puts the value of Car.Model, Car.Make, Car.Year, and Car.Engine where the "Dictionary" ID is
}                                                                                                           //The Car.Engine will display as Undefined because it was deleted