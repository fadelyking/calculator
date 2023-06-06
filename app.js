function add(input) {
	const plus = document.querySelector(".plus");
	plus.addEventListener("click", () => {
		return console.log("+");
	});
}

function subtract(input) {
	const minus = document.querySelector(".minus");
	minus.addEventListener("click", () => {
		return console.log("-");
	});
}

function multiply(input) {
	const multiply = document.querySelector(".times");

	multiply.addEventListener("click", () => {
		return console.log("*");
	});
}

function divide(input) {
	const divide = document.querySelector(".divide");
	divide.addEventListener("click", () => {
		return console.log("/");
	});
}

add();
subtract();
multiply();
divide();
