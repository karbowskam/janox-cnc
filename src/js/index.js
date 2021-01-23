import "../scss/style.scss";

var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById("left");
var right = document.getElementById("right");
var pagePrefix = "slide";
var transitionPrefixRight = "circle-right";
var transitionPrefixLeft = "circle-left";
var svg = true;
var numOfSlides = 4;
var numOfCircle = 18;

function leftSlide() {
	if (click) {
		if (curpage == 1) curpage = numOfSlides + 1;
		console.log("woek");
		sliding = true;
		curpage--;
		svg = true;
		click = false;
		for (var k = 1; k <= numOfSlides; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= numOfSlides; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function rightSlide() {
	if (click) {
		if (curpage == numOfSlides) curpage = 0;
		console.log("woek");
		sliding = true;
		curpage++;
		svg = false;
		click = false;
		for (var k = 1; k <= numOfSlides; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= numOfSlides; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function move() {
	if (sliding) {
    sliding = false;
    var j = 1;
    var c = false;
		if (svg) {
			for (j = 1; j <= numOfCircle; j++) {
				c = document.getElementById(transitionPrefixLeft + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefixLeft + j + " streak");
				console.log("streak");
			}
		} else {
			for (j = 1; j <= numOfCircle; j++) {
				c = document.getElementById(transitionPrefixRight + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefixRight + j + " streak");
				console.log("streak");
			}
		}
		setTimeout(() => {
			for (var i = 1; i <= numOfSlides; i++) {
				if (i == curpage) {
					var a = document.getElementById(pagePrefix + i);
					a.className += " up1";
				} else {
					var b = document.getElementById(pagePrefix + i);
					b.classList.remove("up1");
				}
			}
			sliding = true;
		}, 600);
		setTimeout(() => {
			click = true;
		}, 1700);

		setTimeout(() => {
      var c = false;
      if (svg) {
				for (j = 1; j <= numOfCircle; j++) {
					c = document.getElementById(transitionPrefixLeft + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefixLeft + j + " steap");
				}
			} else {
				for (j = 1; j <= numOfCircle; j++) {
					c = document.getElementById(transitionPrefixRight + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefixRight + j + " steap");
				}
				sliding = true;
			}
		}, 850);
		setTimeout(() => {
			click = true;
		}, 1700);
	}
}

left.onmousedown = () => {
	leftSlide();
};

right.onmousedown = () => {
	rightSlide();
};

document.onkeydown = e => {
	if (e.keyCode == 37) {
		leftSlide();
	} else if (e.keyCode == 39) {
		rightSlide();
	}
};


console.log("Hello world");