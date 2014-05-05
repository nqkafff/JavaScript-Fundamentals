function calculate() {
	var number1 = jsConsole.readInteger('#number1');
	var number2 = jsConsole.readInteger('#number2');
	var number3 = jsConsole.readInteger('#number3');
	var biggest = number1;

	if (biggest < number2 || biggest < number3) {
		if (number2 < number3) {
			biggest = number3;
		} else {
			biggest = number2;
		}
	}

	jsConsole.writeLine('The biggest number is: ' + biggest);
}