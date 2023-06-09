let currentValue = "";
let operator = "";
let secondValue = "";
document.addEventListener("DOMContentLoaded", function () {
	let clear = document.querySelector(".ac");
	let percent = document.querySelector(".percent");
	let decimal = document.querySelector(".dot");
	let plussubstract = document.querySelector(".plusdivide");
	let currentScreen = document.querySelector(".display-container");
	let numbers = document.querySelectorAll(".number");
	let operators = document.querySelectorAll(".operator");
	let equal = document.querySelector(".equal");
	numbers.forEach((number) =>
		number.addEventListener("click", function (e) {
			handleNumber(e.target.textContent);
			currentScreen.textContent = currentValue;
		})
	);

	operators.forEach((op) =>
		op.addEventListener("click", function (e) {
			handleOperator(e.target.textContent);

			currentScreen.textContent = secondValue + " " + operator;
		})
	);

	clear.addEventListener("click", function () {
		currentValue = "";
		operator = "";
		secondValue = "";
		currentScreen.textContent = "";
	});

	equal.addEventListener("click", function () {
		calc();

		currentScreen.textContent = currentValue;
	});
});

function handleOperator(op) {
	operator = op;
	secondValue = currentValue;
	currentValue = "";
}
function handleNumber(num) {
	currentValue += num;
}

function calc() {
	secondValue = Number(secondValue);
	currentValue = Number(currentValue);

	if (operator === "+") {
		secondValue += currentValue;
	} else if (operator === "-") {
		secondValue -= currentValue;
	} else if (operator === "*") {
		secondValue *= currentValue;
	} else {
		secondValue /= currentValue;
	}

	currentValue = secondValue.toString();
	secondValue = secondValue.toString();
}
