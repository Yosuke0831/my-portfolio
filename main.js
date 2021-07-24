const mole1 = document.getElementById("mole1");
const mole2 = document.getElementById("mole2");
const mole3 = document.getElementById("mole3");
const mole4 = document.getElementById("mole4");
const mole5 = document.getElementById("mole5");
const mole6 = document.getElementById("mole6");
const mole7 = document.getElementById("mole7");
const mole8 = document.getElementById("mole8");
const mole9 = document.getElementById("mole9");
const profile = document.getElementById("profile");
const about = document.getElementById("about");
const namae = document.getElementById("name");
const age = document.getElementById("age");
const univ = document.getElementById("univ");
const grade = document.getElementById("grade");
const hobby = document.getElementById("hobby");
const skills = document.getElementById("skills");
const me = document.getElementById("me");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const score = document.getElementById("score");
const tapping = document.getElementsByClassName("tapping");

const id = [namae, age, univ, grade, hobby, skills];

let i = 0;

const show = function (i) {
  if (id[i].className === "content") {
    id[i].classList.remove("content");
    id[i].classList.add("imfor");
  } else {
    id[i].classList.remove("imfor");
    id[i].classList.add("content");
  }
};

const showMe = function () {
  if (i !== 5) {
    show(i);
    i++;
  } else {
    show(i);
    clearInterval(count);
    i = 0;
  }
};

me.onclick = function () {
  count = setInterval(showMe, 500);
};

const mole = [mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9];

let n = 0;

const appeared = function (n) {
  if (n === 0) {
    var random = Math.floor(Math.random() * mole.length);
    moleId = mole[random];
    moleId.classList.remove("mole");
    moleId.classList.add("appear");
  } else if (n === 10) {
    moleId.classList.remove("appear");
    moleId.classList.add("mole");
  } else {
    moleId.classList.remove("appear");
    moleId.classList.add("mole");
    var random = Math.floor(Math.random() * mole.length);
    moleId = mole[random];
    moleId.classList.remove("mole");
    moleId.classList.add("appear");
  }
};

const time = function () {
  if (n <= 10) {
    appeared(n);
    n++;
  } else {
    clearInterval(tap);
    n = 0;
  }
};

start.onclick = function () {
  tap = setInterval(time, 1000);
};
