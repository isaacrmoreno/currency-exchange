export default class CurrencyAPI {
  static convertCurrency() {
    let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`; // potentially add template literal to "USD" so user can select any currency to exchange // Do that down the road when I get basic functionality. ON NEW BRANCH
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          console.log(response);
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}
