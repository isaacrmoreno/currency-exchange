import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyAPI from './js/currency';

function clearFields() {
  $("#dollarAmount").val("");
  $("#currencyType").val("");
}

function getElements(response) {
  if (response.success) {
    $("#convertedCurrencyOutput").text(`${response.conversion_rates}`);
  }
}


$(document).ready(function() {
  $("#convertCurrencyBtn").submit(function(event) {
    event.preventDefault();

    const selectedCurrency = $("#currencyType").val();
    clearFields();
    CurrencyAPI.convertCurrency(selectedCurrency)
      .then(function (response) {
        getElements(response);
      });
  });
});
