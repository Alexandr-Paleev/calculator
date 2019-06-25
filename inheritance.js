function Calc(a, b) {
	this.a = a;
	this.b = b;
	this.plus = function(a, b) {
		return this.a + this.b;
	}
	this.minus = function(a, b) {
		return this.a - this.b;
	}
}

function Calc1() {
	Calc.apply(this, arguments);

	this.multiply = function(x, y) {
		return this.a * this.b;
	}
}

function Calc3() {
	Calc.apply(this, arguments);
}


Calc3.prototype = Object.assign(Object.create(Calc.prototype), new Calc1(), {

	division: function(a, b) {
		return this.a / this.b;
	},	
});

let result = new Calc3(enterNum());


document.getElementById('display').innerHTML = result.plus();
document.getElementById('display').innerHTML = result.minus();
document.getElementById('display').innerHTML = result.multiply();
document.getElementById('display').innerHTML = result.division();
