    document.write(typeof 3 ); //Wites the data type of "3"

document.write("<br>") //Puts the next text on the next line

    document.write("20" + 0 );  //Uses type coercion to display "200"

document.write("<br>")

    document.write(0/0 );   //Displays NaN(Not a Number)

document.write("<br>")

    document.write(isNaN('This is a String') ); //Checks if "This is a string" is not a number, this will display true

document.write("<br>")

    document.write(isNaN('007'));   //Checks if "007" is not a number, this will display false

document.write("<br>")

    document.write(2E310); //This displays a Infinity because it is too big of a number

document.write("<br>")

    document.write(-2E310); //This displays -Infinity because it is too big to display

document.write("<br>")

    document.write(100 > 20);   //This displays true because 100 is greater than 20

document.write("<br>")

    document.write(20 > 100);   //This displays false because 20is not greater than 100

document.write("<br>")

    console.log(2+2);   //This will put the sum of 2+2 in the console

    console.log(100 > 1000);    //This will display False in the console because 100 is not greater than 1000

    document.write(10==10)  //This will display true because 10 does equal 10

document.write("<br>")

    document.write(0==10)

document.write("<br>")

X = 10;                                 //Defines variables and values
Y = 10;
Z = "10";
P = "P";
T = "T";

    document.write(X===Y);  //This will display true because X and Y are the same data type and same values

document.write("<br>")

    document.write(Y===P);  //This will display as false because Y and P are not the same data type or values

document.write("<br>")

    document.write(X===Z);  //This will display as false because X and Z are not the same data type even though they are the same value

document.write("<br>")

    document.write(P===T);  //This will display as false because P and T dont have the same value even though they are the same data type

document.write("<br>")

    document.write(5 > 2 && 3 > 2); //This will display as true because 5 is greater than 2 AND 3 is greater than 2

document.write("<br>");

    document.write(5 > 2 && 265 < 4);   //This will display False because 5 is greater than 2 but 265 is not less than 4

document.write("<br>");

    document.write(5 > 2 || 2 > 10);    //This will display true because 5 is greater than 2 

document.write("<br>");

    document.write(1 > 2 || 10 > 15);   // This will display as false because 1 is not less 2 AND 10 is not less than 15

document.write("<br>");

    document.write(!(20 > 10));     //This will dislay as False because 20 is greater than 10, the ! sign is NOT and will check if it is false( true = false )

document.write("<br>");

    document.write(!(5 > 10))   //This will dislay as True because 5 is not greater than 10, the ! sign is NOT and will check if it is false( false = true )

document.write("<br>");