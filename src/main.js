import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyAPI from './js/currency';

$(document).ready(function() {
  $('#convertCurrencyBtn').click(function(){
    let dollarAmount = parseInt($('#dollarAmount').val()); 
    $('#convertedCurrencyOutput').text(dollarAmount);
    
    let selectedCurrency = parseInt($('#selectedCurrency').val());

    let currencyPromise = CurrencyAPI.convertCurrency(selectedCurrency);
    currencyPromise.then(function (response) {
      const body = JSON.parse (response);
      $("#convertCurrencyOutput").html(`${body}.conversion_rates.${selectedCurrency}`);
      return body;
    }, function (error) {
      console.error('request error ', error);
    }); dollarAmount; // 
  });
});

console.log(`${selectedCurrency}`); // place is returning NaN and thats because I gave it a value of string. Maybe I need to JsonParse somewhere else

