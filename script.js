let displayValue = "";
const formula = document.getElementById("formula");
const int = document.getElementById("int")
formula.innerText = displayValue;

document.body.addEventListener("click", Event => {
	if (Event.target.nodeName == "BUTTON") {
		displayValue += Event.target.textContent;
		formula.innerText = displayValue;
		int.innerText = displayValue;

	}
});



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
