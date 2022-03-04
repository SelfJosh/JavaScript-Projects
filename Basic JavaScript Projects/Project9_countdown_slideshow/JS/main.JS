var slideIndex = 1; //Assigning 1 to the variable
showSlides(slideIndex);     //Calling a thefunction with the Variable as its parameter


//This is for going to the next image
function plusSlides(n) {    //Defining a function with a name and a perameter
    showSlides(slideIndex += n);    //Calling a function with the parameter being the variable added by n
}

//
function currentSlide(n) {      //Defining a function with a name and a perameter
    showSlides(slideIndex = n); //Calling a function with a perameter which the variable equal to n
} 

function showSlides(n) {        //Defining a function with a name and a perameter
var i;                      //Assigning a new variable
var slides = document.getElementsByClassName("mySlides");        //Assigning the class "mySlide" to the variable as a collection 
var rectangles = document.getElementsByClassName("Rectangles");     //Assigning the class "Rectangles" to the variables
if (n > slides.length) {slideIndex = 1 ;}        //If statement that compares n with the length of slides 
                                                    //If true assign the slideIndex to 1
    
if (n < 1 ) {slideIndex = slides.length;}       //If statement that compares n to 1
                                                    //If n is less than 1 the slideIndex is set to the slides length
for(i = 0; i < slides.length; i++) {        //For loop that assigns 0 to the local variable i. Then sets a condition that compares i to slides.length and increments i everytime it is executed
    slides[i].style.display = "none";       //As long as i is less than slides.length the display style for the slides[i] will be none
}
for (i = 0; i < rectangles.length; i++){    //For loop that assigns 0 to the local variable i. Then sets a condition that compares i to rectangles.length and increments i everytime it is executed
    rectangles[i].className = rectangles[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
rectangles[slideIndex-1].className += " active";
}     

function countdown() {      //Defining a function with a name
    var seconds = document.getElementById("Seconds").value;     //Assiging the value of the Element with the "Second" ID to the variable

    function tick(){        //Defining a function with a name
        seconds = seconds - 1;      //Assigning the variable - 1 to the same variable
        timer.innerHTML = seconds   //Putting the variable where the "timer" is
        var time = setTimeout(tick, 1000); //Using the setTimeout() method to pause the program for one second each time
        if (seconds == -1) {        //If statement comparing the variable with -1
            alert("Time's up!")     //Once the statement is true an alert with the text "Time's up" will appear
            clearTimeout(time);     //Clears the variables method
            timer.innerHTML= ""     //Sets the "time" ID to ""
        }
    }
    tick();         //Calls on the tick() function
}
