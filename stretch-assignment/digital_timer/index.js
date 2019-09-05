// Variables
const digits = document.querySelectorAll(".digit");
const loop = [0, 0, 0, 0];

// Set default display to 00:00
digits.forEach(function(atr) {
  if (atr.textContent !== ":") {
    atr.textContent = 0;
  }
});

// Timer Function
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

          digits.forEach(function(atr) {
            if (atr != digits[2]) {
              atr.style.color = "red";

              if (atr != digits[0]) {
                atr.textContent = 0;
              }
            }
          });

          clearInterval(interval);
        }
      }
    }
  }
}

// setInterval()
let interval = window.setInterval(timer, 10);
