import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyAPI from './js/currency';

function displayCurrencyConversion (response) {
  if (response.main) { //response.main is unique to weather API. Response.body.myapi. 
    $("#").text(`${somethingWIllGoHere}`);
  } else {
      $(".showErrors").text(`There was an error: ${response.message}`);
    }
  }

$(document).ready(function () {
  $("#convertCurrencyBtn").click(function() {
    let currency = $("#currency").val();
    clearFields();
    CurrencyAPI.convertCurrency(currency);
    .then(function (response) {
      displayCurrencyConversion (response);
    });
  });
}); 
