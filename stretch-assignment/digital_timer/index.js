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
              atr.setAttribute("class", "digit redDigit");

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
start.textContent = "Start";
reset.textContent = "Reset";

// Reset function
function resetTimer() {
  clearInterval(interval);

  defaultDisplay();

  for (let i = 0; i < loop.length; i++) {
    loop[i] = 0;
  }

  digits.forEach((atr) => {
    if (atr != digits[2]) {
      atr.setAttribute("class", "digit");
    }
  });

  start.disabled = false;
}

// Button events
start.addEventListener("click", beginInterval);
reset.addEventListener("click", resetTimer);
