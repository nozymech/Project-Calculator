let displayValue = "22";
const int = document.getElementById("int")
int.innerText = displayValue;
const ac = document.getElementById("ac")

ac.addEventListener("click",()=>{
	displayValue = "0";
	int.innerText = displayValue;
})

const add = function(a, b) {
	return a + b ;
};

const subtract = function(a, b) {
	return a - b ;
};

const multiply = function(a, b) {
  return a * b ;

};

const divide = function(a, b) {
	return a / b ;
};

const negative = function(a) {
	return -a ;
};


const percent = function(a) {
    return a/100;
}

function operate(a,b) {
    add(a,b);
}
