const Calculator = {    //This creates an object to keep track of values
    Display_Value: '0', //This Displays '0' on the screen
    First_Operand: null,//This will hold the first operand for any expressions, it is set to null for now
    Wait_Second_Operand: false,//This checks whether or not the second operand has been input
    operator: null,     //This will hold the operator, it is set to null for now
};

function Input_Digit(digit) {   //This modifies values each time a button is clicked
    const { Display_Value, Wait_Second_Operand} = Calculator; 
    if (Wait_Second_Operand === true) { //This is checking to see if Wait_second_operand is true and set Display_Value to the that was clicked
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else { //This will overwrite Display_Value if the current value is 0 otherwise it will add onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) { //This function handles decimals
    if(Calculator.Wait_Second_Operand === true) return; //This ensures that accidental clicking of the decimal point does not cause bugs in operation
    if(!Calculator.Display_Value.includes(dot)) {   //If the Display_value does not contain a decimal point
        Calculator.Display_Value += dot;            //then add a decimal point
    }
}

function Handle_Operator(Next_Operator) {       //This function is for the operators
    const {First_Operand, Display_Value, operator} = Calculator //When an operator key is pressed, the current number being 
    const Value_of_Input = parseFloat(Display_Value);   //displayed will be stored in the Calculator.First_Operand if it doesnt already exist
    if(operator && Calculator.Wait_Second_Operand) {    //This will check if an operator already exists and if wait_second_operand is true
        Calculator.operator = Next_Operator;            //The it updates the operator and exits the function
        return;
    }
    if(First_Operand == null) { 
        Calculator.First_Operand = Value_of_Input;
    }else if(operator) {        //Checks if an oeprator already exists
        const Value_Now = First_Operand || 0;   
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);//If operator exists, property lookup is preformed for the operator and the function that matches the operator that executed
        result = Number(result).toFixed(9)              //This will put a fixed a mount of numbers after a decimal
        result = (result * 1).toString()                //This will remove any trailing 0's
        Calculator.Display_Value = parseFloat(result);  //  
        Calculator.First_Operand = parseFloat(result);  //
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
const Perform_Calculation = {
     '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
     '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
     '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
     '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
     '=': (First_Operand, Second_Operand) => Second_Operand
}
function Calculator_Reset() {
     Calculator.Display_Value = '0';
     Calculator.First_Operand = null;
     Calculator.Wait_Second_Operand = false;
     Calculator.operator = null;
}

function updateDisplay() {  //This will update the screen withe the contents of Display_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value
}

updateDisplay();
//This area monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => { 
    const { target } = event;   //The target variable is an object that repesents the element that was clicked
    if(!target.matches('button')) {
        return; //If that element that was clicked is not a button, it will exit the function
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        updateDisplay();
        return
    }
    if(target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        updateDisplay();
        return
    }
    if (target.classList.contains('all-clear')) {   //This clears all the numbers from the calculator
        Calculator_Reset();
        updateDisplay();
        return
    }

    Input_Digit(target.value);
    updateDisplay();
})
