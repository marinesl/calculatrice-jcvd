// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything

		// Clear all button
		if(btnVal == 'C') {		
			input.innerHTML = '';
			decimalAdded = false;
		}
		// Clear the last input button
		else if (btnVal == 'CL') {
			if(inputVal != '') {
				input.innerHTML = inputVal.slice(0, -1);
				decimalAdded = false;
			}
		}
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);

			if(equation == "1+1")
				input.innerHTML = '11 , et ça c\'est beau !';
			
			// Check if the result contains a decimal
			if(input.innerHTML.indexOf('.') === -1)
				decimalAdded = false;
			else
				decimalAdded = true;

		}
		
		// Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
		
		// We'll fix these issues using some simple checks
		
		// indexOf works only in IE9+
		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded = false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		// if any other key is pressed, just append it
		else {
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];

			// Check if 0 is the first input
			if(btnVal == '0') {
				if(input.innerHTML != '' && operators.indexOf(lastChar) == -1)
					input.innerHTML += btnVal;
			}
			else 
				input.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}



// Event listener for the keyboard
document.addEventListener("keypress", function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    console.log(keycode);
    switch (keycode) {
        case 61:
            document.querySelector("#equals").click();
            break;
        case 13:
            document.querySelector("#equals").click();
            break;
        case 43:
            document.querySelector("#plus").click();
            break;
        case 45:
            document.querySelector("#minus").click();
            break;
        case 42:
        	document.querySelector("#multiply").click();
        	break;
        case 120:
            document.querySelector("#multiply").click();
            break;
        case 47:
            document.querySelector("#divide").click();
            break;
        case 49:
            document.querySelector("#one").click();
            break;
       	case 50:
            document.querySelector("#two").click();
            break;
        case 51:
            document.querySelector("#three").click();
            break;
        case 52:
            document.querySelector("#four").click();
            break;
        case 53:
            document.querySelector("#five").click();
            break;
        case 54:
            document.querySelector("#six").click();
            break;
        case 55:
            document.querySelector("#seven").click();
            break;
        case 56:
            document.querySelector("#eight").click();
            break;
        case 57:
            document.querySelector("#nine").click();
            break;
        case 48:
            document.querySelector("#zero").click();
            break;
        case 46:
            document.querySelector("#point").click();
            break;
        default:
        	break;
    }
});



document.addEventListener("keydown", function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    console.log(keycode);
    switch (keycode) {
        case 46:
            document.querySelector("#ca").click();
            break;
        case 8:
            document.querySelector("#cl").click();
            break;
        default:
        	break;
	}
});
