let activePlayer = 'X'; //This variable keeps track of whose turn it is.

let selectedSquares = []; //This array will store an array of moves. This will be used to determine winning conditions

function placeXOrO(squareNumber) {  //This function will be used for placing X or O
    if(!selectedSquares.some(element => element.includes(squareNumber))){   //This if statement is used to make sure that a square hasnt already been selected by using the
                                                                            //.some() method to check each element of the selectedSquares array to see if it has a square number clicked on
        let select = document.getElementById(squareNumber); //This variable retieves the html element id that was clicked
        
        if(activePlayer === "X") {  //This condition checks whose turn it is
            select.style.backgroundImage = 'url("Images/x.png")'; //If active player is equal to 'X', the x.png is placed in HTML
        }   else {      //This makes it so that activePlayer can only be 'X' or 'O' if not 'X' then it must be 'O'
            select.style.backgroundImage = 'url("Images/o.png")';   //If activePlayer is equal to 'O', the o.png is placed in HTML
        }
        selectedSquares.push(squareNumber + activePlayer); //squareNumber and activePlayer are concatenated together and added to the array

        checkWinConditions();   //This calls a function to check for any winning conditions

        if(activePlayer === 'X'){   //This condition is to change the activePlayer
            activePlayer = 'O';     //If activePlayer is 'X' change it to 'O'
        } else {    //If activePlayer is anything other than 'X'
            activePlayer = 'X'  //Change the activePlayer to 'X'
        }
        audio('./Media/placement.mp3');  //This function plays a placement sound

        if(activePlayer === 'O') {  //This checks if it is the computers turn
            disableClick(); //This disables clicking for computers choice
            setTimeout(function (){computersTurn() ; }, 1000)// This functions waits 1 second before the computer places image and enable click
        }

        return true; //Returning true is needed for our computerTurn() function to work
    }   
    function computersTurn() {  //This function results in a random square being selected
        let success = false; //This boolean is needed for the while loop
        let pickASquare;    //This variable will store a number 0 - 8
        while(!success) {   //This condition allows our while loop to keeop trying if a square is already selected
            pickASquare = String(Math.floor(Math.random()* 9)); //A random number between 0 and 8 is selected
            if(placeXOrO(pickASquare)) {    //If the random nnumber evaluated returns true, the square has not been selected yet
                placeXOrO(pickASquare)//This calls the function
                success = true; //This changes our boolean and ends the loop
            };
        }
    }                                                                    
}

function checkWinConditions() {  //This function parses the selected squares array to search for win conditions. The drawWinLine function is called to draw line if condition is met.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine (50, 100, 558, 100)} //X 0, 1, 2 conditions
    else if (arrayIncludes('3X','4X','5X')) {drawWinLine(50, 304, 558, 304)}//X 3, 4, 5 conditions
    else if (arrayIncludes('6X','7X','8X')) {drawWinLine(50, 508, 558, 508)}//X 6, 7, 8 conditions
    else if (arrayIncludes('0X','3X','6X')) {drawWinLine( 100, 50, 100, 558)}//X 0, 3, 6 conditions
    else if (arrayIncludes('1X','4X','7X')) {drawWinLine( 304, 50,304, 558)}//X 1, 4, 7 conditions
    else if (arrayIncludes('2X','5X','8X')) {drawWinLine( 508, 50, 508, 558)}//X 2, 5, 8 conditions
    else if (arrayIncludes('6X','4X','2X')) {drawWinLine( 100, 508, 510, 90)}//X 6, 4, 2 conditions
    else if (arrayIncludes('0X','4X','8X')) {drawWinLine( 100, 100, 520, 520)}//X 0, 4, 8 conditions
    else if (arrayIncludes('0O','1O','2O')) {drawWinLine( 50, 100, 558, 100)}//O 0, 1, 2 conditions
    else if (arrayIncludes('3O','4O','5O')) {drawWinLine( 50, 304, 558, 304)}//O 3, 4, 5 conditions
    else if (arrayIncludes('6O','7O','8O')) {drawWinLine( 50, 508, 558, 508)}//O 6, 7, 8 conditions
    else if (arrayIncludes('0O','3O','6O')) {drawWinLine( 100, 50, 100, 558)}//O 0, 3, 6 conditions
    else if (arrayIncludes('1O','4O','7O')) {drawWinLine( 304, 50, 304, 558)}//O 1, 4, 7 conditions
    else if (arrayIncludes('2O','5O','8O')) {drawWinLine( 508, 50, 508, 558)}//O 2, 5, 8 conditions
    else if (arrayIncludes('6O','4O','2O')) {drawWinLine( 100, 508, 510, 90)}//O 6, 4, 2 conditions
    else if (arrayIncludes('0O','4O','8O')) {drawWinLine( 100, 100, 520, 520)}//O 0, 4, 8 conditions
    else if (selectedSquares.length >= 9 ){ //This condition checks for a tie. If none of the conditions register and 9 squares have been selected the code will execute
        audio('./Media/tie.mp3');   //This functions plays the tie game sound
        setTimeout(function() {resetGame();}, 1000) //This function sets a 0.3 second timer before the resetGame is called
    }
    function arrayIncludes(squareA, squareB, squareC) { //This function checks if any array includes 3 strings. It is used to check for each win condition
        const a = selectedSquares.includes(squareA)     //
        const b = selectedSquares.includes(squareB)     //These varaibles will be used to check for 3 in a row
        const c = selectedSquares.includes(squareC)     //
        if(a === true && b === true && c === true) {return true}
    }
}

