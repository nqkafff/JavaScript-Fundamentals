function calculate() {
	var number1 = jsConsole.readInteger('#number1');
	var number2 = jsConsole.readInteger('#number2');
	var number3 = jsConsole.readInteger('#number3');
	var znak = '+';

	if (number1 < 0) {
		znak = '-';
	} else if (number2 < 0) {
		znak = '-';
	} else if (number3 < 0) {
		znak = '-';
	}

	jsConsole.writeLine('The sign is: ' + znak);
}