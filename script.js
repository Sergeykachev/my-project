//переменные
const priceForProductsOne = document.querySelector(".price__for_products-one"); //цена первого продукта
const priceForProductsTwo = document.querySelector(".price__for_products-two"); //цена второго продукта
const weightProductsOne = document.querySelector(".price__for_gramms-one"); //вес первого продукта
const weightProductsTwo = document.querySelector(".price__for_gramms-two"); //вес второго продукта
const priceGrammOne = document.querySelector(".price__result-one"); //цена за грамм первого продукта
const priceGrammTwo = document.querySelector(".price__result-two"); //цена за грамм второго продукта
const resultpriceGrammOne = document.querySelector(".price__result-one"); // цена за грамм первого продукта
const resultpriceGrammTwo = document.querySelector(".price__result-two"); // цена за грамм второго продукта
const endResult = document.querySelector(".result__end"); // текстовое отображение результата
const textInParagrath = document.querySelector(".text__result"); // отображение текста с описанием результата.

//значение инпутов

productsOneValue = priceForProductsOne.value; //значение цены первого продукта
productsTwoValue = priceForProductsTwo.value; //значение цены второго продукта
productsGrammsOne = weightProductsOne.value; //значение веса первого продукта
productsGrammsTwo = weightProductsTwo.value; //значение веса второго продукта
//расчет цены за грамм

const resultOne = productsOneValue / productsGrammsOne;
const resultTwo = productsTwoValue / productsGrammsTwo;

resultpriceGrammOne.value = resultOne; //значение цены за грамм первого продукта
resultpriceGrammTwo.value = resultTwo; //значение цены за грамм второго продукта

//расчет разницы цен

const resultOneIsBig = resultOne - resultTwo;
const resultTwoIsBig = resultTwo - resultOne;

//функция сравнения цен на продукты

if (resultOne > resultTwo) {
  endResult.textContent = resultOneIsBig;
  textInParagrath.textContent = "Цена за грамм первого продукта больше на:";
} else {
  endResult.textContent = resultTwoIsBig;
  textInParagrath.textContent = "Цена за грамм второго продукта больше на:";
}

//реализовать сравнение цен на продукты и отклонение от средней цены
