let firstNum = [];
let operation = "";
let secondNum = [];

const calculatorButtons = [
	{ num: 0, loc: document.querySelector(".zero") },
	{ num: 1, loc: document.querySelector(".one") },
	{ num: 2, loc: document.querySelector(".two") },
	{ num: 3, loc: document.querySelector(".three") },
	{ num: 4, loc: document.querySelector(".four") },
	{ num: 5, loc: document.querySelector(".five") },
	{ num: 6, loc: document.querySelector(".six") },
	{ num: 7, loc: document.querySelector(".seven") },
	{ num: 8, loc: document.querySelector(".eight") },
	{ num: 9, loc: document.querySelector(".nine") },
	{ plus: document.querySelector(".plus") },
	{ minus: document.querySelector(".minus") },
	{ multiply: document.querySelector(".multiply") },
	{ divide: document.querySelector(".divide") },
];

const numbers = document.querySelector(".numbers");
numbers.addEventListener("click", (e) => {
	const getNumber = calculatorButtons.filter((item) => {
		if (e.target === item.loc) {
			firstNum.push(item.num);
		}
		const display = document.querySelector(".display-container");
		display.textContent = `${firstNum.join("")}`;
	});
});

function add(input) {}

function subtract(input) {}

function multiply(input) {}

function divide(input) {}

add();
subtract();
multiply();
divide();
