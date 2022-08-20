const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');

	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
    //This if statement checks to see if it's the subtract symbol, the next 
    //will check if it's the subtraction symbol, and so on until square root
    if (mathSymbol === "+"){
        console.log(num1 + num2);
    }
    if (mathSymbol === "-"){
        console.log(num1 - num2);
    }
    if (mathSymbol === "/"){
        console.log(num1 / num2);
    }
    //I added an asterisk as well as lower case and upper case x because why not
    if (mathSymbol === "*" || mathSymbol === "x" || mathSymbol === "X"){
        console.log(num1 * num2);
    }
    if (mathSymbol === "√" || mathSymbol === "squareroot" || mathSymbol === "sqrt"){
        console.log(Math.sqrt(num1));
    }
	// This line closes the connection to the command line interface.
	reader.close()

});
//can you see this
