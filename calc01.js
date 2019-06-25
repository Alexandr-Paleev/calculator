(function () {

let arg1 = 0;
let arg2 = 0;
let operator = '';
let result = '';

buttons.addEventListener('click', function(e) {
	// вычисляем выражение введенное пользователем и выводим ответ
	if(e.target.id == 'equal') {
		equal();
		
	/* при повторном нажатии оператора, вычисляем предыдущее выражение
	 и ответ присваиваем в первый аргумент для следующего выражения */
	}else if ((e.target.id == '+' && checkOperator()) || 
		(e.target.id == '-' && checkOperator()) || 
		(e.target.id == '*' && checkOperator()) || 
		(e.target.id == '/' && checkOperator())) {
		
		equal();
		let arg3 = document.getElementById('displayResult').innerHTML;
		document.getElementById('display').innerHTML = arg3 + e.target.id;

    // вычисляем выражение - процент
	}else if (e.target.id == 'equal%') {
		equal();
		let percent = document.getElementById('displayResult').innerHTML;
		document.getElementById('displayResult').innerHTML = percent / 100;

	// проверка повторного ввода точки в дроби
	}else if (e.target.id == '.' && checkFloat()) {
		preventDefault();

	// сброс
	}else if (e.target.id == 'reset') {
		reset();

	}else{
		// при нажатии оператора, присваиваем последний ответ или 0 в первый аргумент выражения
		arg1 = document.getElementById('display').innerHTML;
		if((e.target.id == '+' && arg1 == '') || 
		   (e.target.id == '-' && arg1 == '') || 
		   (e.target.id == '*' && arg1 == '') || 
		   (e.target.id == '/' && arg1 == '')) {
			let arg3 = document.getElementById('displayResult').innerHTML;
			document.getElementById('display').innerHTML = arg3 + e.target.id;
		}else{
			// вводим значение кнопок в выражение вычислений
			arg1 = document.getElementById('display').innerHTML += e.target.id;
		}
		result = arg1;
		
	}
});

function equal() {
	arg1 = parseFloat(result);
	arg2 = result.replace(arg1, '');
	operator = arg2.charAt(0);
	if(operator == '.') {
		operator = arg2.charAt(1);
	}
	arg2 = parseFloat(arg2.slice(1));

	let res = 0;
	switch(operator) {
		case '+': 
			res = arg1 + arg2;
			break;
		case '-': 
			res = arg1 - arg2;
			break;
		case '*': 
			res = arg1 * arg2;
			break;
		case '/': 
			res = arg1 / arg2;
			break;
		default: alert('Please enter a valid number!');
	}
	if(isNaN(res)) {
		alert('Please enter a valid number!');
		return reset();
	}
	document.getElementById('displayResult').innerHTML = parseFloat(res.toFixed(5));
	document.getElementById('display').innerHTML = '';
	result = '';
}

function checkOperator() {
	let arrayOperator = [];
	let arr = result.split('');
	for(let i = 0; i <= arr.length; i++) {
		if(arr[i] == '+' || arr[i] == '-' || arr[i] == '*' || arr[i] == '/') {
			arrayOperator.push(arr[i]);
			if(arrayOperator.length) {
				return true;
			}
		}
	}
}

function checkFloat() {
	let arrayFloat = [];
	let arr = arg1.split('');
	for(let i = 0; i <= arr.length; i++) {
		if(arr[i] == '.') {
			arrayFloat.push(arr[i]);
			if(arrayFloat.length) {
				return true;
			}
		}
	}
}

function reset() {
	document.getElementById('displayResult').innerHTML = 0;
	document.getElementById('display').innerHTML = '';
	result = '';
}

})();