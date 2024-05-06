const result = document.getElementById("result");

const clear = document.getElementById("clear");
const del = document.getElementById("del");
const divisionMark = document.getElementById("divisionMark");
const multiplicationSign = document.getElementById("multiplicationSign");

//////////////////////////////////////////////

const nm_7 = document.getElementById("nm-7");
const nm_8 = document.getElementById("nm-8");
const nm_9 = document.getElementById("nm-9");
const minusSign = document.getElementById("minusSign");

///////////////////////////////////////////////

const nm_4 = document.getElementById("nm-4");
const nm_5 = document.getElementById("nm-5");
const nm_6 = document.getElementById("nm-6");
const plusSign = document.getElementById("plusSign");

///////////////////////////////////////////////

const nm_1 = document.getElementById("nm-1");
const nm_2 = document.getElementById("nm-2");
const nm_3 = document.getElementById("nm-3");
const nm_0 = document.getElementById("nm-0");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");

result.value = 0;

//////////////////////////////////////////////

clear.addEventListener("click", () => {
  result.value = 0;
});

divisionMark.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = "/";
  } else {
    result.value += "/";
  }
});

multiplicationSign.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = "*";
  } else {
    result.value += "*";
  }
});

////////////////////////////////////////////////////////////

nm_7.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = 7;
  } else {
    result.value += 7;
  }
});
nm_8.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = 8;
  } else {
    result.value += 8;
  }
});
nm_9.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = 9;
  } else {
    result.value += 9;
  }
});
minusSign.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = "-";
  } else {
    result.value += "-";
  }
});

////////////////////////////////////////////////

nm_4.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = 4;
  } else {
    result.value += 4;
  }
});
nm_5.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = 5;
  } else {
    result.value += 5;
  }
});
nm_6.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = 6;
  } else {
    result.value += 6;
  }
});
plusSign.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = "+";
  } else {
    result.value += "+";
  }
});

///////////////////////////////////////

nm_1.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = 1;
  } else {
    result.value += 1;
  }
});
nm_2.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = 2;
  } else {
    result.value += 2;
  }
});
nm_3.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = 3;
  } else {
    result.value += 3;
  }
});
nm_0.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = 0;
  } else {
    result.value += 0;
  }
});
dot.addEventListener("click", () => {
  if (result.value == 0) {
    result.value = ".";
  } else {
    result.value += ".";
  }
});

equal.addEventListener("click", function() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
);

del.addEventListener("click",function() {
    result.value = result.value.slice(0, -1);
}
)
