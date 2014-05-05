function calculate() {
	var number1 = jsConsole.readInteger('#number1');
	var number2 = jsConsole.readInteger('#number2');
	var number3 = jsConsole.readInteger('#number3');
	var number = 0;

	if (number1 < number2 || number1 < number3) {

		if (number1 < number2) {
			number = number1;
			number1 = number2;
			number2 = number;
		}

		if (number1 < number3) {
			number = number1;
			number1 = number3;
			number3 = number;
		}

		if (number2 < number3) {
			number = number2;
			number2 = number3;
			number3 = number;
		}

	} else if (number2 < number3) {
		number = number2;
		number2 = number3;
		number3 = number;
	}


	jsConsole.writeLine('sorted numbers: ' + number1 + ', ' + number2 + ', ' + number3);
}