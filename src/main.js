import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyAPI from './js/currency';

$(document).ready(() => {
  $("#currencyForm").submit((e) => {
    e.preventDefault();
    const targetCurrency = $("#targetCurrency").val();
    CurrencyAPI.convert(targetCurrency)
      .then((response) => {
        getElements(response);
      });
  });
});

function getElements(response) {
  let dollarAmount = $("#dollarAmount").val();
  let conversionRate = response.conversion_rates;
  if (response.base_code) { 
    $("#convertedCurrencyOutput").text(`USD: $${dollarAmount} = ${response.base_code}: $${conversionRate}`); 
  } else {
    $("#errorMessage").text("Ops Looks Like Your Trying to Convert a Fake Currency 🤷 "); 
  }
}
