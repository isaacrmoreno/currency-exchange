import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyAPI from './js/currency';

$(document).ready(function() {
  $('#convertCurrencyBtn').click(function(){
    let inputtedCurrency = $('#inputtedCurrency').val();
    $('#convertedCurrencyOutput').text(inputtedCurrency);

    let currencyPromise = CurrencyAPI.convertCurrency(inputtedCurrency);
    currencyPromise.then(function (response) {
      const body = JSON.parse (response);
      $("#convertCurrencyOutput").html(`${body.conversion_rates.inputtedCurrency}`);
      return body;
    }, function (error) {
      console.error('request error ', error);
    });
  });
});














// function displayCurrencyConversion (response) {
//   if (response.main) { //response.main is unique to weather API. Response.body.myapi. 
//     $("#").text(`${somethingWIllGoHere}`);m // Need to figure out what will go here? 
//   } else {
//       $(".showErrors").text(`There was an error: ${response.message}`);
//     }
//   }

// $(document).ready(function () {
//   $("#convertCurrencyBtn").click(function() {
//     let currency = $("#currency").val(); // This wont work because its a drop down menu? 
//     clearFields();
//     CurrencyAPI.convertCurrency(currency);
//     .then(function (response) {
//       displayCurrencyConversion (response);
//     });
//   });
// }); 
