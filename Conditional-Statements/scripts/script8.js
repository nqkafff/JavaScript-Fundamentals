function convertInText() {
	var number = jsConsole.readInteger('#number');

	jsConsole.writeLine(number);

	if (number > 999) {
		jsConsole.writeLine('Invalid number! Range to 0 to 999!');
	} else if (number === 10) {
		jsConsole.writeLine('ten');
	} else if (number === 0) {
		jsConsole.writeLine('zero');
	} else {
		var units = number % 10;
		var tens = (number / 10) % 10 | 0;
		var hundreds = number / 100 | 0;

		var numberStr = '';

		if (hundreds !== 0) {
			numberStr += convertHundreds(hundreds) + ' hundred ';

			if (tens !== 0 || units !== 0) {
				numberStr += 'and ';
			}
		}

		if (tens !== 0) {
			numberStr += convertTens(tens, units);
		}

		if (units !== 0 && tens !== 1) {
			numberStr += convertUnits(units);
		}

		jsConsole.writeLine('Number in text: ' + numberStr);
	}
}

function convertHundreds(hundreds) {
	var h = 0;
	switch (hundreds) {
		case 1:
			h = 'one';
			break;
		case 2:
			h = 'two';
			break;
		case 3:
			h = 'tree';
			break;
		case 4:
			h = 'four';
			break;
		case 5:
			h = 'five';
			break;
		case 6:
			h = 'six';
			break;
		case 7:
			h = 'seven';
			break;
		case 8:
			h = 'eight';
			break;
		case 9:
			h = 'nine';
			break;
	}

	return h;
}

function convertTens(tens, units) {
	var t = 0;

	if (tens === 1) {
		jsConsole.writeLine('test' + units);
		switch (units) {
			case 1:
				t = 'eleven';
				break;
			case 2:
				t = 'twelve';
				break;
			case 3:
				t = 'thirteen';
				break;
			case 4:
				t = 'forteen';
				break;
			case 5:
				t = 'fifteen';
				break;
			case 6:
				t = 'sixteen';
				break;
			case 7:
				t = 'seventeen';
				break;
			case 8:
				t = 'eighteen';
				break;
			case 9:
				t = 'nineteen';
				break;
		}
	}

	if (tens > 1) {
		switch (tens) {
			case 2:
				t = 'twenty ';
				break;
			case 3:
				t = 'thirty ';
				break;
			case 4:
				t = 'forty ';
				break;
			case 5:
				t = 'fifty ';
				break;
			case 6:
				t = 'sixty ';
				break;
			case 7:
				t = 'seventy ';
				break;
			case 8:
				t = 'eighty ';
				break;
			case 9:
				t = 'ninety ';
				break;
		}
	}

	return t;
}

function convertUnits(units) {
	var u = 0;
	switch (units) {
		case 1:
			u = 'one';
			break;
		case 2:
			u = 'two';
			break;
		case 3:
			u = 'tree';
			break;
		case 4:
			u = 'four';
			break;
		case 5:
			u = 'five';
			break;
		case 6:
			u = 'six';
			break;
		case 7:
			u = 'seven';
			break;
		case 8:
			u = 'eight';
			break;
		case 9:
			u = 'nine';
			break;
	}

	return u;
}