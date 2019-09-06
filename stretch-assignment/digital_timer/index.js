/*=================== TIMER ====================*/

// Variables
const digits = document.querySelectorAll(".digit");
let loop = [0, 0, 0, 0];

let interval;

// Function for settting default display to 00:00
function defaultDisplay() {
  digits.forEach((atr) => {
    if (atr.textContent !== ":") {
      atr.textContent = 0;
    }
  });
}

// Run defaultDisplay()
defaultDisplay();

// setInterval() function
function beginInterval() {
  interval = window.setInterval(timer, 10);
  start.disabled = true;
  start.style.backgroundColor = "rgb(255,103,104,0.3)";
  start.style.color = "rgb(255,255,255,0.3)";
  start.style.cursor = "default";
}

// Timer function
function timer() {
  if (loop[0] < 9) {
    loop[0]++;
    digits[4].textContent = loop[0];
  } else {
    loop[0] = 0;
    if (loop[1] < 9) {
      loop[1]++;
      digits[3].textContent = loop[1];
    } else {
      loop[1] = 0;
      if (loop[2] < 9) {
        loop[2]++;
        digits[1].textContent = loop[2];
      } else {
        loop[2] = 0;
        if (loop[3] < 1) {
          loop[3]++;
          digits[0].textContent = loop[3];

          digits.forEach((atr) => {
            if (atr != digits[2]) {
              atr.style.color = "rgb(255,103,104)";

              if (atr != digits[0]) {
                atr.textContent = 0;
              }
            }
          });

          clearInterval(interval);
        } else {
          loop[3] = 0;
        }
      }
    }
  }
}

/*=================== START & RESET ====================*/

// Variables
let buttonsDiv = document.createElement("div");

let start = document.createElement("button");
start.setAttribute("type", "button");
let reset = document.createElement("button");
reset.setAttribute("type", "button");

// Add buttons to page
buttonsDiv.appendChild(start);
buttonsDiv.appendChild(reset);
document.querySelector(".digits").appendChild(buttonsDiv);

// Button text
start.textContent = "START";
reset.textContent = "RESET";

// Reset function
function resetTimer() {
  clearInterval(interval);

  defaultDisplay();

  for (let i = 0; i < loop.length; i++) {
    loop[i] = 0;
  }

  digits.forEach((atr) => {
    if (atr != digits[2]) {
      atr.style.color = "rgb(255,255,255)";
    }
  });

  start.disabled = false;
  start.style.backgroundColor = "rgb(255,103,104)";
  start.style.color = "rgb(255,255,255)";
  start.style.cursor = "pointer";
}

// Button events
start.addEventListener("click", beginInterval);
reset.addEventListener("click", resetTimer);

/*==================== STYLING ====================*/

// Head
document.querySelector("title").textContent = "10 Second Stopwatch";

// Body
let body = document.querySelector("body");

body.style.height = "100vh";
body.style.margin = "0";
body.style.padding = "0";
body.style.backgroundColor = "rgb(23,34,59)";

// Digits
digits.forEach((atr) => {
  atr.style.fontSize = "120px";
  atr.style.color = "rgb(255,255,255)";
});

// Buttons
buttonsDiv.style.display = "flex";
buttonsDiv.style.justifyContent = "space-around";

const buttonsArray = [start, reset];

buttonsArray.forEach((atr) => {
  atr.style.border = "none";
  atr.style.padding = "15px 40px";
  atr.style.fontSize = "14px";
  atr.style.fontWeight = "bold";
  atr.style.color = "rgb(255,255,255)";
  atr.style.borderRadius = "5px";
  atr.style.outline = "none";
  atr.style.cursor = "pointer";
});

start.style.backgroundColor = "rgb(255,103,104)";
reset.style.backgroundColor = "rgb(107,119,141)";

// Buttons on Hover and mousedown
reset.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "rgb(38,56,89)";
});
reset.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "rgb(107,119,141)";
  event.target.style.color = "rgb(255,255,255)";
});
reset.addEventListener("mousedown", (event) => {
  event.target.style.backgroundColor = "rgb(30,45,71)";
  event.target.style.color = "rgb(255,255,255,0.7)";
});
reset.addEventListener("mouseup", (event) => {
  event.target.style.backgroundColor = "rgb(38,56,89)";
  event.target.style.color = "rgb(255,255,255)";
});

start.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "rgb(255,65,66,0.7)";
});
start.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "rgb(255,103,104)";
  event.target.style.color = "rgb(255,255,255)";
});
start.addEventListener("mousedown", (event) => {
  event.target.style.backgroundColor = "rgb(255,65,66,0.5)";
  event.target.style.color = "rgb(255,255,255,0.7)";
});
