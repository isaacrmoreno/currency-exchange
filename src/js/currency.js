export default class CurrencyAPI {
  static convert(baseCurrency, targetCurrency, conversionRate) { 
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${baseCurrency}/${targetCurrency}/${conversionRate}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        return error;
      });
  }
}
