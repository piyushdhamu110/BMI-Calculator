const form = document.querySelector("form");

// const height = parseInt(document.querySelector("#height").value);
// THIS USECASE WILL GIVE YOU EMPTY VALUE OF HEIGHT FOR A INSTANCE

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //   show the result
    if (bmi < 18.6) {
      result.innerHTML = `Your BMI: ${bmi} Category: UnderWeight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `Your BMI: ${bmi} Category: Normal`;
    } else {
      result.innerHTML = `Your BMI: ${bmi} Category: OverWeight`;
    }
    //   result.innerHTML=`<span>BMI: ${bmi}</span>`
  }
});
