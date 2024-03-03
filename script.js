//певый продукт
let inputPriceOne = document.querySelector(".items__one_price");
let inputGrammOne = document.querySelector(".items__one_gramm");
let inputResultOne = document.querySelector(".items__one_result");

//второй продукт
let inputPriceTwo = document.querySelector(".items__two_price");
let inputGrammTwo = document.querySelector(".items__two_gramm");
let inputResultTwo = document.querySelector(".items__two_result");

let button = document.querySelector(".button");

function price() {
  inputPriceOne.value;
  inputGrammOne.value;
  inputResultOne.value = inputPriceOne.value / inputGrammOne.value;

  inputPriceTwo.value;
  inputGrammTwo.value;
  inputResultTwo.value = inputPriceTwo.value / inputGrammTwo.value;
  console.log(inputPriceOne.value, inputGrammOne.value, inputResultOne.value);
}

button.addEventListener("click", price);