function disableClick() { //This function makes the body element temporarily unclickable
    body.style.pointerEvents = 'none'; //This makes the body unclickable
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000)//This makes the body clickable again after 1 second
}

function audio(audioURL) {  //This function takes a string parameter of the path that was set earlier
    let audio = new Audio (audioURL);   //Create new audio object and pass the path as a parameter
    audio.play(); //Play methhod plays the sound
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //This function will utilize the html canvas to draw win lines
    const canvas = document.getElementById('lines') //This will access the html canvas element
    const c = canvas.getContext('2d');  //This will give us access to methods and properties to use on the canvas
    let x1 = coordX1,   //This is the x-axis starting point of the line
        y1 = coordY1,   //This is the y-axis starting point of the line
        x2 = coordX2,   //This is the x-axis ending point of the line 
        y2 = coordY2,   //This is the y-axis ending point of the line
        x = x1,         //This variable stores temporary x-axis data we update in our animation loop
        y = y1;         //This variable stores temporary y-axis data we update in our animation loop

    function animateLineDrawing() {   //This function will interact with the canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing);    //This variable creates a loop
        c.clearRect(0,0,608,608)    //This method clears content from the last loop iteration
        c.beginPath();      //This method starts a new path 
        c.moveTo(x1, y1)    //This method moves us to a starting point for our line
        c.lineTo(x, y)      //This method is used to indicate the end point
        c.lineWidth = 10;   //This method sets the width of the line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';    //This method sets the color of the line
        c.stroke(); //This method draws everything we had above

        if (x1 <= x2 && y1 <= y2){  //This condition checks if we have reach the end point
            if(x < x2) {x += 10;}   //This condition adds 10 to the previous end x point
            if (y < y2) {y += 10;}  //This condition adds 10 to the previous end y point
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop)} // This condition cancels our loop if we reach the end points
        }

        if (x1 <= x2 && y1 >= y2) { //This condition is similiar to the one above and is needed for the 6,4,2 winning conditions
            if (x < x2 ) {x += 10;}
            if (y > y2) {y-=10;}
            if (x >= x2 && y <=y2) { cancelAnimationFrame(animationLoop)}
        }
    }

    function clear() { //This function clears the canvas after a win line is drawn
        const animationLoop = requestAnimationFrame(clear); //This starts the animation loop
        c.clearRect(0,0,608,608);           //This clears our canvas    
        cancelAnimationFrame(animationLoop);    //This stops the animation loop
    }
    disableClick(); //This disables clicking while the win sound is playing
    audio('./Media/winGame.mp3');   //This plays the win sounds
    animateLineDrawing();   //This calls our main animation loop
    setTimeout(function(){clear(), resetGame(); }, 1000);   //This makes the program wait one secon the, clears the canvas and resets the game and allowing clicking
}

function resetGame() {  //This function resets the game in the event of a tie or a win
    for(let i = 0; i < 9; i++) {        //This for loop iterates through each HTML square element
        let square = document.getElementById(String(i)) //This variable gets the HTML element of i
        square.style.backgroundImage = ''   //This removes the element Backgrounf image
    }
    selectedSquares = [];       //This resets our array so it is empty and we can start over.
}