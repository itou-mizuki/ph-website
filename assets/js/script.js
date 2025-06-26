let text = document.getElementById("text");
console.log(text);
text.innerHTML = "POSSEとは - Edited";
let midasi = document.querySelector(".midasi2");
console.log(midasi);
midasi.innerHTML = "About POSSE - Edited";
let events = document.getElementsByClassName("midasi1");
console.log(events);
events[1].style.color = "#FF0000";
let day = document.getElementsByClassName("midasi2");
console.log(day);
day[2].style.fontSize = "10px";
let li = document.createElement("li");
li.textContent = "テスト見出し";
let div = document.getElementById("test");
div.appendChild(li);
let header = document.getElementsByClassName("main-header")[0];
const button = document.getElementById("button");
const menu = document.getElementsByClassName("nav")[0];
const body = document.body;
button.addEventListener("click", function () {
  menu.classList.toggle("nav-js");
  body.classList.toggle("no-scroll");
  header.classList.toggle("is-open");
  header.classList.toggle("main-header-clear");
});
let mainvisual = document.getElementById("main-visual");
window.addEventListener("scroll", function () {
  if (window.scrollY > mainvisual.clientHeight - header.clientHeight) {
    header.classList.remove("main-header-clear");
  } else {
    header.classList.add("main-header-clear");
  }
});

new Splide("#slider1", {
  type: "loop",
  perPage: 3,
  width: "1096px",
  gap: "40px",
  padding: "28px",
  perMove: 1,
  breakpoints: {
    600: {
      perPage: 1,
    },
  },
}).mount();

new Splide("#slider2", {
  type: "loop",
  perPage: 1,
  width: "80vw",
  padding: "28px",
  gap: "20px",
}).mount();
