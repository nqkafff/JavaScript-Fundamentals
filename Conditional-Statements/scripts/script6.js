function calculateQuadraticEquation() {
	var a = jsConsole.readInteger('#a');
	var b = jsConsole.readInteger('#b');
	var c = jsConsole.readInteger('#c');

	var discriminant = (b * b) - (4 * a * c);

	if (discriminant === 0) {
		var x = -b / (2 * a);

		jsConsole.writeLine('Only one real solution: ' + x);
	} else if (discriminant < 0) {
		jsConsole.writeLine('No real solutions');
	} else {
		var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

		jsConsole.writeLine('Two real solutions: ' + x1 + ', ' + x2);
	}
}