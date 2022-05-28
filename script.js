let displayValue = "";
// store input value
let numbers = [];
//store operate type
let operation = "";
const int = document.getElementById("int")
int.innerText = displayValue;
const ac = document.getElementById("ac")
const numberButtons = document.querySelectorAll("button.num")
const operateButtons = document.querySelectorAll("button.operator")
const equal = document.getElementById("equal")

ac.addEventListener("click",()=>{
	displayValue = "";
	int.innerText = displayValue;
	numbers = [];
})

numberButtons.forEach((button)=>{
	button.addEventListener('click',()=>{
		displayValue = displayValue + button.value
		int.innerText = displayValue;

	})
})

operateButtons.forEach((button)=>{
	button.addEventListener('click',()=>{
		operation = button.id;
		numbers.push(displayValue);
		displayValue = "";
		int.innerText = displayValue;
	})
})

equal.addEventListener("click",()=>{
	numbers.push(displayValue);
	if(operation == "add"){
		add(parseInt(numbers[0]),parseInt(numbers[1]));
		numbers = [];	
	}else if(operation == "minus") {
		subtract(parseInt(numbers[0]),parseInt(numbers[1]));
		numbers = [];
	}else if(operation == "multiply") {
		multiply(parseInt(numbers[0]),parseInt(numbers[1]));
		numbers = [];
	}else if(operation == "divide") {
		divide(parseInt(numbers[0]),parseInt(numbers[1]));
		numbers = [];
	}
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
	return -a ;
};


const percent = function(a) {
    return a/100;
}

function operate(a,b) {
	int.innerText = result;
}
