const a = document.getElementById("num1");
const b = document.getElementById("num2");
const mul = document.getElementById("mul");
const div = document.getElementById("div");

mul.addEventListener('click', (event) => {
	event.preventDefault();
	document.getElementById("result").innerText = `The Result is : ${parseInt(a.value * b.value)}`;
})

div.addEventListener('click', (event) => {
	event.preventDefault();
	document.getElementById("result").innerText = `The Result is : ${parseInt(a.value / b.value)}`;
})