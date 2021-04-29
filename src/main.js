import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyAPI from './js/currency';

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
      const conversionRate = response.conversion_result; 
      if (response.result === "success") {
        $("#convertedCurrencyOutput").text(`${baseCurrency}: $${dollarAmount.toFixed(2)} = ${targetCurrency}: $${conversionRate.toFixed(2)}`); 
        $("#errorMessage").hide();
      } else {
        $("#errorMessage").text("Ops Looks Like Your Trying to Convert a Fake Currency 🤷 "); 
      }
    }
  });
});

