let displayValue = "";
// input value sandbox
let numbers = [];
//operate type sandbox
let operation = [];
const int = document.getElementById("int")
int.innerText = displayValue;
const ac = document.getElementById("ac")
const numberButtons = document.querySelectorAll("button.num")
const operateButtons = document.querySelectorAll("button.operator")
const equal = document.getElementById("equal")
const minus = document.getElementById("minus")
const percentage = document.getElementById("percentage")

// click AC: reset the calculator
ac.addEventListener("click",()=>{
	displayValue = "";
	int.innerText = displayValue;
	numbers = [];
})

// click numbers: add value
numberButtons.forEach((button)=>{
	button.addEventListener('click',()=>{
		displayValue = displayValue + button.value
		int.innerText = displayValue;

	})
})

//click operate buttons : 1. save value and wait for another value to calculation 
operateButtons.forEach((button)=>{
	button.addEventListener('click',()=>{
		// save the first target button id 
		operation.push(button.id);
		// put value into sandbox 
		numbers.push(displayValue);
		// refresh the screen 
		displayValue = "";
		int.innerText = displayValue;

		// if we have 2 value in array wii do calculate 
		if (numbers.length == 2) {
	if(operation[0] == "add"){
		add(Number(numbers[0]),Number(numbers[1]));
		// reset input value sandbox
		numbers = [];
		// reset operate sandbox
		operation = [];
	}else if(operation[0] == "subtract") {
		subtract(Number(numbers[0]),Number(numbers[1]));
		numbers = [];
		operation = [];
	}else if(operation[0] == "multiply") {
		multiply(Number(numbers[0]),Number(numbers[1]));
		numbers = [];
		operation = [];
	}else if(operation[0] == "divide") {
		divide(Number(numbers[0]),Number(numbers[1]));
		numbers = [];
		operation = [];
	}
		}else if (numbers.length == 1){
			int.innerText = displayValue;
		}
	})
})

equal.addEventListener("click",()=>{
	numbers.push(displayValue);
	if(operation.length >0){
		if(operation[0] == "add"){
			add(Number(numbers[0]),Number(numbers[1]));
			// save result into sandbox ,and not change second value 
			numbers[0] = displayValue;
	
	
		}else if(operation[0] == "subtract") {
			subtract(Number(numbers[0]),Number(numbers[1]));
			numbers[0] = displayValue;
	
		}else if(operation[0] == "multiply") {
			multiply(Number(numbers[0]),Number(numbers[1]));
			numbers[0] = displayValue;
	
		}else if(operation[0] == "divide") {
			divide(Number(numbers[0]),Number(numbers[1]));
			numbers[0] = displayValue;
	
		}
	}else {
		int.innerText = displayValue;
	}
})

minus.addEventListener("click",()=>{
	numbers.push(displayValue);
	negative(numbers[0])
	numbers = [];
})

percentage.addEventListener("click",()=>{
	numbers.push(displayValue);
	percent(numbers[0])
	numbers = [];
})






const add = function(a, b) {
	displayValue = a + b ;
	int.innerText = displayValue;
};

const subtract = function(a, b) {
	displayValue = a - b ;
	int.innerText = displayValue;
};

const multiply = function(a, b) {
	displayValue = a * b ;
	int.innerText = displayValue;
};


const divide = function(a, b) {
	displayValue = a / b ;
	int.innerText = displayValue;
};


const negative = function(a) {
	displayValue = -a  ;
	int.innerText = displayValue;
	numbers = [];
};


const percent = function(a) {
    displayValue = a/100  ;
	int.innerText = displayValue;
}
