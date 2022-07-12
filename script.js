// Selection
const weightInput = document.querySelector(".weight-input");
const heightInput = document.querySelector(".height-input");
const btnSubmit = document.querySelector(".btn-submit");
const results = document.querySelector(".result");

// Function
const calcBMI = function (weight, height, gender) {
  const result = weightInput.value / (heightInput.value * heightInput.value);

  return result;
};

// Event Handler
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  results.innerHTML = `Your BMI is ${calcBMI()}`;
});
