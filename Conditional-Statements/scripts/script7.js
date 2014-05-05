function calculate() {
	var number = new Array(4);
	number[0] = jsConsole.readInteger('#number1');
	number[1] = jsConsole.readInteger('#number2');
	number[2] = jsConsole.readInteger('#number3');
	number[3] = jsConsole.readInteger('#number4');
	number[4] = jsConsole.readInteger('#number5');
	var greatest = 0;

	for (var i = 0; i < number.length; i++) {
		if (greatest < number[i]) {
			greatest = number[i];
		}
	}

	jsConsole.writeLine('Greatest number: ' + greatest);
}