export default class CurrencyAPI {
  static convertCurrency() { // put currency in here? 
    return new Promise(function (resolve, reject) {
      const apiKey = process.env.API_KEY;
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject (request.response);
        }
      };
      request.open('GET', url, true);
      request.send();
    });
  }
}

// Okay I think I know what I need to do. I need to change the inputted currency to be the dollaramount. Then I need to make a template literal for USD? 



















// BELOW IS MY ATTEMPT AT FETCH @.@
//   static convertCurrency() {
//     let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`; // potentially add template literal to "USD" so user can select any currency to exchange // Do that down the road when I get basic functionality. ON NEW BRANCH
//     return fetch(url)
//       .then(function (response) {
//         if (!response.ok) {
//           console.log(response);
//           throw Error(response.statusText);
//         }
//         return response.json();
//       })
//       .catch(function (error) {
//         return error;
//       });
//   }
// }

