let submitButton = document.querySelector("#submit-button");
let result = document.querySelector("#result-h1");

function binaryContent(x) {
  x.preventDefault();
  let inputNumber = document.querySelector("#input-number").value;
  if (inputNumber === "") {
    alert("Please enter a number");
  } else if (inputNumber < 0) {
    alert("Please enter a positive number");
  } else {
    // result.style.visibility = "visible";
    result.style.display = "block";
  }

  // Convolver to Binary
  let binary = Number(inputNumber).toString(2);
  result.innerHTML = binary;
}
submitButton.addEventListener("click", binaryContent);
