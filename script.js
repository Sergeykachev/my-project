//переменные
const priceForProductsOne = document.querySelector(".price__for_products-one"); //цена первого продукта
const priceForProductsTwo = document.querySelector(".price__for_products-two"); //цена второго продукта
const weightProductsOne = document.querySelector(".price__for_gramms-one"); //вес первого продукта
const weightProductsTwo = document.querySelector(".price__for_gramms-two"); //вес второго продукта
const priceGrammOne = document.querySelector(".price__result-one"); //цена за грамм первого продукта
const priceGrammTwo = document.querySelector(".price__result-two"); //цена за грамм второго продукта
let resultpriceGrammOne = document.querySelector(".price__result-one"); // цена за грамм первого продукта
let resultpriceGrammTwo = document.querySelector(".price__result-two"); // цена за грамм второго продукта
const endResult = document.querySelector(".result__end"); // текстовое отображение результата
const textInParagrath = document.querySelector(".text__result"); // отображение текста с описанием результата.
const button = document.querySelector(".button"); //кнопка отображения результата
const buttonResetForm = document.querySelector(".button__reset"); //кнопка сброса форм
const form = document.querySelector(".form"); //формы
const buttonOne = document.querySelector(".button__one");

//значение инпутов

productsOneValue = priceForProductsOne.value; //значение цены первого продукта
productsTwoValue = priceForProductsTwo.value; //значение цены второго продукта
productsGrammsOne = weightProductsOne.value; //значение веса первого продукта
productsGrammsTwo = weightProductsTwo.value; //значение веса второго продукта
//расчет цены за грамм

const resultOne = productsOneValue / productsGrammsOne;
const resultTwo = productsTwoValue / productsGrammsTwo;

//расчет разницы цен

function one(resultOne, resultTwo) {
  let resultOneIsBig = resultOne - resultTwo;
  let resultTwoIsBig = resultTwo - resultOne;

  resultpriceGrammOne.value = resultOne; //значение цены за грамм первого продукта
  resultpriceGrammTwo.value = resultTwo; //значение цены за грамм второго продукта
}

//слушатель события по кнопке сравнения цен на продукты

function result(resultOne, resultTwo) {
  if (resultOne > resultTwo) {
    endResult.textContent = resultOneIsBig;
    textInParagrath.textContent = "Цена за грамм первого продукта больше на:";
  } else {
    endResult.textContent = resultTwoIsBig;
    textInParagrath.textContent = "Цена за грамм второго продукта больше на:";
  }
}
buttonOne.addEventListener("click", one);
button.addEventListener("click", result);
//реализовать сравнение цен на продукты и отклонение от средней цены
