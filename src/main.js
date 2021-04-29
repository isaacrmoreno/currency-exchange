import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyAPI from './js/currency';

// function getElements(response) {
//   const baseCurrency = $("#baseCurrency").val();
//   const targetCurrency = $("#targetCurrency").val();
//   const dollarAmount = $("#dollarAmount").val();
//   let conversionRate = response.conversion_rate.toFixed(2); 
  
//   if (response.base_code) {  //adjust for error with fake base code? 
//     $("#convertedCurrencyOutput").text(`${baseCurrency}: $${dollarAmount} = ${targetCurrency}: $${conversionRate}`); 
//   } else {
//     $("#errorMessage").text("Ops Looks Like Your Trying to Convert a Fake Currency 🤷 "); 
//   }
// }

$(document).ready(() => {
  $("#currencyForm").submit((e) => {
    e.preventDefault();
    const baseCurrency = $("#baseCurrency").val();
    const targetCurrency = $("#targetCurrency").val();
    const dollarAmount = parseInt($("#dollarAmount").val());
    CurrencyAPI.convert(baseCurrency, targetCurrency, dollarAmount)
      .then((response) => {
        getElements(response);
      });

    function getElements(response) {
      let conversionRate = response.conversion_result.toFixed(2); 
      
      if (response.base_code) {  //adjust for error with fake base code? 
        $("#convertedCurrencyOutput").text(`${baseCurrency}: $${dollarAmount} = ${targetCurrency}: $${conversionRate}`); 
      } else {
        $("#errorMessage").text("Ops Looks Like Your Trying to Convert a Fake Currency 🤷 "); 
      }
    }
  });
});

