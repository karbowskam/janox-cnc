import "../scss/style.scss";

var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById("slider__arrow--left");
var right = document.getElementById("slider__arrow--right");
var pagePrefix = "slide";
var transitionPrefixRight = "circle-right";
var transitionPrefixLeft = "circle-left";
var transitionPrefixClass = "slider__circle";
var classStreak = "slider__streak";
var classTran = "slider__tran";
var classSteap = "slider__steap";
var classUp = "slider__up";
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
      a1.className += " " + classTran;
    }
    setTimeout(() => {
      move();
    }, 200);
    setTimeout(() => {
      for (k = 1; k <= numOfSlides; k++) {
        var a1 = document.getElementById(pagePrefix + k);
        a1.classList.remove(classTran);
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
      a1.className += " " + classTran;
    }
    setTimeout(() => {
      move();
    }, 200);
    setTimeout(() => {
      for (k = 1; k <= numOfSlides; k++) {
        var a1 = document.getElementById(pagePrefix + k);
        a1.classList.remove(classTran);
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
        c.classList.remove(classSteap);
        c.setAttribute("class", transitionPrefixLeft + j + " " + classStreak);
        console.log(classStreak);
      }
    } else {
      for (j = 1; j <= numOfCircle; j++) {
        c = document.getElementById(transitionPrefixRight + j);
        c.classList.remove(classSteap);
        c.setAttribute("class", transitionPrefixClass  + " " + classStreak);
        console.log(classStreak);
      }
    }
    setTimeout(() => {
      for (var i = 1; i <= numOfSlides; i++) {
        if (i == curpage) {
          var a = document.getElementById(pagePrefix + i);
          a.className += " " + classUp;
        } else {
          var b = document.getElementById(pagePrefix + i);
          b.classList.remove(classUp);
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
          c.classList.remove(classStreak);
          c.setAttribute("class", transitionPrefixLeft + j + " " + classSteap);
        }
      } else {
        for (j = 1; j <= numOfCircle; j++) {
          c = document.getElementById(transitionPrefixRight + j);
          c.classList.remove(classStreak);
          c.setAttribute("class", transitionPrefixClass  + " " + classSteap);
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

document.onkeydown = (e) => {
  if (e.keyCode == 37) {
    leftSlide();
  } else if (e.keyCode == 39) {
    rightSlide();
  }
};

console.log("Hello world");
