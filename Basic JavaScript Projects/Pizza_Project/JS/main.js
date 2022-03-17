function getRecipe() {  //This function that has been named getRecipe() will initialize how string so it get passed from function to funtion and turned into a receipt
    var text1 = "<h3>You ordered:</h3>"; //Asigning a variable that will be carried on to another function
    var runningTotal = 0;   //Assigning a varaible to 0 to hold a value later and use in a different function
    var sizeTotal = 0;      //Assigning a varaible to 0 to hold the price of the selected size 
    var sizeArray = document.getElementsByClassName("size"); //This varaible is assigned to the element with the class name "size"
    for (var i = 0; i < sizeArray.length; i++) {    //for statement that will check if a size was selected
        if (sizeArray[i].checked) {     
            var selectedSize = sizeArray[i].value;  //Once selected it will it will get the value of the array and assign it to the varaible
            text1 = text1 + selectedSize + "<br>";  //Then the varaible from above will be assigned to itself and the varaible selectedSize
        }
    }
    if (selectedSize === "Personal Pizza") {    //If statements to assign a price to the varaible sizeTotal based on the selectedSize string
        sizeTotal = 10;
    } else if (selectedSize === "Medium Pizza") { //If statements to assign a price to the varaible sizeTotal based on the selectedSize string
        sizeTotal = 14;
    } else if (selectedSize === "Large Pizza") { //If statements to assign a price to the varaible sizeTotal based on the selectedSize string
        sizeTotal = 16;    
    } else if (selectedSize === "Extra Large Pizza") { //If statements to assign a price to the varaible sizeTotal based on the selectedSize string
        sizeTotal = 20;
    } else if (selectedSize === "Jumbo Pizza") { //If statements to assign a price to the varaible sizeTotal based on the selectedSize string
        sizeTotal = 25;
    }
    runningTotal = sizeTotal        //Assigns the price of the sizeTotal and assigns it to the runningTotal 
    console.log(selectedSize + " = $" + sizeTotal + ".00" );    //Logging the transaction to be able to display it once the function has been initiated
    console.log("size text1: " + text1 );   //Logging the transaction to be able to display it once the function has been initiated
    console.log("subtotal: $" + runningTotal + ".00 " );    //Logging the transaction to be able to display it once the function has been initiated
    getTopping(runningTotal,text1); //Calling for a function with its parameters
};

function getTopping(runningTotal,text1) {  //Defing a function for the toppings with its paremeters that are varaibles from the first functions
    var toppingTotal = 0; //Assigning a varaible to 0 to hold a value later
    var selectedTopping = []; //Assigning a varible to an empty array
    var toppingArray = document.getElementsByClassName("toppings"); //This varaible is assigned to the element with the class name "toppings"
    for (var j = 0; j < toppingArray.length; j++) { //For statement for checking amount of toppings selected
        if (toppingArray[j].checked) {  //if statement that checks if there are checked items
            selectedTopping.push(toppingArray[j].value);      //Adds topping to empty array
            console.log("Selected topping items: ("+ toppingArray[j].value +")");       //logging the toppings
            text1 = text1 + toppingArray[j].value + "<br>"; //Assigning toppings to text1 to display later
        }
    }
    var toppingCount = selectedTopping.length;  //Total number of toppings being assigned to toppingCount Varaible
    if (toppingCount > 1) { //if statement that only executed when the topping count is greater than 1 to allow a free topping
        toppingTotal = ((toppingCount - 1) * 2);    //This adds 2 for every topping except the first one
    } else {
        toppingTotal = 0;   //if no toppings 
    }
    runningTotal = (runningTotal + toppingTotal); //updates total to add toppings
    console.log("Total selected topping items: " + toppingCount); //Logging the transaction to be able to display it once the function has been initiated
    console.log(toppingCount + "topping - 1 free topping = " + "$" + toppingTotal + ".00"); //Logging the transaction to be able to display it once the function has been initiated
    console.log("subtotal: $" + runningTotal + ".00 " ); //Logging the transaction to be able to display it once the function has been initiated
    console.log("topping text1: " + text1 ); //Logging the transaction to be able to display it once the function has been initiated
    console.log("Purchase total: " + "$" + runningTotal + ".00"); //Logging the transaction to be able to display it once the function has been initiated
    document.getElementById("showText").innerHTML = text1; //Displays the selected size and toppings
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3"; //Displays the price of the transaction
};
