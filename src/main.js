import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyAPI from './js/currency';

$(document).ready(function() {
  $('#convertCurrencyBtn').click(function(){
    let dollarAmount = parseInt($('#dollarAmount').val()); 
    $('#convertedCurrencyOutput').text(dollarAmount); // This just returns the dollar amount. 
    
    let selectedCurrency = $('#selectedCurrency').val(); // console returns undefined. 

    let currencyPromise = CurrencyAPI.convertCurrency(selectedCurrency);
    currencyPromise.then(function (response) {

      const body = JSON.parse (response);
      $("#convertCurrencyOutput").html(body.conversion_rates.selectedCurrency);
      return body;
    }, function (error) {
      console.error('request error ', error);
    }); dollarAmount; 
  });
});