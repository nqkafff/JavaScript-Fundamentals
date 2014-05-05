function calculate() {
	var number1 = jsConsole.readInteger('#number1');
	var number2 = jsConsole.readInteger('#number2');
	var max = number1;

	if (number1 < number2) {
		max = number2;
	}

	jsConsole.writeLine('the bigger number is ' + max);
}