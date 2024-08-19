let result = document.getElementById("result");
let textInput = document.getElementById("text-input");
let submitButton = document.getElementById("check-btn");

const isPalindrome = (textInput) => {
  const normalizedText = textInput.value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  const reversedText = normalizedText.split("").reverse().join("");
  return normalizedText === reversedText ? true : false;
};

submitButton.addEventListener("click", () => {
  const inputValue = textInput.value;

  if (inputValue === "") {
    result.style.display = "none";
    alert("Please input a value");
    return;
  }

  result.style.display = "block"; // Ensure the result is visible
  if (isPalindrome(textInput)) {
    result.textContent = `${inputValue} is a palindrome`;
    result.style.color = "#2d1148";
  } else {
    result.textContent = `${inputValue} is not a palindrome`;
    result.style.color = "#f40e31";
  }

  textInput.value = "";
});
