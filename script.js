const display = document.getElementById("display");
let parenState = true;

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function toggleSign() {
  if (display.value) {
    if (display.value.startsWith("-")) {
      display.value = display.value.slice(1);
    } else {
      display.value = "-" + display.value;
    }
  }
}

function insertParenthesis() {
  display.value += parenState ? "(" : ")";
  parenState = !parenState;
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (/^[0-9+\-*/().%]$/.test(key)) {
    appendValue(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === ".") {
    appendValue(".");
  }
});