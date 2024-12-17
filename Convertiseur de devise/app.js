let value1El = document.getElementById("first-value");
let unit1El = document.getElementById("first-unit");
let value2El = document.getElementById("second-value");
let unit2El = document.getElementById("second-unit");
let btnEl = document.getElementById("convert-btn");

const convertValue = () => {
  let value1 = value1El.value;
  let unit1 = unit1El.value;
  let unit2 = unit2El.value;

  let value1IntegalUnit;
  let convertedvalue;

  switch (unit1) {
    case "Km":
      value1IntegalUnit = value1 * 1000;
      break;
    case "cm":
      value1IntegalUnit = value1 / 100;
      break;
    case "mm":
      value1IntegalUnit = value1 / 1000;
      break;
    default:
      value1IntegalUnit = value1;
  }

  switch (unit2) {
    case "Km":
      convertedvalue = value1IntegalUnit / 1000;
      break;
    case "cm":
      convertedvalue = value1IntegalUnit * 100;
      break;
    case "mm":
      convertedvalue = value1IntegalUnit * 1000;
      break;
    default:
    convertedvalue = value1IntegalUnit;
  }
  value2El.value = convertedvalue;
};

btnEl.addEventListener("click", convertValue);
unit2El.addEventListener("change", () => {
  value2El.value = "";
});
